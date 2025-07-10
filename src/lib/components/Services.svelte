<script lang="ts">
  import { Rocket, Users, Zap, Briefcase, MessageCircle } from 'lucide-svelte';

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
      cta: "Have something worth building? Let's ship it together",
      color: "primary"
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
      cta: "Need a senior dev who gets it done? I'm one click away.",
      color: "blue"
    },
    {
      icon: Zap,
      title: "For Startups",
      subtitle: "I build with urgency but never recklessly.",
      description: "Whether it's your first 100 users or first investor pitch, I deliver clean, stable, fast builds that won't break when things get real.",
      features: [
        "Launch-ready MVPs",
        "Built for growth and scale, not tech debt",
        "Quick, strategic decisions when it counts"
      ],
      cta: "Let's turn velocity into results. Let's Go",
      color: "green"
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
      cta: "Ready to go from 6x your income? I've got you",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: "bg-primary-50 border-primary-200 text-primary-600",
      blue: "bg-blue-50 border-blue-200 text-blue-600",
      green: "bg-green-50 border-green-200 text-green-600",
      purple: "bg-purple-50 border-purple-200 text-purple-600"
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };
</script>

<section id="services" class="section-padding bg-gray-50">
  <div class="container-custom">
    <div class="text-center mb-16 animate-slide-up">
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        From Vision to Version 1 - <span class="gradient-text">Let's Build What Matters.</span>
      </h2>
    </div>

    <div class="grid lg:grid-cols-2 gap-8 mb-16">
      {#each services as service, index}
        <div class="card-hover bg-white border border-gray-200 rounded-xl p-8 animate-slide-up" style="animation-delay: {index * 0.1}s;">
          <div class="flex items-start gap-4 mb-6">
            <div class="p-3 rounded-lg border {getColorClasses(service.color)}">
              <svelte:component this={service.icon} size={28} />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p class="text-lg font-semibold text-primary-600">{service.subtitle}</p>
            </div>
          </div>

          <p class="text-gray-700 mb-6 leading-relaxed">{service.description}</p>

          <div class="space-y-3 mb-6">
            {#each service.features as feature}
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span class="text-gray-700">{feature}</span>
              </div>
            {/each}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300 group"
          >
            {service.cta}
            <span class="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      {/each}
    </div>

    <div class="text-center animate-slide-up">
      <div class="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-8 border border-primary-100 shadow shadow-primary-300/20">
        <div class="flex items-center justify-center gap-3 mb-4">
          <MessageCircle class="text-primary-600" size={28} />
          <h3 class="text-2xl font-bold text-gray-900">Not sure where to start?</h3>
        </div>
        <p class="text-lg text-gray-700 mb-6">I'll help you figure it out—fast</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary"
        >
          Let's Talk
        </a>
      </div>
    </div>
  </div>
</section>
