import { JoinGameCard } from "./LandingPage/JoinGameCard";
import { ProfileCard } from "./LandingPage/ProfileCard";
import { CreateGameCard } from "./LandingPage/CreateGameCard";

function LandingPage() {
  return (
    <div className="m-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mt-4">
        Game Together Online
      </h1>

      <div className="grid grid-cols-7 gap-4 mt-8 items-start">
        <ProfileCard className="col-span-2" />
        <JoinGameCard className="col-span-3" />
        <CreateGameCard className="col-span-2" />
      </div>
    </div>
  );
}

export default LandingPage;
