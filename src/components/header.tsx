import { FontAwesome } from "@expo/vector-icons";
import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';
import { logout } from "@/services/modules/auth/auth.service";

export function Header({username}: {username: string}) {
  return (
    <View style={styles.header}>
      <View style={{ flex: 1 }}>
        <Text style={styles.ola}>Olá,</Text>
        <Text style={styles.username}>{username}</Text>
      </View>
      <Link href="/">
        <FontAwesome name="sign-out" style={styles.exit} />
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
  exit: {
    paddingTop: 20,
    fontSize: 24,
    color: "#4D4D4D"
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