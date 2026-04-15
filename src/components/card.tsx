import { Badge } from '@/components/badge';
import { Button } from '@/components/button';
import { ProgressBar } from '@/components/progressBar';
import { FontAwesome } from "@expo/vector-icons";
import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type Props = {
  spoiler: boolean
  modo: 'timeline' | 'perfil'
}

export function Card({ modo, spoiler }: Props) {
  const [liberado, setLiberado] = useState(!spoiler)

  return (
    <View style={styles.card}>
      <Image
        source={require("@/assets/livro.png")}
        style={styles.livro}
      />
      <View style={{ flex: 1 }}>
        <View style={styles.cardTop}>
          <Text style={styles.bookName}>Diário de um Banana</Text>
          <Badge text='Gênero'></Badge>
        </View>
        <Text style={styles.bookChapter}>Cap: 1-2</Text>
        {liberado ? (
          <>
            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.bookComment}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque non nobis error enim rem et dolorem adipisci ipsum pariatur ea beatae quos qui, aliquam hic repudiandae. Doloribus odio molestiae accusantium.</Text>
            {modo == 'timeline' ? (
              <View style={styles.cardBottom}>
                <Image
                  source={require("@/assets/avatar.png")}
                  style={styles.pictureReader}
                />
                <Text style={styles.bookReader}>Fulano de Tal</Text>
              </View>
            ) : (
              <ProgressBar percentual={20}/>
            )}
          </>
        ) : (
          <>
            <View style={{ flex: 1, alignItems: "center" }}>
              <FontAwesome name="exclamation-triangle" size={18} color="#E37100" />
              <Text style={{ color: '#E37100', fontSize: 14, fontWeight: 600 }}>Alerta de spoiler</Text>
              <View style={{ marginTop: 8 }}>
                <Button onPress={() => setLiberado(true)} state='gray' size='sm' width='fit' shape='square' label='Mostrar spoiler' />
              </View>
            </View>
          </>
        )}
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