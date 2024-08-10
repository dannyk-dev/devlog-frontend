import useSWR from "swr";
import { fetcher, hasToken } from "../../api";
import useSWRMutation from "swr/mutation";
import { postFetcher } from "../../api/auth";

export const useUser = () => {
  // const token = hasToken();
  // console.log(hasToken());
  const { data, error, isLoading, mutate } = useSWR(
    hasToken() ? "/user" : null,
    fetcher,
    {
      // errorRetryCount: 3,
      revalidateOnMount: true,
    }
  );

  return {
    user: data,
    isError: error,
    isLoading,
    mutate,
  };
};

export const useLoginUser = () => {
  return useSWRMutation("/login", postFetcher, {
    onError: (err) => {
      console.log(err);
    },
    onSuccess: ({ token }) => {
      localStorage.setItem("auth_token", JSON.stringify(token));
    },
  });
};
