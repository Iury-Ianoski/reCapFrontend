import { Badge } from '@/components/badge';
import { Button } from '@/components/button';
import { ProgressBar } from '@/components/progressBar';
import { FontAwesome } from "@expo/vector-icons";
import { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Styles } from './style';
import { CardProps } from './types';

export function Card({
  modo,
  spoiler,
  title,
  chapter,
  content,
  userName,
  image,
  rating,
}: CardProps) {
  const [liberado, setLiberado] = useState(!spoiler);

  return (
    <View style={Styles.card}>
      <Image
        source={{ uri: image }}
        style={Styles.livro}
      />

      <View style={{ flex: 1 }}>
        <View style={Styles.cardTop}>
          <Text style={Styles.bookName}>{title}</Text>
          <Badge text="Gênero" />
        </View>

        <Text style={Styles.bookChapter}>{chapter}</Text>

        {liberado ? (
          <>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={Styles.bookComment}
            >
              {content}
            </Text>

            {modo === 'timeline' ? (
              <View style={Styles.cardBottom}>
                <Image
                  source={require('@/assets/avatar.png')}
                  style={Styles.pictureReader}
                />
                <Text style={Styles.bookReader}>{userName}</Text>
              </View>
            ) : (
              <ProgressBar percentual={rating ?? 0} />
            )}
          </>
        ) : (
          <View style={{ flex: 1, alignItems: 'center' }}>
            <FontAwesome
              name="exclamation-triangle"
              size={18}
              color="#E37100"
            />
            <Text
              style={{
                color: '#E37100',
                fontSize: 14,
                fontWeight: '600',
              }}
            >
              Alerta de spoiler
            </Text>

            <View style={{ marginTop: 8 }}>
              <Button
                onPress={() => setLiberado(true)}
                state="gray"
                size="sm"
                width="fit"
                shape="square"
                label="Mostrar spoiler"
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}