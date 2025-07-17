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
import { type Project } from "@/types"; // or define type here if not global

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
          bg-white/20 
          dark:bg-slate-900/30 
          backdrop-blur-2xl 
          border 
          border-white/30 
          dark:border-slate-700 
          text-gray-800 
          dark:text-gray-100 
          rounded-2xl 
          max-w-xl 
          w-full 
          shadow-2xl
          p-6
        "
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-orange-600 dark:text-orange-300">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-base mt-2">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-orange-400" />
            <span><strong>Students:</strong> {project.students}</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-orange-400" />
            <span><strong>Supervisor:</strong> {project.supervisor}</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="h-4 w-4 text-orange-400" />
            {project.tags.map(tag => (
              <span
                key={tag}
                className="bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
