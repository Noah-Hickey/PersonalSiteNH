export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-16 border-t border-slate-800 bg-slate-950/80">

            <div className="max-w-6x1 mx-auto px-6 py-8">

                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                <h2 className="text-lg font-semibold text-white">
                Noah Hickey
                </h2>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
                Personal website for you to get to know me better.
                </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">

            <a href="https://www.linkedin.com/in/noah-hickey-ba9019307/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition-colors hover:text-teal-300"
            >
            LinkedIn
            </a>

             <a
              href="https://github.com/Noah-Hickey"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition-colors hover:text-teal-300"
            >
              GitHub
            </a>

          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-slate-800 pt-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} Noah Hickey. All rights reserved.</p>

        </div>
      </div>

        
        </footer>
    )
}