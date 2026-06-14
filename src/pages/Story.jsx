export default function Story() {
    return (
       <section className= "space-y-8">

        <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          My Story
        </p>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <div className="grid gap-8 md:grid-cols-[280px_1fr] items-center">

            {/* Video */}
            <div className="flex justify-center">
            <video
                className="w-[240px] h-[420px] rounded-2xl object-cover border border-slate-700 shadow-lg"
                autoPlay
                muted
                loop
                playsInline
            >
                <source
                src="/HomeVideo.mp4"
                type="video/mp4"
                />
            </video>
            </div>
           
            <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-teal-300">
                My Home
            </p>

            <h2 className="text-3xl font-semibold text-white">
                Grand Le Pierre, Newfoundland 📍
            </h2>

            <p className="leading-8 text-slate-300">
                I’m proudly a Newfoundlander and appreciate its uniqueness. I grew up in a 
                small fishing community of under 300 people. My dad being a fisherman allowed me 
                to experience the joy of fishing, boat rides, hunting, beachcombing, and ATV rides.
                 It will always be home to me. It shaped the person who I am and allowed me to have 
                 experiences that I will never forget and cherish forever.
            </p>

            <p className="leading-8 text-slate-300">
                Whether it’s the scenery, traditions, or welcoming nature of people
                here, Newfoundland continues to inspire who I am and the things I care
                about.
            </p>
            </div>

        </div>
        </div>

         <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <div className="grid gap-8 md:grid-cols-[1fr_280px] items-center">
           
            <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-teal-300">
                My Journey
            </p>

            <h2 className="text-3xl font-semibold text-white">
              Travel, Experiences, & Shifting Perspective 🚘✈️📱🎓
            </h2>

            <p className="leading-8 text-slate-300">
              Throughout my life I travelled to many places. In Canada I have visited many parts of Newfoundland, 
              Nova Scotia, Prince Edward Island, multiple trips to Ontario, Alberta, and British Columbia.
            </p>

             <p className="leading-8 text-slate-300">
              Other places I have travelled outside of Canada include California, Montana, Saint Pierre et Miquelon,
              and Mexico. I enjoy travelling and would love to do more in the future. It is very rewarding to 
              gain knowledge, experiences, and learn about different cultures.
            </p>

            <p className="leading-8 text-slate-300">
               After graduating high school, I did 3 months of student work in my hometown of Grand Le Pierre. 
               I completed the CAS Transfer Year for 2 semesters and gained a taste of 
               living on my own at the age of 18. I worked during a season of lobster fishing in 2017.
                I then decided to pursue nursing but after 2 semesters of trying, I 
               realized it was not for me. I then decided to take time off to work and discover what I wanted to do.
               I worked as a janitor for a couple of years and then was promoted to janitorial supervisor in 2022.
               I eventually decided to try software development in 2024 as I was proficient in computer skills
               and wanted to try something I felt I was well suited for. I graduated from software development
               in August 2025 with an honors diploma.
            </p>

            </div>

          <div className="flex justify-center md:justify-end">
            <img src="/Graduation_NH.JPEG" alt="Graduation Picture"
            className="w-[240px] h-[340px] rounded-2xl object-cover border border-slate-700 shadow-lg transition-transform duration-300"
            />

          

          </div>
        </div>
        </div>


        </div>
       </section>
    );
}