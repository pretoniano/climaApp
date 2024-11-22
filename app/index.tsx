import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Link } from 'expo-router'

export default function Home() {
  return (
    <View style={styles.container}>

    <Image source={require("../src/assets/iconeClima.png")} style={styles.icon} />

    <Text style={styles.title} >BEM VINDO AO SEU APP DE TEMPO</Text>

    <TouchableOpacity style ={styles.button}>
    <Link href="/info"> 
    <Text style ={styles.buttonText}>Iniciar App</Text>
    </Link>
    </TouchableOpacity>
    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#91CBF3",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 300,
    width: 300,
    marginTop: 0,
    marginBottom: "50%",
  },
  title: {
    color: "white",
    fontSize: 15,
    marginBottom: 30,
  },
  button: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFB300",
    borderRadius: 5,
    height: "6%",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 22
  }
});
