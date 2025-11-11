import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

export interface PostHeaderProps {
  title: string;
  category: string;
  date: string;
  readingTime: number;
  author: string;
  tags?: string[];
}

export function PostHeader({
  title,
  category,
  date,
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
          {new Date(date).toLocaleDateString("de-DE", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
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
