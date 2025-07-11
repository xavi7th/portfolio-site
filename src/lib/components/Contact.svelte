<script lang="ts">
  import Mail from "@lucide/svelte/icons/mail";
  import Phone from "@lucide/svelte/icons/phone";
  import Github from "@lucide/svelte/icons/github";
  import MapPin from "@lucide/svelte/icons/map-pin";
  import Twitter from "@lucide/svelte/icons/twitter";
  import Linkedin from "@lucide/svelte/icons/linkedin";
  import Calendar from "@lucide/svelte/icons/calendar";
  import Download from "@lucide/svelte/icons/download";
  import MessageCircle from "@lucide/svelte/icons/message-circle";

  const whatsappMessage = encodeURIComponent("Hi Daniel! I'm ready to build something bold. Let's talk!");
  const whatsappUrl = `https://wa.me/2348034411661?text=${whatsappMessage}`;
  const calendlyUrl = "https://calendly.com/ehi-akhile/30min";

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ehi.akhile@gmail.com",
      href: "mailto:ehi.akhile@gmail.com",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+234 803 441 1661",
      href: whatsappUrl,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Abuja, Nigeria",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/xavi7th/",
      color: "hover:text-gray-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/danielose/",
      color: "hover:text-blue-600",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/Leinad7th",
      color: "hover:text-blue-400",
    },
  ];
</script>

<section id="contact" class="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
  <div class="container-custom">
    <div class="mb-16 animate-slide-up text-center">
      <div class="mb-6 flex items-center justify-center gap-3">
        <span class="text-5xl">🚀</span>
        <h2 class="text-4xl font-bold text-white md:text-5xl">Ready to build something bold…</h2>
      </div>
      <p class="mb-4 text-2xl text-primary-100">or bring clarity to what's next?</p>
      <p class="text-3xl font-bold text-yellow-400">I'm one click away. Let's talk.</p>
    </div>

    <div class="mx-auto mb-16 max-w-4xl">
      <div class="grid gap-8 md:grid-cols-2">
        <div class="animate-slide-up rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">
          <div class="mb-6">
            <MessageCircle class="mx-auto mb-4 text-yellow-400" size={48} />
            <h3 class="mb-2 text-2xl font-bold text-white">Let's Chat on WhatsApp</h3>
            <p class="text-primary-100">Quick questions? Project ideas? I'm here to help.</p>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" class="btn-primary w-full bg-yellow-500 px-8 py-4 text-lg font-bold text-black hover:bg-yellow-600">Start Conversation</a>
        </div>

        <div class="animate-slide-up rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm" style="animation-delay: 0.1s;">
          <div class="mb-6">
            <Calendar class="mx-auto mb-4 text-primary-300" size={48} />
            <h3 class="mb-2 text-2xl font-bold text-white">Schedule a Call</h3>
            <p class="text-primary-100">Ready for a deeper conversation? Book a time that works.</p>
          </div>
          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" class="btn-secondary w-full border-white bg-white/20 text-white hover:bg-white/30">Book Meeting</a>
        </div>
      </div>
    </div>

    <div class="mx-auto mb-16 max-w-4xl">
      <div class="grid gap-8 md:grid-cols-3">
        {#each contactInfo as contact, idx}
          <div class="animate-slide-up text-center" style="animation-delay: {(idx + 2) * 0.1}s;">
            <div class="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <svelte:component this={contact.icon} class="mx-auto mb-4 text-primary-300" size={32} />

              <h4 class="mb-2 text-lg font-semibold text-white">{contact.label}</h4>
              {#if contact.href !== "#"}
                <a
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : "_self"}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : ""}
                  class="text-primary-100 transition-colors hover:text-white"
                >
                  {contact.value}
                </a>
              {:else}
                <p class="text-primary-100">{contact.value}</p>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="mb-16 animate-slide-up text-center">
      <h3 class="mb-8 text-2xl font-bold text-white">Connect with me</h3>
      <div class="flex justify-center gap-6">
        {#each socialLinks as social}
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-full bg-white/10 p-4 text-primary-300 backdrop-blur-sm {social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20"
            aria-label={social.label}
          >
            <svelte:component this={social.icon} size={24} />
          </a>
        {/each}
      </div>
    </div>

    <div id="mvp-checklist" class="mx-auto max-w-2xl animate-slide-up text-center">
      <div class="rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-400 p-8 text-black">
        <div class="mb-4 flex items-center justify-center gap-3">
          <Download size={32} />
          <h3 class="text-2xl font-bold">Free MVP Builder's Checklist</h3>
        </div>
        <p class="mb-6 text-lg opacity-90">
          Get my proven framework for building MVPs that actually succeed. The same process I've used for {new Date().getFullYear() - 2018}+ years.
        </p>
        <button class="rounded-lg bg-black px-8 py-3 font-bold text-white transition-colors hover:bg-gray-800">Download Now (Coming Soon)</button>
      </div>
    </div>
  </div>
</section>

<footer class="bg-gray-900 py-8">
  <div class="container-custom">
    <div class="text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} Daniel E. Akhile. Built with SvelteKit & TailwindCSS.</p>
      <p class="mt-2">Turning visions into scalable products, one line of code at a time.</p>
    </div>
  </div>
</footer>
