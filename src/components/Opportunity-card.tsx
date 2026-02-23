import {
  Opportunity,
  categoryLabels,
  categoryColors,
  type OpportunitiesCategory,
} from "@/src/lib/opportunities-data";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  MapPin,
  Briefcase,
  Code,
  Server,
  Cpu,
  Brain,
  Palette,
} from "lucide-react";

interface OpportunitYCardProps {
  Opportunity: Opportunity;
}

const categoryIcons: Record<OpportunitiesCategory, typeof Code> = {
  software: Code,
  infrastructure: Server,
  electronics: Cpu,
  ai: Brain,
  creative: Palette,
};

export function OpportunityCard({ Opportunity }: OpportunitYCardProps) {
  const Icon = categoryIcons[Opportunity.category];

  const levelColors = {
    Foundation: "text-green-600",
    Intermediate: "text-amber-600",
    Advanced: "text-red-600",
  };

  return (
    <Link
      href={`/opportunities/${Opportunity.id}`}
      className="block h-full group"
    >
      <div className="h-full bg-white rounded-lg border border-gray-200 hover:border-primary/40 hover:shadow-md transition-all duration-200 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 px-5 pt-5">
          <div
            className={`w-11 h-11 rounded-xl bg-gradient-to-br ${categoryColors[Opportunity.category]} flex items-center justify-center flex-shrink-0`}
          >
            <Icon className="w-5 h-5 text-white" />
          </div>
          <span className="text-[10px] font-medium uppercase tracking-widest text-gray-400 mt-0.5">
            Opportunity
          </span>
        </div>

        {/* Content */}
        <div className="px-5 pt-4 pb-5 flex flex-col flex-1">
          {/* Title */}
          <h3 className="text-base font-semibold text-gray-900 leading-tight mb-2 line-clamp-2 group-hover:text-primary transition-colors tracking-[-0.01em]">
            {Opportunity.title}
          </h3>

          {/* Company + Location */}
          <div className="flex items-center gap-2.5 text-[13px] text-gray-500 mb-3">
            <span className="font-medium text-gray-700">GEOFINDA Tech Hub</span>
            <span className="text-gray-300">·</span>
            <span className="flex items-center gap-1 text-gray-500">
              <MapPin className="w-3.5 h-3.5 text-gray-400" />
              Kigali, RW
            </span>
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 mb-4">
            <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2.5 py-1 rounded-md">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              {Opportunity.duration}
            </span>
            <span
              className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-md ${
                Opportunity.level === "Foundation"
                  ? "bg-green-50 text-green-700"
                  : Opportunity.level === "Intermediate"
                    ? "bg-amber-50 text-amber-700"
                    : "bg-red-50 text-red-700"
              }`}
            >
              {Opportunity.level}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2.5 py-1 rounded-md">
              <Briefcase className="w-3.5 h-3.5 text-gray-400" />
              <span className="truncate max-w-[120px]">
                {categoryLabels[Opportunity.category]}
              </span>
            </span>
          </div>

          {/* Description */}
          <p className="text-[13px] leading-relaxed text-gray-500 mb-4 line-clamp-2 flex-1">
            {Opportunity.shortDescription}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-1.5">
            {Opportunity.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="text-[11px] text-gray-600 bg-gray-50 border border-gray-200/80 px-2.5 py-1 rounded-md font-medium"
              >
                {skill}
              </span>
            ))}
            {Opportunity.skills.length > 3 && (
              <span className="text-[11px] text-gray-400 px-1.5 py-1 font-medium">
                +{Opportunity.skills.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3.5 border-t border-gray-100 flex items-center justify-between mt-auto">
          <span className="text-[13px] text-primary font-semibold group-hover:underline">
            View Position
          </span>
          <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
        </div>
      </div>
    </Link>
  );
}
