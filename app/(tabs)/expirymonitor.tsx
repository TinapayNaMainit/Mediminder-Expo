import { View, Text } from "react-native";

export default function ExpiryMonitor() {
  return (
    <View className="flex-1 bg-gray-50 px-6 py-10">
      <Text className="text-3xl font-bold text-blue-600 mb-4">
        Expiry Monitor
      </Text>

      <View className="bg-red-100 p-4 rounded-xl mb-4">
        <Text className="text-lg font-semibold text-gray-800">
          Ibuprofen
        </Text>
        <Text className="text-red-600">Expires in 5 days</Text>
      </View>
    </View>
  );
}
