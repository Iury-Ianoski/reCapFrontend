import { Card } from '@/components/Card/index';
import { Footer } from '@/components/footer';
import { Generos } from '@/components/generos';
import { Header } from '@/components/header';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { getLatestReviews } from '@/services/modules/reviews/review.service';
import { mapReviewToCard } from '@/mappers/review.mapper';
import { Review } from '@/types/review';
import { loggedInUser } from '@services/modules/auth/auth.service';

export default function Index() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    getLatestReviews(5).then(setReviews);
  }, []);

  return (
    <>
      <Header username={loggedInUser()?.name || 'Usuário'}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
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