import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { FontAwesome } from "@expo/vector-icons";
import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {

  const [bookTitle, setBookTitle] = useState('')
  const [initialChapter, setInitialChapter] = useState('')
  const [finalChapter, setFinalChapter] = useState('')
  const [recap, setRecap] = useState('')
  const [spoiler, setSpoiler] = useState<"sim" | "nao">("sim");

  return (
    <View style={styles.container}>
      <Link href="/" style={styles.topButton}>
        <FontAwesome name="chevron-left" size={18} color="#414141" />
      </Link>
      <Text style={styles.h1}>Recapitulação</Text>
      <View style={{ gap: 12 }}>
        <Text style={styles.title}>Título do livro</Text>
        <Input
          value={bookTitle}
          onChangeText={setBookTitle}
        />
        <Text style={styles.title}>Capítulos</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Input
            value={initialChapter}
            onChangeText={setInitialChapter}
          />
          <Text style={styles.title}>-</Text>
          <Input
            value={finalChapter}
            onChangeText={setFinalChapter}
          />
        </View>
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
        <Button label='Publicar' onPress={() => console.log(bookTitle, initialChapter, finalChapter, recap, spoiler)} />
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
    left: 8,
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