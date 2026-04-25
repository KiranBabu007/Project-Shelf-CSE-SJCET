"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Search,
  Download,
  ArrowUpRight,
  Calendar,
  Layers,
  Code2,
  Users,
  Star,
  HelpCircle,
  Settings,
} from "lucide-react";
import projectsData from "@/app/project-shelf/projects";
import ProjectModal from "@/components/ProjectModal";
import FindMyGuideChat from "@/components/findguide";
import { Project } from "@/types";
import Joyride, { CallBackProps, Step } from "react-joyride";

const TAG_CATEGORY_MAP: Record<string, string> = {
  iot: "iot",
  "smart systems": "iot",
  automation: "iot",
  sensor: "iot",
  arduino: "iot",
  raspberry: "iot",
  education: "education",
  "language learning": "education",
  collaboration: "education",
  elearning: "education",
  ai: "ai",
  "machine learning": "ai",
  "deep learning": "ai",
  "image processing": "ai",
  "emotion recognition": "ai",
  nlp: "ai",
  "computer vision": "ai",
  blockchain: "blockchain",
  solidity: "blockchain",
  ethereum: "blockchain",
  "smart contract": "blockchain",
  health: "health",
  healthcare: "health",
  "assistive technology": "health",
  medical: "health",
  web: "web",
  react: "web",
  "next.js": "web",
  firebase: "web",
  "rest api": "web",
  "cloud functions": "web",
  mobile: "mobile",
  android: "mobile",
  flutter: "mobile",
  "react native": "mobile",
  "mobile app": "mobile",
  security: "services",
  cybersecurity: "services",
  networking: "services",
  services: "services",
};

function getCategoryForTags(tags: string[]): string {
  for (const tag of tags) {
    const key = tag.toLowerCase();
    if (TAG_CATEGORY_MAP[key]) return TAG_CATEGORY_MAP[key];
  }
  return "default";
}

function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    iot: "IOT",
    education: "EDUCATION",
    ai: "AI / LEGAL",
    blockchain: "BLOCKCHAIN",
    health: "HEALTH",
    services: "SERVICES",
    web: "WEB",
    mobile: "MOBILE",
    ml: "ML / AI",
    default: "PROJECT",
  };
  return labels[category] || "PROJECT";
}

function getCategoryBadgeClass(category: string): string {
  const classes: Record<string, string> = {
    iot: "badge-iot",
    education: "badge-education",
    ai: "badge-ai",
    blockchain: "badge-blockchain",
    health: "badge-health",
    services: "badge-services",
    web: "badge-web",
    mobile: "badge-mobile",
    ml: "badge-ml",
    default: "badge-default",
  };
  return classes[category] || "badge-default";
}

const ProjectShelf = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2024");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredProjects, setFilteredProjects] = useState(projectsData[2024]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [joyrideRun, setJoyrideRun] = useState(false);
  const [joyrideStepIndex, setJoyrideStepIndex] = useState(0);

  const joyrideSteps: Step[] = [
    {
      target: "#search-bar",
      content: "Search for projects or tags here!",
      disableBeacon: true,
      placement: "bottom",
    },
    {
      target: "#project-card-0",
      content: "Click a project card to see more details!",
      placement: "top",
    },
    {
      target: "#download-btn",
      content: "Download all filtered projects as a CSV file.",
      placement: "left",
    },
    {
      target: "#find-guide-fab",
      content:
        "Try the Find My Guide bot for help or to experiment with search!",
      placement: "top",
    },
  ];

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status, index, type } = data;
    if (status === "finished" || status === "skipped") {
      setJoyrideRun(false);
      setJoyrideStepIndex(0);
    } else if (type === "step:after") {
      setJoyrideStepIndex(index + 1);
    }
  };

  const allProjects = useMemo(() => Object.values(projectsData).flat(), []);
  const totalYears = Object.keys(projectsData).length;
  const totalTech = useMemo(
    () => new Set(allProjects.flatMap((p) => p.tags)).size,
    [allProjects]
  );

  useEffect(() => {
    const filtered = projectsData[
      selectedYear as keyof typeof projectsData
    ].filter(
      (project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        project.students.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setFilteredProjects(filtered);
  }, [selectedYear, searchTerm]);

  const handleDownload = () => {
    const headers = ["Title", "Description", "Students", "Supervisor", "Tags"];
    const csvContent = [
      headers.join(","),
      ...filteredProjects.map((project) =>
        [
          `"${project.title}"`,
          `"${project.description}"`,
          `"${project.students}"`,
          `"${project.supervisor}"`,
          `"${project.tags.join(", ")}"`,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", `projects_${selectedYear}.csv`);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const yearLabel =
    selectedYear.includes("-") ? selectedYear : `Batch ${selectedYear}`;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ============ NAVBAR ============ */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="sketch-border flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white font-bold text-lg">
                S
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900 leading-tight">
                  SJCET Palai
                </p>
                <p className="text-[11px] text-gray-500 uppercase tracking-wider">
                  Dept. of Computer Science
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {searchOpen && (
                <div className="relative" id="search-bar">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search projects..."
                    className="pl-8 w-[200px] sm:w-[280px] h-9 text-sm border-gray-300 rounded-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    autoFocus
                  />
                </div>
              )}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="btn-sketch-outline flex items-center gap-2 text-sm h-9 px-4"
                id={!searchOpen ? "search-bar" : undefined}
              >
                <Search className="h-4 w-4" />
                <span className="hidden sm:inline">Find Project</span>
              </button>
              <button
                onClick={handleDownload}
                className="btn-sketch-orange flex items-center gap-2 text-sm h-9 px-4"
                id="download-btn"
              >
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Archive.zip</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ============ HERO SECTION ============ */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-start gap-4">
                <span className="text-orange-500 font-caveat text-5xl sm:text-6xl font-bold leading-none select-none hidden sm:block">
                  {"</>"}
                </span>
                <div>
                  <h1 className="font-caveat text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1]">
                    The Project{" "}
                    <span className="text-orange-500">Shelf.</span>
                  </h1>
                  <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed">
                    A handcrafted gallery showcasing{" "}
                    <span className="font-semibold text-gray-900 underline decoration-orange-400 decoration-2 underline-offset-2">
                      {allProjects.length} innovative ideas
                    </span>{" "}
                    and the brilliant minds behind them at SJCET.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <Settings className="w-24 h-24 text-gray-200 animate-[spin_20s_linear_infinite]" strokeWidth={0.8} />
            </div>
          </div>
        </div>
      </section>

      {/* ============ STAT CARDS ============ */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="stat-card-blue p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Academic Years
                </p>
                <Calendar className="h-5 w-5 text-sky-400" />
              </div>
              <p className="font-caveat text-5xl font-bold text-gray-900">
                {String(totalYears).padStart(2, "0")}
              </p>
              <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                Spanning almost a decade of software evolution and hardware
                hacks.
              </p>
            </div>

            <div className="stat-card-green p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Total Projects
                </p>
                <Layers className="h-5 w-5 text-emerald-400" />
              </div>
              <p className="font-caveat text-5xl font-bold text-gray-900">
                {allProjects.length}
              </p>
              <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                From IoT sensors to Blockchain networks, archived for
                inspiration.
              </p>
            </div>

            <div className="stat-card-cream p-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  Technologies
                </p>
                <Code2 className="h-5 w-5 text-amber-400" />
              </div>
              <p className="font-caveat text-5xl font-bold text-gray-900">
                {totalTech}+
              </p>
              <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                A diverse stock of languages, frameworks, and modern tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROJECTS GRID ============ */}
      <section className="flex-grow pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <h2 className="font-caveat text-3xl sm:text-4xl font-bold text-gray-900 italic">
              Latest Submissions ({selectedYear})
            </h2>
            <div className="flex items-center gap-3">
              {searchTerm && (
                <span className="text-sm text-gray-500">
                  {filteredProjects.length} found
                </span>
              )}
              <Select
                onValueChange={setSelectedYear}
                defaultValue={selectedYear}
              >
                <SelectTrigger className="sketch-border bg-white text-sm font-medium h-9 w-[140px] rounded-sm">
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-900 rounded-sm shadow-[2px_2px_0px_#222]">
                  {Object.keys(projectsData).map((year) => (
                    <SelectItem key={year} value={year} className="text-sm">
                      {year.includes("-") ? year : `Batch ${year}`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="sketch-card p-16 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Search className="h-7 w-7 text-gray-400" />
              </div>
              <h3 className="font-caveat text-2xl font-bold text-gray-600">
                No projects found
              </h3>
              <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
                Try adjusting your search term or selecting a different year
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProjects.map((project, idx) => {
                const category = getCategoryForTags(project.tags);
                return (
                  <div
                    key={project.id}
                    onClick={() => handleCardClick(project)}
                    className="sketch-card p-5 cursor-pointer group relative"
                    id={idx === 0 ? "project-card-0" : undefined}
                    tabIndex={0}
                    role="button"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleCardClick(project);
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span
                        className={`${getCategoryBadgeClass(category)} text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm`}
                      >
                        {getCategoryLabel(category)}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-gray-300 group-hover:text-orange-500 transition-colors" />
                    </div>

                    <h3 className="font-caveat text-2xl font-bold text-gray-900 mb-2 leading-tight line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
                      <span className="text-xs text-gray-600 line-clamp-1">
                        {project.students}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <Star className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
                      <span className="text-xs text-gray-600">
                        {project.supervisor}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="tech-tag"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSearchTerm(tag);
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-[10px] text-gray-400 self-center">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {filteredProjects.length > 0 && (
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400">
                Showing {filteredProjects.length}{" "}
                {filteredProjects.length === 1 ? "project" : "projects"} for{" "}
                {yearLabel}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ============ DASHED SEPARATOR ============ */}
      <hr className="dashed-separator max-w-7xl mx-auto w-full px-4" />

      {/* ============ ORANGE CTA BANNER ============ */}
      <section className="relative">
        <svg
          className="w-full"
          viewBox="0 0 1440 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 50H1440V20C1440 20 1320 0 1200 10C1080 20 960 45 840 40C720 35 600 5 480 10C360 15 240 45 120 35C60 30 0 20 0 20V50Z"
            fill="#f97316"
          />
        </svg>
        <div className="bg-orange-500 px-4 sm:px-6 lg:px-8 pb-12 pt-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-caveat text-4xl sm:text-5xl font-bold text-white mb-3">
              Got a new idea?
            </h2>
            <p className="text-white/90 text-sm sm:text-base mb-8 max-w-lg mx-auto leading-relaxed">
              Every great project starts with a single line of code. Let&apos;s
              build the future together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="btn-sketch-outline bg-white border-white text-gray-900 shadow-[1.5px_1.5px_0px_rgba(0,0,0,0.2)] hover:shadow-[2.5px_2.5px_0px_rgba(0,0,0,0.2)]"
              >
                Submit Your Project
              </a>
              <button
                onClick={() => {
                  const fab = document.getElementById("find-guide-fab");
                  if (fab) fab.click();
                }}
                className="btn-sketch-filled"
              >
                Talk to Guide-Bot
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sketch-border p-6 sm:p-8">
            <h3 className="font-bold text-lg text-gray-900">
              CSE Project Shelf
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Built with{" "}
              <span className="text-red-500">&#10084;&#65039;</span> and{" "}
              <span>&#9749;</span> at SJCET Palai
            </p>
            <p className="text-xs text-gray-400 mt-2">
              &copy; 2024-{new Date().getFullYear()} Kiran Babu &amp; Department
              of CSE
            </p>
          </div>
        </div>
      </footer>

      {/* ============ FLOATING ACTIONS ============ */}
      <div className="fixed bottom-20 right-5 z-50 flex flex-col items-end gap-3">
        <button
          aria-label="Show guidance info"
          className="bg-white sketch-border rounded-full p-3 hover:shadow-[2px_2px_0px_#222] transition-all"
          onClick={() => setJoyrideRun(true)}
        >
          <HelpCircle className="text-orange-500 w-5 h-5" />
        </button>
        <div id="find-guide-bot">
          <FindMyGuideChat />
        </div>
      </div>

      <Joyride
        steps={joyrideSteps}
        run={joyrideRun}
        stepIndex={joyrideStepIndex}
        continuous
        showSkipButton
        showProgress
        disableScrolling
        styles={{
          options: {
            zIndex: 2000,
            primaryColor: "#f97316",
            backgroundColor: "#ffffff",
            textColor: "#333",
            arrowColor: "#ffffff",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
        callback={handleJoyrideCallback}
      />

      <ProjectModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        project={selectedProject}
      />
    </div>
  );
};

export default ProjectShelf;
