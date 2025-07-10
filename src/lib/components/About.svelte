<script lang="ts">
  import { Code, Database, Zap, Download } from 'lucide-svelte';

  const whatsappMessage = encodeURIComponent("Hi Daniel! I'd like to discuss working together.");
  const whatsappUrl = `https://wa.me/2348034411661?text=${whatsappMessage}`;
</script>

<section id="about" class="section-padding bg-gray-200/80">
  <div class="container-custom ">
    <div class="flex flex-col max-w-5xl mx-auto mb-16 text-center gap-4">
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
        Your problem isn't that you <span class="gradient-text">dream too big</span>
      </h2>

      <p class="text-xl text-gray-600 leading-relaxed">
        It's that the right technical partner hasn't come along—<strong>until now</strong>
      </p>

      <div class="text-gray-700">
        <p>
          With over <strong>15 years of experience</strong> building full-stack digital products from fast-moving MVPs to enterprise-grade platforms, I've helped startups and tech teams turn raw ideas into rock-solid, scalable software.
        </p>

        <p class="text-primary-600 font-semibold text-xl py-8">
          Code isn't just my job… it's my obsession.
        </p>

        <p>
          While I'm skilled across the stack, my true strength lies in the back end—where systems are built, scale is engineered, and performance is forged.
        </p>
      </div>
    </div>
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div class="animate-slide-up">
        <!-- Skills Highlights -->
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="flex items-start gap-3">
            <div class="bg-primary-100 p-2 rounded-lg">
              <Database class="text-primary-600" size={24} />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-1">Backend Mastery</h4>
              <p class="text-gray-600 text-sm">Architecting powerful systems with PHP, Laravel, MySQL, PostgresSQL, SQLite, and Redis</p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <div class="bg-primary-100 p-2 rounded-lg">
              <Code class="text-primary-600" size={24} />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900 mb-1">Frontend Excellence</h4>
              <p class="text-gray-600 text-sm">Designing clean, intuitive interfaces with HTML5, CSS3, and modern JS frameworks</p>
            </div>
          </div>
        </div>

        <div class="bg-primary-200/70 shadow-md border-primary-600/10 border p-6 rounded-lg mb-8">
          <div class="flex items-start gap-3">
            <Zap class="text-primary-600 mt-1" size={24} />
            <div>
              <p class="text-gray-700 leading-relaxed">
                What truly excites me is watching ideas evolve into high-performance, real-world applications… apps that users love and businesses trust to grow on.
              </p>
            </div>
          </div>
        </div>

        <p class="text-lg text-gray-700 mb-8">
          So if you're building something bold or need a senior developer to lead or join your remote team…
        </p>

      </div>

      <!-- Placeholder for my Photo -->
      <div class="animate-slide-up" style="animation-delay: 0.2s;">
        <div class="relative">
          <div class="bg-gray-900 rounded-lg p-6 shadow-2xl">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-3 h-3 bg-red-500 rounded-full"></div>
              <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <span class="text-gray-400 text-sm ml-4">ehikioya-portfolio.php</span>
            </div>
            <div class="font-mono text-sm">
              <div class="text-purple-400">&lt;?php</div>
              <div class="text-gray-300 ml-4">
                <span class="text-blue-400">class</span>
                <span class="text-yellow-300">DeveloperProfile</span>
              </div>
              <div class="text-gray-300 ml-4">&#123;</div>
              <div class="text-gray-300 ml-8">
                <span class="text-blue-400">public</span>
                <span class="text-green-400">$experience</span> =
                <span class="text-orange-400">'15+ years'</span>;
              </div>
              <div class="text-gray-300 ml-8">
                <span class="text-blue-400">public</span>
                <span class="text-green-400">$passion</span> =
                <span class="text-orange-400">'Building scalable systems'</span>;
              </div>
              <div class="text-gray-300 ml-8">
                <span class="text-blue-400">public</span>
                <span class="text-green-400">$specialty</span> =
                <span class="text-orange-400">'PHP/Laravel + SvelteJS/VueJS'</span>;
              </div>
              <div class="text-gray-300 ml-4">&#125;</div>
              <div class="text-purple-400">?&gt;</div>
            </div>
          </div>

          <!-- Floating Tech Icons -->
          <div class="absolute -top-4 -right-4 bg-primary-600 text-white p-3 rounded-lg shadow-lg animate-bounce-slow">
            <Code size={24} />
          </div>
          <div class="absolute -bottom-4 -left-4 bg-yellow-500 text-white p-3 rounded-lg shadow-lg animate-bounce-slow" style="animation-delay: 1s;">
            <Database size={24} />
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col max-w-5xl mx-auto mt-16 text-center gap-4">
      <p class="text-3xl font-light text-gray-900 mb-8">
        You're one click away from the partner you've been searching for.
      </p>

      <!-- CTAs -->
      <div class="flex items-baseline justify-center flex-col sm:flex-row gap-4">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary"
        >
          Let's Talk
        </a>
        <a href="/daniel-e-akhile-resume.pdf" target="_blank" class="btn-secondary flex items-center gap-2">
          <Download size={20} />
          Download Resume
        </a>
      </div>
    </div>
  </div>
</section>
