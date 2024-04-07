import { HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { HoverCard } from "@radix-ui/react-hover-card";
import { Joystick, RadioTower } from "lucide-react";
import { Outlet, Link } from "react-router-dom";
import { ConnectionCard } from "./Layout/ConnectionCard";

export const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="flex h-10 items-center gap-4 bg-background px-4 md:px-6 flex justify-between">
        <Link to="/" className="flex items-center">
          <Joystick className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium leading-none">
            Game Together Online
          </span>
        </Link>

        <HoverCard>
          <HoverCardTrigger>
            <RadioTower className="h-4 w-4 text-green-500" />
          </HoverCardTrigger>
          <HoverCardContent className="mx-2">
            <ConnectionCard />
          </HoverCardContent>
        </HoverCard>
      </header>
      <div className="pt-2">
        <Outlet />
      </div>
    </div>
  );
};
