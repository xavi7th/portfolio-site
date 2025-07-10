<script lang="ts">
  import { ExternalLink, Code, Database, Smartphone } from 'lucide-svelte';
  import AffordablesGHMockImg from '$lib/assets/img/affordablesgh-site-mockup.png?enhanced';

  const whatsappMessage = encodeURIComponent("Hi Daniel! I'd like to discuss making my project the next case study.");
  const whatsappUrl = `https://wa.me/2348034411661?text=${whatsappMessage}`;

  const projects = [
    {
      title: "AffordablesGH",
      category: "ECommerce",
      description: "An online fashion accessories store in Madina, Ghana, specializing in all kinds of eye wears and other chic fashion accessories.",
      achievements: [
        "Delivered a full-stack e-commerce platform (Laravel RESTful API + SvelteKit) solo within tight deadlines and budget constraints",
        "Implemented a fault-tolerant frontend: Public pages remain functional even during API downtime",
        "Built a performant admin dashboard for product/coupon management, reducing internal workflow time by ~30%",
        "Optimized Core Web Vitals (LCP < 1.5s) via in-browser image cropping/compression, cutting bounce rates by 25%",
        "Implemented SEO-friendly architecture (SSR, meta tags, structured data) to boost organic traffic by 40% MoM",
        "Designed and developed the entire UI/UX (product pages, checkout flow) with a mobile-first approach for Ghana’s market",
        "Prepared scalable payment integration groundwork for MTN Mobile Money (WIP)"
      ],
      stack: ["Laravel", "Sveltekit", "PostgresSQL", "MTN Mobile Money", "Flutterwave", "WhatsApp Business API", "VPS", "Cron Jobs"],
      mockupType: "ecommerce-application",
      mockupImg: AffordablesGHMockImg,
      url: 'https://affordablesgh.com'
    },
    {
      title: "PHKHotDeals",
      category: "ECommerce",
      description: "An online retailer specializing in the sale of digital gift cards, including popular brands such as iTunes, Google Play, Amazon, and more. Our platform allows customers to purchase and send digital gift cards instantly, making it the perfect solution for last-minute gifts, birthdays, holidays, and other special occasions.",
      achievements: [
        "Architected and implemented core backend infrastructure (Laravel, MySQL, AWS)",
        "Built a seamless video hosting and anti-piracy delivery system",
        "Integrated international payment gateways, coupon systems, and sales recovery flows",
        "Designed for scale, creator monetization, and user ease"
      ],
      stack: ["Laravel", "VueJS", "MySQL", "Paystack", "Flutterwave", "AWS", "jQuery"],
      mockupType: "ecommerce-application",
      url: 'https://phkhotdeals.com'
    },
    {
      title: "Enski",
      category: "EdTech",
      description: "A complete Learning management System and knowledge commerce platform built from the ground up. Enski empowers creators and educators to launch, host, and sell online courses, ebooks, and live trainings across multiple currencies and devices.",
      achievements: [
        "Architected and implemented core backend infrastructure (Laravel, MySQL, AWS)",
        "Built a seamless video hosting and anti-piracy delivery system",
        "Integrated international payment gateways, coupon systems, and sales recovery flows",
        "Designed for scale, creator monetization, and user ease"
      ],
      stack: ["Laravel", "VueJS", "MySQL", "Paystack", "Flutterwave", "AWS", "jQuery"],
      mockupType: "learning-platform",
      url: 'https://tryenski.com'
    },
    {
      title: "SmartCoop",
      category: "FinTech",
      description: "A fintech savings platform for long-term, impact-driven goals. SmartCoop enables individuals and organizations to save purposefully toward projects and financial independence.",
      achievements: [
        "Took over from a legacy system and rebuilt core loan + savings logic",
        "Delivered dynamic, automated savings portfolios + advanced notification system",
        "Implemented scalable backend logic for future expansion and integrations",
        "Simplified user flows for daily use across devices"
      ],
      stack: ["Laravel", "PHP", "MySQL", "Cron jobs", "Custom APIs"],
      mockupType: "fintech-dashboard",
      url: 'https://smartcoophq.org'
    },
    {
      title: "Korch Consult",
      category: "Corporate",
      description: "A digital hub for one of Nigeria's leading oil & gas consultancy firms. Korch Consult needed a clean, credible platform to attract and onboard corporate clients and government contractors.",
      achievements: [
        "Designed a professional-grade, fast-loading company website",
        "Optimized for SEO and authority with rich, industry-credible design",
        "Integrated contact forms, case study sections, and backend admin panel"
      ],
      stack: ["HTML5", "CSS3", "Laravel", "Blade"],
      mockupType: "corporate-website",
      url: "https://kortchconsult.com/"
    },
    {
      title: "Amju Unique Microfinance Bank",
      category: "FinTech",
      description: "A fully integrated fintech system for a licensed microfinance bank. From digital banking to fund transfers, this platform mirrors modern fintech standards.",
      achievements: [
        "Built secure customer account system with electronic transfer capability",
        "Enabled wallet funding, ATM request systems, and transaction notifications",
        "Integrated with Nigerian bank APIs for real-time financial operations",
        "Designed for compliance, UX clarity, and uptime reliability"
      ],
      stack: ["Laravel", "MySQL", "Flutterwave", "NIP APIs", "Core Banking Modules"],
      mockupType: "banking-app",
      url: 'https://amjuuniquemfbng.com'
    },
    {
      title: "Mypadi.ng",
      category: "PropTech",
      description: "Nigeria's first verified student accommodation platform. Mypadi connected students with verified landlords, digitizing a once-frustrating off-campus housing process.",
      achievements: [
        "Engineered complete backend logic and APIs for property listing and search",
        "Enabled student verification, landlord onboarding, and booking flows",
        "Led a remote dev team as Full-Stack Lead through rapid sprints and releases",
        "Though now offline, the product reached thousands of users at its peak"
      ],
      stack: ["Laravel", "VueJS", "MySQL", "Google Maps API", "RESTful APIs"],
      mockupType: "property-platform",
      isOffline: true,
      url:"#"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "EdTech": "bg-blue-100 text-blue-800",
      "FinTech": "bg-green-100 text-green-800",
      "Corporate": "bg-purple-100 text-purple-800",
      "PropTech": "bg-orange-100 text-orange-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const generateMockup = (type: string) => {
    const mockups = {
      "learning-platform": "bg-gradient-to-br from-blue-500 to-purple-600",
      "fintech-dashboard": "bg-gradient-to-br from-green-500 to-teal-600",
      "corporate-website": "bg-gradient-to-br from-gray-700 to-gray-900",
      "banking-app": "bg-gradient-to-br from-indigo-500 to-blue-600",
      "property-platform": "bg-gradient-to-br from-orange-500 to-red-600"
    };
    return mockups[type as keyof typeof mockups] || mockups["learning-platform"];
  };
</script>

<section id="projects" class="section-padding bg-gray-200/80">
  <div class="container-custom">
    <div class="text-center mb-16 animate-slide-up">
      <div class="flex items-center justify-center gap-3 mb-4">
        <span class="text-4xl">🏆</span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900">15+ Years of Proven Excellence</h2>
      </div>
      <p class="text-xl text-gray-600 max-w-4xl mx-auto">
        From global enterprises to early-stage startups, I've delivered full-stack digital systems that solve real problems, ship fast, and truly scale
      </p>
    </div>

    <div class="space-y-12">
      {#each projects as project, index}
        <div class="card-hover bg-white rounded-2xl shadow-lg overflow-hidden animate-slide-up" style="animation-delay: {index * 0.1}s;">
          <div class="grid lg:grid-cols-2 gap-0">
            <div class="relative h-64 lg:h-auto overflow-hidden">
              {#if project.mockupImg}
                <enhanced:img src={project.mockupImg} alt={project.title} class="hover:scale-105 duration-700 transition-all" />
              {:else}
                <!-- Project Mockup -->
                <div class="absolute inset-0 {generateMockup(project.mockupType)} flex items-center justify-center">
                  <div class="w-4/5 bg-white rounded-lg shadow-2xl overflow-hidden">
                    <div class="bg-gray-100 px-4 py-2 flex items-center gap-2">
                      <div class="flex gap-1">
                        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div class="bg-white rounded px-3 py-1 text-xs text-gray-600 ml-2">
                        {project.title.toLowerCase()}.com
                      </div>
                    </div>
                    <div class="p-4 h-32 bg-gradient-to-br from-gray-50 to-gray-100">
                      <div class="space-y-2">
                        <div class="h-3 bg-gray-300 rounded w-3/4"></div>
                        <div class="h-3 bg-gray-200 rounded w-1/2"></div>
                        <div class="h-3 bg-gray-200 rounded w-2/3"></div>
                        <div class="flex gap-2 mt-4">
                          <div class="h-6 bg-primary-200 rounded w-16"></div>
                          <div class="h-6 bg-gray-200 rounded w-16"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {#if project.isOffline}
                    <div class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      No longer live
                    </div>
                  {/if}
                </div>
              {/if}
            </div>

            <div class="p-8 lg:p-12">
              <div class="flex items-center gap-3 mb-4">
                <span class="px-3 py-1 rounded-full text-sm font-semibold {getCategoryColor(project.category)}">
                  {project.category}
                </span>
                <h3 class="text-2xl font-bold text-gray-900">{project.title}</h3>
                <a href={project.url} target="_blank" class="text-primary-600 hover:text-primary-700 transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>

              <p class="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

              <div class="space-y-3 mb-6">
                {#each project.achievements as achievement}
                  <div class="flex items-start gap-3">
                    <div class="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span class="text-gray-700 text-sm">{achievement}</span>
                  </div>
                {/each}
              </div>

              <div class="border-t border-gray-200 pt-6">
                <div class="flex items-center gap-2 mb-3">
                  <Code class="text-gray-500" size={16} />
                  <span class="text-sm font-semibold text-gray-700">Stack:</span>
                </div>
                <div class="flex flex-wrap gap-2">
                  {#each project.stack as tech}
                    <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  {/each}
                </div>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div class="text-center mt-16 animate-slide-up">
      <div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
        <h3 class="text-2xl font-bold mb-4">Let's make yours the next case study.</h3>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary bg-white text-primary-600 hover:bg-gray-100"
        >
          Start Your Project
        </a>
      </div>
    </div>
  </div>
</section>
