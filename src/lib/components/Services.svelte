<script lang="ts">
  import Users from "@lucide/svelte/icons/users";
  import Rocket from "@lucide/svelte/icons/rocket";
  import Sparkles from "@lucide/svelte/icons/sparkles";
  import Briefcase from "@lucide/svelte/icons/briefcase";
  import TrendingUp from '@lucide/svelte/icons/trending-up';
  import MessageCircle from "@lucide/svelte/icons/message-circle";
  import ArrowRight from '@lucide/svelte/icons/arrow-right';
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';

  const whatsappMessage = encodeURIComponent("Hi Daniel! I'm interested in your services.");
  const whatsappUrl = `https://wa.me/2348034411661?text=${whatsappMessage}`;

  const services = [
    {
      icon: Rocket,
      title: "For Founders",
      subtitle: "You have the vision. I bring the execution.",
      description: "Whether you're validating a new product or scaling an existing one, I help you turn ideas into fully functional MVPs - fast, secure, and ready for real users.",
      features: [
        "Clear architecture from day one",
        "Practical, testable features",
        "Ready to ship, scale, or pivot"
      ],
      bgPattern: "polygon",
      cta: "Have something worth building? Let's ship it together",
      color: "border-blue-200/70",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "For Recruiters & Companies",
      subtitle: "You're hiring for reliability, clarity, and real-world results.",
      description: "With 15+ years of back-end focused engineering, I've delivered scalable systems across remote teams.. always with product context and clean execution.",
      features: [
        "Backend-focused builds with Laravel, PHP, MySQL",
        "Solid dev process, Git-based workflows",
        "Communicates clearly, delivers consistently"
      ],
      bgPattern: "square",
      cta: "Need a senior dev who gets it done? I'm one click away.",
      color: "border-primary-200/70",
      gradient: "from-primary-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "For Startups",
      subtitle: "I build with urgency but never recklessly.",
      description: "Whether it's your first 100 users or first investor pitch, I deliver clean, stable, fast builds that won't break when things get real.",
      features: [
        "Launch-ready MVPs",
        "Built for growth and scale, not tech debt",
        "Quick, strategic decisions when it counts"
      ],
      bgPattern: "square",
      cta: "Let's turn velocity into results. Let's Go",
      color: "border-green-200/70",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Briefcase,
      title: "For Solo Experts & Business Owners",
      subtitle: "You've got value to share. I make it digital.",
      description: "From interactive & dynamic websites, e-commerce setups, course platforms or portfolio sites, I build tools that help you look professional and convert better.",
      features: [
        "Fast-loading websites & landing pages",
        "Seamless checkout & payment integration",
        "Built for trust, ease, and audience growth"
      ],
      bgPattern: "polygon",
      cta: "Ready to go from 6x your income? I've got you",
      color: "border-orange-200/70",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const getPatternSVG = (pattern: string) => {
    const patterns = {
      square: `<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="currentColor" fill-opacity="0.06"><rect x="20" y="20" width="20" height="20" rx="2"/><rect x="5" y="5" width="10" height="10" rx="1"/></g></g></svg>`,
      polygon: `<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="currentColor" fill-opacity="0.06"><path d="M30,5 L50,25 L30,45 L10,25 Z"/></g></g></svg>`
    };
    return patterns[pattern as keyof typeof patterns] || patterns.square;
  };
</script>

<section class="relative py-20 bg-gradient-to-br from-slate-50 to-slate-100">
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200/50 to-purple-200/50 rounded-full blur animate-pulse"></div>
    <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-200/50 to-green-200/50 rounded-full blur animate-pulse" style="animation-delay: 2s;"></div>
  </div>

  <div class="container mx-auto max-w-7xl px-4">
    <div class="text-center mb-20 animate-slide-up">
      <div class="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-gray-200/50 shadow-lg">
        <Sparkles class="text-primary-600" size={24} />
        <span class="text-primary-800 font-semibold">What I Do</span>
      </div>

      <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
        From Vision to
        <span class="relative inline-block">
          <span class="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Version 1
          </span>
          <div class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 rounded-full"></div>
        </span>
      </h2>

      <p class="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Let's Build What <span class="font-bold text-gray-900">Matters</span>
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-8 mb-16">
      {#each services as service, idx (idx)}
        <Card class="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 border {service.color} overflow-hidden card-hover animate-slide-up" style="animation-delay: {idx * 0.15}s;">

          <CardHeader class="relative pb-4">
            <div class="absolute inset-0 bg-gradient-to-r {service.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-300"></div>

            <div class="relative flex items-start gap-x-6 mb-3 z-10">
              <div class="relative inline-flex p-3 rounded-lg bg-gradient-to-r {service.gradient} mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon class="h-6 w-6 text-white" />

                <div class="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
              </div>


              <div>
                <CardTitle class="text-2xl font-bold text-slate-900 mb-2 group-hover:scale-95 transition-transform duration-300 origin-left mb-0">
                  {service.title}
                </CardTitle>

                <CardDescription class="text-base text-slate-500/80 font-medium">
                  {service.subtitle}
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent class="space-y-4 relative">
            <div class="absolute inset-0 opacity-20" style="background-image: url('data:image/svg+xml,{encodeURIComponent(getPatternSVG(service.bgPattern))}')"></div>


            <p class="text-slate-600 leading-relaxed">
              {service.description}
            </p>

            <ul class="space-y-2">
              {#each service.features as feature, i (i)}
                 <li class="flex items-center text-slate-700 group-hover:translate-x-2 transition-transform duration-300" style="transition-delay: {i * 100}ms;">
                   <div class="w-2 h-2 rounded-full bg-gradient-to-r {service.gradient} mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                   {feature}
                 </li>
              {/each}
            </ul>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" class="flex text-transparent bg-gradient-to-r {service.gradient} bg-clip-text hover:opacity-80 p-0 h-auto font-semibold group">
              {service.cta}
              <span class="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </CardContent>
        </Card>
      {/each}
    </div>

    <div class="text-center animate-slide-up">
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 via-gray-800 to-black p-8 border border-gray-700">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute inset-0" style="background-image: radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px); background-size: 50px 50px;"></div>
        </div>

        <div class="relative z-10">
          <div class="flex items-center justify-center gap-4 mb-4">
            <MessageCircle class="text-primary-400" size={32} />
            <h3 class="text-xl md:text-2xl font-bold text-white">Not sure where to start?</h3>
            <div class="w-2 h-2 bg-primary-400 rounded-full animate-ping"></div>
          </div>

          <p class="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            I'll help you figure it out — <span class="text-white font-semibold">fast</span>
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="group btn-primary gradient flex items-center gap-3"
            >
              <MessageCircle size={20} />
              Let's Talk
              <ArrowRight class="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </a>

            <div class="flex items-center gap-2 text-gray-400">
              <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span class="text-sm">Usually responds within 1 hour</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
