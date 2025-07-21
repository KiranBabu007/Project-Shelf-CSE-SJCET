"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Bot, X, Search, RotateCcw, Loader2, Sparkles, User, Tag, CheckCircle, Award } from "lucide-react";
import ReactMarkdown from "react-markdown";

const GuideRecommendationDisplay = ({ 
  recommendation, 
  similarProjects 
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
  // Check if this is a "no similar projects found" message
  const isNoProjectsFound = recommendation.includes("No similar projects found");

  // Only try to extract guide name if we actually found projects
  const guideName = isNoProjectsFound ? "" : (
    recommendation.match(/recommend\s+\*\*([^*]+)\*\*/i)?.[1] || 
    recommendation.match(/recommend\s+([^as]+)as/i)?.[1]?.trim() || 
    "the recommended guide"
  );

  const hasStructure = recommendation.includes("**Why") || recommendation.includes("**Key matching");

  // Special handling for no projects found case
  if (isNoProjectsFound) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-slate-800/60 rounded-xl">
          <div className="bg-gray-500 dark:bg-gray-600 p-2 rounded-full">
            <Search className="h-5 w-5 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-gray-700 dark:text-gray-300">No Matching Projects</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">Try a different description</p>
          </div>
        </div>
        
        <div className="p-5 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">{recommendation}</p>
        </div>
      </div>
    );
  }

  if (!hasStructure) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-3 p-4 bg-orange-50 dark:bg-slate-800/60 rounded-xl">
          <div className="bg-orange-500 dark:bg-orange-600 p-2 rounded-full">
            <User className="h-5 w-5 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-orange-700 dark:text-orange-400">{guideName}</h4>
            <p className="text-xs text-orange-600/80 dark:text-orange-400/80">Recommended Guide</p>
          </div>
        </div>
        
        <div className="p-5 bg-white dark:bg-slate-800 rounded-xl border border-orange-100 dark:border-slate-700 shadow-sm">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-wrap">{recommendation}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-50 to-orange-100/70 dark:from-slate-800 dark:to-slate-800/60 rounded-xl border border-orange-100 dark:border-slate-700">
        <div className="bg-orange-500 dark:bg-orange-600 p-3 rounded-full">
          <Award className="h-6 w-6 text-white" />
        </div>
        <div>
          <h4 className="font-bold text-lg text-orange-700 dark:text-orange-400">{guideName}</h4>
          <p className="text-sm text-orange-600/80 dark:text-orange-400/80">Recommended Project Guide</p>
        </div>
      </div>

      <div className="px-1">
        <ReactMarkdown
          components={{
            h2: ({node, ...props}) => <h2 className="text-lg font-semibold text-orange-700 dark:text-orange-400 mt-6 mb-3 flex items-center gap-2" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-md font-semibold text-orange-600 dark:text-orange-400 mt-5 mb-2" {...props} />,
            p: ({node, ...props}) => <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-4 space-y-1" {...props} />,
            li: ({node, ...props}) => <li className="text-gray-700 dark:text-gray-300 leading-relaxed" {...props} />,
            strong: ({node, ...props}) => <strong className="font-bold text-orange-700 dark:text-orange-400" {...props} />
          }}
        >
          {recommendation}
        </ReactMarkdown>
      </div>

      {recommendation.includes("Key matching technologies") && (
        <div className="mt-4 p-4 bg-gradient-to-r from-orange-50/70 to-transparent dark:from-slate-800/60 dark:to-transparent rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Tag className="h-4 w-4 text-orange-500 dark:text-orange-400" />
            <h4 className="text-sm font-medium text-orange-700 dark:text-orange-400">Technologies & Skills</h4>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {recommendation
              .split("Key matching technologies:")[1]
              ?.split("Project alignment")[0]
              .split(",")
              .map((tech, i) => (
                <span 
                  key={i} 
                  className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 px-2.5 py-1 rounded-full text-xs font-medium"
                >
                  {tech.trim()}
                </span>
              ))}
          </div>
        </div>
      )}

      {recommendation.includes("Project alignment") && (
        <div className="mt-3 p-4 bg-orange-50/80 dark:bg-slate-800/40 rounded-lg border border-orange-100 dark:border-slate-700/50">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400" />
            <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200">Alignment</h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 italic">
            {recommendation.split("Project alignment:")[1]?.split("They would be")[0].trim()}
          </p>
        </div>
      )}

      {/* Team Members Section */}
      {similarProjects && similarProjects.length > 0 && (
        <div className="mt-4 p-4 bg-gradient-to-r from-orange-50/80 to-white/50 dark:from-slate-800/60 dark:to-slate-900/30 rounded-lg border border-orange-100 dark:border-slate-700/50">
          <div className="flex items-center gap-2 mb-3">
            <User className="h-4 w-4 text-blue-500 dark:text-blue-400" />
            <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200">Connect with Team Members</h4>
          </div>
          
          <div className="space-y-3 mt-2">
            {similarProjects.slice(0, 3).map((project, idx) => (
              <div key={idx} className="p-3 bg-white/70 dark:bg-slate-800/50 rounded-lg border border-orange-100/50 dark:border-slate-700/30">
                <div className="font-medium text-orange-600 dark:text-orange-400 text-sm">{project.title}</div>
                {project.year && (
                  <div className="inline-block bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-300 rounded-full px-2 py-0.5 text-xs mt-1">
                    {project.year}
                  </div>
                )}
                <div className="text-gray-600 dark:text-gray-400 text-xs mt-1.5 flex items-center gap-1.5">
                  <User className="h-3 w-3 text-gray-400 dark:text-gray-500" />
                  <span>{project.students}</span>
                </div>
              </div>
            ))}
            
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 italic">
              You can reach out to these students to learn more about their experience working with {guideName.split(' ')[0]}.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const FindMyGuideChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectDescription, setProjectDescription] = useState("");
  const [guideRecommendation, setGuideRecommendation] = useState<string | null>(null);
  const [similarProjects, setSimilarProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFindGuide = async () => {
    if (!projectDescription.trim()) return;
    
    setIsLoading(true);

    try {
      const response = await fetch("/api/findguide", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description: projectDescription }),
      });

      if (!response.ok) {
        throw new Error("Failed to get recommendation");
      }

      const data = await response.json();
      setGuideRecommendation(data.recommendation);
      setSimilarProjects(data.similarProjects || []);
    } catch (error) {
      console.error("Error:", error);
      setGuideRecommendation("Sorry, I encountered an error while finding a guide. Please try again later.");
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
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 rounded-full w-14 h-14 shadow-lg bg-gradient-to-br from-orange-400 to-orange-600 dark:from-orange-500 dark:to-orange-700 text-white p-0 z-50 transition-all hover:scale-105 hover:shadow-xl duration-300"
        id="find-guide-fab"
      >
        <div className="absolute inset-0 rounded-full bg-orange-500 dark:bg-orange-600 blur-md opacity-30 animate-pulse"></div>
        <div className="relative flex items-center justify-center z-10">
          <Bot size={26} strokeWidth={1.75} className="drop-shadow-md" />
        </div>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="absolute inset-0" onClick={() => setIsOpen(false)}></div>
          <Card className="w-full max-w-md max-h-[85vh] bg-white dark:bg-slate-900 border-0 shadow-2xl animate-in zoom-in-95 duration-300 relative z-10 overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-100 to-transparent dark:from-orange-900/20 rounded-full -translate-y-16 translate-x-16 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-100 to-transparent dark:from-orange-900/20 rounded-full translate-y-16 -translate-x-16 blur-2xl"></div>
            
            <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-slate-800 dark:to-slate-800/80 border-b border-orange-200 dark:border-slate-700 flex flex-row items-center justify-between relative shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-9 w-9 rounded-full bg-orange-500 dark:bg-orange-600 text-white">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-orange-700 dark:text-orange-400">Find My Guide</CardTitle>
                  <p className="text-xs text-orange-600/70 dark:text-orange-400/70 mt-0.5">Powered by TF-IDF cosine similarity matching</p>
                </div>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 rounded-full hover:bg-orange-200/50 dark:hover:bg-slate-700/50"
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            
            <CardContent className="pt-6 pb-4 relative z-10 overflow-y-auto">
              {guideRecommendation ? (
                <div className="space-y-5 animate-in fade-in duration-500">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-orange-500 dark:text-orange-400" />
                    <h3 className="text-lg font-medium text-orange-600 dark:text-orange-400">Guide Recommendation</h3>
                  </div>
                  <GuideRecommendationDisplay recommendation={guideRecommendation} similarProjects={similarProjects} />
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-orange-200 dark:bg-orange-800/30 flex items-center justify-center">
                        <Sparkles className="h-6 w-6 text-orange-500 dark:text-orange-400" />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-medium text-center text-gray-800 dark:text-gray-200">
  Let&apos;s Find Your Perfect Project Guide
</h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-center text-sm leading-relaxed">
                    Describe your project idea in detail, including technologies, goals, and any specific requirements. Our AI will match you with the most suitable guide based on their expertise.
                  </p>
                  
                  <div className="relative">
                    <Textarea
                      placeholder="E.g., I'm planning to create a mobile app that helps students track their study time and improve productivity using AI..."
                      className="min-h-[140px] bg-white dark:bg-slate-800 border-orange-200 dark:border-slate-700 focus-visible:ring-orange-500 dark:text-white resize-none shadow-sm"
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                      disabled={isLoading}
                    />
                    <div className="absolute bottom-3 right-3 text-xs text-gray-400 dark:text-gray-500">
                      {projectDescription.length} chars
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
            
            <CardFooter className="flex justify-end gap-3 border-t border-orange-200 dark:border-slate-700 pt-4 pb-4 bg-gradient-to-b from-transparent to-orange-50 dark:to-slate-800/50 relative z-10 shrink-0">
              {guideRecommendation ? (
                <Button 
                  onClick={resetForm}
                  className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 hover:from-orange-600 hover:to-orange-700 dark:hover:from-orange-700 dark:hover:to-orange-800 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <RotateCcw className="h-4 w-4" /> Find Another Guide
                </Button>
              ) : (
                <Button 
                  onClick={handleFindGuide}
                  className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 hover:from-orange-600 hover:to-orange-700 dark:hover:from-orange-700 dark:hover:to-orange-800 shadow-md hover:shadow-lg transition-all duration-300"
                  disabled={isLoading || !projectDescription.trim()}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Finding...
                    </>
                  ) : (
                    <>
                      <Search className="h-4 w-4" /> Find My Guide
                    </>
                  )}
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default FindMyGuideChat;