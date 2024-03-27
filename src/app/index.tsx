import { View } from "react-native";

import { Header } from "@/components/header";

export default function Home() {
  return (
    <View className="flex-1 pt-8">
      <Header title="Menu" cartQuantityItems={4} />
    </View>
  );
}
