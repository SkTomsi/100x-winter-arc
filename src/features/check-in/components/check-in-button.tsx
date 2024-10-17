"use client";

import { Button } from "@/components/ui/button";
import { Check, Loader } from "lucide-react";
import { useCheckIn } from "../api/use-check-in";
import { useQueryClient } from "@tanstack/react-query";

export const CheckInButton = ({
  habitId,
  disabled,
}: {
  habitId: string;
  disabled: boolean;
}) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useCheckIn();

  const handleCheckIn = () => {
    mutate(
      { json: { habitId } },
      {
        onSuccess: () => {
          if (!isPending) {
            queryClient.invalidateQueries({ queryKey: ["habits"] });
          }
        },
      }
    );
  };

  return (
    <Button
      variant={`${disabled ? "outline" : "default"}`}
      className={`dark:text-white text-zinc-600  p-2 ${
        disabled ? "shadow-none" : "shadow-xl text-white"
      }`}
      onClick={handleCheckIn}
      disabled={isPending || disabled}
    >
      {isPending ? <Loader className="animate-spin " /> : <Check />}
    </Button>
  );
};
