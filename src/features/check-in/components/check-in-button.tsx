"use client";

import { Button } from "@/components/ui/button";
import { Check, Loader2 } from "lucide-react";
import { useCheckIn } from "../api/use-check-in";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

export const CheckInButton = ({
  habitId,
  disabled,
}: {
  habitId: string;
  disabled: boolean;
}) => {
  const queryClient = useQueryClient();
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  const { mutate, isPending } = useCheckIn();

  useEffect(() => {
    if (disabled) {
      setIsCheckedIn(true);
    }
  }, [disabled]);

  const handleCheckIn = () => {
    mutate(
      { json: { habitId } },
      {
        onSuccess: () => {
          setIsCheckedIn(true);
          if (!isPending) {
            queryClient.invalidateQueries({ queryKey: ["habits"] });
          }
        },
      }
    );
  };

  return (
    <Button
      variant={`${isCheckedIn ? "outline" : "default"}`}
      className={`dark:text-white text-zinc-600  p-2 ${
        isCheckedIn ? "shadow-none" : "shadow-xl text-white"
      }`}
      onClick={handleCheckIn}
      disabled={isPending || isCheckedIn || disabled}
    >
      {isPending ? <Loader2 className="animate-spin " /> : <Check />}
    </Button>
  );
};
