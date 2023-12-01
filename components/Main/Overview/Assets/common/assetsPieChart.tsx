import React from "react";
import { StyleSheet } from "react-native";
import {
  VictoryPie,
  VictoryChart,
  VictoryAxis,
  VictoryLabel,
} from "victory-native";
import { Box, Text } from "@gluestack-ui/themed";

const colors = ["#004793", "#006CDB", "#7ABAFA", "#C9E3FC"];

export const AssetsPieChart = ({ data, total }: any) => {
  const pieData = data.map((item: any, index: number) => ({
    x: `${parseInt(
      (((Math.abs(item!.value as any) / total) as any) * 100) as any
    )}%`,
    y: Math.abs(item!.value),
    color: colors[index],
    text: item!.type,
  }));
  return (
    <Box style={styles.container}>
      <VictoryChart height={400}>
        <VictoryAxis
          style={{
            axis: { stroke: "transparent" },
            ticks: { stroke: "transparent" },
            tickLabels: { fill: "transparent" },
          }}
        />
        <VictoryPie
          padAngle={2}
          innerRadius={80}
          data={pieData}
          labelRadius={({ innerRadius }: any) => innerRadius + 30}
          cornerRadius={6}
          colorScale={pieData.map((unit: any) => unit.color)}
          style={{
            labels: {
              fill: "white",
              fontSize: 15,
              fontWeight: 600,
              fontFamily: "Inter",
            },
          }}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 18, fontFamily: "Inter", fontWeight: "600" }}
          x={220}
          y={200}
          text={`${parseFloat((total / 1000000) as any).toFixed(2)}mn`}
        />
      </VictoryChart>

      <Box
        flex={1}
        flexDirection="row"
        flexWrap="wrap"
        width={"100%"}
        gap={20}
        justifyContent="space-between"
      >
        {pieData.map((unit: any) => (
          <Box flexDirection="row" alignItems="center" width="46%">
            <Box
              width={15}
              height={15}
              borderRadius={8}
              bg={unit.color}
              mr={6}
            ></Box>
            <Text
              fontSize={15}
              lineHeight={18}
              fontWeight={"400"}
              fontFamily="Inter"
            >
              {unit.text}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    top: -43,
  },
});