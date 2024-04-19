import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreateGameDialog } from "./CreateGameCard/CreateGameDialog";

type CreateGameCardProps = {
  className: string;
};

export const CreateGameCard = ({ className }: CreateGameCardProps) => (
  <div className={className}>
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Create Game</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create A Game</DialogTitle>
        </DialogHeader>
        <CreateGameDialog />
      </DialogContent>
    </Dialog>
  </div>
);
