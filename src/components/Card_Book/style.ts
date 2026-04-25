import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 12,
    gap: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  livro: {
    backgroundColor: "#eee",
    width: "100%",
    height: 144,
    resizeMode: "contain",
  },
  bookName: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: 700,
    color: "#0E1F43",
  },
  bookAuthor: {
    fontSize: 16,
    fontWeight: 600,
    color: "#3A3A3A"
  },
  genresRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 4,
  },
})