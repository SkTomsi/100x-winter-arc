import { client } from "@/lib/rpc";
import { useMutation } from "@tanstack/react-query";
import { InferResponseType, InferRequestType } from "hono";

type ResponseType = InferResponseType<(typeof client.api.checkIn)["$post"]>;

type RequestType = InferRequestType<(typeof client.api.checkIn)["$post"]>;

export const useCheckIn = () => {
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => {
      const response = await client.api.checkIn["$post"]({ json });
      return await response.json();
    },
  });

  return mutation;
};
