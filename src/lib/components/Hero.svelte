<script lang="ts">
  import Typewriter from "svelte-typewriter";
  import Zap from "@lucide/svelte/icons/zap";
  import Code from "@lucide/svelte/icons/code";
  import Users from "@lucide/svelte/icons/users";
  // import { TypeWriter } from 'svelte-typewrite';
  import ArrowRight from "@lucide/svelte/icons/arrow-right";
  import MessageCircle from "@lucide/svelte/icons/message-circle";

  const whatsappMessage = encodeURIComponent("Hi Daniel! I'm interested in discussing a project with you.");
  const whatsappUrl = `https://wa.me/2348034411661?text=${whatsappMessage}`;
</script>

<section class="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
  <div class="absolute inset-0 opacity-20">
    <div
      class="absolute inset-0"
      style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 50px 50px;"
    ></div>
  </div>

  <div class="absolute top-20 left-1/2 opacity-30">
    <div class="rounded-lg border border-primary-500/30 bg-primary-600/20 p-4 backdrop-blur-sm">
      <div class="font-mono text-sm text-primary-300">
        <div>&lt;developer&gt;</div>
        <div class="ml-2 text-yellow-400">experience: "{new Date().getFullYear() - 2010}+ years"</div>
        <div>&lt;/developer&gt;</div>
      </div>
    </div>
  </div>

  <div class="absolute right-16 bottom-32 opacity-30">
    <div class="rounded-lg border border-green-500/30 bg-green-600/20 p-4 backdrop-blur-sm">
      <div class="font-mono text-sm text-green-300">
        <div>function buildMVP() &#123;</div>
        <div class="ml-2">return "scalable_product";</div>
        <div>&#125;</div>
      </div>
    </div>
  </div>

  <div class="absolute top-1/4 right-20 animate-bounce-slow">
    <div class="rounded-full bg-primary-600 p-3 shadow-lg">
      <Code class="text-white" size={24} />
    </div>
  </div>

  <div class="absolute bottom-20 left-8 animate-bounce-slow" style="animation-delay: 1s;">
    <div class="rounded-full bg-yellow-500 p-3 shadow-lg">
      <Zap class="text-white" size={22} />
    </div>
  </div>

  <div class="container-custom relative z-10">
    <div class="grid items-center gap-12 lg:grid-cols-2">
      <div class="animate-fade-in">
        <h1 class="mb-6 text-3xl leading-tight font-bold text-white md:text-5xl lg:text-5xl">
          I turn your
          <span class="relative">
            <Typewriter mode="loop" element="span" --cursor-color="var(--color-primary-400)" --cursor-width="4px" interval={60} wordInterval={2000} unwriteInterval={80}>
              <span class="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">Ideas &#32;</span>
              <span class="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">Dreams &#32;</span>
              <span class="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">Visions &#32;</span>
              <span class="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">Mock-ups &#32;</span>
              <span class="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">Goals &#32;</span>
            </Typewriter>
            <!-- <span class="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
              <TypeWriter texts={['visions', 'dreams', 'ideas', 'mock-ups']} repeat={0} typeSpeed={90} deleteSpeed={50} blinkDuration={600} afterTyped={ {blink: 2.5} } afterDeleted={ {wait: 200} } />
            </span> -->
            <div class="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-primary-400 to-purple-400"></div>
          </span>
          <br />
          into reality
        </h1>

        <p class="mb-8 text-xl leading-relaxed text-gray-300 md:text-2xl">
          Backend focused full-stack web developer with <strong class="text-white">{new Date().getFullYear() - 2010}+ years</strong>
           experience building scalable web applications that users love and businesses depend on.
        </p>

        <div class="mb-8 grid gap-4 md:grid-cols-2">
          <div class="flex items-center gap-3">
            <div class="rounded-lg bg-primary-600/20 p-2">
              <Code class="text-primary-400" size={20} />
            </div>
            <span class="text-gray-300">Laravel & PHP Specialist</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="rounded-lg bg-blue-600/20 p-2">
              <Zap class="text-blue-400" size={20} />
            </div>
            <span class="text-gray-300">SvelteJS, VueJS, etc. Expert</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="rounded-lg bg-green-600/20 p-2">
              <Users class="text-green-400" size={20} />
            </div>
            <span class="text-gray-300">Remote Team Leader</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="rounded-lg bg-yellow-600/20 p-2">
              <ArrowRight class="text-yellow-400" size={20} />
            </div>
            <span class="text-gray-300">MVP to Scale</span>
          </div>
        </div>

        <div class="mb-8 flex flex-col gap-4 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="group flex transform items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-primary-600 to-purple-600 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:from-primary-700 hover:to-purple-700 hover:shadow-2xl"
          >
            <MessageCircle size={20} />
            Let's Build Something Amazing
            <ArrowRight class="transition-transform group-hover:translate-x-1" size={20} />
          </a>
        </div>

        <div class="flex items-center gap-6 text-gray-400">
          <div class="text-center">
            <div class="text-2xl font-bold text-white">30+</div>
            <div class="text-sm">Projects</div>
          </div>
          <div class="h-8 w-px bg-gray-600"></div>
          <div class="text-center">
            <div class="text-2xl font-bold text-white">{new Date().getFullYear() - 2010}+</div>
            <div class="text-sm">Years</div>
          </div>
          <div class="h-8 w-px bg-gray-600"></div>
          <div class="text-center">
            <div class="text-2xl font-bold text-white">100%</div>
            <div class="text-sm">Success Rate</div>
          </div>
        </div>
      </div>

      <div class="animate-slide-up lg:animate-fade-in" style="animation-delay: 0.3s;">
        <div class="relative">
          <div class="overflow-hidden rounded-2xl border border-gray-700 bg-gray-900 shadow-2xl">
            <div class="flex items-center justify-between border-b border-gray-700 bg-gray-800 px-6 py-4">
              <div class="flex items-center gap-3">
                <div class="flex gap-2">
                  <div class="h-3 w-3 rounded-full bg-red-500"></div>
                  <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div class="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <span class="font-mono text-sm text-gray-400">ehikioya-portfolio.php</span>
              </div>
              <div class="text-xs text-gray-500">Laravel Project</div>
            </div>

            <div class="p-6 font-mono text-sm leading-relaxed">
              <div class="text-purple-400">&lt;?php</div>
              <div class="mt-2 text-gray-300">
                <span class="text-blue-400">class</span>
                <span class="text-yellow-300">FullStackDeveloper</span>
              </div>
              <div class="text-gray-300">&#123;</div>
              <div class="mt-1 ml-4 text-gray-300">
                <span class="text-blue-400">private</span>
                <span class="text-green-400">$experience</span>
                =
                <span class="text-orange-400">'{new Date().getFullYear() - 2010}+ years'</span>
                ;
              </div>
              <div class="ml-4 text-gray-300">
                <span class="text-blue-400">private</span>
                <span class="text-green-400">$specialties</span>
                 = [
              </div>
              <div class="ml-8 text-gray-300">
                <span class="text-orange-400">'PHP/Laravel'</span>
                ,
              </div>
              <div class="ml-8 text-gray-300">
                <span class="text-orange-400">'SvelteJS/Sveltekit'</span>
                ,
              </div>
              <div class="ml-8 text-gray-300">
                <span class="text-orange-400">'VueJS'</span>
                ,
              </div>
              <div class="ml-8 text-gray-300">
                <span class="text-orange-400">'SQL'</span>
                ,
              </div>
              <div class="ml-8 text-gray-300">
                <span class="text-orange-400">'Software Architecture'</span>
              </div>
              <div class="ml-8 text-gray-300">
                <span class="text-orange-400">'Server Management'</span>
              </div>
              <div class="ml-4 text-gray-300">];</div>
              <div class="mt-2 ml-4 text-gray-300">
                <span class="text-blue-400">public function</span>
                <span class="text-yellow-300">buildMVP</span>
                () &#123;
              </div>
              <div class="ml-8 text-gray-300">
                <span class="text-blue-400">return</span>
                <span class="text-orange-400">'scalable_product'</span>
                ;
              </div>
              <div class="ml-4 text-gray-300">&#125;</div>
              <div class="text-gray-300">&#125;</div>
              <div class="mt-2 text-purple-400">?&gt;</div>
            </div>
          </div>

          <div class="absolute -top-6 -right-6 animate-bounce-slow rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 p-4 text-white shadow-lg">
            <div class="text-center">
              <div class="text-2xl font-bold">30+</div>
              <div class="text-xs opacity-90">Projects Shipped</div>
            </div>
          </div>

          <div class="absolute -bottom-6 -left-6 animate-bounce-slow rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 p-4 text-white shadow-lg" style="animation-delay: 1s;">
            <div class="text-center">
              <div class="text-2xl font-bold">{new Date().getFullYear() - 2010}+</div>
              <div class="text-xs opacity-90">Years Experience</div>
            </div>
          </div>

          <div class="absolute top-1/2 -left-6 -translate-y-1/2 transform pt-16 text-center">
            <div class="space-y-3">
              <div class="rounded-lg bg-[#E34C26] p-2 shadow-lg">
                <span class="text-xs font-bold text-white">HTML</span>
              </div>
              <div class="rounded-lg bg-[#264DE4] p-2 shadow-lg">
                <span class="text-xs font-bold text-white">CSS</span>
              </div>
              <div class="rounded-lg bg-[#777BB4] p-2 shadow-lg">
                <span class="text-xs font-bold text-white">PHP</span>
              </div>
              <div class="rounded-lg bg-[#F7DF1E] p-2 shadow-lg">
                <span class="text-xs font-bold text-black">JS</span>
              </div>
              <div class="rounded-lg bg-blue-600 p-2 shadow-lg">
                <span class="text-xs font-bold text-white">SQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
    <a href="" class="flex flex-col items-center gap-2 text-gray-400">
      <span class="text-sm">Scroll to explore</span>
      <div class="flex h-10 w-6 justify-center rounded-full border-2 border-gray-400">
        <div class="mt-2 h-3 w-1 animate-bounce rounded-full bg-gray-400"></div>
      </div>
    </a>
  </div>
</section>

<style lang="scss">
  .typewriter-stroke {
    width: 12.5rem;

    @media (min-width: 960px) {
      margin-left: 6rem;
      width: 24rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
</style>
