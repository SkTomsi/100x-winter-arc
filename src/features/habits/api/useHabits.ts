import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

export const useHabits = () => {
  const query = useQuery({
    queryKey: ["habits"],
    queryFn: async () => {
      const response = await client.api.habits["$get"]();

      const { data, success } = await response.json();

      if (!success) {
        throw new Error("Failed to fetch habits");
      }

      return data;
    },
  });

  return query;
};
