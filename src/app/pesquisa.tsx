import { CardBook } from '@/components/card_livro';
import { Footer } from '@/components/footer';
import { Generos } from '@/components/generos';
import { books } from '@/data/books';
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export default function Index() {

  const router = useRouter();
  const [busca, setBusca] = useState('');

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(busca.toLowerCase()) ||
    book.author.toLowerCase().includes(busca.toLowerCase())
  );
  
  return (
    <>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => router.back()} style={styles.topButton}>
          <FontAwesome name="chevron-left" size={18} color="#414141" />
        </TouchableOpacity>
        <View style={styles.boxSearch}>
          <TextInput
            style={styles.inputSearch}
            placeholder="Busque por nome, autor..."
            placeholderTextColor="#4D4D4D"
            value={busca}
            onChangeText={setBusca}
          />
          <FontAwesome name="search" size={18} color="#4D4D4D" />
        </View>
        <Generos/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <FlatList
            data={filteredBooks}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={{ gap: 10 }}
            contentContainerStyle={{ gap: 10 }}
            renderItem={({ item }) => (
              <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => router.push(`/livro?id=${item.id}`)} activeOpacity={0.9}>
                  <CardBook book={item} />
                </TouchableOpacity>
              </View>
            )}
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