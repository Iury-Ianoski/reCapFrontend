import { Card } from '@/components/card';
import { Generos } from '@/components/generos';
import { Header } from '@/components/header';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function Index() {

  return (
    <>
      <Header/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Generos/>
          <View style={styles.cardsList}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    padding: 18,
    paddingTop: 80
  },
  cardsList: {
    gap: 10
  }
})