import { AssetsUrl } from "../constants/strings";
import { getFetcher } from "../lib/fetcher";

import  { type SWRMutationConfiguration } from "swr/mutation";
import useMutation from "./useMutation";

export function useStocksMutation<ExtraArgs, Data>(
  key: string,
  config?: SWRMutationConfiguration<Data, Error, string, ExtraArgs>,
) {
    console.log("API is being called",key)
  return useMutation<ExtraArgs, Data>(
    key,
    getFetcher(AssetsUrl),
    config,
  );
}