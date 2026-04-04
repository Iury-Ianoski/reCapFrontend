import { StyleSheet, TextInput, TextInputProps } from "react-native";

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      {...rest}
      placeholderTextColor="#888F97"
    />
  )
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: '#DEE2E6',
    borderRadius: 6,
    padding: 16,
    backgroundColor: '#FFF',
    color: "#343A40",
    fontSize: 16
  }
})