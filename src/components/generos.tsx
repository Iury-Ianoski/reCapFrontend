import { Button } from '@/components/button';
import { ScrollView, StyleSheet, View } from 'react-native';

export function Generos() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.bookType}>
        <Button state='secondary' size='sm' width='fit' label='Ação'/>
        <Button state='secondary' size='sm' width='fit' label='Literatura'/>
        <Button state='secondary' size='sm' width='fit' label='Ficção'/>
        <Button state='secondary' size='sm' width='fit' label='Romance'/>
        <Button state='secondary' size='sm' width='fit' label='Fantasia'/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  bookType: {
    flexDirection: "row",
    gap: 6,
    paddingVertical: 20
  }
})