<script lang="ts">
  import Users from "@lucide/svelte/icons/users";
  import Rocket from "@lucide/svelte/icons/rocket";
  import Sparkles from "@lucide/svelte/icons/sparkles";
  import Briefcase from "@lucide/svelte/icons/briefcase";
  import TrendingUp from "@lucide/svelte/icons/trending-up";
  import MessageCircle from "@lucide/svelte/icons/message-circle";
  import ArrowRight from "@lucide/svelte/icons/arrow-right";
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";

  const whatsappMessage = encodeURIComponent("Hi Daniel! I'm interested in your services.");
  const whatsappUrl = `https://wa.me/2348034411661?text=${whatsappMessage}`;

  const services = [
    {
      icon: Rocket,
      title: "For Founders",
      subtitle: "You have the vision. I bring the execution.",
      description: "Whether you're validating a new product or scaling an existing one, I help you turn ideas into fully functional MVPs - fast, secure, and ready for real users.",
      features: ["Clear architecture from day one", "Practical, testable features", "Ready to ship, scale, or pivot"],
      bgPattern: "polygon",
      cta: "Have something worth building? Let's ship it together",
      color: "border-blue-200/70",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "For Recruiters & Companies",
      subtitle: "You're hiring for reliability, clarity, and real-world results.",
      description: "With 15+ years of back-end focused engineering, I've delivered scalable systems across remote teams.. always with product context and clean execution.",
      features: ["Backend-focused builds with Laravel, PHP, MySQL", "Solid dev process, Git-based workflows", "Communicates clearly, delivers consistently"],
      bgPattern: "square",
      cta: "Need a senior dev who gets it done? I'm one click away.",
      color: "border-primary-200/70",
      gradient: "from-primary-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "For Startups",
      subtitle: "I build with urgency but never recklessly.",
      description: "Whether it's your first 100 users or first investor pitch, I deliver clean, stable, fast builds that won't break when things get real.",
      features: ["Launch-ready MVPs", "Built for growth and scale, not tech debt", "Quick, strategic decisions when it counts"],
      bgPattern: "square",
      cta: "Let's turn velocity into results. Let's Go",
      color: "border-green-200/70",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Briefcase,
      title: "For Solo Experts & Business Owners",
      subtitle: "You've got value to share. I make it digital.",
      description: "From interactive & dynamic websites, e-commerce setups, course platforms or portfolio sites, I build tools that help you look professional and convert better.",
      features: ["Fast-loading websites & landing pages", "Seamless checkout & payment integration", "Built for trust, ease, and audience growth"],
      bgPattern: "polygon",
      cta: "Ready to go from 6x your income? I've got you",
      color: "border-orange-200/70",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const getPatternSVG = (pattern: string) => {
    const patterns = {
      square: `<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="currentColor" fill-opacity="0.06"><rect x="20" y="20" width="20" height="20" rx="2"/><rect x="5" y="5" width="10" height="10" rx="1"/></g></g></svg>`,
      polygon: `<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="currentColor" fill-opacity="0.06"><path d="M30,5 L50,25 L30,45 L10,25 Z"/></g></g></svg>`,
    };
    return patterns[pattern as keyof typeof patterns] || patterns.square;
  };
</script>

<section class="relative bg-gradient-to-br from-slate-50 to-slate-100 py-20">
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute -top-40 -right-40 h-80 w-80 animate-pulse rounded-full bg-gradient-to-br from-primary-200/50 to-purple-200/50 blur"></div>
    <div class="absolute -bottom-40 -left-40 h-80 w-80 animate-pulse rounded-full bg-gradient-to-br from-orange-200/50 to-green-200/50 blur" style="animation-delay: 2s;"></div>
  </div>

  <div class="container mx-auto max-w-7xl px-4">
    <div class="mb-20 animate-slide-up text-center">
      <div class="mb-8 inline-flex items-center gap-3 rounded-full border border-gray-200/50 bg-white/80 px-6 py-3 shadow-lg backdrop-blur-sm">
        <Sparkles class="text-primary-600" size={24} />
        <span class="font-semibold text-primary-800">What I Do</span>
      </div>

      <h2 class="mb-8 text-4xl leading-tight font-bold text-slate-900 md:text-5xl">
        From Vision to
        <span class="relative inline-block">
          <span class="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Version 1</span>
          <div class="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600"></div>
        </span>
      </h2>

      <p class="mx-auto max-w-4xl text-xl leading-relaxed text-gray-600 md:text-2xl">
        Let's Build What <span class="font-bold text-gray-900">Matters</span>
      </p>
    </div>

    <div class="mb-16 grid gap-8 lg:grid-cols-2">
      {#each services as service, idx (idx)}
        <Card class="group border bg-white shadow-lg transition-all duration-300 hover:shadow-xl {service.color} card-hover animate-slide-up overflow-hidden" style="animation-delay: {idx * 0.15}s;">
          <CardHeader class="relative pb-4">
            <div class="absolute inset-0 bg-gradient-to-r {service.gradient} opacity-5 transition-opacity duration-300 group-hover:opacity-15"></div>

            <div class="relative z-10 mb-3 flex items-start gap-x-6">
              <div class="relative inline-flex rounded-lg bg-gradient-to-r p-3 {service.gradient} mb-4 transition-transform duration-300 group-hover:scale-110">
                <service.icon class="h-6 w-6 text-white" />

                <div class="absolute -top-1 -right-1 h-3 w-3 animate-ping rounded-full bg-white opacity-0 group-hover:opacity-100"></div>
              </div>

              <div>
                <CardTitle class="mb-0 mb-2 origin-left text-2xl font-bold text-slate-900 transition-transform duration-300 group-hover:scale-95">
                  {service.title}
                </CardTitle>

                <CardDescription class="text-base font-medium text-slate-500/80">
                  {service.subtitle}
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent class="relative space-y-4">
            <div class="absolute inset-0 opacity-20" style="background-image: url('data:image/svg+xml,{encodeURIComponent(getPatternSVG(service.bgPattern))}')"></div>

            <p class="leading-relaxed text-slate-600">
              {service.description}
            </p>

            <ul class="space-y-2">
              {#each service.features as feature, i (i)}
                <li class="flex items-center text-slate-700 transition-transform duration-300 group-hover:translate-x-2" style="transition-delay: {i * 100}ms;">
                  <div class="h-2 w-2 rounded-full bg-gradient-to-r {service.gradient} mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-125"></div>
                  {feature}
                </li>
              {/each}
            </ul>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" class="flex bg-gradient-to-r text-transparent {service.gradient} group h-auto bg-clip-text p-0 font-semibold hover:opacity-80">
              {service.cta}
              <span class="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </CardContent>
        </Card>
      {/each}
    </div>

    <div class="animate-slide-up text-center">
      <div class="relative overflow-hidden rounded-3xl border border-gray-700 bg-gradient-to-r from-gray-900 via-gray-800 to-black p-8">
        <div class="absolute inset-0 opacity-10">
          <div
            class="absolute inset-0"
            style="background-image: radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px); background-size: 50px 50px;"
          ></div>
        </div>

        <div class="relative z-10">
          <div class="mb-4 flex items-center justify-center gap-4">
            <MessageCircle class="text-primary-400" size={32} />
            <h3 class="text-xl font-bold text-white md:text-2xl">Not sure where to start?</h3>
            <div class="h-2 w-2 animate-ping rounded-full bg-primary-400"></div>
          </div>

          <p class="mx-auto mb-6 max-w-2xl text-lg text-gray-300">
            I'll help you figure it out — <span class="font-semibold text-white">fast</span>
          </p>

          <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" class="group btn-primary gradient flex items-center gap-3">
              <MessageCircle size={20} />
              Let's Talk
              <ArrowRight class="transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </a>

            <div class="flex items-center gap-2 text-gray-400">
              <div class="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
              <span class="text-sm">Usually responds within 1 hour</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
