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

<section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
  <div class="absolute inset-0 opacity-20">
    <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
  </div>

  <div class="absolute top-20 left-1/2 opacity-30">
    <div class="bg-primary-600/20 backdrop-blur-sm rounded-lg p-4 border border-primary-500/30">
      <div class="font-mono text-primary-300 text-sm">
        <div>&lt;developer&gt;</div>
        <div class="ml-2 text-yellow-400">experience: "{(new Date()).getFullYear() - 2010}+ years"</div>
        <div>&lt;/developer&gt;</div>
      </div>
    </div>
  </div>

  <div class="absolute bottom-32 right-16 opacity-30">
    <div class="bg-green-600/20 backdrop-blur-sm rounded-lg p-4 border border-green-500/30">
      <div class="font-mono text-green-300 text-sm">
        <div>function buildMVP() &#123;</div>
        <div class="ml-2">return "scalable_product";</div>
        <div>&#125;</div>
      </div>
    </div>
  </div>

  <div class="absolute top-1/4 right-20 animate-bounce-slow">
    <div class="bg-primary-600 p-3 rounded-full shadow-lg">
      <Code class="text-white" size={24} />
    </div>
  </div>

  <div class="absolute bottom-20 left-8 animate-bounce-slow" style="animation-delay: 1s;">
    <div class="bg-yellow-500 p-3 rounded-full shadow-lg">
      <Zap class="text-white" size={22} />
    </div>
  </div>

  <div class="container-custom relative z-10">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div class="animate-fade-in">
        <h1 class="text-3xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
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
            <div class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-purple-400 rounded-full"></div>
          </span>
          <br>
          into reality
        </h1>

        <p class="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Backend focused full-stack web developer with <strong class="text-white">{(new Date()).getFullYear() - 2010}+ years</strong> experience building scalable web applications that users love and businesses depend on.
        </p>

        <div class="grid md:grid-cols-2 gap-4 mb-8">
          <div class="flex items-center gap-3">
            <div class="bg-primary-600/20 p-2 rounded-lg">
              <Code class="text-primary-400" size={20} />
            </div>
            <span class="text-gray-300">Laravel & PHP Specialist</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="bg-blue-600/20 p-2 rounded-lg">
              <Zap class="text-blue-400" size={20} />
            </div>
            <span class="text-gray-300">SvelteJS, VueJS, etc. Expert</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="bg-green-600/20 p-2 rounded-lg">
              <Users class="text-green-400" size={20} />
            </div>
            <span class="text-gray-300">Remote Team Leader</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="bg-yellow-600/20 p-2 rounded-lg">
              <ArrowRight class="text-yellow-400" size={20} />
            </div>
            <span class="text-gray-300">MVP to Scale</span>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3"
          >
            <MessageCircle size={20} />
            Let's Build Something Amazing
            <ArrowRight class="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>

        <div class="flex items-center gap-6 text-gray-400">
          <div class="text-center">
            <div class="text-2xl font-bold text-white">30+</div>
            <div class="text-sm">Projects</div>
          </div>
          <div class="w-px h-8 bg-gray-600"></div>
          <div class="text-center">
            <div class="text-2xl font-bold text-white">{(new Date()).getFullYear() - 2010}+</div>
            <div class="text-sm">Years</div>
          </div>
          <div class="w-px h-8 bg-gray-600"></div>
          <div class="text-center">
            <div class="text-2xl font-bold text-white">100%</div>
            <div class="text-sm">Success Rate</div>
          </div>
        </div>
      </div>

      <div class="animate-slide-up lg:animate-fade-in" style="animation-delay: 0.3s;">
        <div class="relative">
          <div class="bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
            <div class="bg-gray-800 px-6 py-4 flex items-center justify-between border-b border-gray-700">
              <div class="flex items-center gap-3">
                <div class="flex gap-2">
                  <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span class="text-gray-400 text-sm font-mono">ehikioya-portfolio.php</span>
              </div>
              <div class="text-gray-500 text-xs">Laravel Project</div>
            </div>

            <div class="p-6 font-mono text-sm leading-relaxed">
              <div class="text-purple-400">&lt;?php</div>
              <div class="text-gray-300 mt-2">
                <span class="text-blue-400">class</span>
                <span class="text-yellow-300">FullStackDeveloper</span>
              </div>
              <div class="text-gray-300">&#123;</div>
              <div class="text-gray-300 ml-4 mt-1">
                <span class="text-blue-400">private</span>
                <span class="text-green-400">$experience</span> =
                <span class="text-orange-400">'{(new Date()).getFullYear() - 2010}+ years'</span>;
              </div>
              <div class="text-gray-300 ml-4">
                <span class="text-blue-400">private</span>
                <span class="text-green-400">$specialties</span> = [
              </div>
              <div class="text-gray-300 ml-8">
                <span class="text-orange-400">'PHP/Laravel'</span>,
              </div>
              <div class="text-gray-300 ml-8">
                <span class="text-orange-400">'SvelteJS/Sveltekit'</span>,
              </div>
              <div class="text-gray-300 ml-8">
                <span class="text-orange-400">'VueJS'</span>,
              </div>
              <div class="text-gray-300 ml-8">
                <span class="text-orange-400">'SQL'</span>,
              </div>
              <div class="text-gray-300 ml-8">
                <span class="text-orange-400">'Software Architecture'</span>
              </div>
              <div class="text-gray-300 ml-8">
                <span class="text-orange-400">'Server Management'</span>
              </div>
              <div class="text-gray-300 ml-4">];</div>
              <div class="text-gray-300 ml-4 mt-2">
                <span class="text-blue-400">public function</span>
                <span class="text-yellow-300">buildMVP</span>() &#123;
              </div>
              <div class="text-gray-300 ml-8">
                <span class="text-blue-400">return</span>
                <span class="text-orange-400">'scalable_product'</span>;
              </div>
              <div class="text-gray-300 ml-4">&#125;</div>
              <div class="text-gray-300">&#125;</div>
              <div class="text-purple-400 mt-2">?&gt;</div>
            </div>
          </div>

          <div class="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-xl shadow-lg animate-bounce-slow">
            <div class="text-center">
              <div class="text-2xl font-bold">30+</div>
              <div class="text-xs opacity-90">Projects Shipped</div>
            </div>
          </div>

          <div class="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-xl shadow-lg animate-bounce-slow" style="animation-delay: 1s;">
            <div class="text-center">
              <div class="text-2xl font-bold">{(new Date()).getFullYear() - 2010}+</div>
              <div class="text-xs opacity-90">Years Experience</div>
            </div>
          </div>

          <div class="absolute top-1/2 -left-6 transform -translate-y-1/2 text-center pt-16">
            <div class="space-y-3">
              <div class="bg-[#E34C26] p-2 rounded-lg shadow-lg">
                <span class="text-white text-xs font-bold">HTML</span>
              </div>
              <div class="bg-[#264DE4] p-2 rounded-lg shadow-lg">
                <span class="text-white text-xs font-bold">CSS</span>
              </div>
              <div class="bg-[#777BB4] p-2 rounded-lg shadow-lg">
                <span class="text-white text-xs font-bold">PHP</span>
              </div>
              <div class="bg-[#F7DF1E] p-2 rounded-lg shadow-lg">
                <span class="text-black text-xs font-bold">JS</span>
              </div>
              <div class="bg-blue-600 p-2 rounded-lg shadow-lg">
                <span class="text-white text-xs font-bold">SQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <a href="" class="flex flex-col items-center gap-2 text-gray-400">
      <span class="text-sm">Scroll to explore</span>
      <div class="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
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
