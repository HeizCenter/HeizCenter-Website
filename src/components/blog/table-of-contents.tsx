"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { List } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export interface TableOfContentsProps {
  selector?: string;
}

export function TableOfContents({ selector = "article" }: TableOfContentsProps) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Extract headings from content
    const contentElement = document.querySelector(selector);
    if (!contentElement) return;

    const headings = contentElement.querySelectorAll("h2, h3");
    const tocItems: TocItem[] = [];

    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      const text = heading.textContent || "";
      const id = heading.id || `heading-${index}`;

      // Set ID if not already set
      if (!heading.id) {
        heading.id = id;
      }

      tocItems.push({ id, text, level });
    });

    setItems(tocItems);

    // Intersection Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -80% 0px",
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [selector]);

  if (items.length === 0) return null;

  return (
    <Card className="sticky top-24">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 font-bold">
          <List className="h-5 w-5" />
          Inhaltsverzeichnis
        </div>
      </CardHeader>
      <CardContent>
        <nav>
          <ul className="space-y-2">
            {items.map((item) => (
              <li
                key={item.id}
                style={{ paddingLeft: `${(item.level - 2) * 16}px` }}
              >
                <a
                  href={`#${item.id}`}
                  className={`text-sm hover:text-[#0F5B78] transition-colors block py-1 ${
                    activeId === item.id
                      ? "text-[#0F5B78] font-semibold"
                      : "text-slate-600"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.id)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </CardContent>
    </Card>
  );
}
