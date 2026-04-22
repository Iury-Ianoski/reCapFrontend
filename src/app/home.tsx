import { Card } from '@/components/Card';
import { Generos } from '@/components/generos';
import { Header } from '@/components/header';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { getLatestReviews } from '@/services/modules/reviews/review.service';
import { mapReviewToCard } from '@/mappers/review.mapper';
import { Review } from '@/types/review';

export default function Index() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    getLatestReviews(5).then(setReviews);
  }, []);

  return (
    <>
      <Header/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Generos/>
          <View style={styles.cardsList}>
          <FlatList
            data={reviews}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              const card = mapReviewToCard(item);
              console.log('Rendering card for review:', item);
              return (
                <Card
                  modo="timeline"
                  spoiler={card.spoiler}
                  title={card.title}
                  chapter={card.chapter}
                  content={card.content}
                  userName={card.userName}
                  image={card.image}
                  rating={card.rating}
                />
              );
            }}
          />
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