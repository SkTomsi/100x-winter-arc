import { InferResponseType, InferRequestType } from "hono";
import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

type RequestType = InferRequestType<(typeof client.api.habits.create)["$post"]>;
type ResponseType = InferResponseType<
  (typeof client.api.habits.create)["$post"]
>;

export const useCreateHabit = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => {
      const response = await client.api.habits.create["$post"]({ json });

      return await response.json();
    },
    onSuccess: () => {
      toast.success("Your new habit has been created!");
      queryClient.invalidateQueries({ queryKey: ["habits"] });
    },
  });

  return mutation;
};
