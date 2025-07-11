<script lang="ts">
  import Award from "@lucide/svelte/icons/award";
  import MapPin from "@lucide/svelte/icons/map-pin";
  import Calendar from "@lucide/svelte/icons/calendar";
  import TrendingUp from "@lucide/svelte/icons/trending-up";

  const whatsappMessage = encodeURIComponent("Hi Daniel! I want to see the backend thinking behind your builds.");
  const whatsappUrl = `https://wa.me/2348034411661?text=${whatsappMessage}`;

  const achievements = [
    {
      icon: "👨🏽‍💻",
      title: "CTO — Enski",
      subtitle: "Co-Founder / Personal Project",
      location: "Abuja, Nigeria",
      period: "2022 - Present",
      highlights: [
        "Spearheaded the vision and execution of a full-fledged course hosting platform for creators across Africa.",
        "Engineered the complete backend architecture, including a seamless video delivery system with anti-piracy layers.",
        "Integrated international payment systems, discounting tools, and automated sales recovery flows.",
        "Designed for scale and simplicity—onboarded 200+ creators within the first release phase."
      ]
    },
    {
      icon: "🧠",
      title: "Senior Software Developer",
      subtitle: "Full-Time",
      company: "theElects Ventures",
      location: "Lagos, Nigeria",
      period: "2019 - 2021",
      highlights: [
        "Led the core development of a custom-built internet-based product & staff management platform used by enterprise clients.",
        "Integrated bandwidth controls, user authentication systems, and uptime monitoring into one cohesive backend.",
        "Integrated stock management, QA, sales, accounting, audit, invoicing, and dispatch management modules complete with email notification systems",
        "Interfaced with company HR to develop a staff training system for proper and seamless staff onboarding"
      ]
    },
    {
      icon: "💼",
      title: "Senior Software Engineer",
      subtitle: "Contract",
      company: "SmartCoop HQ Ltd",
      location: "Delta, Nigeria",
      period: "2020 - 2023",
      highlights: [
        "Inherited and stabilized a failing codebase from a previous team and refactored it into a stable, user-friendly fintech platform.",
        "Developed a robust loan management system, automated savings portfolios, and flexible target-saving plans.",
        "Introduced advanced user-triggered notification flows that reduced churn by over 30%.",
        "Implemented complete payment systems including automated time-based debits from users using Paystack API"
      ]
    },
    {
      icon: "🧩",
      title: "Full-Stack Developer / Team Lead",
      subtitle: "Full-Time",
      company: "Mypadi.ng",
      location: "Delta, Nigeria",
      period: "2017 - 2019",
      highlights: [
        "Re-engineered inherited backend code architecture for a more scalable, maintainable and testable project and ensured smooth transition without any downtimes",
        "Maintained all backend APIs using Laravel to power Nigeria's first student accommodation booking platform.",
        "Led a distributed team of frontend developers, overseeing sprints, testing, and feature releases.",
        "Enhanced trust and safety with geo-targeted listings and landlord verification protocols."
      ]
    },
    {
      icon: "🎮",
      title: "Full Stack Developer",
      subtitle: "Contract",
      company: "TCOM (FastPlay24 Project)",
      location: "Delta, Nigeria",
      period: "2015 - 2017",
      highlights: [
        "Built a scalable, high-traffic timer-based gaming web application using Laravel and VueJS from scratch.",
        "Architected both the frontend and backend to handle complex logic around payments, user rewards, and real-time leaderboards.",
        "Implemented RESTful APIs for component consumption to keep the UI data real-time at all times",
        "Launched on schedule despite shifting requirements—achieved 99.9% uptime during first production rollout."
      ]
    }
  ];
</script>

<section id="achievements" class="section-padding bg-gray-50">
  <div class="container-custom">
    <!-- Header -->
    <div class="text-center mb-16 animate-slide-up">
      <div class="flex items-center justify-center gap-3 mb-4">
        <Award class="text-primary-600" size={32} />
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900">Roles & Achievements</h2>
      </div>
      <p class="text-xl text-gray-600 max-w-4xl mx-auto">
        Each role wasn't just a title but a challenge met, a system built, and a team or company moved forward. Here's a snapshot of how I've shown up over the years:
      </p>
    </div>

    <!-- Timeline -->
    <div class="relative">
      <!-- Timeline Line -->
      <div class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-primary-200 h-full"></div>

      <div class="space-y-12">
        {#each achievements as achievement, index}
          <div class="relative animate-slide-up" style="animation-delay: {index * 0.1}s;">
            <!-- Timeline Dot -->
            <div class="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <div class="w-3 h-3 bg-white rounded-full"></div>
            </div>

            <!-- Content Card -->
            <div class="ml-16 md:ml-0 md:w-1/2 {index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}">
              <div class="card-hover bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <!-- Header -->
                <div class="flex items-start gap-4 mb-6">
                  <div class="text-4xl">{achievement.icon}</div>
                  <div class="flex-1">
                    <h3 class="text-xl font-bold text-gray-900 mb-1">{achievement.title}</h3>
                    <p class="text-primary-600 font-semibold mb-2">{achievement.subtitle}</p>
                    {#if achievement.company}
                      <p class="text-gray-700 font-medium mb-2">{achievement.company}</p>
                    {/if}

                    <!-- Location & Period -->
                    <div class="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div class="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{achievement.location}</span>
                      </div>
                      <div class="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{achievement.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Highlights -->
                <div class="space-y-3">
                  {#each achievement.highlights as highlight}
                    <div class="flex items-start gap-3">
                      <div class="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p class="text-gray-700 leading-relaxed">{highlight}</p>
                    </div>
                  {/each}
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Bottom CTA -->
    <div class="text-center mt-16 animate-slide-up">
      <div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
        <div class="flex items-center justify-center gap-3 mb-4">
          <TrendingUp size={28} />
          <h3 class="text-2xl font-bold">Want to see the backend thinking behind any of these builds?</h3>
        </div>
        <p class="text-xl text-primary-100 mb-6">I'll show you what scaled.. and why it worked.</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary bg-white text-primary-600 hover:bg-gray-100"
        >
          Let's Talk
        </a>
      </div>
    </div>
  </div>
</section>
