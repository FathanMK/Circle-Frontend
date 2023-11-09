import axiosInstance from "../../utils/axiosInstance";
import { QueryClient } from "@tanstack/react-query";

const getSomethingQuery = () => ({
  queryKey: ["something"],
  queryFn: async () => {
    const { data } = await axiosInstance.get("/users");

    return data
  },
});

export const getSomethingLoader = (queryClient: QueryClient) => async () => {
  const query = getSomethingQuery();

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};
