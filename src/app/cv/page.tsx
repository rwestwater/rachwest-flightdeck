export default function CV() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            ✈️ Rachel Westwater
          </h1>
          <div className="flex gap-8">
            <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Home
            </a>
            <a href="/cv" className="text-blue-600 dark:text-blue-400 font-semibold">
              CV
            </a>
          </div>
        </div>
      </nav>

      {/* CV Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Rachel Westwater
          </h1>
          <h2 className="text-xl text-blue-600 dark:text-blue-400 mb-4">
            Engineering Manager & Full-Stack Developer
          </h2>
          <div className="text-gray-600 dark:text-gray-400 space-y-1">
            <p>Edinburgh, Scotland • Open to remote UK opportunities</p>
            <p>rachel.westwater@example.com • linkedin.com/in/rachelwestwater</p>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
            Professional Summary
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Experienced Engineering Manager with over 10 years in technology, specializing in building high-performing teams that deliver customer-focused products at speed. Strong background in full-stack development, network engineering, and agile methodologies. Passionate about fostering innovation, optimizing workflows, and leveraging AI-assisted tools to enhance team productivity.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
            Professional Experience
          </h3>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Engineering Manager
              </h4>
              <span className="text-gray-600 dark:text-gray-400">May 2022 - Present</span>
            </div>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Current Company</p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1 ml-4">
              <li>• Lead cross-functional engineering teams delivering high-quality software products</li>
              <li>• Implement agile methodologies and optimize development workflows</li>
              <li>• Mentor engineers and foster a culture of continuous improvement</li>
              <li>• Collaborate with stakeholders to align technical strategy with business objectives</li>
              <li>• Champion adoption of AI-assisted tools for enhanced productivity</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Senior Full-Stack Developer
              </h4>
              <span className="text-gray-600 dark:text-gray-400">2018 - 2022</span>
            </div>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Bluebox Aviation</p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1 ml-4">
              <li>• Developed and maintained aviation software systems using modern web technologies</li>
              <li>• Built scalable APIs and microservices architecture</li>
              <li>• Led frontend development initiatives with React and TypeScript</li>
              <li>• Collaborated with UX/UI teams to deliver exceptional user experiences</li>
              <li>• Implemented CI/CD pipelines and automated testing strategies</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Network Engineer
              </h4>
              <span className="text-gray-600 dark:text-gray-400">2014 - 2018</span>
            </div>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Tech Solutions Ltd</p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-1 ml-4">
              <li>• Designed and implemented enterprise network infrastructure</li>
              <li>• Managed network security and compliance requirements</li>
              <li>• Troubleshot complex network issues and optimized performance</li>
              <li>• Collaborated with development teams on network-related projects</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
            Technical Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'].map(skill => (
                  <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Frameworks & Libraries</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'Express', 'Django', 'Spring Boot'].map(skill => (
                  <span key={skill} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Databases & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS'].map(skill => (
                  <span key={skill} className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Leadership & Methodologies</h4>
              <div className="flex flex-wrap gap-2">
                {['Agile/Scrum', 'Team Leadership', 'Mentoring', 'CI/CD', 'TDD', 'Code Review'].map(skill => (
                  <span key={skill} className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
            Education
          </h3>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                BSc Applied Networking Technologies
              </h4>
              <span className="text-gray-600 dark:text-gray-400">2010 - 2014</span>
            </div>
            <p className="text-blue-600 dark:text-blue-400 font-medium">University Name</p>
            <p className="text-gray-700 dark:text-gray-300 mt-1">
              First Class Honours. Specialized in network architecture, security, and distributed systems.
            </p>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
            Certifications & Professional Development
          </h3>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-medium text-gray-900 dark:text-white">AWS Certified Solutions Architect</span>
              <span className="text-gray-600 dark:text-gray-400">2023</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-900 dark:text-white">Certified Scrum Master (CSM)</span>
              <span className="text-gray-600 dark:text-gray-400">2022</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-900 dark:text-white">Google Cloud Professional Developer</span>
              <span className="text-gray-600 dark:text-gray-400">2021</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600 dark:text-gray-400 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p>Available for new opportunities • Open to remote work across the UK</p>
        </footer>
      </main>
    </div>
  );
}