import React from 'react'

import {
    Text,
    Box
} from "@gluestack-ui/themed";
import { boxElevation } from './utils'
import { VictoryPie, VictoryChart, VictoryAxis, VictoryLabel } from "victory-native";

const sampleData = [
    { x: "70%", y: 70, color: "white" },
    { x: "30%", y: 30, color: "white" },
];

export const AssetCard = ({ mb }: any) =>
    <Box mb={mb} px={36} py={14} flex={1} style={boxElevation} borderRadius={6} bg="$white" flexDirection="row" justifyContent="space-between" alignItems="center">
        <Box>
            <Text fontWeight="400" fontSize={15} lineHeight={22.5}>Mutual Funds</Text>
            <Text fontWeight="400" fontSize={15} lineHeight={22.5}>SGD $ 14,00,000</Text>
        </Box>
        <Box width={100} left={-40} top={-40} maxHeight={70}>
            <VictoryChart
                width={200}
                height={200}>
                <VictoryAxis
                    style={{
                        axis: { stroke: "transparent" },
                        ticks: { stroke: "transparent" },
                        tickLabels: { fill: "transparent" }
                    }}
                />
                <VictoryPie
                    startAngle={90}
                    endAngle={-90}
                    data={sampleData}
                    innerRadius={35}
                    width={200}
                    height={200}
                    colorScale={["#F1F3FF", "#004793"]}
                    labels={() => null}

                />
                <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 12, fontFamily: "Inter", fontWeight: "500" }}
                    x={100} y={90}
                    text="30%"
                />
            </VictoryChart>
        </Box>
    </Box>
