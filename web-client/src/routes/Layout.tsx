import { Joystick } from "lucide-react";
import { Outlet, Link } from "react-router-dom";
import { ConnectionBadge } from "./Layout/ConnectionBadge";

export const Layout = () => (
  <div className="flex min-h-screen w-full flex-col">
    <header className="h-10 items-center gap-4 bg-background px-4 md:px-6 flex justify-between">
      <Link to="/" className="flex items-center">
        <Joystick className="h-4 w-4 mr-2" />
        <span className="text-sm font-medium leading-none">
          Game Together Online
        </span>
      </Link>

      <ConnectionBadge />
    </header>
    <div className="pt-2">
      <Outlet />
    </div>
  </div>
);
