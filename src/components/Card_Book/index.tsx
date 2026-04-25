import { Badge } from '@/components/badge';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Styles } from './style';
import { CardBookProps } from './types';

export function CardBook({ 
  id,
  title,
  author,
  coverImageUrl,
  genres,
 }: CardBookProps) {

  return (
    <View style={Styles.card}>
      <Image
        source={coverImageUrl ? { uri: coverImageUrl } : require('@/assets/livro.png')}
        style={Styles.livro}
      />
      <View style={{ gap: 4 }}>
        <Text style={Styles.bookName}>{title}</Text>
        <Text style={Styles.bookAuthor}>{author}</Text>
      </View>
      <View style={Styles.genresRow}>
        {genres?.map((genre) => (
          <Badge key={genre.id} text={genre.name} />
        ))}
      </View>
    </View>
  )
}

