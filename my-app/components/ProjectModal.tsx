"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Users, Star, Hash } from "lucide-react";
import type { Project } from "@/types";

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  open,
  onClose,
  project,
}) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="
          max-w-2xl w-full
          border-[1.5px] border-gray-900
          bg-white
          shadow-[3px_3px_0px_#222]
          rounded-sm
          p-0
          overflow-hidden
        "
      >
        <div className="border-b border-gray-900 px-6 py-5 bg-gray-50">
          <DialogHeader className="p-0">
            <DialogTitle className="font-caveat text-3xl font-bold text-gray-900">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-600 mt-2 leading-relaxed">
              {project.description}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-6 py-5 space-y-5">
          <div className="flex items-start gap-3">
            <Users className="h-4 w-4 mt-0.5 text-gray-400" />
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                Students
              </span>
              <p className="text-sm text-gray-700">{project.students}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Star className="h-4 w-4 mt-0.5 text-gray-400" />
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                Supervisor
              </span>
              <p className="text-sm text-gray-700">{project.supervisor}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Hash className="h-4 w-4 mt-0.5 text-gray-400" />
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                Technologies
              </span>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
