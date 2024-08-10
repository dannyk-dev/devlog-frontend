import useSWR from "swr";
import { fetcher } from "../../api";

export const usePosts = () => {
  return useSWR("/posts", fetcher, {
    suspense: false,
  });
};
