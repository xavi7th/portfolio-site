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
      href: "mailto:ehi.akhile@gmail.com"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+234 803 441 1661",
      href: whatsappUrl
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Abuja, Nigeria",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/xavi7th/",
      color: "hover:text-gray-900"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/danielose/",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/Leinad7th",
      color: "hover:text-blue-400"
    }
  ];
</script>

<section id="contact" class="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
  <div class="container-custom">
    <div class="text-center mb-16 animate-slide-up">
      <div class="flex items-center justify-center gap-3 mb-6">
        <span class="text-5xl">🚀</span>
        <h2 class="text-4xl md:text-5xl font-bold text-white">
          Ready to build something bold…
        </h2>
      </div>
      <p class="text-2xl text-primary-100 mb-4">or bring clarity to what's next?</p>
      <p class="text-3xl font-bold text-yellow-400">I'm one click away. Let's talk.</p>
    </div>

    <div class="max-w-4xl mx-auto mb-16">
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center animate-slide-up">
          <div class="mb-6">
            <MessageCircle class="text-yellow-400 mx-auto mb-4" size={48} />
            <h3 class="text-2xl font-bold text-white mb-2">Let's Chat on WhatsApp</h3>
            <p class="text-primary-100">Quick questions? Project ideas? I'm here to help.</p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-4 w-full"
          >
            Start Conversation
          </a>
        </div>

        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center animate-slide-up" style="animation-delay: 0.1s;">
          <div class="mb-6">
            <Calendar class="text-primary-300 mx-auto mb-4" size={48} />
            <h3 class="text-2xl font-bold text-white mb-2">Schedule a Call</h3>
            <p class="text-primary-100">Ready for a deeper conversation? Book a time that works.</p>
          </div>
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="btn-secondary bg-white/20 border-white text-white hover:bg-white/30 w-full"
          >
            Book Meeting
          </a>
        </div>
      </div>
    </div>

    <div class="max-w-4xl mx-auto mb-16">
      <div class="grid md:grid-cols-3 gap-8">
        {#each contactInfo as contact, idx}
          <div class="text-center animate-slide-up" style="animation-delay: {(idx + 2) * 0.1}s;">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6">

              <svelte:component this={contact.icon} class="text-primary-300 mx-auto mb-4" size={32} />

              <h4 class="text-lg font-semibold text-white mb-2">{contact.label}</h4>
              {#if contact.href !== '#'}
                <a
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  class="text-primary-100 hover:text-white transition-colors"
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

    <div class="text-center mb-16 animate-slide-up">
      <h3 class="text-2xl font-bold text-white mb-8">Connect with me</h3>
      <div class="flex justify-center gap-6">
        {#each socialLinks as social}
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            class="bg-white/10 backdrop-blur-sm p-4 rounded-full text-primary-300 {social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110"
            aria-label={social.label}
          >
            <svelte:component this={social.icon} size={24} />
          </a>
        {/each}
      </div>
    </div>

    <div id="mvp-checklist" class="max-w-2xl mx-auto text-center animate-slide-up">
      <div class="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-8 text-black">
        <div class="flex items-center justify-center gap-3 mb-4">
          <Download size={32} />
          <h3 class="text-2xl font-bold">Free MVP Builder's Checklist</h3>
        </div>
        <p class="text-lg mb-6 opacity-90">
          Get my proven framework for building MVPs that actually succeed.
          The same process I've used for {(new Date()).getFullYear() - 2018}+ years.
        </p>
        <button class="bg-black text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors">
          Download Now (Coming Soon)
        </button>
      </div>
    </div>
  </div>
</section>

<footer class="bg-gray-900 py-8">
  <div class="container-custom">
    <div class="text-center text-gray-400">
      <p>&copy; {(new Date()).getFullYear()} Daniel E. Akhile. Built with SvelteKit & TailwindCSS.</p>
      <p class="mt-2">Turning visions into scalable products, one line of code at a time.</p>
    </div>
  </div>
</footer>
