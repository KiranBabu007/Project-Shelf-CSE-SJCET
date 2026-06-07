"use client";

import React, { useState, useEffect } from "react";
import { Bot, X, Search, RotateCcw, Loader2, Sparkles, Users, Hash, Award } from "lucide-react";
import ReactMarkdown from "react-markdown";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const GuideRecommendationDisplay = ({
  recommendation,
  similarProjects,
}: {
  recommendation: string;
  similarProjects?: Array<{
    title: string;
    supervisor: string;
    students: string;
    tags: string[];
    year?: string;
  }>;
}) => {
  const isNoProjectsFound = recommendation.includes("No similar projects found");
  const guideName = isNoProjectsFound
    ? ""
    : recommendation.match(/recommend\s+\*\*([^*]+)\*\*/i)?.[1] ||
      recommendation.match(/recommend\s+([^as]+)as/i)?.[1]?.trim() ||
      "the recommended guide";

  const hasStructure =
    recommendation.includes("**Why") ||
    recommendation.includes("**Key matching");

  if (isNoProjectsFound) {
    return (
      <div className="space-y-4">
        <div className="sketch-border-thin flex items-center gap-3 p-4 bg-gray-50">
          <Search className="h-5 w-5 text-gray-500" />
          <div>
            <h4 className="font-bold text-sm text-gray-700">No Matching Projects</h4>
            <p className="text-xs text-gray-600">Try a different description</p>
          </div>
        </div>
        <div className="sketch-border-thin p-4 bg-white">
          <p className="text-sm text-gray-700 leading-relaxed">{recommendation}</p>
        </div>
      </div>
    );
  }

  if (!hasStructure) {
    return (
      <div className="space-y-4">
        <div className="sketch-border-thin flex items-center gap-3 p-4 bg-orange-50">
          <Award className="h-5 w-5 text-orange-500" />
          <div>
            <h4 className="font-bold text-sm text-gray-900">{guideName}</h4>
            <p className="text-[11px] uppercase tracking-wider text-gray-600">Recommended Guide</p>
          </div>
        </div>
        <div className="sketch-border-thin p-4 bg-white">
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
            {recommendation}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="sketch-border flex items-center gap-3 p-4 bg-orange-50">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500">
          <Award className="h-5 w-5 text-white" />
        </div>
        <div>
          <h4 className="font-caveat text-xl font-bold text-gray-900">{guideName}</h4>
          <p className="text-[11px] uppercase tracking-wider text-gray-600">
            Recommended Project Guide
          </p>
        </div>
      </div>

      <div className="px-1">
        <ReactMarkdown
          components={{
            h2: ({ node, ...props }) => (
              <h2 className="font-caveat text-lg font-bold text-gray-900 mt-5 mb-2" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="font-semibold text-sm text-gray-800 mt-4 mb-1" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="text-sm text-gray-600 mb-3 leading-relaxed" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc pl-5 mb-3 space-y-1" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="text-sm text-gray-600 leading-relaxed" {...props} />
            ),
            strong: ({ node, ...props }) => (
              <strong className="font-bold text-gray-900" {...props} />
            ),
          }}
        >
          {recommendation}
        </ReactMarkdown>
      </div>

      {recommendation.includes("Key matching technologies") && (
        <div className="sketch-border-thin p-4 bg-gray-50">
          <div className="flex items-center gap-2 mb-2">
            <Hash className="h-3.5 w-3.5 text-gray-500" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600">
              Technologies & Skills
            </h4>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {recommendation
              .split("Key matching technologies:")[1]
              ?.split("Project alignment")[0]
              .split(",")
              .map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech.trim()}
                </span>
              ))}
          </div>
        </div>
      )}

      {similarProjects && similarProjects.length > 0 && (
        <div className="sketch-border-thin p-4 bg-gray-50">
          <div className="flex items-center gap-2 mb-3">
            <Users className="h-3.5 w-3.5 text-gray-500" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600">
              Connect with Team Members
            </h4>
          </div>
          <div className="space-y-2">
            {similarProjects.slice(0, 3).map((project, idx) => (
              <div key={idx} className="sketch-border-thin p-3 bg-white">
                <p className="font-caveat text-base font-bold text-gray-900">
                  {project.title}
                </p>
                {project.year && (
                  <span className="inline-block mt-1 text-[11px] font-bold uppercase tracking-wider text-gray-600 bg-gray-100 px-2 py-0.5 rounded-sm border border-gray-200">
                    {project.year}
                  </span>
                )}
                <div className="text-xs text-gray-600 mt-1.5 flex items-center gap-1.5">
                  <Users className="h-3 w-3 text-gray-500" />
                  <span>{project.students}</span>
                </div>
              </div>
            ))}
            <p className="text-xs text-gray-500 mt-2 italic">
              Reach out to these students to learn more about their experience
              with {guideName.split(" ")[0]}.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

interface FindMyGuideChatProps {
  externalOpen?: boolean;
  onExternalOpenChange?: (open: boolean) => void;
}

const FindMyGuideChat = ({ externalOpen, onExternalOpenChange }: FindMyGuideChatProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectDescription, setProjectDescription] = useState("");
  const [guideRecommendation, setGuideRecommendation] = useState<string | null>(null);
  const [similarProjects, setSimilarProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (externalOpen !== undefined) {
      setIsOpen(externalOpen);
    }
  }, [externalOpen]);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    onExternalOpenChange?.(open);
  };

  const handleFindGuide = async () => {
    if (!projectDescription.trim()) return;
    setIsLoading(true);

    try {
      const response = await fetch("/api/findguide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: projectDescription }),
      });

      if (!response.ok) throw new Error("Failed to get recommendation");

      const data = await response.json();
      setGuideRecommendation(data.recommendation);
      setSimilarProjects(data.similarProjects || []);
    } catch (error) {
      console.error("Error:", error);
      setGuideRecommendation(
        "Sorry, I encountered an error while finding a guide. Please try again later."
      );
      setSimilarProjects([]);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setProjectDescription("");
    setGuideRecommendation(null);
    setSimilarProjects([]);
  };

  return (
    <>
      <button
        onClick={() => handleOpenChange(true)}
        className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center sketch-border hover:bg-orange-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
        id="find-guide-fab"
        aria-label="Open Guide Bot"
      >
        <Bot size={24} strokeWidth={1.75} />
      </button>

      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="max-w-md w-full border-[1.5px] border-gray-900 bg-white shadow-[3px_3px_0px_#222] rounded-sm p-0 overflow-hidden max-h-[85vh] flex flex-col">
          <div className="border-b border-gray-900 px-5 py-4 flex items-center justify-between bg-gray-50 shrink-0">
            <DialogHeader className="p-0 flex-row items-center gap-3 space-y-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-500 text-white shrink-0">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <DialogTitle className="font-caveat text-xl font-bold text-gray-900">
                  Find My Guide
                </DialogTitle>
                <DialogDescription className="text-[11px] text-gray-600 uppercase tracking-wider">
                  AI-powered guide matching
                </DialogDescription>
              </div>
            </DialogHeader>
          </div>

          <div className="px-5 py-5 overflow-y-auto flex-1">
            {guideRecommendation ? (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-orange-500" />
                  <h3 className="font-caveat text-lg font-bold text-gray-900">
                    Guide Recommendation
                  </h3>
                </div>
                <GuideRecommendationDisplay
                  recommendation={guideRecommendation}
                  similarProjects={similarProjects}
                />
              </div>
            ) : (
              <div className="space-y-5">
                <div className="flex justify-center">
                  <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center border border-orange-200">
                    <Sparkles className="h-6 w-6 text-orange-500" />
                  </div>
                </div>

                <h3 className="font-caveat text-2xl font-bold text-center text-gray-900">
                  Let&apos;s Find Your Perfect Guide
                </h3>

                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  Describe your project idea in detail. Our AI will match you
                  with the most suitable guide based on their expertise.
                </p>

                <div className="relative">
                  <textarea
                    placeholder="E.g., I'm planning to create a mobile app that helps students track their study time..."
                    className="w-full min-h-[120px] p-3 text-sm border-[1.5px] border-gray-900 rounded-sm shadow-[1px_1px_0px_#222] resize-none focus:outline-none focus:shadow-[2px_2px_0px_#222] focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-1 transition-shadow placeholder:text-gray-400"
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    disabled={isLoading}
                  />
                  <div className="absolute bottom-2 right-2 text-[11px] text-gray-500">
                    {projectDescription.length} chars
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-gray-900 px-5 py-3 flex justify-end bg-gray-50 shrink-0">
            {guideRecommendation ? (
              <button onClick={resetForm} className="btn-sketch-orange flex items-center gap-2 text-sm">
                <RotateCcw className="h-3.5 w-3.5" /> Find Another Guide
              </button>
            ) : (
              <button
                onClick={handleFindGuide}
                className="btn-sketch-filled flex items-center gap-2 text-sm"
                disabled={isLoading || !projectDescription.trim()}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-3.5 w-3.5 animate-spin" /> Finding...
                  </>
                ) : (
                  <>
                    <Search className="h-3.5 w-3.5" /> Find My Guide
                  </>
                )}
              </button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FindMyGuideChat;
