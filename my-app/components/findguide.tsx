"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { X, Bot, Send, Loader2 } from 'lucide-react';

const FindMyGuideChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatStep, setChatStep] = useState('initial'); // initial, askProject, result
  const [projectDescription, setProjectDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [guideResult, setGuideResult] = useState<any>(null);
  const chatBodyRef = useRef<HTMLDivElement>(null);
  
  // Simulate guide recommendation API call
  const findGuide = async (description: string) => {
    setIsLoading(true);
    
    try {
      
      const response = await fetch('/api/findguide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description }),
      });
      const data = await response.json();
      
      
      setGuideResult(data);
      setChatStep('result');
    } catch (error) {
      console.error("Error finding guide:", error);
      // Handle error
    } finally {
      setIsLoading(false);
    }
  };
  
  // Auto-scroll chat to bottom when new messages appear
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [chatStep, guideResult]);

  const handleClose = () => {
    setIsOpen(false);
    // Reset after closing
    setTimeout(() => {
      setChatStep('initial');
      setProjectDescription('');
      setGuideResult(null);
    }, 300);
  };

  const handleStartChat = () => {
    setChatStep('askProject');
  };

  const handleSubmitProject = () => {
    if (projectDescription.trim()) {
      findGuide(projectDescription);
    }
  };

  const handleReset = () => {
    setChatStep('initial');
    setProjectDescription('');
    setGuideResult(null);
  };

  // Render different content based on chat step
  const renderChatContent = () => {
    switch (chatStep) {
      case 'initial':
        return (
          <div className="flex flex-col items-center justify-center h-full space-y-4 p-4">
            <Bot size={48} className="text-orange-500" />
            <h3 className="font-semibold text-lg text-center">Need help finding a project guide?</h3>
            <p className="text-gray-600 text-center text-sm">
              I can help match you with the perfect guide based on your project idea.
            </p>
            <Button 
              onClick={handleStartChat} 
              className="bg-orange-500 hover:bg-orange-600 transition-colors w-full"
            >
              Find My Guide
            </Button>
          </div>
        );
      
      case 'askProject':
        return (
          <>
            <div className="overflow-auto flex-1 p-4" ref={chatBodyRef}>
              <div className="bg-orange-100 rounded-lg p-3 mb-3 max-w-[80%]">
                <p className="text-orange-800">
                  Tell me about your project idea. What technologies or concepts are you planning to use?
                </p>
              </div>
            </div>
            <CardFooter className="border-t p-3 flex gap-2">
              <Textarea 
                placeholder="Describe your project idea..."
                className="resize-none border-orange-300 focus-visible:ring-orange-500"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                rows={3}
              />
              <Button 
                onClick={handleSubmitProject} 
                className="bg-orange-500 hover:bg-orange-600 transition-colors self-end"
                disabled={isLoading || !projectDescription.trim()}
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </Button>
            </CardFooter>
          </>
        );
      
      case 'result':
        return (
          <>
            <div className="overflow-auto flex-1 p-4" ref={chatBodyRef}>
              <div className="bg-orange-100 rounded-lg p-3 mb-3 max-w-[80%]">
                <p className="text-orange-800">
                  Tell me about your project idea. What technologies or concepts are you planning to use?
                </p>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-3 mb-3 max-w-[80%] ml-auto">
                <p className="text-gray-800">{projectDescription}</p>
              </div>
              
              {isLoading ? (
                <div className="flex justify-center items-center p-4">
                  <Loader2 className="h-5 w-5 animate-spin text-orange-500" />
                  <span className="ml-2 text-orange-500">Finding your guide...</span>
                </div>
              ) : (
                <div className="bg-orange-100 rounded-lg p-3 mb-3 max-w-[80%]">
                  <div className="prose prose-sm max-w-none text-orange-800">
                  <div dangerouslySetInnerHTML={{ 
  __html: (guideResult?.recommendation || "No recommendation available.")
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')  // Bold markdown "**text**"
    .replace(/\n/g, '<br />') // Newline handling
}} />
                  </div>
                </div>
              )}
            </div>
            <CardFooter className="border-t p-3">
              <Button 
                onClick={handleReset} 
                className="bg-orange-500 hover:bg-orange-600 transition-colors w-full"
              >
                Find Another Guide
              </Button>
            </CardFooter>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      {/* Floating button */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <Button 
          onClick={() => setIsOpen(true)}
          className="bg-orange-500 hover:bg-orange-600 h-14 w-14 rounded-full shadow-lg flex items-center justify-center p-0"
        >
          <Bot size={24} className="text-white" />
        </Button>
      </div>

      {/* Chat window */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <Card className="w-80 sm:w-96 h-96 flex flex-col overflow-hidden shadow-xl border-orange-300">
          <CardHeader className="bg-orange-500 text-white p-3 flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-medium flex items-center">
              <Bot size={20} className="mr-2" />
              Find My Guide
            </CardTitle>
            <Button 
              onClick={handleClose} 
              variant="ghost" 
              className="h-8 w-8 p-0 rounded-full hover:bg-orange-600/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-0 flex-1 flex flex-col overflow-hidden">
            {renderChatContent()}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default FindMyGuideChat;