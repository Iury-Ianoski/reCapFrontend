import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { BookPicker } from '@/components/bookPicker';
import { getBooks } from '@/services/modules/book/book.service';
import { Book } from '@/types/book';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {CreateReviewDTO} from '@/types/review';
import { createReview } from '@services/modules/reviews/review.service';

export default function Index() {

  const [bookId, setBookId] = useState<number | null>(null);
  const [initialChapter, setInitialChapter] = useState('')
  const [finalChapter, setFinalChapter] = useState('')
  const [recap, setRecap] = useState('')
  const [spoiler, setSpoiler] = useState<"sim" | "nao">("sim");
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const[alertMessage, setAlertMessage] = useState<string | null>(null);

  const [CreateReviewDTO, setReview] = useState<CreateReviewDTO | null>(null);

  useEffect(() => {
    getBooks().then(setBooks)
  }, []);

  const handleRecap = async () => {
    try {
      console.log('Creating review with data:')
      setReview({ 
                content: recap,
                initialChapter: parseInt(initialChapter),
                finalChapter: parseInt(finalChapter),
                spoiler: spoiler === "sim",
                rating: 5,
                bookId: bookId!
              });

      createReview(CreateReviewDTO!).then(() => {
        router.back();
      }).catch(() => {
        alert('Erro ao criar review');
      });

      
    }catch (error) {
      alert('Erro ao criar review');
    } 
  };

  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.topButton}>
        <FontAwesome name="chevron-left" size={18} color="#414141" />
      </TouchableOpacity>
      <Text style={styles.h1}>Recapitulação</Text>
      <View style={{ gap: 12 }}>
        <Text style={styles.title}>Livro</Text>
        <BookPicker 
          books={books} 
          onValueChange={(value) => {
            setSelectedBook(value);
            setBookId(value.id);
            setInitialChapter('1');
            setFinalChapter('');
          }}
        />
        <Text style={styles.title}>Capítulo Inicial</Text>
        <Input
          onChangeText={setInitialChapter}
        />
        <Text style={styles.title}>Capítulo Final</Text>
        <Input
          onChangeText={setFinalChapter}
        />
        <Text style={styles.title}>Comentário</Text>
        <Input
          value={recap}
          onChangeText={setRecap}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
        <Text style={styles.title}>Contém spoiler?</Text>
        <View style={{ flexDirection: "row", gap: 14 }}>
          <TouchableOpacity style={styles.option} onPress={() => setSpoiler("sim")}>
            <View style={styles.radio}>
              {spoiler === "sim" && <View style={styles.selected} />}
            </View>
            <Text>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => setSpoiler("nao")}>
            <View style={styles.radio}>
              {spoiler === "nao" && <View style={styles.selected} />}
            </View>
            <Text>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 35 }}>
        <Button label='Publicar' onPress={() => handleRecap()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    flex: 1,
    padding: 20
  },
  h1: {
    fontSize: 22,
    fontWeight: "600",
    color: "#343A40",
    textAlign: "center",
    marginBottom: 30
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#343A40"
  },
  topButton: {
    position: "absolute",
    top: 15,
    left: 15,
    width: 40,
    textAlign: "center",
    zIndex: 10,
    paddingVertical: 11
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#343A40",
    alignItems: "center",
    justifyContent: "center"
  },
  selected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#343A40"
  }
})