import Image from "next/image";
import Navbar from "./Components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 pt-24 bg-slate-900">
      {/* <div className="font-sans grid grid-rows-[1fr_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 pt-24 bg-slate-900"> */}

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">


        <div className="w-full">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-300 mb-4 text-center sm:text-left">
            Hi, I'm Alejandro Tejeira. Welcome to my portfolio!
          </h1>
        </div>

        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left text-white">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-white/[.15] dark:bg-white/[.15] font-mono font-semibold px-1 py-0.5 rounded text-white">
              src/app/page.js
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>

    {/* About Section */}
    <section id="about" className="min-h-screen p-8 sm:p-20 bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-100">About Me</h2>
        <div className="text-center">
          <p className="text-lg text-slate-300 mb-6">
            Welcome to my portfolio! I'm a passionate developer who loves creating 
            amazing web experiences.
          </p>
          <p className="text-slate-400">
            This section will contain your bio, skills, and background information.
          </p>
        </div>
      </div>
    </section>

    {/* Projects Section */}
    <section id="projects" className="min-h-screen p-8 sm:p-20 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-100">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card Template */}
          <div className="bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-600">
            <h3 className="text-xl font-semibold mb-3 text-slate-100">Project Name</h3>
            <p className="text-slate-300 mb-4">
              Project description goes here. Explain what it does and the technologies used.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-slate-600 text-slate-100 rounded text-sm">React</span>
              <span className="px-2 py-1 bg-slate-600 text-slate-100 rounded text-sm">Next.js</span>
            </div>
          </div>
          
          {/* Add more project cards as needed */}
          <div className="bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-600">
            <h3 className="text-xl font-semibold mb-3 text-slate-100">Another Project</h3>
            <p className="text-slate-300 mb-4">
              Another project description. You can duplicate this structure for all your projects.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-slate-600 text-slate-100 rounded text-sm">JavaScript</span>
              <span className="px-2 py-1 bg-slate-600 text-slate-100 rounded text-sm">CSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="min-h-screen p-8 sm:p-20 bg-slate-800">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-slate-100">Get In Touch</h2>
        <p className="text-lg text-slate-300 mb-8">
          I'm always open to discussing new opportunities and interesting projects.
        </p>
        <div className="flex justify-center gap-6">
          <a 
            href="mailto:your.email@example.com"
            className="rounded-full border border-slate-600 transition-colors flex items-center justify-center hover:bg-slate-700 font-medium text-sm sm:text-base h-12 px-6 text-slate-100"
          >
            Email Me
          </a>
          <a 
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-600 transition-colors flex items-center justify-center hover:bg-slate-700 font-medium text-sm sm:text-base h-12 px-6 text-slate-100"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
