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
          border border-orange-100 dark:border-slate-800
          bg-white dark:bg-slate-900/40
          shadow-2xl transition-all duration-300
          p-0
        "
      >
        <div className="rounded-t-2xl bg-gradient-to-r from-orange-50 to-orange-100 dark:from-slate-900 dark:to-slate-900/60 px-8 py-6 border-b border-orange-100 dark:border-slate-800">
          <DialogHeader className="p-0">
            <DialogTitle className="text-2xl font-extrabold text-orange-600 dark:text-orange-300 drop-shadow-sm">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-base text-gray-700 dark:text-gray-300 mt-2">
              {project.description}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-8 py-6 space-y-6 text-sm text-gray-700 dark:text-gray-300">
          <div className="flex items-start gap-3">
            <User className="h-4 w-4 mt-1 text-orange-500 dark:text-orange-400" />
            <div>
              <span className="block font-semibold text-gray-900 dark:text-gray-100">Students</span>
              <p className="text-gray-700 dark:text-gray-300">{project.students}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <GraduationCap className="h-4 w-4 mt-1 text-orange-500 dark:text-orange-400" />
            <div>
              <span className="block font-semibold text-gray-900 dark:text-gray-100">Supervisor</span>
              <p className="text-gray-700 dark:text-gray-300">{project.supervisor}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 flex-wrap">
            <Tag className="h-4 w-4 mt-1 text-orange-500 dark:text-orange-400" />
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="
                    bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 
                    dark:bg-orange-900/40 dark:text-orange-300 
                    px-3 py-1 rounded-full text-xs font-semibold 
                    shadow-sm border border-orange-200 dark:border-orange-800
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
