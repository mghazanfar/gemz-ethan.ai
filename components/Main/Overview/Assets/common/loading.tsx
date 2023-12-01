import { Box, Text } from "@gluestack-ui/themed";
import { ActivityIndicator } from "react-native";

export const Loading = () => {
  return (
    <Box alignItems="center" height={400} flex={1} justifyContent="center">
      <Text>We're fetching your data...</Text>
      <ActivityIndicator />
    </Box>
  );
};
