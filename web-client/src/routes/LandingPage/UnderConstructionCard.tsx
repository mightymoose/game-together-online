import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ConstructionIcon } from "lucide-react";

export const UnderConstructionCard = ({ className }: { className: string }) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex gap-2">
          <ConstructionIcon />
          Under Construction
        </CardTitle>
      </CardHeader>
    </Card>
  );
};
