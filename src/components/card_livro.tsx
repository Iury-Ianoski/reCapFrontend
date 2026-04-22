import { Badge } from '@/components/badge';
import type { Book } from '@/data/books';
import { Image, StyleSheet, Text, View } from 'react-native';

type CardBookProps = {
  book: Book;
};

export function CardBook({ book }: CardBookProps) {

  return (
    <View style={styles.card}>
      <Image
        source={book.coverImageUrl ? { uri: book.coverImageUrl } : require('@/assets/livro.png')}
        style={styles.livro}
      />
      <View style={{ gap: 4 }}>
        <Text style={styles.bookName}>{book.title}</Text>
        <Text style={styles.bookAuthor}>{book.author}</Text>
      </View>
      <View style={styles.genresRow}>
        {book.genres?.map((genre) => (
          <Badge key={genre.id} text={genre.name} />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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