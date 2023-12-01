import { AssetsUrl } from "../constants/strings";
import { postJsonFetcher } from "../lib/fetcher";

import useSWRMutation, { type SWRMutationConfiguration } from "swr/mutation";

export default function useMutation<ExtraArgs, Data>(
  key: string,
  fetcher: (_key: string, _options?: { arg: ExtraArgs }) => Promise<Data>,
  config?: SWRMutationConfiguration<Data, Error, string, ExtraArgs>,
) {
  return useSWRMutation<Data, Error, string, ExtraArgs>(key, fetcher, {
    onError(error) {
      console.warn(error.message);
    },
    throwOnError: false,
    ...config,
  });
}

export function useAssetsMutation<ExtraArgs, Data>(
  key: string,
  config?: SWRMutationConfiguration<Data, Error, string, ExtraArgs>,
) {
    console.log("API is being called",key)
  return useMutation<ExtraArgs, Data>(
    key,
    postJsonFetcher(AssetsUrl),
    config,
  );
}