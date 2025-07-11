<script lang="ts">
  import Code from "@lucide/svelte/icons/code";
  import Server from "@lucide/svelte/icons/server";
  import Tool from "@lucide/svelte/icons/pen-tool";
  import Database from "@lucide/svelte/icons/database";
  import TrendingUp from "@lucide/svelte/icons/trending-up";

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      subtitle: "I design sleek, intuitive UIs that load fast and feel natural.",
      skills: [
        { name: "HTML5", level: "Expert", icon: "🌐" },
        { name: "CSS3", level: "Expert", icon: "🎨" },
        { name: "JavaScript", level: "Expert", icon: "⚡" },
        { name: "VueJS", level: "Expert", icon: "💚" },
        { name: "TailwindCSS", level: "Confident", icon: "🎯" },
        { name: "jQuery", level: "Expert", icon: "📱" },
        { name: "Bootstrap", level: "Expert", icon: "🅱️" },
        { name: "Svelte", level: "Exploring", icon: "🔥" }
      ]
    },
    {
      icon: Server,
      title: "Backend",
      subtitle: "My strength lies in engineering stable, scalable systems that never break under pressure.",
      skills: [
        { name: "PHP", level: "Expert", icon: "🐘" },
        { name: "Laravel", level: "Expert", icon: "🔴" },
        { name: "Node.js", level: "Confident", icon: "💚" },
        { name: "REST APIs", level: "Expert", icon: "🔗" },
        { name: "Express", level: "Confident", icon: "⚡" },
        { name: "Blade Templates", level: "Expert", icon: "🗡️" }
      ]
    },
    {
      icon: Database,
      title: "Database Management",
      subtitle: "From relational to real-time data, I build structures that support scale and speed.",
      skills: [
        { name: "MySQL", level: "Expert", icon: "🐬" },
        { name: "SQLite", level: "Expert", icon: "💎" },
        { name: "PostgreSQL", level: "Confident", icon: "🐘" },
        { name: "Firebase", level: "Confident", icon: "🔥" },
        { name: "Redis", level: "Exploring", icon: "🔴" }
      ]
    },
    {
      icon: Tool,
      title: "Tools & DevOps",
      subtitle: "I thrive in Git-based, remote-friendly environments with modern automation stacks.",
      skills: [
        { name: "Git", level: "Expert", icon: "📝" },
        { name: "GitHub", level: "Expert", icon: "🐙" },
        { name: "Postman", level: "Expert", icon: "📮" },
        { name: "Docker", level: "Exploring", icon: "🐳" },
        { name: "VS Code", level: "Expert", icon: "💙" },
        { name: "Figma", level: "Confident", icon: "🎨" },
        { name: "Trello", level: "Expert", icon: "📋" },
        { name: "Notion", level: "Confident", icon: "📝" }
      ]
    }
  ];

  const currentlyExploring = [
    { name: "TypeScript", icon: "📘" },
    { name: "Docker", icon: "🐳" },
    { name: "Next.js", icon: "⚫" },
    { name: "Redis", icon: "🔴" }
  ];

  const getLevelColor = (level: string) => {
    const colors = {
      "Expert": "bg-green-100 text-green-800 border-green-200",
      "Confident": "bg-blue-100 text-blue-800 border-blue-200",
      "Exploring": "bg-yellow-100 text-yellow-800 border-yellow-200"
    };
    return colors[level as keyof typeof colors] || colors.Expert;
  };
</script>

<section id="skills" class="section-padding bg-white">
  <div class="container-custom">
    <!-- Header -->
    <div class="text-center mb-16 animate-slide-up">
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        <span class="gradient-text">My Full Tech Stack</span>
      </h2>

      <!-- Current Focus Badge -->
      <div class="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-6 py-3 mb-8">
        <TrendingUp class="text-primary-600" size={20} />
        <span class="text-primary-800 font-semibold">Current Stack Focus:</span>
        <span class="text-primary-600 font-bold">Laravel + VueJS + MySQL + TailwindCSS</span>
      </div>
    </div>

    <!-- Skills Categories -->
    <div class="grid lg:grid-cols-2 gap-8 mb-16">
      {#each skillCategories as category, index}
        <div class="card-hover bg-gray-50 rounded-2xl p-8 animate-slide-up" style="animation-delay: {index * 0.1}s;">
          <!-- Category Header -->
          <div class="flex items-start gap-4 mb-6">
            <div class="bg-primary-100 p-3 rounded-lg">
              <svelte:component this={category.icon} class="text-primary-600" size={28} />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
              <p class="text-gray-600 leading-relaxed">{category.subtitle}</p>
            </div>
          </div>

          <!-- Skills Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {#each category.skills as skill}
              <div class="group relative">
                <div class="bg-white rounded-lg p-4 border border-gray-200 hover:border-primary-300 transition-all duration-300 hover:shadow-md">
                  <div class="text-center">
                    <div class="text-2xl mb-2">{skill.icon}</div>
                    <div class="text-sm font-semibold text-gray-900 mb-1">{skill.name}</div>
                    <span class="inline-block px-2 py-1 text-xs font-medium rounded-full border {getLevelColor(skill.level)}">
                      {skill.level}
                    </span>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <!-- Currently Exploring -->
    <div class="text-center animate-slide-up">
      <div class="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
        <div class="flex items-center justify-center gap-3 mb-6">
          <span class="text-3xl">🧪</span>
          <h3 class="text-2xl font-bold text-gray-900">Currently Exploring</h3>
        </div>

        <div class="flex flex-wrap justify-center gap-4">
          {#each currentlyExploring as skill}
            <div class="bg-white rounded-lg p-4 border border-yellow-300 hover:border-yellow-400 transition-all duration-300 hover:shadow-md">
              <div class="text-center">
                <div class="text-2xl mb-2">{skill.icon}</div>
                <div class="text-sm font-semibold text-gray-900">{skill.name}</div>
              </div>
            </div>
          {/each}
        </div>

        <p class="text-gray-600 mt-6 max-w-2xl mx-auto">
          I'm always learning and staying current with the latest technologies to deliver cutting-edge solutions.
        </p>
      </div>
    </div>
  </div>
</section>
