"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Bot, X, Search, RotateCcw, Loader2, Sparkles } from "lucide-react";

const FindMyGuideChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectDescription, setProjectDescription] = useState("");
  const [guideRecommendation, setGuideRecommendation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFindGuide = async () => {
    if (!projectDescription.trim()) return;
    
    setIsLoading(true);

    try {
      // Send to API endpoint
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
    } catch (error) {
      console.error("Error:", error);
      setGuideRecommendation("Sorry, I encountered an error while finding a guide. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setProjectDescription("");
    setGuideRecommendation(null);
  };

  return (
    <>
      {/* Floating button with pulsing effect */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 rounded-full w-14 h-14 shadow-lg bg-gradient-to-br from-orange-400 to-orange-600 dark:from-orange-500 dark:to-orange-700 text-white p-0 z-50 transition-all hover:scale-105 hover:shadow-xl duration-300"
      >
        <div className="absolute inset-0 rounded-full bg-orange-500 dark:bg-orange-600 blur-md opacity-30 animate-pulse"></div>
        <div className="relative flex items-center justify-center z-10">
          <Bot size={26} strokeWidth={1.75} className="drop-shadow-md" />
        </div>
      </Button>

      {/* Modal/Card for Find My Guide */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="absolute inset-0" onClick={() => setIsOpen(false)}></div>
          <Card className="w-full max-w-md bg-white dark:bg-slate-900 border-0 shadow-2xl animate-in zoom-in-95 duration-300 relative z-10 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-100 to-transparent dark:from-orange-900/20 rounded-full -translate-y-16 translate-x-16 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-100 to-transparent dark:from-orange-900/20 rounded-full translate-y-16 -translate-x-16 blur-2xl"></div>
            
            <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-slate-800 dark:to-slate-800/80 border-b border-orange-200 dark:border-slate-700 flex flex-row items-center justify-between relative">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-9 w-9 rounded-full bg-orange-500 dark:bg-orange-600 text-white">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-orange-700 dark:text-orange-400">Find My Guide</CardTitle>
                  <p className="text-xs text-orange-600/70 dark:text-orange-400/70 mt-0.5">Powered by AI project matching</p>
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
            
            <CardContent className="pt-6 pb-4 relative z-10">
              {guideRecommendation ? (
                <div className="space-y-5 animate-in fade-in duration-500">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-orange-500 dark:text-orange-400" />
                    <h3 className="text-lg font-medium text-orange-600 dark:text-orange-400">Guide Recommendation</h3>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-slate-800 dark:to-slate-800/60 rounded-xl border border-orange-100 dark:border-slate-700 shadow-sm">
                    <p className="whitespace-pre-wrap text-gray-800 dark:text-gray-200 leading-relaxed">{guideRecommendation}</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-5">
                  {/* Illustrative element */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-orange-200 dark:bg-orange-800/30 flex items-center justify-center">
                        <Sparkles className="h-6 w-6 text-orange-500 dark:text-orange-400" />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-medium text-center text-gray-800 dark:text-gray-200">
                    Letapos&;s Find Your Perfect Project Guide
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
            
            <CardFooter className="flex justify-end gap-3 border-t border-orange-200 dark:border-slate-700 pt-4 pb-4 bg-gradient-to-b from-transparent to-orange-50 dark:to-slate-800/50 relative z-10">
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