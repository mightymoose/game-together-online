import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useUpdateCurrentUserProfile } from "./use-update-current-user-profile";

const playerProfileSchema = z.object({
  username: z.string().min(1),
});

export const ProfileForm = ({
  defaultValues,
}: {
  defaultValues: z.infer<typeof playerProfileSchema>;
}) => {
  const updateCurrentUserProfile = useUpdateCurrentUserProfile();
  const form = useForm<z.infer<typeof playerProfileSchema>>({
    defaultValues,
    resolver: zodResolver(playerProfileSchema),
  });

  const updateProfile = useDebouncedCallback(() => {
    const profile = form.getValues();
    return updateCurrentUserProfile.mutate(profile);
  }, 500);

  return (
    <Form {...form}>
      <form onChange={updateProfile}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Username</FormLabel>
              <FormControl>
                <Input placeholder={defaultValues.username} {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
