import { StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";

type ButtonState = "primary" | "secondary" | "gray";

type ButtonShape = "square" | "pill";

type ButtonSize = "sm" | "md" | "lg";

type ButtonWidth = "full" | "fit";

type ButtonProps = TouchableOpacityProps & {
  label: string;
  state?: ButtonState;
  shape?: ButtonShape;
  size?: ButtonSize;
  width?: ButtonWidth;
}

export function Button({ label, state = "primary",
  shape = "pill",
  size = "lg",
  width = "full",
  style, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.9} 
    style={[
        styles.base,
        stateStyles[state],
        shapeStyles[shape],
        sizeStyles[size],
        widthStyles[width],
        style,
      ]} {...rest}>
        <Text style={[styles.text, textStateStyles[state], textSizeStyles[size]]}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    borderWidth: 1
  },
  text: {
    fontWeight: "600",
  },
})

const stateStyles: Record<ButtonState, ViewStyle> = {
  primary: {
    backgroundColor: "#002370",
    borderColor: "#002370"
  },
  secondary: {
    backgroundColor: "#FFFFFF",
    borderColor: "#002370",
  },
  gray: {
    backgroundColor: "#FFFFFF",
    borderColor: "#6C757D",
  },
};

const textStateStyles: Record<ButtonState, TextStyle> = {
  primary: { color: "#FFFFFF" },
  secondary: { color: "#002370" },
  gray: { color: "#343A40" },
};

const shapeStyles: Record<ButtonShape, ViewStyle> = {
  square: {
    borderRadius: 8,
  },
  pill: {
    borderRadius: 999,
  },
};

const sizeStyles: Record<ButtonSize, ViewStyle> = {
  sm: {
    paddingHorizontal: 14,
    paddingVertical: 5,
  },
  md: {
    paddingHorizontal: 16,
    paddingVertical: 7,
  },
  lg: {
    paddingHorizontal: 24,
    paddingVertical: 10.5,
  },
};

const widthStyles: Record<ButtonWidth, ViewStyle> = {
  fit: {
    alignSelf: "flex-start",
  },
  full: {
    width: "100%",
  },
};

const textSizeStyles: Record<ButtonSize, TextStyle> = {
  sm: { fontSize: 12 },
  md: { fontSize: 14 },
  lg: { fontSize: 16 },
};