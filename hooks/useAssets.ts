import { AssetsUrl } from "../constants/strings";
import { postJsonFetcher } from "../lib/fetcher";

import  { type SWRMutationConfiguration } from "swr/mutation";
import useMutation from "./useMutation";

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