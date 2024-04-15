import { Skeleton } from "@/components/ui/skeleton";
import { ProfileForm } from "./ProfileForm";
import { useCurrentUserProfile } from "@/lib/use-current-user-profile";

export const ProfileCardContent = () => {
  const playerProfileRequest = useCurrentUserProfile();

  return playerProfileRequest.isSuccess ? (
    <ProfileForm defaultValues={playerProfileRequest.data} />
  ) : (
    <Skeleton className="h-[40px] mt-2" aria-label="Loading your profile" />
  );
};
