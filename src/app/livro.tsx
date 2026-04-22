import { Badge } from '@/components/badge'
import { Card } from '@/components/card'
import { Footer } from '@/components/footer'
import { books } from '@/data/books'
import { reviews } from '@/data/review'
import { FontAwesome } from '@expo/vector-icons'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Livro() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const book = books.find((item) => item.id === id);
  const bookReviews = reviews.filter((review) => String(review.book.id) === id);

  if (!book) {
    return (
      <View style={styles.emptyContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <FontAwesome name="chevron-left" size={18} color="#414141" />
        </TouchableOpacity>
        <Text style={styles.emptyText}>Livro não encontrado.</Text>
      </View>
    );
  }

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <FontAwesome name="chevron-left" size={18} color="#414141" />
          </TouchableOpacity>
        </View>
        <Image
          source={book.coverImageUrl ? { uri: book.coverImageUrl } : require('@/assets/livro.png')}
          style={styles.cover}
        />
        <View style={styles.content}>
          <Text style={styles.bookTitle}>{book.title}</Text>
          <Text style={styles.bookAuthor}>{book.author}</Text>
          <View style={styles.metaRow}>
            <Text style={styles.metaText}>{book.publicationYear}</Text>
            <Text style={styles.metaText}>{book.chapters} capítulos</Text>
          </View>
          <View style={styles.genresRow}>
            {book.genres.map((genre) => (
              <Badge key={genre.id} text={genre.name} />
            ))}
          </View>
          <Text style={styles.sectionLabel}>Sinopse</Text>
          <Text style={styles.summary}>{book.summary}</Text>
        </View>
        <View style={styles.content2}>
          <Text style={styles.bookTitle}>Recapitulações</Text>
          <View style={styles.reviewList}>
            {bookReviews.length ? (
              bookReviews.map((review) => (
                <Card key={review.id} modo='timeline' spoiler={review.spoiler} review={review} />
              ))
            ) : (
              <Text style={styles.noReviews}>Nenhuma avaliação disponível.</Text>
            )}
          </View>
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingBottom: 80
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    gap: 12,
    backgroundColor: "#f5f5f5"
  },
  backButton: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 11,
  },
  pageTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0E1F43",
  },
  cover: {
    width: "100%",
    height: 260,
    resizeMode: "contain",
    backgroundColor: "#eee",
  },
  content: {
    padding: 18,
    backgroundColor: "#ffffff",
    gap: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 18
  },
  content2: {
    padding: 18,
    gap: 16,
    marginBottom: 18
  },
  bookTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0E1F43",
  },
  bookAuthor: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3A3A3A",
  },
  metaRow: {
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
  },
  metaText: {
    fontSize: 14,
    color: "#4D4D4D",
    fontWeight: "500",
  },
  genresRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  reviewList: {
    gap: 10,
    marginTop: 12,
  },
  noReviews: {
    fontSize: 14,
    color: "#6E6E6E",
    marginTop: 8,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0E1F43",
  },
  summary: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "400",
    color: "#4D4D4D",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  emptyText: {
    marginTop: 18,
    fontSize: 16,
    color: "#4D4D4D",
  },
});
