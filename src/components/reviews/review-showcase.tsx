"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  verified: boolean;
  avatar?: string;
}

const mockReviews: Review[] = [
  {
    id: 1,
    name: "Familie Müller",
    location: "Augsburg",
    rating: 5,
    text: "Sehr professionelle Beratung und Installation unserer neuen Wärmepumpe. Das Team war pünktlich, freundlich und hat alles sauber hinterlassen. Die Förderung wurde komplett für uns abgewickelt. Absolut empfehlenswert!",
    service: "Wärmepumpe Installation",
    date: "2025-01-05",
    verified: true,
  },
  {
    id: 2,
    name: "Thomas Schmidt",
    location: "Ulm",
    rating: 5,
    text: "Notdienst am Sonntagabend - binnen 2 Stunden war der Techniker da und hat unsere defekte Heizung repariert. Faire Preise und absolut zuverlässig. Vielen Dank!",
    service: "Notdienst Heizung",
    date: "2025-01-10",
    verified: true,
  },
  {
    id: 3,
    name: "Anna Weber",
    location: "Memmingen",
    rating: 5,
    text: "Komplette Badsanierung durchgeführt. Von der Planung bis zur Umsetzung alles top. Die Handwerker waren sehr sauber und zuverlässig. Das Ergebnis übertrifft unsere Erwartungen!",
    service: "Badsanierung",
    date: "2024-12-28",
    verified: true,
  },
  {
    id: 4,
    name: "Michael Bauer",
    location: "Neu-Ulm",
    rating: 5,
    text: "Unsere alte Gasheizung wurde durch eine moderne Brennwertheizung ersetzt. Alles lief reibungslos ab. Sehr gute Beratung zu Fördermöglichkeiten!",
    service: "Heizungsmodernisierung",
    date: "2024-12-15",
    verified: true,
  },
  {
    id: 5,
    name: "Sarah Klein",
    location: "Augsburg",
    rating: 5,
    text: "Klimaanlage für unser Büro installiert. Top Service, faire Preise und sehr kompetente Beratung. Unsere Mitarbeiter sind begeistert vom angenehmen Raumklima.",
    service: "Klimaanlage Installation",
    date: "2024-12-20",
    verified: true,
  },
];

interface ReviewShowcaseProps {
  variant?: "carousel" | "grid" | "featured";
  limit?: number;
}

export function ReviewShowcase({
  variant = "carousel",
  limit = 5,
}: ReviewShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = mockReviews.slice(0, limit);

  useEffect(() => {
    if (!isAutoPlaying || variant !== "carousel") return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, variant, reviews.length]);

  const nextReview = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("de-DE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  if (variant === "grid") {
    return (
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
          >
            <div className="flex text-yellow-500 mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="text-slate-700 mb-4 line-clamp-4">{review.text}</p>
            <div className="border-t border-slate-200 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold flex-shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm">{review.name}</p>
                  <p className="text-xs text-slate-600">{review.location}</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-3">{review.service}</p>
              {review.verified && (
                <span className="inline-block mt-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                  ✓ Verifiziert
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "featured") {
    const featured = reviews[0];
    return (
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 md:p-12 text-white relative overflow-hidden">
        <Quote className="h-16 w-16 text-white/20 absolute top-6 right-6" />
        <div className="relative z-10">
          <div className="flex text-yellow-400 mb-4">
            {[...Array(featured.rating)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-current" />
            ))}
          </div>
          <p className="text-xl md:text-2xl mb-6 italic leading-relaxed">
            &ldquo;{featured.text}&rdquo;
          </p>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
              {featured.name.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-lg">{featured.name}</p>
              <p className="text-blue-200">
                {featured.location} • {featured.service}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default: carousel variant
  const currentReview = reviews[currentIndex];

  return (
    <div className="relative">
      <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-8 md:p-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center text-yellow-500 mb-6">
            {[...Array(currentReview.rating)].map((_, i) => (
              <Star key={i} className="h-7 w-7 fill-current" />
            ))}
          </div>

          <Quote className="h-12 w-12 text-blue-200 mx-auto mb-4" />

          <p className="text-lg md:text-xl text-slate-700 text-center mb-6 leading-relaxed">
            {currentReview.text}
          </p>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl mb-3">
              {currentReview.name.charAt(0)}
            </div>
            <p className="font-bold text-lg">{currentReview.name}</p>
            <p className="text-slate-600">{currentReview.location}</p>
            <p className="text-sm text-slate-500 mt-2">
              {currentReview.service} • {formatDate(currentReview.date)}
            </p>
            {currentReview.verified && (
              <span className="inline-block mt-2 text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full">
                ✓ Verifizierte Bewertung
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prevReview}
          className="w-10 h-10 rounded-full bg-white border-2 border-slate-300 hover:border-blue-600 transition-colors flex items-center justify-center"
          aria-label="Vorherige Bewertung"
        >
          <ChevronLeft className="h-5 w-5 text-slate-600" />
        </button>

        <div className="flex gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-blue-600"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Zur Bewertung ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextReview}
          className="w-10 h-10 rounded-full bg-white border-2 border-slate-300 hover:border-blue-600 transition-colors flex items-center justify-center"
          aria-label="Nächste Bewertung"
        >
          <ChevronRight className="h-5 w-5 text-slate-600" />
        </button>
      </div>
    </div>
  );
}
