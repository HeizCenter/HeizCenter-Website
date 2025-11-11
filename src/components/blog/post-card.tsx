import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

export interface PostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: number;
  featured?: boolean;
}

export function PostCard({
  slug,
  title,
  excerpt,
  category,
  date,
  readingTime,
  featured = false,
}: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <Card
        className={`hover:shadow-lg transition-shadow cursor-pointer group h-full ${
          featured ? "border-2 border-blue-200" : ""
        }`}
      >
        <CardHeader>
          <div className="flex items-center justify-between mb-3">
            <Badge variant={featured ? "default" : "secondary"}>
              {category}
            </Badge>
            {featured && (
              <Badge variant="outline" className="border-blue-600 text-blue-600">
                Empfohlen
              </Badge>
            )}
          </div>
          <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 mb-4 line-clamp-3">{excerpt}</p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(date).toLocaleDateString("de-DE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {readingTime} Min.
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
