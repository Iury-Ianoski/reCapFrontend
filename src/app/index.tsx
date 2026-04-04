import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { Link, useRouter } from 'expo-router'
import { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Index() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/logo.png")}
        style={styles.logotipo}
      />
      <View style={{ gap: 9 }}>
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
        <TouchableOpacity activeOpacity={0.9}>
          <Text style={styles.link_senha}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 35}}>
        <Button 
          onPress={() => {
            console.log(email, password);
            router.push("/home");
          }} 
          label='Entrar'
        />
        <Text style={styles.texto_cadastro}>Novo por aqui? {""}
          <Link href="/cadastro" style={{ textDecorationLine: "underline", fontWeight: 500 }}>Criar Conta</Link>
        </Text>
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
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#343A40"
  },
  logotipo: {
    width: 178,
    height: 70,
    resizeMode: "contain",
    marginHorizontal: "auto",
    marginBottom: 20
  },
  link_senha: {
    fontSize: 14,
    fontWeight: "400",
    color: "#4D4D4D",
    textDecorationLine: "underline",
    marginLeft: "auto"
  },
  texto_cadastro: {
    fontSize: 16,
    fontWeight: "400",
    color: "#414141",
    marginHorizontal: "auto",
    marginTop: 15
  }
})