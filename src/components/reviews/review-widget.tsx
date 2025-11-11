import { Star, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ReviewWidgetProps {
  variant?: "compact" | "detailed";
  showLink?: boolean;
}

export function ReviewWidget({
  variant = "compact",
  showLink = true,
}: ReviewWidgetProps) {
  const stats = {
    totalReviews: 60,
    averageRating: 4.9,
    fiveStarCount: 58,
    fourStarCount: 2,
    threeStarCount: 0,
    twoStarCount: 0,
    oneStarCount: 0,
    googleRating: 4.9,
    recommendationRate: 100,
  };

  if (variant === "compact") {
    return (
      <div className="bg-white rounded-lg border border-slate-200 p-4 inline-block">
        <div className="flex items-center gap-3">
          <div className="text-center">
            <div className="text-3xl font-bold text-slate-900">
              {stats.averageRating}
            </div>
            <div className="flex text-yellow-500 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </div>
          <div className="border-l border-slate-300 pl-3">
            <p className="text-sm font-semibold text-slate-900">
              {stats.totalReviews}+ Bewertungen
            </p>
            <p className="text-xs text-slate-600">Google & ProvenExpert</p>
          </div>
        </div>
        {showLink && (
          <Link
            href="#bewertungen"
            className="text-xs text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1"
          >
            Alle Bewertungen ansehen
            <ExternalLink className="h-3 w-3" />
          </Link>
        )}
      </div>
    );
  }

  // Detailed variant
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-lg">
      <div className="text-center mb-6">
        <div className="flex items-baseline justify-center gap-2 mb-2">
          <span className="text-5xl font-bold text-slate-900">
            {stats.averageRating}
          </span>
          <span className="text-slate-600">/5</span>
        </div>
        <div className="flex text-yellow-500 justify-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-6 w-6 fill-current" />
          ))}
        </div>
        <p className="text-slate-600">
          Basierend auf {stats.totalReviews}+ Bewertungen
        </p>
      </div>

      {/* Rating Distribution */}
      <div className="space-y-2 mb-6">
        {[
          { stars: 5, count: stats.fiveStarCount },
          { stars: 4, count: stats.fourStarCount },
          { stars: 3, count: stats.threeStarCount },
          { stars: 2, count: stats.twoStarCount },
          { stars: 1, count: stats.oneStarCount },
        ].map((item) => {
          const percentage = (item.count / stats.totalReviews) * 100;
          return (
            <div key={item.stars} className="flex items-center gap-2">
              <span className="text-sm font-medium w-8">{item.stars}★</span>
              <div className="flex-1 bg-slate-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-yellow-500 h-full"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="text-sm text-slate-600 w-8 text-right">
                {item.count}
              </span>
            </div>
          );
        })}
      </div>

      {/* Platforms */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center p-3 bg-slate-50 rounded-lg">
          <p className="text-sm text-slate-600 mb-1">Google</p>
          <p className="text-2xl font-bold text-slate-900">
            {stats.googleRating} ★
          </p>
        </div>
        <div className="text-center p-3 bg-slate-50 rounded-lg">
          <p className="text-sm text-slate-600 mb-1">Empfehlung</p>
          <p className="text-2xl font-bold text-green-600">
            {stats.recommendationRate}%
          </p>
        </div>
      </div>

      {showLink && (
        <Link
          href="#bewertungen"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg inline-flex items-center justify-center gap-2 transition-colors"
        >
          Alle Bewertungen lesen
          <ExternalLink className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

interface GoogleReviewBadgeProps {
  variant?: "small" | "large";
}

export function GoogleReviewBadge({ variant = "small" }: GoogleReviewBadgeProps) {
  if (variant === "large") {
    return (
      <div className="inline-flex items-center gap-3 bg-white border-2 border-slate-200 rounded-lg px-4 py-3">
        <div className="text-4xl">⭐</div>
        <div>
          <p className="text-sm text-slate-600">Google Bewertung</p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold">4.9</span>
            <span className="text-slate-600">/5</span>
          </div>
          <p className="text-xs text-slate-500">60+ Rezensionen</p>
        </div>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-3 py-1.5">
      <span className="text-lg">⭐</span>
      <span className="text-sm font-semibold">4.9</span>
      <span className="text-xs text-slate-600">(60+)</span>
    </div>
  );
}
