import React, { useEffect } from "react";
import { Box } from "@gluestack-ui/themed";
import { AssetsPieChart } from "./assetsPieChart";
import { boxElevation } from "./utils";
import { AssetCard } from "./assetCard";
import { useAssetsMutation } from "../../../../../hooks/useAssets";
import { Text } from "@gluestack-ui/themed";
import { ActivityIndicator } from "react-native";

export const Overview = () => {
  const { trigger, isMutating, data } = useAssetsMutation<any, any>(
    "/gross-allocation",
    {
      onSuccess: (_data) => {
        console.log("Data calling API", data[0]!.data);
      },
      onError: (_data) => {
        console.log("Error calling API", _data);
      },
    }
  );

  useEffect(() => {
    trigger({
      client_id: "dummy",
      custodian_id: "dummy",
      start_date: "dummy",
      end_date: "dummy",
    });
  }, []);

  const calculateTotal = (total: any, num: any) => {
    return Math.abs(total!.value ? total!.value : total) + Math.abs(num!.value);
  };

  const dataToVisualize = data ? data[0]!.data : [{}];
  const totalAmount =
    dataToVisualize && dataToVisualize!.reduce(calculateTotal);

  return (
    <Box>
      {isMutating ? (
        <Box alignItems="center" height={400} flex={1} justifyContent="center">
          <Text>We're fetching your data...</Text>
          <ActivityIndicator />
        </Box>
      ) : (
        <>
          <Box
            p={33}
            pb={0}
            bg="$white"
            my={16}
            style={boxElevation}
            borderRadius={6}
          >
            <AssetsPieChart data={dataToVisualize} total={totalAmount} />
          </Box>
          {dataToVisualize.map((item: any) => (
            <AssetCard
              mb={16}
              title={item!.type}
              value={parseInt(Math.abs(item!.value as any) as any, 10)}
              total={totalAmount}
            />
          ))}
        </>
      )}
    </Box>
  );
};
