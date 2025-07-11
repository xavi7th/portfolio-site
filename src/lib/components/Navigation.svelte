<script lang="ts">
  import { onMount } from "svelte";
  import X from "@lucide/svelte/icons/x";
  import Menu from "@lucide/svelte/icons/menu";

  let isScrolled = false;
  let isMobileMenuOpen = false;

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#services", label: "What I Do" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
  };

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 50;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<nav class="fixed top-0 z-50 w-full transition-all duration-300 {isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'}">
  <div class="container-custom">
    <div class="flex h-16 items-center justify-between">
      <a href="#" class="flex items-center gap-4 text-xl font-bold {isScrolled ? 'text-gray-900' : 'text-white'}">
        Daniel E. Akhile
        <div class="inline-flex items-center gap-2 {isScrolled ? 'border-green-600/60 bg-green-600/30' : 'border-green-500/30 bg-green-500/20'} rounded-full border px-2 py-1">
          <div class="h-2 w-2 {isScrolled ? 'bg-green-800' : 'bg-green-400'} animate-pulse rounded-full"></div>
          <span class="{isScrolled ? 'text-green-800' : 'text-green-300'} text-tiny font-medium">Available for new projects</span>
        </div>
      </a>

      <div class="hidden items-center space-x-8 md:flex">
        {#each navItems as item}
          <a href={item.href} class="font-medium transition-colors duration-300 {isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-300'}">
            {item.label}
          </a>
        {/each}
        <a href="#contact" class="btn-primary {isScrolled ? '' : 'bg-white text-primary-600 hover:bg-gray-100'}">Let's Talk</a>
      </div>

      <!-- Mobile Menu Button -->
      <button class="md:hidden {isScrolled ? 'text-gray-900' : 'text-white'}" on:click={toggleMobileMenu}>
        {#if isMobileMenuOpen}
          <X size={24} />
        {:else}
          <Menu size={24} />
        {/if}
      </button>
    </div>

    {#if isMobileMenuOpen}
      <div class="border-t border-gray-200 bg-white md:hidden">
        <div class="space-y-1 px-2 pt-2 pb-3">
          {#each navItems as item}
            <a href={item.href} class="block px-3 py-2 font-medium text-gray-700 hover:text-primary-600" on:click={toggleMobileMenu}>
              {item.label}
            </a>
          {/each}
          <a href="#contact" class="block px-3 py-2 font-semibold text-primary-600" on:click={toggleMobileMenu}>Let's Talk</a>
        </div>
      </div>
    {/if}
  </div>
</nav>
