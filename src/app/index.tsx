import { useState } from "react";
import { View, FlatList, SectionList, Text } from "react-native";

import { Header } from "@/components/header";
import { CategoryButton } from "@/components/categoryButton";

import { CATEGORIES, MENU } from "@/utils/data/products";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);

  return (
    <View className="flex-1 pt-8">
      <Header title="Menu" cartQuantityItems={4} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={selectedCategory === item}
            onPress={() => setSelectedCategory(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="max-h-10 mt-5"
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />

      <SectionList
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <Text className="text-white">{item.title}</Text>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-xl text-white font-heading mt-8 mb-3">
            {title}
          </Text>
        )}
      />
    </View>
  );
}
