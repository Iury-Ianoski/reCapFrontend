import { CardBook } from '@/components/Card_Book/index';
import { Footer } from '@/components/footer';
import { Generos } from '@/components/generos';
import { CardBookProps } from '@/components/Card_Book/types';
import { Header } from '@/components/header';
import { loggedInUser } from '@services/modules/auth/auth.service';
import { getBooks } from '@/services/modules/book/book.service';
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { FlatList, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Book } from '@/types/book';
import { mapBookToCard } from '@/mappers/book.mapper';

export default function Index() {

  const router = useRouter();
  const [busca, setBusca] = useState('');
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks().then(setBooks)
  }, []);
    
  const filteredBooks = books.filter((book: { title: string; author: string; }) =>
    book.title.toLowerCase().includes(busca.toLowerCase()) ||
    book.author.toLowerCase().includes(busca.toLowerCase())
  );
  
  return (
    <>
    
      <View style={styles.top}>
        <Generos/>
        <Header username={loggedInUser()?.name || 'Usuário'}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <FlatList
            data={filteredBooks}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{ gap: 10 }}
            contentContainerStyle={{ gap: 10 }}
            renderItem={({ item }) => {
              const card = mapBookToCard(item);
              return (
                <View style={{ flex: 1 }}>
                  <TouchableOpacity onPress={() => router.push(`/livro?id=${item.id}`)} activeOpacity={0.9}>
                    <CardBook 
                    id={card.id}
                    title={card.title}
                    author={card.author}
                    coverImageUrl={card.coverImageUrl}
                    genres={item.genres}
                   />
                </TouchableOpacity>
              </View>
              )}
            }
          />
        </View>
      </ScrollView>
      <Footer/>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    padding: 18,
    paddingTop: 0,
    paddingBottom: 90
  },
  top: {
    backgroundColor: "#f5f5f5",
    padding: 18,
    paddingBottom: 0
  },
  cardsList: {
    gap: 10,
    flex: 2
  },
  topButton: {
    width: 40,
    textAlign: "center",
    paddingVertical: 11
  },
  boxSearch: {
    borderWidth: 1,
    borderRadius: 999,
    borderColor: "#4D4D4D",
    backgroundColor: "#ffffff",
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 18,
    gap: 12
  },
  inputSearch: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    width: "100%"
  }
})