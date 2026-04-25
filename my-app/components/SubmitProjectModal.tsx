"use client";

import React, { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Rocket,
  Loader2,
  CheckCircle,
  AlertCircle,
  X,
  Plus,
  ExternalLink,
} from "lucide-react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA";

interface SubmitProjectModalProps {
  open: boolean;
  onClose: () => void;
  defaultYear?: string;
  availableYears: string[];
}

const COMMON_TAGS = [
  "React",
  "Flutter",
  "Firebase",
  "AI",
  "IoT",
  "Machine Learning",
  "Python",
  "Node.js",
  "MongoDB",
  "REST API",
  "Blockchain",
  "Cloud Functions",
  "React Native",
  "Next.js",
  "TensorFlow",
];

const SubmitProjectModal: React.FC<SubmitProjectModalProps> = ({
  open,
  onClose,
  defaultYear,
  availableYears,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [students, setStudents] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [year, setYear] = useState(defaultYear || "");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance | null>(null);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [prUrl, setPrUrl] = useState("");

  const addTag = (tag: string) => {
    const cleaned = tag.trim();
    if (cleaned && !tags.includes(cleaned) && tags.length < 8) {
      setTags([...tags, cleaned]);
    }
    setTagInput("");
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleTagKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(tagInput);
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setStudents("");
    setSupervisor("");
    setTags([]);
    setTagInput("");
    setYear(defaultYear || "");
    setTurnstileToken(null);
    turnstileRef.current?.reset();
    setStatus("idle");
    setErrorMsg("");
    setPrUrl("");
  };

  const handleClose = () => {
    if (status !== "submitting") {
      resetForm();
      onClose();
    }
  };

  const isValid =
    title.trim().length >= 2 &&
    description.trim().length >= 10 &&
    students.trim().length >= 2 &&
    supervisor.trim().length >= 2 &&
    tags.length > 0 &&
    year.length > 0 &&
    !!turnstileToken;

  const handleSubmit = async () => {
    if (!isValid) return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/submit-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim(),
          students: students.trim(),
          supervisor: supervisor.trim(),
          tags,
          year,
          turnstileToken,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Submission failed. Please try again.");
        setTurnstileToken(null);
        turnstileRef.current?.reset();
        return;
      }

      setStatus("success");
      if (data.prUrl) setPrUrl(data.prUrl);
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-xl w-full border-[1.5px] border-gray-900 bg-white shadow-[3px_3px_0px_#222] rounded-sm p-0 overflow-hidden max-h-[90vh]">
        {status === "success" ? (
          <div className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 border-[1.5px] border-emerald-300 mb-5">
              <CheckCircle className="h-8 w-8 text-emerald-500" />
            </div>
            <h3 className="font-caveat text-3xl font-bold text-gray-900 mb-2">
              Submitted!
            </h3>
            <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed mb-6">
              Your project has been submitted for review. Once approved and
              merged, it will appear on the shelf alongside other projects.
            </p>
            {prUrl && (
              <a
                href={prUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sketch-outline inline-flex items-center gap-2 text-sm mb-4"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                View Pull Request
              </a>
            )}
            <div className="mt-4">
              <button
                onClick={handleClose}
                className="text-sm text-gray-500 hover:text-gray-700 underline underline-offset-2"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="border-b border-gray-900 px-6 py-4 bg-gray-50">
              <DialogHeader className="p-0">
                <DialogTitle className="font-caveat text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-orange-500" />
                  Submit Your Project
                </DialogTitle>
                <DialogDescription className="text-xs text-gray-500 mt-1">
                  Fill in the details below. Your submission will create a
                  review request.
                </DialogDescription>
              </DialogHeader>
            </div>

            <div className="px-6 py-5 space-y-4 overflow-y-auto max-h-[60vh]">
              {status === "error" && (
                <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-sm">
                  <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-700">{errorMsg}</p>
                </div>
              )}

              {/* Project Title */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                  Project Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., SmartAgro"
                  className="w-full px-3 py-2 text-sm text-gray-900 border-[1.5px] border-gray-300 rounded-sm focus:outline-none focus:border-gray-900 focus:shadow-[1px_1px_0px_#222] transition-shadow placeholder:text-gray-400"
                  disabled={status === "submitting"}
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your project in a few sentences..."
                  rows={3}
                  className="w-full px-3 py-2 text-sm text-gray-900 border-[1.5px] border-gray-300 rounded-sm focus:outline-none focus:border-gray-900 focus:shadow-[1px_1px_0px_#222] transition-shadow resize-none placeholder:text-gray-400"
                  disabled={status === "submitting"}
                />
              </div>

              {/* Students */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                  Team Members <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={students}
                  onChange={(e) => setStudents(e.target.value)}
                  placeholder="e.g., John Doe, Jane Smith, Alex Johnson"
                  className="w-full px-3 py-2 text-sm text-gray-900 border-[1.5px] border-gray-300 rounded-sm focus:outline-none focus:border-gray-900 focus:shadow-[1px_1px_0px_#222] transition-shadow placeholder:text-gray-400"
                  disabled={status === "submitting"}
                />
                <p className="text-[10px] text-gray-400 mt-1">
                  Separate names with commas
                </p>
              </div>

              {/* Supervisor */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                  Project Supervisor <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={supervisor}
                  onChange={(e) => setSupervisor(e.target.value)}
                  placeholder="e.g., Prof. Smitha Jacob"
                  className="w-full px-3 py-2 text-sm text-gray-900 border-[1.5px] border-gray-300 rounded-sm focus:outline-none focus:border-gray-900 focus:shadow-[1px_1px_0px_#222] transition-shadow placeholder:text-gray-400"
                  disabled={status === "submitting"}
                />
              </div>

              {/* Year */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                  Academic Year <span className="text-red-500">*</span>
                </label>
                <Select
                  value={year}
                  onValueChange={setYear}
                  disabled={status === "submitting"}
                >
                  <SelectTrigger className="w-full h-9 text-sm text-gray-900 border-[1.5px] border-gray-300 rounded-sm">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-900 rounded-sm shadow-[2px_2px_0px_#222]">
                    {availableYears.map((y) => (
                      <SelectItem key={y} value={y} className="text-sm">
                        {y}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                  Technologies / Tags <span className="text-red-500">*</span>
                </label>

                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="tech-tag flex items-center gap-1 pr-1"
                      >
                        {tag}
                        <button
                          onClick={() => removeTag(tag)}
                          className="ml-0.5 text-gray-400 hover:text-gray-700"
                          type="button"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleTagKeyDown}
                    placeholder="Type a tag and press Enter"
                    className="flex-1 px-3 py-2 text-sm text-gray-900 border-[1.5px] border-gray-300 rounded-sm focus:outline-none focus:border-gray-900 focus:shadow-[1px_1px_0px_#222] transition-shadow placeholder:text-gray-400"
                    disabled={status === "submitting" || tags.length >= 8}
                  />
                  <button
                    onClick={() => addTag(tagInput)}
                    disabled={!tagInput.trim() || tags.length >= 8}
                    className="btn-sketch-outline h-9 px-3 disabled:opacity-40"
                    type="button"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                {tags.length < 3 && (
                  <div className="mt-2">
                    <p className="text-[10px] text-gray-400 mb-1">
                      Quick add:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {COMMON_TAGS.filter((t) => !tags.includes(t))
                        .slice(0, 8)
                        .map((tag) => (
                          <button
                            key={tag}
                            onClick={() => addTag(tag)}
                            className="text-[10px] px-2 py-0.5 rounded-sm border border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700 transition-colors"
                            type="button"
                          >
                            + {tag}
                          </button>
                        ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Turnstile CAPTCHA */}
              <div className="pt-2">
                <Turnstile
                  ref={turnstileRef}
                  siteKey={TURNSTILE_SITE_KEY}
                  onSuccess={(token) => setTurnstileToken(token)}
                  onExpire={() => setTurnstileToken(null)}
                  onError={() => setTurnstileToken(null)}
                  options={{ theme: "light", size: "flexible" }}
                />
              </div>
            </div>

            <div className="border-t border-gray-900 px-6 py-3 flex items-center justify-between bg-gray-50">
              <button
                onClick={handleClose}
                className="text-sm text-gray-500 hover:text-gray-700"
                disabled={status === "submitting"}
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={!isValid || status === "submitting"}
                className="btn-sketch-filled flex items-center gap-2 text-sm disabled:opacity-40"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />{" "}
                    Submitting...
                  </>
                ) : (
                  <>
                    <Rocket className="h-3.5 w-3.5" /> Submit Project
                  </>
                )}
              </button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SubmitProjectModal;
