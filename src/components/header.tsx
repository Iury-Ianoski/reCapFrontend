import { FontAwesome } from "@expo/vector-icons";
import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

export function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={require("@/assets/avatar.png")}
        style={styles.avatar}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.ola}>Olá,</Text>
        <Text style={styles.username}>Nome do usuário</Text>
      </View>
      <Link href="/" style={styles.searchButton}>
        <FontAwesome name="search" size={20} color="#414141"/>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
    paddingHorizontal: 18,
    paddingVertical: 15,
    zIndex: 99,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 12
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 999
  },
  searchButton: {
    width: 40,
    textAlign: "center",
    paddingVertical: 10,
    marginLeft: "auto"
  },
  ola: {
    fontSize: 15,
    color: "#4D4D4D"
  },
  username: {
    fontSize: 18,
    fontWeight: 500,
    color: "#414141"
  }
})