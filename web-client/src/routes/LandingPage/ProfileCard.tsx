import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ErrorBoundary } from "react-error-boundary";
import { ProfileCardContent } from "./ProfileCardContent";
import { FailedToLoadProfileMessage } from "./FailedToLoadProfileMessage";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";

const renderProfileLoadingError = ({
  resetErrorBoundary,
}: {
  resetErrorBoundary: () => void;
}) => <FailedToLoadProfileMessage onRetry={resetErrorBoundary} />;

export const ProfileCard = ({ className }: { className: string }) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Playing As</CardTitle>
      </CardHeader>
      <CardContent>
        <ErrorBoundary
          onReset={reset}
          fallbackRender={renderProfileLoadingError}
        >
          <ProfileCardContent />
        </ErrorBoundary>
      </CardContent>
    </Card>
  );
};
