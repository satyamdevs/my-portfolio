export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h2 className="text-3xl font-bold text-white mb-6">Contact Me</h2>
      <p className="text-gray-300 mb-6">
        Feel free to reach out via email or check out my profiles below.
      </p>
      <p className="text-gray-300 mb-4">Email: <a href="mailto:satyam@example.com" className="text-blue-500 hover:underline">satyam@example.com</a></p>
      <div className="flex justify-center space-x-6">
        <a href="#" className="text-gray-300 hover:text-white">GitHub</a>
        <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
        <a href="#" className="text-gray-300 hover:text-white">Portfolio</a>
      </div>
    </section>
  );
}
