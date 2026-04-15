import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

type BadgeColor = "blue" | "gray";

type BadgeProps = {
  text: string;
  color?: BadgeColor;
  style?: any;
}

export function Badge({ text, color = "blue", style }: BadgeProps) {
  return (
    <View style={[styles.base, colorStyles[color], style]}>
        <Text style={[styles.text, textColorStyles[color]]}>
          {text}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 3
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
  },
})

const colorStyles: Record<BadgeColor, ViewStyle> = {
  blue: { backgroundColor: "#D0DAF0" },
  gray: { backgroundColor: "#D0DAF0" },
};

const textColorStyles: Record<BadgeColor, TextStyle> = {
  blue: { color: "#001B55" },
  gray: { color: "#000" },
};