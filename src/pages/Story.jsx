export default function Story() {
    return (
       <section className= "space-y-8">

        <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          My Story
        </p>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <div className="grid gap-8 md:grid-cols-[260px_1fr] items-center">

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
                src="/HomeVideo.mov"
                type="video/quicktime"
                />
            </video>
            </div>
           
            <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-teal-300">
                My Home
            </p>

            <h2 className="text-3xl font-semibold text-white">
                Grand Le Pierre, Newfoundland
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

        </div>
       </section>
    );
}