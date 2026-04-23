import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer">
              ✈️ Rachel Westwater
            </h1>
          </Link>
          <div className="flex gap-8">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              About
            </a>
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Skills
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm Rachel
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Thanks for stopping by.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            I've worked in network engineering, software, and now engineering management over the past decade or so. Somewhere along the way I picked up a habit of thinking in systems, edge cases, and keeping things steady even when things get a bit… turbulent.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            These days I spend most of my time supporting engineers, improving how teams work, and trying to make sure we're building the right things in a sensible, sustainable way. A lot of it feels less like "driving" and more like helping everyone stay in sync and on course. This is my way of staying in touch with my technical side.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            This site is just a place to share some of that - projects, ideas, and the occasional lesson learned the hard way. Feel free to explore. I'll keep things steady on my end, you're welcome aboard anytime.
          </p>
          <a href="#about" className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Learn More
          </a>
        </div>

        {/* About Section */}
        <section id="about" className="mt-24 pb-20 border-t border-gray-200 dark:border-gray-700 pt-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Bio */}
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Software Engineering Manager with a B.Sc. in Applied Networking Technologies and 10+ years of experience across network engineering, software development, and leadership.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I started out deep in the technical side and gradually moved into management, where I found I really enjoy helping teams do their best work.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I care a lot about building supportive, high-performing teams that deliver meaningful, customer-focused products without burning out or overcomplicating things.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                A big part of my role is creating clarity, improving how we work, and quietly removing the blockers that slow teams down. I'm also interested in how AI-assisted tools can genuinely help teams, not as a buzzword, but as a practical way to improve productivity, decision-making, and how we build software day to day.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Based in Edinburgh, Scotland · Open to remote UK opportunities
              </p>
            </div>

            {/* Stats */}
            <div className="space-y-8">
              <div className="bg-blue-50 dark:bg-slate-700 p-6 rounded-lg border border-blue-200 dark:border-slate-600">
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                  Engineering Leadership
                </h3>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">4 years</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Managing teams, shipping quality products, cultivating innovation</p>
              </div>

              <div className="bg-blue-50 dark:bg-slate-700 p-6 rounded-lg border border-blue-200 dark:border-slate-600">
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                  Full-Stack Engineering
                </h3>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">10+ years</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Network engineering, software development, aviation tech (Bluebox)</p>
              </div>

              <div className="bg-blue-50 dark:bg-slate-700 p-6 rounded-lg border border-blue-200 dark:border-slate-600">
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-2">
                  Background
                </h3>
                <p className="text-gray-700 dark:text-gray-300">BSc Applied Networking Technologies · Strong believer in continuous improvement & team empowerment</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="https://rwestwater.github.io/rachwest-flightdeck/ky_r_westwater_2026.pdf" download className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Download CV
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
