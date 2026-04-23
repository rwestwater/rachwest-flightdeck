import Link from 'next/link';
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
            Welcome to RachWest Flight Deck
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Buckle up for a whimsical journey through code that takes flight! As an Engineering Manager and Full-Stack Developer, I'm charting courses through clean code, leading high-performing teams that soar, and building scalable systems with a pilot's precision. Ready for takeoff?
          </p>
          <a href="#about" className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Start Your Journey
          </a>
        </div>

        {/* About Section */}
        <section id="about" className="mt-24 pb-20 border-t border-gray-200 dark:border-gray-700 pt-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Bio */}
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                With over 10 years in tech, I've journeyed from network engineering through full-stack development to leading engineering teams. I'm passionate about building high-performing teams that consistently ship quality products without cutting corners. 
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                What drives me? Creating an environment where engineers thrive, innovate, and grow. I believe in pragmatic problem-solving, leveraging AI-assisted tools to amplify team productivity, and fostering a culture where quality and speed aren't opposing forces—they work together.
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
        </section>
      </main>
    </div>
  );
}
