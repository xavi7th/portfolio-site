<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Services from '$lib/components/Services.svelte';
  import Navigation from '$lib/components/Navigation.svelte';
</script>

<svelte:head>
  <title>Daniel E. Akhile - Full-Stack Developer | Laravel & SvelteJS Specialist</title>
  <meta name="description" content="15+ years of full-stack experience. I build scalable web applications with Laravel, PHP, SvelteJS, VueJS, and other modern frontend frameworks, turning your visions into reality." />
</svelte:head>

<Navigation />
<Hero />
<About />
<Services />
