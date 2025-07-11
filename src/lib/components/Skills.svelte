<script lang="ts">
  import Zap from "@lucide/svelte/icons/zap";
  import Code from "@lucide/svelte/icons/code";
  import Server from "@lucide/svelte/icons/server";
  import Tool from "@lucide/svelte/icons/pen-tool";
  import Database from "@lucide/svelte/icons/database";
  import TrendingUp from "@lucide/svelte/icons/trending-up";

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML5", level: 95, icon: "🌐" },
        { name: "CSS3", level: 95, icon: "🎨" },
        { name: "JavaScript", level: 90, icon: "⚡" },
        { name: "VueJS", level: 85, icon: "💚" },
        { name: "TailwindCSS", level: 80, icon: "🎯" },
        { name: "jQuery", level: 90, icon: "📱" },
        { name: "Bootstrap", level: 85, icon: "🅱️" },
        { name: "Svelte", level: 70, icon: "🔥" },
      ],
    },
    {
      icon: Server,
      title: "Backend",
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "PHP", level: 95, icon: "🐘" },
        { name: "Laravel", level: 95, icon: "🔴" },
        { name: "Node.js", level: 75, icon: "💚" },
        { name: "REST APIs", level: 90, icon: "🔗" },
        { name: "Express", level: 70, icon: "⚡" },
        { name: "Blade Templates", level: 90, icon: "🗡️" },
      ],
    },
    {
      icon: Database,
      title: "Database",
      color: "from-purple-500 to-indigo-500",
      skills: [
        { name: "MySQL", level: 90, icon: "🐬" },
        { name: "SQLite", level: 85, icon: "💎" },
        { name: "PostgreSQL", level: 75, icon: "🐘" },
        { name: "Firebase", level: 70, icon: "🔥" },
        { name: "Redis", level: 60, icon: "🔴" },
      ],
    },
    {
      icon: Tool,
      title: "Tools & DevOps",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", level: 95, icon: "📝" },
        { name: "GitHub", level: 90, icon: "🐙" },
        { name: "Postman", level: 85, icon: "📮" },
        { name: "Docker", level: 60, icon: "🐳" },
        { name: "VS Code", level: 95, icon: "💙" },
        { name: "Figma", level: 75, icon: "🎨" },
      ],
    },
  ];

  const currentlyExploring = [
    { name: "TypeScript", icon: "📘", progress: 65 },
    { name: "Docker", icon: "🐳", progress: 60 },
    { name: "Next.js", icon: "⚫", progress: 55 },
    { name: "Redis", icon: "🔴", progress: 60 },
  ];
</script>

<section id="skills" class="section-padding bg-white">
  <div class="container-custom">
    <div class="mb-12 animate-slide-up text-center">
      <div class="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-100 to-gray-100 px-4 py-2">
        <Zap class="text-slate-600" size={20} />
        <span class="text-sm font-semibold text-slate-700">Tech Stack</span>
      </div>

      <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
        <span class="gradient-text">Full-Stack Expertise</span>
      </h2>

      <div class="inline-flex items-center gap-2 rounded-lg border border-primary-200 bg-primary-50 px-4 py-2">
        <TrendingUp class="text-primary-600" size={16} />
        <span class="text-sm font-medium text-primary-800">Current Focus:</span>
        <span class="text-sm font-bold text-primary-600">Laravel + SvelteJS + PostgresSQL</span>
      </div>
    </div>

    <div class="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {#each skillCategories as category, index}
        <div class="animate-slide-up rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:border-gray-300 hover:shadow-lg" style="animation-delay: {index * 0.1}s;">
          <div class="border-b border-gray-100 p-4">
            <div class="flex items-center gap-3">
              <div class="bg-gradient-to-r {category.color} rounded-lg p-2">
                <svelte:component this={category.icon} class="text-white" size={20} />
              </div>
              <h3 class="text-lg font-bold text-gray-900">{category.title}</h3>
            </div>
          </div>

          <div class="space-y-3 p-4">
            {#each category.skills as skill}
              <div class="group">
                <div class="mb-1 flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="text-sm">{skill.icon}</span>
                    <span class="text-sm font-medium text-gray-700">{skill.name}</span>
                  </div>
                  <span class="text-xs font-medium text-gray-500">{skill.level}%</span>
                </div>
                <div class="h-1.5 w-full rounded-full bg-gray-200">
                  <div class="bg-gradient-to-r {category.color} h-1.5 rounded-full transition-all duration-500 group-hover:scale-105" style="width: {skill.level}%"></div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <div class="animate-slide-up text-center">
      <div class="rounded-2xl border border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50 p-8">
        <div class="mb-6 flex items-center justify-center gap-3">
          <span class="text-3xl">🧪</span>
          <h3 class="text-2xl font-bold text-gray-900">Currently Exploring</h3>
        </div>

        <div class="flex flex-wrap justify-center gap-4">
          {#each currentlyExploring as skill}
            <div class="rounded-lg border border-yellow-300 bg-white p-4 transition-all duration-300 hover:border-yellow-400 hover:shadow-md">
              <div class="text-center">
                <div class="mb-2 text-2xl">{skill.icon}</div>
                <div class="text-sm font-semibold text-gray-900">{skill.name}</div>
              </div>
            </div>
          {/each}
        </div>

        <p class="mx-auto mt-6 max-w-2xl text-gray-600">I'm always learning and staying current with the latest technologies to deliver cutting-edge solutions.</p>
      </div>
    </div>
  </div>
</section>
