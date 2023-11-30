import React from 'react'
import {
    Box
} from "@gluestack-ui/themed";
import { AssetsPieChart } from './assetsPieChart'
import { boxElevation } from './utils'
import { AssetCard } from './assetCard';

export const Overview = () => <Box>
    <Box p={33} pb={0} bg="$white" my={16} style={boxElevation} borderRadius={6}>
        <AssetsPieChart />
    </Box>
    <AssetCard mb={16} />
</Box>;