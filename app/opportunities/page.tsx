"use client";

import { useState, useMemo } from "react";
import { OpportunityCard } from "@/src/components/Opportunity-card";
import {
  opportunities,
  categoryLabels,
  categoryColors,
  type Opportunity,
  type OpportunitiesCategory,
} from "@/src/lib/opportunities-data";
import {
  Search,
  X,
  Code,
  Server,
  Cpu,
  Brain,
  Palette,
  SlidersHorizontal,
  ArrowRight,
  GraduationCap,
  LayoutGrid,
  List,
} from "lucide-react";
import Link from "next/link";

type CategoryType = Opportunity["category"];

const categoryIcons: Record<OpportunitiesCategory, typeof Code> = {
  software: Code,
  infrastructure: Server,
  electronics: Cpu,
  ai: Brain,
  creative: Palette,
};

const categoryTrackCounts: Record<OpportunitiesCategory, number> = {
  software: opportunities.filter((p) => p.category === "software").length,
  infrastructure: opportunities.filter((p) => p.category === "infrastructure")
    .length,
  electronics: opportunities.filter((p) => p.category === "electronics").length,
  ai: opportunities.filter((p) => p.category === "ai").length,
  creative: opportunities.filter((p) => p.category === "creative").length,
};

type LevelFilter = "all" | "Foundation" | "Intermediate" | "Advanced";

export default function opportunitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    CategoryType | "all"
  >("all");
  const [selectedLevel, setSelectedLevel] = useState<LevelFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredopportunities = useMemo(() => {
    return opportunities.filter((opportunity) => {
      const matchesCategory =
        selectedCategory === "all" || opportunity.category === selectedCategory;
      const matchesLevel =
        selectedLevel === "all" || opportunity.level === selectedLevel;
      const matchesSearch =
        searchQuery === "" ||
        opportunity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opportunity.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        opportunity.skills.some((s) =>
          s.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      return matchesCategory && matchesLevel && matchesSearch;
    });
  }, [selectedCategory, selectedLevel, searchQuery]);

  const activeFilterCount =
    (selectedCategory !== "all" ? 1 : 0) +
    (selectedLevel !== "all" ? 1 : 0) +
    (searchQuery !== "" ? 1 : 0);

  const clearAllFilters = () => {
    setSelectedCategory("all");
    setSelectedLevel("all");
    setSearchQuery("");
  };

  const domainCategories: OpportunitiesCategory[] = [
    "software",
    "infrastructure",
    "electronics",
    "ai",
    "creative",
  ];

  return (
    <>
      <main>
        {/* Hero */}
        <section className="gradient-hero py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4 inline mr-2" />
              {opportunities.length} Tracks Across 5 Domains
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              Career Opportunities & Internships
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Industry-aligned opportunities designed for students and
              early-career professionals. Each offering includes structured
              mentorship, real-world projects, and partner placements.
            </p>

            {/* Domain Tabs — inside hero */}
            <div className="flex flex-wrap justify-center gap-2">
              {/* All tab */}
              <button
                onClick={() => setSelectedCategory("all")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === "all"
                    ? "bg-white text-gray-900 shadow-lg"
                    : "bg-white/15 text-white hover:bg-white/25 border border-white/20"
                }`}
              >
                All Domains
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                    selectedCategory === "all"
                      ? "bg-primary/10 text-primary"
                      : "bg-white/20 text-white/80"
                  }`}
                >
                  {opportunities.length}
                </span>
              </button>

              {domainCategories.map((cat) => {
                const Icon = categoryIcons[cat];
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() =>
                      setSelectedCategory(isSelected ? "all" : cat)
                    }
                    className={`group flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                      isSelected
                        ? "bg-white text-gray-900 shadow-lg"
                        : "bg-white/15 text-white hover:bg-white/25 border border-white/20"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-gradient-to-br ${categoryColors[cat]} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="w-3 h-3 text-white" />
                    </div>
                    <span className="hidden sm:inline">
                      {categoryLabels[cat]}
                    </span>
                    <span className="sm:hidden">
                      {cat === "infrastructure"
                        ? "Infra"
                        : cat === "electronics"
                          ? "Electronics"
                          : cat === "ai"
                            ? "AI"
                            : cat === "creative"
                              ? "Creative"
                              : "Software"}
                    </span>
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-primary/10 text-primary"
                          : "bg-white/20 text-white/80"
                      }`}
                    >
                      {categoryTrackCounts[cat]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Filters & Search Bar */}
        <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row gap-3 md:items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, skill, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 hover:bg-gray-100 rounded"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                )}
              </div>

              {/* Level Filter */}
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <div className="flex gap-1.5">
                  {(
                    ["all", "Foundation", "Intermediate", "Advanced"] as const
                  ).map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-all ${
                        selectedLevel === level
                          ? level === "Foundation"
                            ? "bg-green-100 text-green-800 ring-1 ring-green-300"
                            : level === "Intermediate"
                              ? "bg-amber-100 text-amber-800 ring-1 ring-amber-300"
                              : level === "Advanced"
                                ? "bg-red-100 text-red-800 ring-1 ring-red-300"
                                : "bg-gray-900 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {level === "all" ? "All Levels" : level}
                    </button>
                  ))}
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="hidden md:flex items-center gap-1 border border-gray-200 rounded-lg p-0.5">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-md transition-colors ${viewMode === "grid" ? "bg-gray-900 text-white" : "text-gray-400 hover:text-gray-600"}`}
                  title="Grid view"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded-md transition-colors ${viewMode === "list" ? "bg-gray-900 text-white" : "text-gray-400 hover:text-gray-600"}`}
                  title="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Active Filters Summary */}
            <div className="flex items-center justify-between mt-3">
              <p className="text-xs text-gray-500">
                {filteredopportunities.length} of {opportunities.length} tracks
                {selectedCategory !== "all" &&
                  ` in ${categoryLabels[selectedCategory as OpportunitiesCategory]}`}
                {selectedLevel !== "all" && ` · ${selectedLevel} level`}
              </p>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="text-xs text-primary font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Tracks Grid / List */}
        <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 min-h-[50vh]">
          <div className="max-w-7xl mx-auto">
            {filteredopportunities.length > 0 ? (
              viewMode === "grid" ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredopportunities.map((opportunity, index) => (
                    <div
                      key={opportunity.id}
                      className="animate-float-in"
                      style={{
                        animationDelay: `${(index % 9) * 0.04}s`,
                      }}
                    >
                      <OpportunityCard Opportunity={opportunity} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredopportunities.map((opportunity, index) => (
                    <Link
                      key={opportunity.id}
                      href={`/opportunities/${opportunity.id}`}
                      className="animate-float-in block"
                      style={{
                        animationDelay: `${(index % 12) * 0.03}s`,
                      }}
                    >
                      <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary/40 hover:shadow-sm transition-all group">
                        {/* Domain Icon */}
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-br ${categoryColors[opportunity.category]} flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
                          {(() => {
                            const Icon = categoryIcons[opportunity.category];
                            return <Icon className="w-5 h-5 text-white" />;
                          })()}
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3 mb-1">
                            <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">
                              {opportunity.title}
                            </h3>
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 bg-gray-50 px-2 py-0.5 rounded flex-shrink-0 hidden sm:block">
                              Opportunity
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-xs text-gray-500 mb-1.5">
                            <span className="font-medium text-gray-700">
                              GEOFINDA Tech Hub
                            </span>
                            <span className="flex items-center gap-0.5">
                              <span className="w-3 h-3 inline-flex items-center justify-center">
                                📍
                              </span>
                              Kigali, RW
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 line-clamp-1 mb-2">
                            {opportunity.shortDescription}
                          </p>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                            <span>{opportunity.duration}</span>
                            <span
                              className={`font-semibold ${
                                opportunity.level === "Foundation"
                                  ? "text-green-600"
                                  : opportunity.level === "Intermediate"
                                    ? "text-amber-600"
                                    : "text-red-600"
                              }`}
                            >
                              {opportunity.level}
                            </span>
                            <span>
                              {
                                categoryLabels[
                                  opportunity.category as OpportunitiesCategory
                                ]
                              }
                            </span>
                            <div className="hidden md:flex items-center gap-1.5 ml-auto">
                              {opportunity.skills.slice(0, 4).map((skill) => (
                                <span
                                  key={skill}
                                  className="text-[10px] text-gray-600 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-full font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              )
            ) : (
              /* Empty State */
              <div className="text-center py-20">
                <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <Search className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No tracks found
                </h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                  {searchQuery
                    ? `No opportunities match "${searchQuery}". Try a different keyword or clear your filters.`
                    : "No offerings match your current filters. Try changing the domain or level."}
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-brand">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Ready to Start Your Career?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Choose an opportunity and apply today. Our team will guide you
              through the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#A6D93A] text-white font-bold rounded-lg hover:bg-[#61BA49] hover:shadow-lg hover:scale-105 transition-all"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-md text-white font-bold rounded-lg border border-white/30 hover:bg-white/30 transition-all"
              >
                How It Works
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
