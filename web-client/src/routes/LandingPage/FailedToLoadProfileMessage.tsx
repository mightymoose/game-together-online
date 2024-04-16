import { Button } from "@/components/ui/button";

export const FailedToLoadProfileMessage = ({
  onRetry,
}: {
  onRetry: () => void;
}) => {
  return (
    <div className="text-destructive border-destructive border rounded-md h-[40px] flex items-center pl-4 justify-between mt-2">
      Failed to load your profile.
      <Button
        onClick={onRetry}
        className="ml-4 text-destructive"
        variant="link"
      >
        Retry
      </Button>
    </div>
  );
};
