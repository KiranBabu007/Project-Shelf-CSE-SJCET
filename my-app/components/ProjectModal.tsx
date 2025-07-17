// components/ProjectModal.tsx
"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { User, GraduationCap, Tag } from "lucide-react";
import type { Project } from "@/types"; // Or define inline

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ open, onClose, project }) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="
          max-w-2xl w-full rounded-2xl 
          border border-white/20 dark:border-slate-800 
          bg-white/30 dark:bg-slate-900/40 
          backdrop-blur-xl shadow-2xl 
          transition-all duration-300
        "
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-orange-300">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-base text-gray-700 dark:text-gray-300 mt-2">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-4 text-sm text-gray-700 dark:text-gray-300">
          <div className="flex items-start gap-3">
            <User className="h-4 w-4 mt-1 text-orange-500 dark:text-orange-400" />
            <div>
              <span className="block font-medium text-gray-800 dark:text-gray-100">Students</span>
              <p className="text-gray-600 dark:text-gray-300">{project.students}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <GraduationCap className="h-4 w-4 mt-1 text-orange-500 dark:text-orange-400" />
            <div>
              <span className="block font-medium text-gray-800 dark:text-gray-100">Supervisor</span>
              <p className="text-gray-600 dark:text-gray-300">{project.supervisor}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 flex-wrap">
            <Tag className="h-4 w-4 mt-1 text-orange-500 dark:text-orange-400" />
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="
                    bg-orange-100 text-orange-700 
                    dark:bg-orange-900/40 dark:text-orange-300 
                    px-3 py-1 rounded-full text-xs font-semibold 
                    shadow-sm
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
