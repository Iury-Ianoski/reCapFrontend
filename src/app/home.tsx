import { Card } from '@/components/card';
import { Footer } from '@/components/footer';
import { Generos } from '@/components/generos';
import { Header } from '@/components/header';
import { reviews } from '@/data/review';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function Index() {

  return (
    <>
      <Header/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Generos/>
          <View style={styles.cardsList}>
            {reviews.map((review, index) => (
              <Card
                key={review.id}
                modo='timeline'
                spoiler={review.spoiler}
                review={review}
              />
            ))}
          </View>
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
    paddingHorizontal: 18,
    paddingVertical: 80,
  },
  cardsList: {
    gap: 10
  }
})