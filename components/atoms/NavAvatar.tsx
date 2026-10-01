import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export function NavAvatar() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-6 md:gap-12">
      <Link
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
          />
          <AvatarFallback>EA</AvatarFallback>
        </Avatar>
      </Link>
    </div>
  );
}
