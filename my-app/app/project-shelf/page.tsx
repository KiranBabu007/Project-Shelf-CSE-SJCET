"use client"

import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

import { Search, Download } from 'lucide-react'
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
        <div className="bg-white min-h-screen flex flex-col">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 sm:p-8">
                <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
                    <div className='bg-white rounded  p-4 sm:p-5 mb-4 sm:mb-0'>
                        <Image
                            src="/header.png"
                            width={400}
                            height={400}
                            alt="College logo"
                            className="max-w-[180px] sm:max-w-[200px] h-auto"
                        />
                    </div>
                    <div className="flex flex-col font-sans text-center sm:text-left">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
                            Computer Science and Engineering Projects
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl font-light italic">
                            Innovating for Tomorrow, Coding for the Future
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 flex-grow">
                <Card className="my-6 border-orange-500 border-t-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                        <CardTitle className="text-orange-500 scroll-m-20 font-sans text-2xl font-semibold tracking-tight">Project Showcase</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600 leading-7 [&:not(:first-child)]:mt-6">Explore innovative projects from our talented Computer Science and Engineering students, pushing the boundaries of technology and creativity.</p>
                    </CardContent>
                </Card>

                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
                        <Select onValueChange={setSelectedYear} defaultValue={selectedYear}>
                            <SelectTrigger className="w-full sm:w-[180px] border-orange-500">
                                <SelectValue placeholder="Select Year" />
                            </SelectTrigger>
                            <SelectContent>
                                {Object.keys(projectsData).map((year) => (
                                    <SelectItem key={year} value={year}>{year}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <div className="relative w-full sm:w-auto">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-orange-500" />
                            <Input
                                placeholder="Search projects..."
                                className="pl-8 border-orange-500 w-full"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <Button onClick={handleDownload} className="bg-orange-500 hover:bg-orange-600 transition-colors duration-300 w-full sm:w-auto">
                        <Download className="mr-2 h-4 w-4" /> Download CSV
                    </Button>
                </div>


                <Table>
                    <TableHeader>
                        <TableRow className="bg-orange-100">
                            <TableHead className="text-orange-700">Title</TableHead>
                            <TableHead className="text-orange-700 ">Description</TableHead>
                            <TableHead className="text-orange-700">Students</TableHead>
                            <TableHead className="text-orange-700 ">Supervisor</TableHead>
                            <TableHead className="text-orange-700">Tags</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredProjects.map((project) => (
                            <TableRow key={project.id} className="hover:bg-orange-50 transition-colors duration-200">
                                <TableCell className="font-medium text-orange-700">{project.title}</TableCell>
                                <TableCell>{project.description}</TableCell>
                                <TableCell>{project.students}</TableCell>
                                <TableCell>{project.supervisor}</TableCell>
                                <TableCell>
                                    <div className="flex flex-wrap">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="inline-block bg-orange-200 text-orange-700 rounded-full px-2 py-1 text-xs font-semibold mr-1 mb-1 transition-transform duration-200 hover:scale-105">{tag}</span>
                                        ))}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>

            <footer className="bg-orange-100 text-orange-700 py-3 mt-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-md font-sans font-semibold">Computer Science and Engineering Department</h3>
                            <p className='font-sans text-sm'>St Josephs College Of Engineering and Technology,Palai</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <h4 className="font-sans text-md font-bold mr-1 ">Connect with me</h4>
                            <a href="https://github.com/KiranBabu007" target="_blank" rel="noopener noreferrer" 
                               className="hover:text-orange-500 transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/kiran07x" target="_blank" rel="noopener noreferrer"
                               className="hover:text-orange-500 transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://instagram.com/kr_07x" target="_blank" rel="noopener noreferrer"
                               className="hover:text-orange-500 transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="mt-4 text-center font-sans text-sm">
                        <p>&copy; 2024 Kiran Babu. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ProjectShelf;