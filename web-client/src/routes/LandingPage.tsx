import { ProfileCard } from "./LandingPage/ProfileCard";
import { UnderConstructionCard } from "./LandingPage/UnderConstructionCard";

function LandingPage() {
  return (
    <div className="m-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mt-4">
        Game Together Online
      </h1>

      <div className="grid grid-cols-7 gap-4 mt-8">
        <ProfileCard className="col-span-2" />
        <UnderConstructionCard className="col-span-3" />
        <UnderConstructionCard className="col-span-2" />
      </div>
    </div>
  );
}

export default LandingPage;
