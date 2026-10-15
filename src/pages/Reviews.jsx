import { reviews } from "../data/reviews";
import ReviewCard from "../components/ReviewCard";
 export default function Reviews() {
  const restaurantReviews = reviews.filter(
    (review) => review.category === "Restaurant"
  );

  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          Reviews
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Places I&apos;ve tried.
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          A personal collection of restaurants I&apos;ve visited, things I&apos;ve
          tried, and honest thoughts along the way. For now, I&apos;m starting
          with restaurants, but I may add games, movies, TV, and products later.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">
          Restaurant Reviews
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {restaurantReviews.map((review) => (
            <ReviewCard
              key={review.id}
              title={review.title}
              category={review.category}
              location={review.location}
              score={review.score}
              maxScore={review.maxScore}
              date={review.date}
              tags={review.tags}
              description={review.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}