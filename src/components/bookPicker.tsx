import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Book } from '@/types/book';

type Props = {
  books: Book[];
  onValueChange: (value: Book) => void;
};

export function BookPicker({ books, onValueChange }: Props) {
  const [selected, setSelected] = useState<Book | ''>('');
  console.log('Books in BookPicker:', books);
  return (
    <View style={styles.input}>
        <Picker 
        selectedValue={selected}
        onValueChange={(value) => setSelected(value)}
        >
        {books.map((book) => (
            <Picker.Item
            key={book.id}
            label={book.title}
            value={book}
            />
        ))}
        </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    minHeight: 45,
    borderWidth: 1,
    borderColor: '#DEE2E6',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    color: "#343A40",
    fontSize: 16
  }
})