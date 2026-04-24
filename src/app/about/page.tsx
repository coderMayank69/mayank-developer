export default function About() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <section className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 mb-6">
            Hi! I'm a passionate full-stack developer with a love for building beautiful and functional web applications.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">My Journey</h2>
          <p>
            Started my journey in web development with a curiosity about how websites work. Over the years, I've honed my skills in modern web technologies and best practices.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">What I Do</h2>
          <p>
            I specialize in creating responsive, user-friendly web applications using modern technologies like Next.js, React, and TypeScript.
          </p>
        </section>
      </div>
    </main>
  );
}
