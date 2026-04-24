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

            {/* Certifications */}
            <div className="space-y-8">
              <a href="https://www.credly.com/badges/84b60ed1-8cb4-4823-861b-5205a5a1682f?source=linked_in_profile" target="_blank" rel="noopener noreferrer" className="block group">
                <div className="bg-blue-50 dark:bg-slate-700 p-8 rounded-lg border border-blue-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-300 transition-colors h-full">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Professional Scrum Master I
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Scrum.org Certification
                    </p>
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-xs font-semibold rounded-full">
                      View Credential
                    </span>
                  </div>
                </div>
              </a>

              <a href="https://ambassadors.stem.org.uk/" target="_blank" rel="noopener noreferrer" className="block group">
                <div className="bg-blue-50 dark:bg-slate-700 p-8 rounded-lg border border-blue-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-300 transition-colors h-full">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.29 14.3l-1.58-1.58c-.34.16-.72.26-1.11.26-.39 0-.77-.1-1.11-.26L8.71 16.3 7.3 14.88l2.6-2.59c-.16-.34-.26-.72-.26-1.11 0-.39.1-.77.26-1.11L7.3 9.29l1.41-1.41 1.58 1.58c.34-.16.72-.26 1.11-.26.39 0 .77.1 1.11.26l1.58-1.58 1.41 1.41-1.58 1.58c.16.34.26.72.26 1.11 0 .39-.1.77-.26 1.11l1.58 1.58-1.41 1.41z" />
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      STEM Ambassador
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      STEM Learning Ambassador since 2014
                    </p>
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-xs font-semibold rounded-full">
                      Visit STEM Learning
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="https://rwestwater.github.io/rachwest-flightdeck/ky_r_westwater_2026.pdf" download className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Download CV
            </a>
          </div>
        </section>

        {/* Decorative floating clouds */}
        <div className="fixed bottom-0 left-0 right-0 pointer-events-none overflow-hidden h-32 opacity-60 dark:opacity-40" aria-hidden="true">
          <svg className="cloud cloud-1" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 70 Q30 70 30 50 Q30 35 45 35 Q50 25 65 25 Q80 25 85 35 Q105 35 105 50 Q105 70 85 70 Z" fill="currentColor" className="text-blue-200 dark:text-slate-600" />
          </svg>
          <svg className="cloud cloud-2" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 70 Q30 70 30 50 Q30 35 45 35 Q50 25 65 25 Q80 25 85 35 Q105 35 105 50 Q105 70 85 70 Z" fill="currentColor" className="text-blue-100 dark:text-slate-700" />
          </svg>
          <svg className="cloud cloud-3" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 70 Q30 70 30 50 Q30 35 45 35 Q50 25 65 25 Q80 25 85 35 Q105 35 105 50 Q105 70 85 70 Z" fill="currentColor" className="text-blue-150 dark:text-slate-600" />
          </svg>
          

        </div>
      </main>
    </div>
  );
}
