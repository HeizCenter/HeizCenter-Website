import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

export interface AuthorBioProps {
  name: string;
  bio?: string;
  avatar?: string;
}

export function AuthorBio({ name, bio, avatar }: AuthorBioProps) {
  if (!bio) return null;

  return (
    <Card className="bg-slate-50 border-slate-200">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden relative">
            {avatar ? (
              <Image
                src={avatar}
                alt={name}
                fill
                className="object-cover"
              />
            ) : (
              <User className="h-8 w-8 text-slate-500" />
            )}
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Über {name}</h3>
            <p className="text-slate-600">{bio}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
