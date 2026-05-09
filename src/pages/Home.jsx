export default function Home() {
    return (

        <section className="space-y-12">

            <div className="space-y-4">

            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">NH</p>

            <h1 className="text-4xl md:text-5x1 font-bold leaning-tight">Hey, I'm Noah!
            <br />
            Welcome to my personal website.
            </h1>

            <div className="flex justify-center mt-6">
                <div className = "p-0.75 rounded-full bg-linear-to-tr from-teal-400 to-blue-500">
                    <img src="/HomePic_NH.JPG" 
                    alt="Noah Hickey"
                    className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full" 
                    />
                </div>
            </div>

            <p className="max-w-2x1 text-lg text-slate-600 dark:text-slate-300 leading-8">
                I'm a janitorial supervisor and a software development graduate. I have a passion for technology, 
                helping people, history, nature, and learning new things. 
                
                This is my portfolio website where I will share many aspects about myself.
                 Explore the different sections of my site to learn more about my story, read reviews,
                  and how to get in touch with me. I hope you enjoy!
            </p>

            </div>

            <section className="grid gap-4 md:grid-cols-4">
                {[["Developer", "Building software projects and growing my skills."], 
                ["Reviewer", "Reviewing things so you can make informed decisions."],
                ["Creator", "Creating content by sharing my thoughts and experiences."]
            ].map((title,description) => (

                <div key={title} 
                className="rounded-2x1 border border-slate-800 bg-slate-900/70 p-5 transition-transform duration-200 hover:-translate-y-1">

                
                <h2 className = "mb-2 text-lg font-semibold text-white">{title}</h2>
                <p className = "text-sm leading-6 text-slate-300">{description}</p>
                </div>
            ))}

            </section>

        </section>
    );

}