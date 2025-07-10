<script lang="ts">
  import Star from "@lucide/svelte/icons/star";
  import Quote from "@lucide/svelte/icons/quote";
  import Twitter from "@lucide/svelte/icons/twitter";
  import Linkedin from "@lucide/svelte/icons/linkedin";

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Founder & CEO",
      company: "TechStart Solutions",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "Daniel transformed our MVP idea into a fully functional platform in just 8 weeks. His Laravel expertise and attention to scalability saved us months of development time. The backend architecture he built has handled our 10x user growth seamlessly.",
      rating: 5,
      social: "linkedin",
      socialUrl: "https://linkedin.com/in/sarahjohnson"
    },
    {
      name: "Michael Chen",
      title: "CTO",
      company: "FinanceFlow Inc",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "Working with Daniel was a game-changer for our fintech startup. He rebuilt our legacy system from scratch, implementing secure payment integrations and real-time transaction processing. His code quality and documentation are exceptional.",
      rating: 5,
      social: "twitter",
      socialUrl: "https://twitter.com/michaelchen"
    },
    {
      name: "Priya Patel",
      title: "Product Manager",
      company: "EduTech Innovations",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "Daniel's full-stack skills are impressive, but what sets him apart is his product thinking. He doesn't just code features—he understands the business impact and suggests improvements that actually matter to users and revenue.",
      rating: 5,
      social: "linkedin",
      socialUrl: "https://linkedin.com/in/priyapatel"
    },
    {
      name: "James Rodriguez",
      title: "Startup Founder",
      company: "PropConnect",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "I needed someone who could move fast without breaking things. Daniel delivered exactly that. He built our property management platform with clean, maintainable code and integrated complex APIs flawlessly. Highly recommend for any serious project.",
      rating: 5,
      social: "twitter",
      socialUrl: "https://twitter.com/jamesrodriguez"
    },
    {
      name: "Amanda Foster",
      title: "Head of Engineering",
      company: "CloudScale Systems",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "Daniel joined our remote team as a senior developer and immediately made an impact. His Laravel and VueJS expertise helped us ship features 40% faster. He's reliable, communicates clearly, and writes code that other developers love to work with.",
      rating: 5,
      social: "linkedin",
      socialUrl: "https://linkedin.com/in/amandafoster"
    },
    {
      name: "David Kim",
      title: "Technical Recruiter",
      company: "TalentBridge",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "I've placed hundreds of developers, and Daniel stands out. His technical skills are solid, but his communication and project management abilities make him perfect for remote work. Companies love working with him because he delivers on time, every time.",
      rating: 5,
      social: "linkedin",
      socialUrl: "https://linkedin.com/in/davidkim"
    }
  ];

  const getSocialIcon = (social: string) => {
    return social === 'linkedin' ? Linkedin : Twitter;
  };
</script>

<section id="testimonials" class="section-padding bg-white">
  <div class="container-custom">
    <!-- Header -->
    <div class="text-center mb-16 animate-slide-up">
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Trusted by <span class="gradient-text">Clients, Teams, and Founders Alike</span>
      </h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        …Proof? The people I've worked with say it better than I ever could.
      </p>
    </div>

    <!-- Testimonials Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each testimonials as testimonial, index}
        <div class="card-hover bg-gray-50 rounded-2xl p-8 animate-slide-up" style="animation-delay: {index * 0.1}s;">
          <!-- Quote Icon -->
          <div class="flex justify-between items-start mb-6">
            <Quote class="text-primary-600" size={32} />

            <!-- Rating Stars -->
            <div class="flex gap-1">
              {#each Array(testimonial.rating) as _}
                <Star class="text-yellow-400 fill-current" size={16} />
              {/each}
            </div>
          </div>

          <!-- Content -->
          <p class="text-gray-700 leading-relaxed mb-6 italic">
            "{testimonial.content}"
          </p>

          <!-- Author -->
          <div class="flex items-center gap-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              class="w-12 h-12 rounded-full object-cover"
            />
            <div class="flex-1">
              <h4 class="font-semibold text-gray-900">{testimonial.name}</h4>
              <p class="text-sm text-gray-600">{testimonial.title}</p>
              <p class="text-sm text-primary-600 font-medium">{testimonial.company}</p>
            </div>
            <a
              href={testimonial.socialUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-primary-600 transition-colors"
            >
              <svelte:component this={getSocialIcon(testimonial.social)} size={20} />
            </a>
          </div>
        </div>
      {/each}
    </div>

    <!-- Trust Indicators -->
    <div class="mt-16 animate-slide-up">
      <div class="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-8 border border-primary-100">
        <div class="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div class="text-3xl font-bold text-primary-600 mb-2">50+</div>
            <p class="text-gray-700">Projects Delivered</p>
          </div>
          <div>
            <div class="text-3xl font-bold text-primary-600 mb-2">15+</div>
            <p class="text-gray-700">Years Experience</p>
          </div>
          <div>
            <div class="text-3xl font-bold text-primary-600 mb-2">100%</div>
            <p class="text-gray-700">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
