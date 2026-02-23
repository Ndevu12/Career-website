import { Rocket, Building2, UserCheck, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Rocket,
    title: "Real Project Execution",
    description:
      "Not simulations. Not tutorials. Participants build real-world projects that mirror what professional teams deliver — from planning to production.",
  },
  {
    icon: Building2,
    title: "Industry Simulation",
    description:
      "Work environments mirror professional settings. Deadlines, code reviews, sprint cycles, and cross-functional collaboration — the way real teams operate.",
  },
  {
    icon: UserCheck,
    title: "Structured Mentorship",
    description:
      "Every intern is paired with an experienced mentor who provides regular guidance, technical feedback, and career direction throughout the internship.",
  },
  {
    icon: TrendingUp,
    title: "Career-Level Skill Building",
    description:
      "Our internship tracks develop not just technical skills, but the professional capabilities employers look for — communication, problem-solving, and ownership.",
  },
];

export function HomePillars() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            What Makes{" "}
            <span className="text-gradient-brand">GEOFINDA Tech Hub</span>{" "}
            Different?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four pillars that separate us from traditional training — real
            execution, real mentorship, real career outcomes.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 animate-float-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 bg-gradient-brand rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
