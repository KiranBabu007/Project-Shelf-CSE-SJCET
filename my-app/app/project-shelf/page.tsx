"use client"

import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Github, Linkedin, Instagram, Mail, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import FindMyGuideChat from "@/components/findguide"; 
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


import { Search, Download, GraduationCap, User, Tag } from 'lucide-react'
import Image from 'next/image'
import projectsData from "@/app/project-shelf/projects"


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
                        <div className="flex items-center ">
                            <p className="text-sm text-gray-500 dark:text-gray-400 m-2">{filteredProjects.length} projects found</p>
                        </div>
                    </div>
                    <Button onClick={handleDownload} className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 transition-colors duration-300 w-full sm:w-auto">
                        <Download className="mr-2 h-4 w-4" /> Download CSV
                    </Button>
                </div>

                <div className="container mx-auto px-4 mt-8">
                    {filteredProjects.length === 0 ? (
                        <Card className="py-16">
                            <CardContent className="flex flex-col items-center justify-center text-center">
                                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full mb-4">
                                    <Search className="h-8 w-8 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-medium text-gray-600 dark:text-gray-300">No projects found</h3>
                                <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-md">
                                    Try adjusting your search term or selecting a different year
                                </p>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProjects.map((project) => (
                                <Card key={project.id} className="hover:shadow-lg transition-all border-orange-100 dark:border-slate-700 overflow-hidden">
                                    <CardHeader className="bg-orange-50 dark:bg-slate-800/60 border-b border-orange-100 dark:border-slate-700 pb-3">
                                        <CardTitle className="text-orange-700 dark:text-orange-400 line-clamp-2">
                                            {project.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-4">
                                        <p className="text-gray-600 dark:text-gray-300 line-clamp-3 text-sm mb-4">
                                            {project.description}
                                        </p>
                                        
                                        <div className="flex items-center gap-2 mb-3">
                                            <User className="h-4 w-4 text-gray-400" />
                                            <span className="text-sm text-gray-600 dark:text-gray-300 line-clamp-1">
                                                {project.students}
                                            </span>
                                        </div>
                                        
                                        <div className="flex items-center gap-2 mb-4">
                                            <GraduationCap className="h-4 w-4 text-gray-400" />
                                            <span className="text-sm text-gray-600 dark:text-gray-300">
                                                {project.supervisor}
                                            </span>
                                        </div>
                                        
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span 
                                                    key={tag} 
                                                    className="inline-block bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-300 rounded-full px-2.5 py-1 text-xs font-medium hover:bg-orange-200 dark:hover:bg-orange-800/30 cursor-pointer transition-colors"
                                                    onClick={() => setSearchTerm(tag)}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                    
                    {filteredProjects.length > 0 && (
                        <div className="mt-6 text-center text-gray-500 dark:text-gray-400">
                            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} for {selectedYear}
                        </div>
                    )}
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

            <footer className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 dark:from-slate-900 dark:to-slate-800 text-orange-800 dark:text-orange-200 py-12 mt-16 border-t border-orange-200 dark:border-slate-700">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200/30 dark:bg-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-300/20 dark:bg-orange-600/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Brand section */}
          <div className="text-center md:text-left max-w-md">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="relative w-10 h-10 rounded-lg bg-gradient-to-tr from-orange-500 to-orange-400 flex items-center justify-center shadow-lg p-8">
                <span className="text-white font-bold text-xl">SJC</span>
                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white animate-pulse"></span>
              </div>
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-500 dark:from-orange-400 dark:to-orange-300">
                St Joseph's College of Engineering and Technology,Palai
              </h3>
            </div>
            
            <p className="text-orange-700/80 dark:text-orange-300/90 leading-relaxed">
              Showcasing innovative projects from talented students at St Joseph's College Of Engineering and Technology, Palai
            </p>
          </div>
          
          {/* Social links */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-semibold text-lg mb-4 text-orange-700 dark:text-orange-300">Connect with me</h4>
            
            <TooltipProvider>
              <div className="flex gap-4">
                {[
                  { icon: <Github size={20} />, label: 'GitHub', href: 'https://github.com/KiranBabu007' },
                  { icon: <Linkedin size={20} />, label: 'LinkedIn', href: 'https://linkedin.com/in/kiran07x' },
                  { icon: <Instagram size={20} />, label: 'Instagram', href: 'https://instagram.com/kr_07x' }
                ].map((social) => (
                  <Tooltip key={social.label}>
                    <TooltipTrigger asChild>
                      <a 
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white/90 dark:bg-slate-800/90 p-3 rounded-full hover:scale-110 hover:shadow-md transition-all duration-300 text-orange-500 dark:text-orange-400 border border-transparent hover:border-orange-200 dark:hover:border-orange-800/30"
                      >
                        {social.icon}
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{social.label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </div>
        </div>
        
        <Separator className="my-6 bg-orange-200/50 dark:bg-slate-700/50" />
        
        {/* Copyright section */}
        <div className="text-center">
          <p className="text-sm text-orange-600/80 dark:text-orange-400/80">
            &copy; {new Date().getFullYear()} Kiran Babu. All rights reserved.
          </p>
          <p className="text-xs text-orange-500/60 dark:text-orange-400/50 mt-1">
            Built with Next.js, Tailwind CSS, and Shadcn UI
          </p>
        </div>
      </div>
    </footer>
            
            {/* Add the Find My Guide component */}
            <div className="fixed bottom-4 right-4 z-50">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 dark:from-orange-500 dark:to-orange-700 rounded-full opacity-75 blur-lg animate-pulse"></div>
                <FindMyGuideChat />
            </div>
        </div>
    );
};

export default ProjectShelf;