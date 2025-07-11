<script lang="ts">
  import Zap from "@lucide/svelte/icons/zap";
  import Code from "@lucide/svelte/icons/code";
  import Download from "@lucide/svelte/icons/download";
  import Database from "@lucide/svelte/icons/database";

  const whatsappMessage = encodeURIComponent("Hi Daniel! I'd like to discuss working together.");
  const whatsappUrl = `https://wa.me/2348034411661?text=${whatsappMessage}`;
</script>

<section id="about" class="section-padding bg-gray-200/80">
  <div class="container-custom">
    <div class="mx-auto mb-16 flex max-w-5xl flex-col gap-4 text-center">
      <h2 class="mb-6 text-center text-4xl font-bold text-gray-900 md:text-5xl">
        Your problem isn't that you <span class="gradient-text">dream too big</span>
      </h2>

      <p class="text-xl leading-relaxed text-gray-600">
        It's that the right technical partner hasn't come along—
        <strong>until now</strong>
      </p>

      <div class="text-gray-700">
        <p>
          With over <strong>15 years of experience</strong>
           building full-stack digital products from fast-moving MVPs to enterprise-grade platforms, I've helped startups and tech teams turn raw ideas into rock-solid, scalable software.
        </p>

        <p class="py-8 text-xl font-semibold text-primary-600">Code isn't just my job… it's my obsession.</p>

        <p>While I'm skilled across the stack, my true strength lies in the back end — where systems are built, scale is engineered, and performance is forged.</p>
      </div>
    </div>
    <div class="grid items-center gap-12 lg:grid-cols-2">
      <div class="animate-slide-up">
        <div class="mb-8 grid gap-6 md:grid-cols-2">
          <div class="flex items-start gap-3">
            <div class="rounded-lg bg-primary-100 p-2">
              <Database class="text-primary-600" size={24} />
            </div>
            <div>
              <h4 class="mb-1 font-semibold text-gray-900">Backend Mastery</h4>
              <p class="text-sm text-gray-600">Architecting powerful systems with PHP, Laravel, MySQL, PostgresSQL, SQLite, and Redis</p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <div class="rounded-lg bg-primary-100 p-2">
              <Code class="text-primary-600" size={24} />
            </div>
            <div>
              <h4 class="mb-1 font-semibold text-gray-900">Frontend Excellence</h4>
              <p class="text-sm text-gray-600">Designing clean, intuitive interfaces with HTML5, CSS3, and modern JS frameworks</p>
            </div>
          </div>
        </div>

        <div class="mb-8 rounded-lg border border-primary-600/10 bg-primary-200/70 p-6 shadow-md">
          <div class="flex items-start gap-3">
            <Zap class="mt-1 text-primary-600" size={24} />
            <div>
              <p class="leading-relaxed text-gray-700">
                Whichever hat I don, what truly excites me is watching ideas evolve into high-performance, real-world applications… apps that users love and businesses trust to grow on.
              </p>
            </div>
          </div>
        </div>

        <p class="mb-8 text-lg text-gray-700">So if you're building something bold or need a senior developer to lead or join your remote team…</p>
      </div>

      <!-- Placeholder for my Photo -->
      <div class="animate-slide-up" style="animation-delay: 0.2s;">
        <div class="relative">
          <div class="rounded-lg bg-gray-900 p-6 shadow-2xl">
            <div class="mb-4 flex items-center gap-2">
              <div class="h-3 w-3 rounded-full bg-red-500"></div>
              <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div class="h-3 w-3 rounded-full bg-green-500"></div>
              <span class="ml-4 text-sm text-gray-400">ehikioya-portfolio.php</span>
            </div>
            <div class="font-mono text-sm">
              <div class="text-purple-400">&lt;?php</div>
              <div class="ml-4 text-gray-300">
                <span class="text-blue-400">class</span>
                <span class="text-yellow-300">DeveloperProfile</span>
              </div>
              <div class="ml-4 text-gray-300">&#123;</div>
              <div class="ml-8 text-gray-300">
                <span class="text-blue-400">public</span>
                <span class="text-green-400">$experience</span>
                =
                <span class="text-orange-400">'15+ years'</span>
                ;
              </div>
              <div class="ml-8 text-gray-300">
                <span class="text-blue-400">public</span>
                <span class="text-green-400">$passion</span>
                =
                <span class="text-orange-400">'Building scalable systems'</span>
                ;
              </div>
              <div class="ml-8 text-gray-300">
                <span class="text-blue-400">public</span>
                <span class="text-green-400">$specialty</span>
                =
                <span class="text-orange-400">'PHP/Laravel + SvelteJS/VueJS'</span>
                ;
              </div>
              <div class="ml-4 text-gray-300">&#125;</div>
              <div class="text-purple-400">?&gt;</div>
            </div>
          </div>

          <div class="absolute -top-4 -right-4 animate-bounce-slow rounded-lg bg-primary-600 p-3 text-white shadow-lg">
            <Code size={24} />
          </div>
          <div class="absolute -bottom-4 -left-4 animate-bounce-slow rounded-lg bg-yellow-500 p-3 text-white shadow-lg" style="animation-delay: 1s;">
            <Database size={24} />
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto mt-16 flex max-w-5xl flex-col gap-4 text-center">
      <p class="mb-8 text-3xl font-light text-gray-900">You're one click away from the partner you've been searching for.</p>

      <div class="flex flex-col items-baseline justify-center gap-4 sm:flex-row">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" class="btn-primary">Let's Talk</a>
        <a href="/daniel-e-akhile-resume.pdf" target="_blank" class="btn-secondary flex items-center gap-2">
          <Download size={20} />
          Download Resume
        </a>
      </div>
    </div>
  </div>
</section>
