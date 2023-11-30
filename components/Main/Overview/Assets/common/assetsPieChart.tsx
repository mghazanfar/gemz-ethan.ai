import React from "react";
import { StyleSheet } from "react-native";
import { VictoryPie, VictoryChart, VictoryAxis, VictoryLabel } from "victory-native";
import {
    Box, Text
} from "@gluestack-ui/themed";
const data = [
    { x: "30%", y: 30, color: "white" },
    { x: "33%", y: 33, color: "white" },
    { x: "14%", y: 14, color: "black" },
    { x: "23%", y: 23, color: "black" }
];

const units = [
    { color: "#004793", text: "Mutual Funds" },
    { color: "#006CDB", text: "Equity" },
    { color: "#7ABAFA", text: "Hybrid" },
    { color: "#C9E3FC", text: "Art, Wines & Craft" }]

export const AssetsPieChart = () => {
    return (
        <Box style={styles.container}>
            <VictoryChart height={400}>
                <VictoryAxis
                    style={{
                        axis: { stroke: "transparent" },
                        ticks: { stroke: "transparent" },
                        tickLabels: { fill: "transparent" }
                    }}
                />
                <VictoryPie
                    padAngle={2}
                    innerRadius={80}
                    data={data}
                    labelRadius={({ innerRadius }: any) => innerRadius + 30}
                    cornerRadius={6}
                    colorScale={units.map(unit => unit.color)}
                    style={{ labels: { fill: "white", fontSize: 15, fontWeight: 600, fontFamily: "Inter" } }}
                />
                <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 18, fontFamily: "Inter", fontWeight: "600" }}
                    x={220} y={200}
                    text="$34.56mn"
                />
            </VictoryChart>

            <Box flex={1} flexDirection="row" flexWrap="wrap" width={'80%'} gap={20} justifyContent="space-between">
                {units.map(unit =>
                    <Box flexDirection="row" alignItems="center" width="46%">
                        <Box width={15} height={15} borderRadius={8} bg={unit.color} mr={6} ></Box>
                        <Text fontSize={15} lineHeight={18} fontWeight={"400"} fontFamily="Inter">{unit.text}</Text>
                    </Box>)}

            </Box>
        </Box>
    );

}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        top: -43
    }
});
