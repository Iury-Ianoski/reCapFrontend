import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function NumberInput({ chapters }: { chapters: number }) {
  const [value, setValue] = useState('');

  const MIN = 1;
  const MAX = chapters;

  const handleChange = (text: string) => {
    let num = Number(text);

    if (text === '') {
      setValue('');
      return;
    }

    if (isNaN(num)) return;

    if (num < MIN) num = MIN;
    if (num > MAX) num = MAX;

    setValue(String(num));
  };

  return (
    <View>
      <TextInput
        value={value}
        onChangeText={handleChange}
        keyboardType="numeric"
      />
    </View>
  );
}