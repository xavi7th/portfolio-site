<script lang="ts">
  import { onMount } from 'svelte';
  import { Menu, X } from 'lucide-svelte';

  let isScrolled = false;
  let isMobileMenuOpen = false;

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'What I Do' },
    { href: '#contact', label: 'Contact' }
  ];

  const toggleMobileMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
  };

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 50;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<nav class="fixed top-0 w-full z-50 transition-all duration-300 {isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}">
  <div class="container-custom">
    <div class="flex items-center justify-between h-16">
      <a href="#" class="text-xl font-bold flex items-center gap-4 {isScrolled ? 'text-gray-900' : 'text-white'}">
        Daniel E. Akhile
        <div class="inline-flex items-center gap-2 {isScrolled ? 'bg-green-600/30 border-green-600/60' : 'bg-green-500/20 border-green-500/30'} border rounded-full px-2 py-1">
          <div class="w-2 h-2 {isScrolled ? 'bg-green-800' : 'bg-green-400'} rounded-full animate-pulse"></div>
          <span class="{isScrolled ? 'text-green-800' : 'text-green-300'} font-medium text-tiny">Available for new projects</span>
        </div>
      </a>

      <div class="hidden md:flex items-center space-x-8">
        {#each navItems as item}
          <a
            href={item.href}
            class="font-medium transition-colors duration-300 {isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-300'}"
          >
            {item.label}
          </a>
        {/each}
        <a
          href="#contact"
          class="btn-primary {isScrolled ? '' : 'bg-white text-primary-600 hover:bg-gray-100'}"
        >
          Let's Talk
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden {isScrolled ? 'text-gray-900' : 'text-white'}"
        on:click={toggleMobileMenu}
      >
        {#if isMobileMenuOpen}
          <X size={24} />
        {:else}
          <Menu size={24} />
        {/if}
      </button>
    </div>

    {#if isMobileMenuOpen}
      <div class="md:hidden bg-white border-t border-gray-200">
        <div class="px-2 pt-2 pb-3 space-y-1">
          {#each navItems as item}
            <a
              href={item.href}
              class="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
              on:click={toggleMobileMenu}
            >
              {item.label}
            </a>
          {/each}
          <a
            href="#contact"
            class="block px-3 py-2 text-primary-600 font-semibold"
            on:click={toggleMobileMenu}
          >
            Let's Talk
          </a>
        </div>
      </div>
    {/if}
  </div>
</nav>
