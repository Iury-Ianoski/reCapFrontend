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
    flexDirection: "row"
  },
  livro: {
    backgroundColor: "#000000",
    width: 100,
    height: 144,
    resizeMode: "contain",
  },
  pictureReader: {
    width: 24,
    height: 24,
    borderRadius: 999
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 8
  },
  cardBottom: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: "auto"
  },
  bookName: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: 700,
    color: "#0E1F43",
  },
  bookChapter: {
    fontSize: 16,
    fontWeight: 600,
    color: "#3A3A3A"
  },
  bookComment: {
    fontSize: 14,
    fontWeight: 400,
    color: "#4D4D4D",
    marginVertical: 6
  },
  bookReader: {
    fontSize: 14,
    fontWeight: 500,
    color: "#4D4D4D"
  },
})