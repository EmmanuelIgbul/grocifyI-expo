
import { useGroceryStore } from "@/store/grocery-store";
import { NativeTabs } from "expo-router/native-tabs";
import { useEffect } from "react";

export default function TabsLayout() {
  const loadItems = useGroceryStore((state) => state.loadItems);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>List</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="planner">
        <NativeTabs.Trigger.Label>Planner</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="insights">
        <NativeTabs.Trigger.Label>Insights</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
