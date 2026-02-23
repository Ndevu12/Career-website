"use client";

import { use } from "react";
import {
  opportunities,
  categoryLabels,
  categoryColors,
  type OpportunitiesCategory,
} from "@/src/lib/opportunities-data";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  MapPin,
  Briefcase,
  CheckCircle2,
  Wrench,
  FolderOpen,
  UserCheck,
  ChevronRight,
  Code,
  Server,
  Cpu,
  Brain,
  Palette,
} from "lucide-react";
import { OpportunityCard } from "@/src/components/Opportunity-card";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const categoryIcons: Record<OpportunitiesCategory, typeof Code> = {
  software: Code,
  infrastructure: Server,
  electronics: Cpu,
  ai: Brain,
  creative: Palette,
};

export default function ProgramDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const program = opportunities.find((p) => p.id === id);

  if (!program) {
    notFound();
  }

  const Icon = categoryIcons[program.category];

  const levelColors = {
    Foundation: "bg-green-50 text-green-700 border-green-200",
    Intermediate: "bg-amber-50 text-amber-700 border-amber-200",
    Advanced: "bg-red-50 text-red-700 border-red-200",
  };

  const relatedTracks = opportunities
    .filter((p) => p.category === program.category && p.id !== program.id)
    .slice(0, 3);

  return (
    <>
      <main className="bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-1.5 text-sm text-gray-500">
              <Link
                href="/opportunities"
                className="hover:text-primary transition-colors font-medium"
              >
                Career Opportunities
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-gray-400 truncate max-w-[200px] sm:max-w-none">
                {categoryLabels[program.category]}
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-gray-900 font-medium truncate max-w-[150px] sm:max-w-none">
                {program.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Page Layout */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid lg:grid-cols-[1fr_320px] gap-8">
            {/* Main Content */}
            <div>
              {/* Position Header */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 mb-6">
                {/* Domain + Type */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${categoryColors[program.category]} flex items-center justify-center`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">
                        {categoryLabels[program.category]}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-medium uppercase tracking-widest text-gray-400">
                    Opportunity
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                  {program.title}
                </h1>

                {/* Company + Location + Meta */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 mb-6">
                  <span className="font-semibold text-gray-800">
                    GEOFINDA Tech Hub
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    Kigali, Rwanda
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-gray-400" />
                    {program.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4 text-gray-400" />
                    On-site
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-md border ${levelColors[program.level]}`}
                  >
                    {program.level}
                  </span>
                  <span className="text-xs font-medium px-3 py-1 rounded-md bg-gray-50 text-gray-600 border border-gray-200">
                    Academic Internship
                  </span>
                  <span className="text-xs font-medium px-3 py-1 rounded-md bg-gray-50 text-gray-600 border border-gray-200">
                    Mentorship Included
                  </span>
                </div>
              </div>

              {/* About This Position */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  About This Position
                </h2>
                <p className="text-[15px] leading-relaxed text-gray-600">
                  {program.description}
                </p>
              </div>

              {/* What You'll Work On */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-5 flex items-center gap-2.5">
                  <FolderOpen className="w-5 h-5 text-primary" />
                  What You&apos;ll Work On
                </h2>
                <ul className="space-y-3">
                  {program.projectExposure.map((project) => (
                    <li key={project} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-[15px] text-gray-700">
                        {project}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What You'll Learn */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-5 flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  What You&apos;ll Learn
                </h2>
                <ul className="space-y-3">
                  {program.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2.5" />
                      <span className="text-[15px] text-gray-700">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills & Tools */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-5 flex items-center gap-2.5">
                  <Wrench className="w-5 h-5 text-primary" />
                  Skills & Technologies
                </h2>

                <div className="mb-5">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
                    Core Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {program.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm text-gray-700 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
                    Tools & Platforms
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {program.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-sm text-primary bg-primary/5 border border-primary/20 px-3 py-1.5 rounded-md font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Who Should Apply */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-5 flex items-center gap-2.5">
                  <UserCheck className="w-5 h-5 text-primary" />
                  Who Should Apply
                </h2>
                <ul className="space-y-3">
                  {program.candidateProfile.map((trait) => (
                    <li key={trait} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0 mt-2.5" />
                      <span className="text-[15px] text-gray-700">{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:order-last">
              <div className="sticky top-24 space-y-5">
                {/* Apply Card */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    Interested in this position?
                  </h3>
                  <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                    Submit your application and our team will review your
                    profile for this opportunity.
                  </p>
                  <Link
                    href={`/apply?program=${program.id}`}
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 hover:shadow-md transition-all text-sm"
                  >
                    Apply for This Position
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full mt-3 px-5 py-3 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Ask a Question
                  </Link>
                </div>

                {/* Position Summary */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                    Position Summary
                  </h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-xs text-gray-500 font-medium mb-1">
                        Company
                      </dt>
                      <dd className="text-sm font-semibold text-gray-900">
                        GEOFINDA Tech Hub
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-gray-500 font-medium mb-1">
                        Location
                      </dt>
                      <dd className="text-sm font-medium text-gray-800">
                        Kigali, Rwanda
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-gray-500 font-medium mb-1">
                        Duration
                      </dt>
                      <dd className="text-sm font-medium text-gray-800">
                        {program.duration}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-gray-500 font-medium mb-1">
                        Level
                      </dt>
                      <dd className="text-sm font-medium text-gray-800">
                        {program.level}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-gray-500 font-medium mb-1">
                        Domain
                      </dt>
                      <dd className="text-sm font-medium text-gray-800">
                        {categoryLabels[program.category]}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-gray-500 font-medium mb-1">
                        Type
                      </dt>
                      <dd className="text-sm font-medium text-gray-800">
                        On-site · Academic Internship
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Back to tracks */}
                <Link
                  href="/opportunities"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  View All Opportunities
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Tracks */}
        {relatedTracks.length > 0 && (
          <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Other Positions in {categoryLabels[program.category]}
                </h2>
                <Link
                  href="/opportunities"
                  className="text-sm text-primary font-medium hover:underline hidden sm:inline-flex items-center gap-1"
                >
                  View all
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedTracks.map((related) => (
                  <OpportunityCard key={related.id} Opportunity={related} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
