import {FaLinkedin, FaGithub} from 'react-icons/fa'

export default function Footer() {
    const year = new Date().getFullYear();


  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/noah-hickey-ba9019307/",
      icon: <FaLinkedin />
    
    },
    {
      name: "GitHub",
      href: "https://github.com/Noah-Hickey",
      icon: <FaGithub />
    
    },
    
  ];

    return (
        <footer className="mt-16 border-t border-slate-800 bg-slate-950/80">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Noah Hickey
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
              Personal website, digital home, and creative space for my story,
              reviews, projects, and things I enjoy.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.name}
                className="rounded-full border border-slate-800 bg-slate-900/70 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/50 hover:bg-slate-800"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-slate-800 pt-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} Noah Hickey. All rights reserved.</p>

        </div>
      </div>

        
        </footer>
    )
}