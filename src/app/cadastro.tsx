import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { FontAwesome } from "@expo/vector-icons";
import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <View style={styles.container}>
      <Link href="/" style={styles.topButton}>
        <FontAwesome name="chevron-left" size={18} color="#414141"/>
      </Link>
      <Text style={styles.h1}>Criar uma conta</Text>
      <View style={{ gap: 12 }}>
        <Text style={styles.title}>Nome</Text>
        <Input
          placeholder="Digite seu nome..."
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.title}>E-mail</Text>
        <Input
          placeholder="Digite seu e-mail..."
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.title}>Senha</Text>
        <Input
          placeholder="Digite sua senha..."
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Text style={styles.title}>Confirme sua senha</Text>
        <Input
          placeholder="Digite sua senha..."
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />
      </View>
      <View style={{ marginTop: 35}}>
        <Button label='Criar conta' onPress={() => console.log(name, email, password, confirmPassword)}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    flex: 1,
    justifyContent: "center",
    padding: 20
  },
  h1: {
    fontSize: 28,
    fontWeight: "700",
    color: "#343A40",
    textAlign: "center",
    marginBottom: 30
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#343A40"
  },
  topButton: {
    position: "absolute",
    top: 15,
    left: 8,
    width: 40,
    textAlign: "center",
    zIndex: 10,
    paddingVertical: 11
  },
})