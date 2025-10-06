const techs = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Git'];

export default function TechStack() {
  return (
    <section id="techstack" className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-white mb-6">Tech Stack</h2>
      <div className="flex flex-wrap gap-4">
        {techs.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 bg-gray-800 text-gray-200 rounded-lg shadow hover:bg-gray-700 transition"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
