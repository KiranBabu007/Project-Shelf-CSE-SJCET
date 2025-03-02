"use client"

import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import FindMyGuideChat from "@/components/findguide"; 

import { Search, Download, GraduationCap, User, Tag } from 'lucide-react'
import Image from 'next/image'
import projectsData from "@/app/project-shelf/projects"
import { Instagram, Github, Linkedin } from 'lucide-react'

const ProjectShelf = () => {
    const [selectedYear, setSelectedYear] = useState<string>("2024");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredProjects, setFilteredProjects] = useState(projectsData[2024]);

    useEffect(() => {
        const filtered = projectsData[selectedYear as keyof typeof projectsData].filter(project =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.students.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setFilteredProjects(filtered);
    }, [selectedYear, searchTerm]);

    const handleDownload = () => {
        const headers = ["Title", "Description", "Students", "Supervisor", "Tags"];
        const csvContent = [
            headers.join(","),
            ...filteredProjects.map(project => [
                `"${project.title}"`,
                `"${project.description}"`,
                `"${project.students}"`,
                `"${project.supervisor}"`,
                `"${project.tags.join(', ')}"`
            ].join(","))
        ].join("\n");

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        
        const link = document.createElement("a");
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", `projects_${selectedYear}.csv`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 dark:from-orange-700 dark:via-orange-800 dark:to-slate-900 text-white">
                <div className="container mx-auto px-4 py-6 sm:py-8">
                    <div className="flex justify-end mb-2">
                        <ThemeToggle />
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="bg-white/90 backdrop-blur rounded-md m-4 p-4 sm:p-5 shadow-lg border border-white/20">
                            <Image
                                src="/header.png"
                                width={400}
                                height={400}
                                alt="College logo"
                                className="max-w-[200px] sm:max-w-[250px] h-auto"
                                priority
                            />
                        </div>
                        <div className="flex flex-col text-center sm:text-left sm:p-4">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-white drop-shadow-md">
                                Computer Science Engineering Projects
                            </h1>
                            <p className="text-lg sm:text-xl font-light text-white/90 italic max-w-2xl">
                                Innovating for Tomorrow, Coding for the Future
                            </p>
                            <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-2">
                                <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-white">
                                    {Object.values(projectsData).flat().length} Total Projects
                                </span>
                                <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm font-medium text-white">
                                    {Object.keys(projectsData).length} Academic Years
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 flex-grow">
                <Card className="my-6 border-orange-500 border-t-4 shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-slate-900 dark:border-orange-700">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div className="flex items-center gap-2">
                            <GraduationCap className="h-6 w-6 text-orange-500 dark:text-orange-400" />
                            <CardTitle className="text-orange-500 dark:text-orange-400 scroll-m-20 font-sans text-3xl font-bold tracking-tight">Project Showcase</CardTitle>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-sm text-gray-500 dark:text-gray-400">{filteredProjects.length} projects found</p>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600 dark:text-gray-300 leading-7 [&:not(:first-child)]:mt-6">
                            Explore innovative projects from our talented Computer Science and Engineering students, pushing the boundaries of technology and creativity.
                        </p>
                    </CardContent>
                </Card>

                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0 gap-4">
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
                        <Select onValueChange={setSelectedYear} defaultValue={selectedYear}>
                            <SelectTrigger className="w-full sm:w-[180px] border-orange-500 dark:border-orange-700 dark:bg-slate-800">
                                <SelectValue placeholder="Select Year" />
                            </SelectTrigger>
                            <SelectContent className="dark:bg-slate-800">
                                {Object.keys(projectsData).map((year) => (
                                    <SelectItem key={year} value={year}>{year}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <div className="relative w-full sm:w-auto">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-orange-500 dark:text-orange-400" />
                            <Input
                                placeholder="Search projects or tags..."
                                className="pl-8 border-orange-500 dark:border-orange-700 w-full dark:bg-slate-800 dark:text-white"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button onClick={handleDownload} className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 transition-colors duration-300 w-full sm:w-auto">
                        <Download className="mr-2 h-4 w-4" /> Download CSV
                    </Button>
                </div>

                <div className="rounded-lg border border-orange-200 dark:border-slate-700 overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-orange-100 dark:bg-slate-800">
                                <TableHead className="text-orange-700 dark:text-orange-400">Title</TableHead>
                                <TableHead className="text-orange-700 dark:text-orange-400">Description</TableHead>
                                <TableHead className="text-orange-700 dark:text-orange-400">Students</TableHead>
                                <TableHead className="text-orange-700 dark:text-orange-400">Supervisor</TableHead>
                                <TableHead className="text-orange-700 dark:text-orange-400">Tags</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredProjects.map((project) => (
                                <TableRow key={project.id} className="hover:bg-orange-50 dark:hover:bg-slate-800/60 transition-colors duration-200">
                                    <TableCell className="font-medium text-orange-700 dark:text-orange-400">{project.title}</TableCell>
                                    <TableCell className="dark:text-gray-300">{project.description}</TableCell>
                                    <TableCell className="dark:text-gray-300">{project.students}</TableCell>
                                    <TableCell className="dark:text-gray-300">{project.supervisor}</TableCell>
                                    <TableCell>
                                        <div className="flex flex-wrap">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="inline-block bg-orange-200 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 rounded-full px-2 py-1 text-xs font-semibold mr-1 mb-1 transition-transform duration-200 hover:scale-105">{tag}</span>
                                            ))}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="border-l-4 border-l-orange-400 dark:border-l-orange-500 hover:shadow-lg transition-all">
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full">
                                    <GraduationCap className="h-6 w-6 text-orange-500 dark:text-orange-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Projects in {selectedYear}</p>
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{filteredProjects.length}</h3>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-l-4 border-l-blue-400 dark:border-l-blue-500 hover:shadow-lg transition-all">
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                                    <User className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Unique Supervisors</p>
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                        {new Set(filteredProjects.map(p => p.supervisor)).size}
                                    </h3>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-l-4 border-l-green-400 dark:border-l-green-500 hover:shadow-lg transition-all">
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                                    <Tag className="h-6 w-6 text-green-500 dark:text-green-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Unique Technologies</p>
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                        {new Set(filteredProjects.flatMap(p => p.tags)).size}
                                    </h3>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <footer className="bg-orange-100 dark:bg-slate-800/50 text-orange-700 dark:text-orange-300 py-6 mt-8 border-t border-orange-200 dark:border-slate-700">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-md font-sans font-semibold">Computer Science and Engineering Department</h3>
                            <p className='font-sans text-sm text-orange-600 dark:text-orange-400/80'>St Josephs College Of Engineering and Technology, Palai</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <h4 className="font-sans text-md font-bold mr-1">Connect with me</h4>
                            <a href="https://github.com/KiranBabu007" target="_blank" rel="noopener noreferrer" 
                               className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors p-2 hover:bg-orange-50 dark:hover:bg-slate-700 rounded-full">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/kiran07x" target="_blank" rel="noopener noreferrer"
                               className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors p-2 hover:bg-orange-50 dark:hover:bg-slate-700 rounded-full">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://instagram.com/kr_07x" target="_blank" rel="noopener noreferrer"
                               className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors p-2 hover:bg-orange-50 dark:hover:bg-slate-700 rounded-full">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="mt-4 text-center font-sans text-sm text-orange-600/80 dark:text-orange-400/60">
                        <p>&copy; 2024 Kiran Babu. All rights reserved.</p>
                    </div>
                </div>
            </footer>
            
            {/* Add the Find My Guide component */}
            <FindMyGuideChat />
        </div>
    );
};

export default ProjectShelf;