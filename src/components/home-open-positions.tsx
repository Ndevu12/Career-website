import Link from "next/link";
import {
  opportunities,
  categoryLabels,
  Opportunity,
} from "@/src/lib/opportunities-data";
import { OpportunityCard } from "./Opportunity-card";
import { ArrowRight } from "lucide-react";

export function HomeOpportunities() {
  // Get featured opportunities (one from each category)
  const categories = [
    "software",
    "infrastructure",
    "electronics",
    "ai",
    "creative",
  ] as const;
  const featuredOpportunities = categories
    .map((cat) =>
      opportunities.find(
        (opportunity: Opportunity) => opportunity.category === cat,
      ),
    )
    .filter(Boolean);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6 animate-fade-in-up">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Academic Internship Tracks
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Choose from 30+ industry-aligned internship tracks across five
              technology domains.
            </p>
          </div>
          <Link
            href="/opportunities"
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
          >
            View All Tracks
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Featured opportunities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {featuredOpportunities.map((opportunity, index) => (
            <div
              key={opportunity?.id}
              className="animate-float-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {opportunity && <OpportunityCard Opportunity={opportunity} />}
            </div>
          ))}
        </div>

        {/* Categories Overview */}
        <div className="gradient-brand rounded-lg p-8 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-white mb-6">
            All Internship Domains
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => {
              const count = opportunities.filter(
                (p: Opportunity) => p.category === category,
              ).length;
              return (
                <Link
                  key={category}
                  href={`/opportunities?category=${category}`}
                  className="p-4 bg-white/95 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white hover:shadow-xl transition-all text-center group"
                >
                  <div className="text-2xl font-black text-gradient-brand mb-2 group-hover:scale-110 transition-transform">
                    {count}
                  </div>
                  <div className="font-bold text-sm text-gray-900">
                    {categoryLabels[category]}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
