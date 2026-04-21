import { FontAwesome } from "@expo/vector-icons";
import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export function Footer() {
  return (
    <View style={styles.footer}>
      <Link href="/home" style={styles.nav_item}>
        <FontAwesome name="home" size={25} color="#414141"/>
        Início
      </Link>
      <Link href="/recapitulacao" style={[styles.nav_item, { color: "#002370" }]}>
        <View style={styles.destaque}>
          <FontAwesome name="plus" size={25} color="#ffffff"/>
        </View>
        Recapitular
      </Link>
      <Link href="/pesquisa" style={styles.nav_item}>
        <FontAwesome name="book" size={25} color="#414141"/>
        Livros
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
    paddingHorizontal: 18,
    paddingVertical: 12,
    zIndex: 99,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 60
  },
  nav_item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: 14,
    fontWeight: 600,
    color: "#414141"
  },
  destaque: {
    backgroundColor: "#002370",
    width: 58,
    height: 58,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -30
  }
})