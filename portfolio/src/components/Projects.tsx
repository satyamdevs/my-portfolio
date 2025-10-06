const projects = [
  {
    name: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my projects and skills.',
    link: '#',
  },
  {
    name: 'Task Manager App',
    description: 'A full-stack task manager with authentication and real-time updates.',
    link: '#',
  },
  {
    name: 'E-commerce Platform',
    description: 'A fictional online store built with Next.js and Tailwind CSS.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            className="p-6 bg-gray-800 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
            <p className="text-gray-300">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
