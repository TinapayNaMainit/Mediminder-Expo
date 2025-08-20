import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function AddMedication() {
  return (
    <View className="flex-1 bg-white px-6 py-10">
      <Text className="text-3xl font-bold text-blue-600 mb-6">
        Add Medication
      </Text>

      <TextInput
        placeholder="Medication Name"
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
      />
      <TextInput
        placeholder="Dosage (e.g. 500mg)"
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
      />
      <TextInput
        placeholder="Time (e.g. 8:00 AM)"
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
      />

      <TouchableOpacity className="bg-blue-600 py-4 rounded-xl">
        <Text className="text-white text-center font-semibold text-lg">
          Save Medication
        </Text>
      </TouchableOpacity>
    </View>
  );
}
