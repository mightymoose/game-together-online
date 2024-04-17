import { SpadesButton } from "./QuickPairing/SpadesButton";

export const QuickPairing = ({
  onCreate,
}: {
  onCreate: () => Promise<unknown>;
}) => (
  <div className="grid gap-4 grid-cols-3">
    <SpadesButton onCreate={onCreate} />
  </div>
);
