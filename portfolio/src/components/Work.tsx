const workExperiences = [
  {
    company: 'Fictional Tech Co.',
    role: 'Frontend Developer',
    duration: 'Jan 2023 - Present',
  },
  {
    company: 'Open Source Initiative',
    role: 'Contributor',
    duration: 'Jun 2022 - Dec 2022',
  },
];

export default function Work() {
  return (
    <section id="work" className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-white mb-6">Work Experience</h2>
      <ul className="space-y-4">
        {workExperiences.map((work) => (
          <li key={work.company} className="bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-white">{work.role}</h3>
            <p className="text-gray-300">{work.company}</p>
            <p className="text-gray-400 text-sm">{work.duration}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
