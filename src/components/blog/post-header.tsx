import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, RefreshCw, User } from "lucide-react";

export interface PostHeaderProps {
  title: string;
  category: string;
  date: string;
  updated?: string;
  readingTime: number;
  author: string;
  tags?: string[];
}

function formatDate(value: string): string {
  return new Date(value).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function PostHeader({
  title,
  category,
  date,
  updated,
  readingTime,
  author,
  tags = [],
}: PostHeaderProps) {
  return (
    <header className="mb-8">
      <div className="mb-4">
        <Badge className="mb-4">{category}</Badge>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>

      <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-6">
        <span className="flex items-center gap-2">
          <User className="h-5 w-5" />
          {author}
        </span>
        <span className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          <time dateTime={date}>{formatDate(date)}</time>
        </span>
        {/* Sichtbares Aktualisierungsdatum: sonst wirkt ein überarbeiteter Ratgeber wie vom Januar */}
        {updated && updated !== date && (
          <span className="flex items-center gap-2">
            <RefreshCw className="h-5 w-5" />
            <span>
              aktualisiert am <time dateTime={updated}>{formatDate(updated)}</time>
            </span>
          </span>
        )}
        <span className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          {readingTime} Min. Lesezeit
        </span>
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </header>
  );
}
