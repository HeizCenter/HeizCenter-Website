import { Star, Quote } from "lucide-react";

interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

interface CustomerReviewsProps {
  variant?: "cards" | "testimonial" | "compact";
  limit?: number;
}

const mockReviews: Review[] = [
  {
    name: "Familie Müller",
    location: "Augsburg",
    rating: 5,
    text: "Sehr professionelle Beratung und Installation unserer neuen Wärmepumpe. Das Team war pünktlich und hat alles sauber hinterlassen. Top!",
    service: "Wärmepumpe",
    date: "Vor 2 Wochen",
  },
  {
    name: "Thomas Schmidt",
    location: "Ulm",
    rating: 5,
    text: "Notdienst am Sonntag - binnen 2 Stunden war der Techniker da und hat unsere defekte Heizung repariert. Absolut zuverlässig!",
    service: "Notdienst Heizung",
    date: "Vor 1 Monat",
  },
  {
    name: "Anna Weber",
    location: "Memmingen",
    rating: 5,
    text: "Komplette Badsanierung durchgeführt. Tolle Beratung, faire Preise und hervorragende Handwerksarbeit. Sehr empfehlenswert!",
    service: "Badsanierung",
    date: "Vor 3 Wochen",
  },
];

export function CustomerReviews({
  variant = "cards",
  limit = 3,
}: CustomerReviewsProps) {
  const reviews = mockReviews.slice(0, limit);

  if (variant === "compact") {
    return (
      <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-3xl font-bold">4.9</span>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-sm text-slate-600">Aus 60+ Bewertungen</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-lg">100%</p>
            <p className="text-sm text-slate-600">Weiterempfehlung</p>
          </div>
        </div>
        <div className="space-y-2">
          {reviews.slice(0, 2).map((review, index) => (
            <div key={index} className="text-sm">
              <p className="font-semibold">
                {review.name} • {review.location}
              </p>
              <p className="text-slate-600 line-clamp-2">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "testimonial") {
    const featured = reviews[0];
    return (
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200 relative">
        <Quote className="h-12 w-12 text-blue-300 absolute top-4 right-4 opacity-50" />
        <div className="relative z-10">
          <div className="flex text-yellow-500 mb-4">
            {[...Array(featured.rating)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-current" />
            ))}
          </div>
          <p className="text-lg mb-4 text-slate-800 italic">
            &ldquo;{featured.text}&rdquo;
          </p>
          <div>
            <p className="font-bold text-slate-900">{featured.name}</p>
            <p className="text-sm text-slate-600">
              {featured.location} • {featured.service}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Default: cards variant
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex text-yellow-500 mb-3">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <p className="text-slate-700 mb-4">{review.text}</p>
          <div className="border-t border-slate-200 pt-4">
            <p className="font-bold text-sm">{review.name}</p>
            <p className="text-xs text-slate-600">
              {review.location} • {review.service}
            </p>
            <p className="text-xs text-slate-500 mt-1">{review.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

interface ReviewStatsProps {
  totalReviews?: number;
  averageRating?: number;
  recommendationRate?: number;
}

export function ReviewStats({
  totalReviews = 60,
  averageRating = 4.9,
  recommendationRate = 100,
}: ReviewStatsProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      <div className="text-center">
        <div className="flex items-baseline justify-center gap-2 mb-1">
          <span className="text-4xl font-bold text-blue-600">
            {averageRating}
          </span>
          <span className="text-slate-600">/5</span>
        </div>
        <div className="flex text-yellow-500 justify-center mb-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <p className="text-sm text-slate-600">{totalReviews}+ Bewertungen</p>
      </div>

      <div className="h-16 w-px bg-slate-300" />

      <div className="text-center">
        <p className="text-4xl font-bold text-green-600 mb-1">
          {recommendationRate}%
        </p>
        <p className="text-sm text-slate-600">Weiterempfehlung</p>
      </div>

      <div className="h-16 w-px bg-slate-300" />

      <div className="text-center">
        <p className="text-4xl font-bold text-orange-600 mb-1">&lt;24h</p>
        <p className="text-sm text-slate-600">Ø Antwortzeit</p>
      </div>
    </div>
  );
}
