export default function ReviewCard({
    title,
    category,
    location,
    score,
    maxScore,
    date,
    tags,
    description
}) {
    return (
      <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-teal-300">
            {category}
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-white">
            {title}
          </h2>

          {location && (
            <p className="mt-1 text-sm text-slate-400">
              {location}
            </p>
          )}

          {date && (
            <p className="mt-1 text-sm text-slate-500">
              Reviewed: {date}
            </p>
          )}
        </div>

        <div className="rounded-full border border-teal-400/40 bg-slate-950 px-4 py-2 text-lg font-bold text-teal-300">
          {score}/{maxScore}
        </div>
      </div>

      <p className="mt-5 leading-8 text-slate-300">
        {description}
      </p>

      {tags?.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
    );
}