<!-- <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Professional Portfolio</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
          }
        }
      }
    }
  </script>
  <style>
    html {
      scroll-behavior: smooth;
    }
    .card-hover:hover {
      transform: translateY(-5px);
      transition: all 0.3s ease;
    }
    .skill-bar {
      transition: width 1.5s ease-out;
    }
  </style>
</head>
<body class="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 font-sans">
  <!-- Navigation -->
  <nav class="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md z-50 shadow-sm">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <a href="#home" class="text-xl font-bold text-primary-600 dark:text-primary-400">Portfolio</a>
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <a href="#home" class="hover:text-primary-500 transition">Home</a>
          <a href="#about" class="hover:text-primary-500 transition">About</a>
          <a href="#skills" class="hover:text-primary-500 transition">Skills</a>
          <a href="#projects" class="hover:text-primary-500 transition">Projects</a>
          <a href="#contact" class="hover:text-primary-500 transition">Contact</a>
          <button id="theme-toggle" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <i class="fas fa-moon dark:hidden"></i>
            <i class="fas fa-sun hidden dark:inline"></i>
          </button>
        </div>
        <div class="md:hidden flex items-center">
          <button id="mobile-menu-button" class="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-white dark:bg-gray-800 pb-4 px-4 shadow-lg">
      <div class="flex flex-col space-y-2">
        <a href="#home" class="hover:text-primary-500 transition py-2">Home</a>
        <a href="#about" class="hover:text-primary-500 transition py-2">About</a>
        <a href="#skills" class="hover:text-primary-500 transition py-2">Skills</a>
        <a href="#projects" class="hover:text-primary-500 transition py-2">Projects</a>
        <a href="#contact" class="hover:text-primary-500 transition py-2">Contact</a>
        <button id="mobile-theme-toggle" class="text-left hover:text-primary-500 transition py-2">
          <span class="flex items-center">
            <i class="fas fa-moon dark:hidden mr-2"></i>
            <i class="fas fa-sun hidden dark:inline mr-2"></i>
            Toggle Theme
          </span>
        </button>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
    <div class="flex flex-col md:flex-row items-center justify-between">
      <div class="md:w-1/2 mb-8 md:mb-0">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Hi, I'm <span class="text-primary-500">Alex Turner</span></h1>
        <h2 class="text-2xl md:text-3xl font-semibold mb-6">Full Stack Developer</h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">I build exceptional digital experiences that are fast, accessible, and user-friendly.</p>
        <div class="flex space-x-4">
          <a href="#projects" class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition shadow-lg">View My Work</a>
          <a href="#contact" class="border border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition">Contact Me</a>
        </div>
      </div>
      <div class="md:w-1/2 flex justify-center">
        <img src="https://placehold.co/500x500" alt="Professional headshot of Alex Turner, a confident developer with short brown hair and blue eyes, wearing a casual blazer and smiling" 
             class="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-xl border-4 border-primary-500">
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-16 bg-gray-100 dark:bg-gray-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12">About <span class="text-primary-500">Me</span></h2>
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/3 mb-8 md:mb-0 flex justify-center">
          <img src="https://placehold.co/400x500" alt="Alex Turner working at a modern workstation with dual monitors showing code, wearing headphones and focused on programming" 
               class="rounded-lg shadow-lg w-full max-w-xs">
        </div>
        <div class="md:w-2/3 md:pl-12">
          <h3 class="text-2xl font-semibold mb-4">Who am I?</h3>
          <p class="text-lg mb-6">I'm a passionate full-stack developer with 5+ years of experience creating robust web applications. I specialize in JavaScript frameworks and cloud-native solutions that scale.</p>
          
          <div class="grid grid-cols-2 gap-6 mb-8">
            <div>
              <p class="font-medium">Name:</p>
              <p>Alex Turner</p>
            </div>
            <div>
              <p class="font-medium">Email:</p>
              <p>alex@example.com</p>
            </div>
            <div>
              <p class="font-medium">From:</p>
              <p>San Francisco, CA</p>
            </div>
            <div>
              <p class="font-medium">Experience:</p>
              <p>5+ Years</p>
            </div>
          </div>

          <h3 class="text-2xl font-semibold mb-4">My Journey</h3>
          <p class="text-lg mb-4">I started programming at 15 and have been obsessed with building things ever since. I've worked with startups and Fortune 500 companies to deliver high-quality digital products.</p>
          <p class="text-lg">When I'm not coding, you'll find me hiking, reading sci-fi, or experimenting with new technologies.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills" class="py-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12">My <span class="text-primary-500">Skills</span></h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <!-- Frontend Skills -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <div class="flex items-center mb-4">
            <div class="bg-primary-100 dark:bg-gray-700 p-3 rounded-lg mr-4">
              <i class="fas fa-desktop text-primary-500 text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold">Frontend Development</h3>
          </div>
          <div class="space-y-4">
            <div>
              <div class="flex justify-between mb-1">
                <span>HTML/CSS</span>
                <span>95%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-primary-500 h-2.5 rounded-full skill-bar" style="width: 95%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-1">
                <span>JavaScript</span>
                <span>90%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-primary-500 h-2.5 rounded-full skill-bar" style="width: 90%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-1">
                <span>React</span>
                <span>85%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-primary-500 h-2.5 rounded-full skill-bar" style="width: 85%"></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Backend Skills -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <div class="flex items-center mb-4">
            <div class="bg-primary-100 dark:bg-gray-700 p-3 rounded-lg mr-4">
              <i class="fas fa-server text-primary-500 text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold">Backend Development</h3>
          </div>
          <div class="space-y-4">
            <div>
              <div class="flex justify-between mb-1">
                <span>Node.js</span>
                <span>88%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-primary-500 h-2.5 rounded-full skill-bar" style="width: 88%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-1">
                <span>Python</span>
                <span>80%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-primary-500 h-2.5 rounded-full skill-bar" style="width: 80%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-1">
                <span>Database Design</span>
                <span>85%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-primary-500 h-2.5 rounded-full skill-bar" style="width: 85%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Other Skills -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8">
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col items-center">
          <div class="text-4xl mb-2 text-primary-500">
            <i class="fab fa-js"></i>
          </div>
          <p>JavaScript</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col items-center">
          <div class="text-4xl mb-2 text-primary-500">
            <i class="fab fa-react"></i>
          </div>
          <p>React</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col items-center">
          <div class="text-4xl mb-2 text-primary-500">
            <i class="fab fa-node"></i>
          </div>
          <p>Node.js</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col items-center">
          <div class="text-4xl mb-2 text-primary-500">
            <i class="fab fa-python"></i>
          </div>
          <p>Python</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col items-center">
          <div class="text-4xl mb-2 text-primary-500">
            <i class="fas fa-database"></i>
          </div>
          <p>MongoDB</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col items-center">
          <div class="text-4xl mb-2 text-primary-500">
            <i class="fab fa-aws"></i>
          </div>
          <p>AWS</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="py-16 bg-gray-100 dark:bg-gray-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12">My <span class="text-primary-500">Projects</span></h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Project 1 -->
        <div class="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg card-hover">
          <div class="relative h-48 overflow-hidden">
            <img src="https://placehold.co/600x400" alt="Dashboard interface for TaskFlow project showing productivity metrics and task management features" 
                 class="w-full h-full object-cover transition duration-500 hover:scale-110">
            <div class="absolute top-0 left-0 bg-primary-500 text-white px-3 py-1 text-sm font-medium">FEATURED</div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">TaskFlow</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">A productivity app that helps teams manage tasks intuitively with AI-powered automation.</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded text-sm">React</span>
              <span class="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded text-sm">Node.js</span>
              <span class="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded text-sm">MongoDB</span>
            </div>
            <div class="flex space-x-3">
              <a href="#" class="text-primary-500 hover:text-primary-600 transition"><i class="fab fa-github"></i> Code</a>
              <a href="#" class="text-primary-500 hover:text-primary-600 transition"><i class="fas fa-external-link-alt"></i> Live</a>
            </div>
          </div>
        </div>
        
        <!-- Project 2 -->
        <div class="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg card-hover">
          <div class="relative h-48 overflow-hidden">
            <img src="https://placehold.co/600x400" alt="E-commerce website for ShopEase showing product listings with clean, modern design" 
                 class="w-full h-full object-cover transition duration-500 hover:scale-110">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">ShopEase</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">Full-featured e-commerce platform with inventory management and payment processing.</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded text-sm">Next.js</span>
              <span class="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded text-sm">Stripe</span>
              <span class="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded text-sm">PostgreSQL</span>
            </div>
            <div class="flex space-x-3">
              <a href="#" class="text-primary-500 hover:text-primary-600 transition"><i class="fab fa-github"></i> Code</a>
              <a href="#" class="text-primary-500 hover:text-primary-600 transition"><i class="fas fa-external-link-alt"></i> Live</a>
            </div>
          </div>
        </div>
        
        <!-- Project 3 -->
        <div class="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg card-hover">
          <div class="relative h-48 overflow-hidden">
            <img src="https://placehold.co/600x400" alt="Analytics dashboard interface showing data visualizations for FitTrack health app" 
                 class="w-full h-full object-cover transition duration-500 hover:scale-110">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">FitTrack</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">Health and fitness tracker with personalized workout plans and nutrition guidance.</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded text-sm">React Native</span>
              <span class="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded text-sm">GraphQL</span>
              <span class="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded text-sm">Firebase</span>
            </div>
            <div class="flex space-x-3">
              <a href="#" class="text-primary-500 hover:text-primary-600 transition"><i class="fab fa-github"></i> Code</a>
              <a href="#" class="text-primary-500 hover:text-primary-600 transition"><i class="fas fa-external-link-alt"></i> Live</a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <button class="px-6 py-3 bg-transparent border border-primary-500 text-primary-500 rounded-lg font-medium hover:bg-primary-500 hover:text-white transition">
          View All Projects
        </button>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12">Get In <span class="text-primary-500">Touch</span></h2>
      
      <div class="flex flex-col md:flex-row gap-12">
        <div class="md:w-1/2">
          <h3 class="text-2xl font-semibold mb-6">Contact Information</h3>
          <p class="mb-8">Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="bg-primary-100 dark:bg-gray-700 p-3 rounded-lg mr-4">
                <i class="fas fa-envelope text-primary-500"></i>
              </div>
              <div>
                <h4 class="font-medium">Email</h4>
                <p>alex@example.com</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="bg-primary-100 dark:bg-gray-700 p-3 rounded-lg mr-4">
                <i class="fas fa-phone text-primary-500"></i>
              </div>
              <div>
                <h4 class="font-medium">Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="bg-primary-100 dark:bg-gray-700 p-3 rounded-lg mr-4">
                <i class="fas fa-map-marker-alt text-primary-500"></i>
              </div>
              <div>
                <h4 class="font-medium">Location</h4>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>
          
          <div class="mt-8">
            <h4 class="font-medium mb-4">Follow Me</h4>
            <div class="flex space-x-4">
              <a href="#" class="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                <i class="fab fa-github text-lg"></i>
              </a>
              <a href="#" class="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                <i class="fab fa-linkedin-in text-lg"></i>
              </a>
              <a href="#" class="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                <i class="fab fa-twitter text-lg"></i>
              </a>
              <a href="#" class="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                <i class="fab fa-instagram text-lg"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div class="md:w-1/2">
          <form id="contact-form" class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div class="mb-6">
              <label for="name" class="block text-sm font-medium mb-2">Your Name</label>
              <input type="text" id="name" name="name" required class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            </div>
            <div class="mb-6">
              <label for="email" class="block text-sm font-medium mb-2">Your Email</label>
              <input type="email" id="email" name="email" required class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            </div>
            <div class="mb-6">
              <label for="subject" class="block text-sm font-medium mb-2">Subject</label>
              <input type="text" id="subject" name="subject" required class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            </div>
            <div class="mb-6">
              <label for="message" class="block text-sm font-medium mb-2">Your Message</label>
              <textarea id="message" name="message" rows="5" required class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"></textarea>
            </div>
            <button type="submit" class="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-medium transition">Send Message</button>
            <div id="form-message" class="mt-4 text-center hidden"></div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-800 text-white py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p>&copy; 2023 Alex Turner. All rights reserved.</p>
        </div>
        <div>
          <div class="flex space-x-6">
            <a href="#" class="hover:text-primary-400 transition">Privacy Policy</a>
            <a href="#" class="hover:text-primary-400 transition">Terms of Service</a>
            <a href="#home" class="hover:text-primary-400 transition flex items-center">
              <span>Back to Top</span>
              <i class="fas fa-arrow-up ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <script>
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    // Check for saved user preference or use system preference
    if (localStorage.getItem('color-theme') === 'dark' || 
        (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Theme toggle button
    themeToggle.addEventListener('click', function() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    });

    // Mobile theme toggle
    mobileThemeToggle.addEventListener('click', function() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    });

    // Mobile menu toggle
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
      });
    });

    // Contact form submission
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate form submission
      formMessage.classList.remove('hidden');
      formMessage.textContent = 'Your message has been sent successfully!';
      formMessage.style.color = 'green';
      
      // Reset form
      contactForm.reset();
      
      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.classList.add('hidden');
      }, 5000);
    });

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-bar');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const width = entry.target.style.width;
          entry.target.style.width = '0%';
          setTimeout(() => {
            entry.target.style.width = width;
          }, 50);
        }
      });
    }, {threshold: 0.5});

    skillBars.forEach(bar => {
      observer.observe(bar);
    });
  </script>
</body>
</html>

```

🎨 **Generating images based on descriptions...**

✅ **Images generated successfully! Here's your updated content:**

`portfolio.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Professional Portfolio</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}
          }
        }
      }
    }
  </script>
  <style>
    html {
      scroll-behavior: smooth;
    }
    .card-hover:hover {
      transform: translateY(-5px);
      transition: all 0.3s ease;
    }
    .skill-bar {
      transition: width 1.5s ease-out;
    }
  </style>
</head>
<body class="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 font-sans">
  <!-- Navigation -->
  <nav class="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md z-50 shadow-sm">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <a href="#home" class="text-xl font-bold text-primary-600 dark:text-primary-400">Portfolio</a>
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <a href="#home" class="hover:text-primary-500 transition">Home</a>
          <a href="#about" class="hover:text-primary-500 transition">About</a>
          <a href="#skills" class="hover:text-primary-500 transition">Skills</a>
          <a href="#projects" class="hover:text-primary-500 transition">Projects</a>
          <a href="#contact" class="hover:text-primary-500 transition">Contact</a>
          <button id="theme-toggle" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <i class="fas fa-moon dark:hidden"></i>
            <i class="fas fa-sun hidden dark:inline"></i>
          </button>
        </div>
        <div class="md:hidden flex items-center">
          <button id="mobile-menu-button" class="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-white dark:bg-gray-800 pb-4 px-4 shadow-lg">
      <div class="flex flex-col space-y-2">
        <a href="#home" class="hover:text-primary-500 transition py-2">Home</a>
        <a href="#about" class="hover:text-primary-500 transition py-2">About</a>
        <a href="#skills" class="hover:text-primary-500 transition py-2">Skills</a>
        <a href="#projects" class="hover:text-primary-500 transition py-2">Projects</a>
        <a href="#contact" class="hover:text-primary-500 transition py-2">Contact</a>
        <button id="mobile-theme-toggle" class="text-left hover:text-primary-500 transition py-2">
          <span class="flex items-center">
            <i class="fas fa-moon dark:hidden mr-2"></i>
            <i class="fas fa-sun hidden dark:inline mr-2"></i>
            Toggle Theme
          </span>
        </button>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
    <div class="flex flex-col md:flex-row items-center justify-between">
      <div class="md:w-1/2 mb-8 md:mb-0">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Hi, I'm <span class="text-primary-500">Alex Turner</span></h1>
        <h2 class="text-2xl md:text-3xl font-semibold mb-6">Full Stack Developer</h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">I build exceptional digital experiences that are fast, accessible, and user-friendly.</p>
        <div class="flex space-x-4">
          <a href="#projects" class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition shadow-lg">View My Work</a>
          <a href="#contact" class="border border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition">Contact Me</a>
        </div>
      </div>
      <div class="md:w-1/2 flex justify-center">
        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/89edc03c-5011-457d-b05c-c7d81af9ebd2.png" alt="Professional headshot of Alex Turner, a confident developer with short brown hair and blue eyes, wearing a casual blazer and smiling" 
             class="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-xl border-4 border-primary-500">
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-16 bg-gray-100 dark:bg-gray-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12">About <span class="text-primary-500">Me</span></h2>
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/3 mb-8 md:mb-0 flex justify-center">
          <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/89c02116-cf70-43d9-8abc-f68571364cca.png" alt="Alex Turner working at a modern workstation with dual monitors showing code, wearing headphones and focused on programming" 
               class="rounded-lg shadow-lg w-full max-w-xs">
        </div>
        <div class="md:w-2/3 md:pl-12">
          <h3 class="text-2xl font-semibold mb-4">Who am I?</h3>
          <p class="text-lg mb-6">I'm a passionate full-stack developer with 5+ years of experience creating robust web applications. I specialize in JavaScript frameworks and cloud-native solutions that scale.</p>
          
          <div class="grid grid-cols-2 gap-6 mb-8">
            <div>
              <p class="font-medium">Name:</p>
              <p>Alex Turner</p>
            </div>
            <div>
              <p class="font-medium">Email:</p>
              <p>alex@example.com</p>
            </div>
            <div>
              <p class="font-medium">From:</p>
              <p>San Francisco, CA</p>
            </div>
            <div>
              <p class="font-medium">Experience:</p>
              <p>5+ Years</p>
            </div>
          </div>

          <h3 class="text-2xl font-semibold mb-4">My Journey</h3>
          <p class="text-lg mb-4">I started programming at 15 and have been obsessed with building things ever since. I've worked with startups and Fortune 500 companies to deliver high-quality digital products.</p>
          <p class="text-lg">When I'm not coding, you'll find me hiking, reading sci-fi, or experimenting with new technologies.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills" class="py-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12">My <span class="text-primary-500">Skills</span></h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <!-- Frontend Skills -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <div class="flex items-center mb-4">
            <div class="bg-primary-100 dark:bg-gray-700 p-3 rounded-lg mr-4">
              <i class="fas fa-desktop text-primary-500 text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold">Frontend Development</h3>
          </div>
          <div class="space-y-4">
            <div>
              <div class="flex justify-between mb-1">
                <span>HTML/CSS</span>
                <span>95%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-primary-500 h-2.5 rounded-full skill-bar" style="width: 95%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-1">
                <span>JavaScript</span>
                <span>90%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-primary-500 h-2.5 rounded-full skill-bar" style="width: 90%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-1">
                <span>React</span>
                <span>85%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-primary-500 h-2.5 rounded-full skill-bar" style="width: 85%"></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Backend Skills -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <div class="flex items-center mb-4">
            <div class="bg-primary-100 dark:bg-gray-700 p-3 rounded-lg mr-4">
              <i class="fas fa-server text-primary-500 text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold">Backend Development</h3>
          </div>
          <div class="space-y-4">
            <div>
              <div class="flex justify-between mb-1">
                <span>Node.js</span>
                <span>88%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-primary-500 h-2.5 rounded-full skill-bar" style="width: 88%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-1">
                <span>Python</span>
                <span>80%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-primary-500 h-2.5 rounded-full skill-bar" style="width: 80%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-1">
                <span>Database Design</span>
                <span>85%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-primary-500 h-2.5 rounded-full skill-bar" style="width: 85%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Other Skills -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8">
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col items-center">
          <div class="text-4xl mb-2 text-primary-500">
            <i class="fab fa-js"></i>
          </div>
          <p>JavaScript</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col items-center">
          <div class="text-4xl mb-2 text-primary-500">
            <i class="fab fa-react"></i>
          </div>
          <p>React</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col items-center">
          <div class="text-4xl mb-2 text-primary-500">
            <i class="fab fa-node"></i>
          </div>
          <p>Node.js</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col items-center">
          <div class="text-4xl mb-2 text-primary-500">
            <i class="fab fa-python"></i>
          </div>
          <p>Python</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col items-center">
          <div class="text-4xl mb-2 text-primary-500">
            <i class="fas fa-database"></i>
          </div>
          <p>MongoDB</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col items-center">
          <div class="text-4xl mb-2 text-primary-500">
            <i class="fab fa-aws"></i>
          </div>
          <p>AWS</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="py-16 bg-gray-100 dark:bg-gray-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12">My <span class="text-primary-500">Projects</span></h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Project 1 -->
        <div class="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg card-hover">
          <div class="relative h-48 overflow-hidden">
            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7201e916-6955-4ee8-9488-7657e3cdb3e2.png" alt="Dashboard interface for TaskFlow project showing productivity metrics and task management features" 
                 class="w-full h-full object-cover transition duration-500 hover:scale-110">
            <div class="absolute top-0 left-0 bg-primary-500 text-white px-3 py-1 text-sm font-medium">FEATURED</div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">TaskFlow</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">A productivity app that helps teams manage tasks intuitively with AI-powered automation.</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded text-sm">React</span>
              <span class="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded text-sm">Node.js</span>
              <span class="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded text-sm">MongoDB</span>
            </div>
            <div class="flex space-x-3">
              <a href="#" class="text-primary-500 hover:text-primary-600 transition"><i class="fab fa-github"></i> Code</a>
              <a href="#" class="text-primary-500 hover:text-primary-600 transition"><i class="fas fa-external-link-alt"></i> Live</a>
            </div>
          </div>
        </div>
        
        <!-- Project 2 -->
        <div class="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg card-hover">
          <div class="relative h-48 overflow-hidden">
            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/df949b66-d665-4d7f-883e-715222c574e4.png" alt="E-commerce website for ShopEase showing product listings with clean, modern design" 
                 class="w-full h-full object-cover transition duration-500 hover:scale-110">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">ShopEase</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">Full-featured e-commerce platform with inventory management and payment processing.</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded text-sm">Next.js</span>
              <span class="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded text-sm">Stripe</span>
              <span class="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded text-sm">PostgreSQL</span>
            </div>
            <div class="flex space-x-3">
              <a href="#" class="text-primary-500 hover:text-primary-600 transition"><i class="fab fa-github"></i> Code</a>
              <a href="#" class="text-primary-500 hover:text-primary-600 transition"><i class="fas fa-external-link-alt"></i> Live</a>
            </div>
          </div>
        </div>
        
        <!-- Project 3 -->
        <div class="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg card-hover">
          <div class="relative h-48 overflow-hidden">
            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1b2229c7-ad42-4ebe-9c6c-4fb089c4915f.png" alt="Analytics dashboard interface showing data visualizations for FitTrack health app" 
                 class="w-full h-full object-cover transition duration-500 hover:scale-110">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">FitTrack</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">Health and fitness tracker with personalized workout plans and nutrition guidance.</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded text-sm">React Native</span>
              <span class="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded text-sm">GraphQL</span>
              <span class="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded text-sm">Firebase</span>
            </div>
            <div class="flex space-x-3">
              <a href="#" class="text-primary-500 hover:text-primary-600 transition"><i class="fab fa-github"></i> Code</a>
              <a href="#" class="text-primary-500 hover:text-primary-600 transition"><i class="fas fa-external-link-alt"></i> Live</a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <button class="px-6 py-3 bg-transparent border border-primary-500 text-primary-500 rounded-lg font-medium hover:bg-primary-500 hover:text-white transition">
          View All Projects
        </button>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12">Get In <span class="text-primary-500">Touch</span></h2>
      
      <div class="flex flex-col md:flex-row gap-12">
        <div class="md:w-1/2">
          <h3 class="text-2xl font-semibold mb-6">Contact Information</h3>
          <p class="mb-8">Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="bg-primary-100 dark:bg-gray-700 p-3 rounded-lg mr-4">
                <i class="fas fa-envelope text-primary-500"></i>
              </div>
              <div>
                <h4 class="font-medium">Email</h4>
                <p>alex@example.com</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="bg-primary-100 dark:bg-gray-700 p-3 rounded-lg mr-4">
                <i class="fas fa-phone text-primary-500"></i>
              </div>
              <div>
                <h4 class="font-medium">Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="bg-primary-100 dark:bg-gray-700 p-3 rounded-lg mr-4">
                <i class="fas fa-map-marker-alt text-primary-500"></i>
              </div>
              <div>
                <h4 class="font-medium">Location</h4>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>
          
          <div class="mt-8">
            <h4 class="font-medium mb-4">Follow Me</h4>
            <div class="flex space-x-4">
              <a href="#" class="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                <i class="fab fa-github text-lg"></i>
              </a>
              <a href="#" class="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                <i class="fab fa-linkedin-in text-lg"></i>
              </a>
              <a href="#" class="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                <i class="fab fa-twitter text-lg"></i>
              </a>
              <a href="#" class="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                <i class="fab fa-instagram text-lg"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div class="md:w-1/2">
          <form id="contact-form" class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div class="mb-6">
              <label for="name" class="block text-sm font-medium mb-2">Your Name</label>
              <input type="text" id="name" name="name" required class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            </div>
            <div class="mb-6">
              <label for="email" class="block text-sm font-medium mb-2">Your Email</label>
              <input type="email" id="email" name="email" required class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            </div>
            <div class="mb-6">
              <label for="subject" class="block text-sm font-medium mb-2">Subject</label>
              <input type="text" id="subject" name="subject" required class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
            </div>
            <div class="mb-6">
              <label for="message" class="block text-sm font-medium mb-2">Your Message</label>
              <textarea id="message" name="message" rows="5" required class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"></textarea>
            </div>
            <button type="submit" class="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-medium transition">Send Message</button>
            <div id="form-message" class="mt-4 text-center hidden"></div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-800 text-white py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p>© 2023 Alex Turner. All rights reserved.</p>
        </div>
        <div>
          <div class="flex space-x-6">
            <a href="#" class="hover:text-primary-400 transition">Privacy Policy</a>
            <a href="#" class="hover:text-primary-400 transition">Terms of Service</a>
            <a href="#home" class="hover:text-primary-400 transition flex items-center">
              <span>Back to Top</span>
              <i class="fas fa-arrow-up ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <script>
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    // Check for saved user preference or use system preference
    if (localStorage.getItem('color-theme') === 'dark' || 
        (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Theme toggle button
    themeToggle.addEventListener('click', function() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    });

    // Mobile theme toggle
    mobileThemeToggle.addEventListener('click', function() {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    });

    // Mobile menu toggle
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
      });
    });

    // Contact form submission
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate form submission
      formMessage.classList.remove('hidden');
      formMessage.textContent = 'Your message has been sent successfully!';
      formMessage.style.color = 'green';
      
      // Reset form
      contactForm.reset();
      
      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.classList.add('hidden');
      }, 5000);
    });

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-bar');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const width = entry.target.style.width;
          entry.target.style.width = '0%';
          setTimeout(() => {
            entry.target.style.width = width;
          }, 50);
        }
      });
    }, {threshold: 0.5});

    skillBars.forEach(bar => {
      observer.observe(bar);
    });
  </script>
</body>
</html>

``` -->
