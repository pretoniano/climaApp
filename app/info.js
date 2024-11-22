import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

const WeatherApp = () => {
  const [city, setCity] = useState(""); // Cidade digitada pelo usuário
  const [weather, setWeather] = useState(null); // Dados de clima
  const [loading, setLoading] = useState(false); // Estado de carregamento
  const [error, setError] = useState(null); // Estado de erro

  const fetchWeather = async () => {
    const trimmedCity = city.trim(); // Remove espaços em branco do início e do fim

    if (!trimmedCity) {
      setError("Por favor, insira o nome de uma cidade.");
      return;
    }

    setLoading(true);
    setError(null); // Limpa mensagens de erro anteriores
    setWeather(null);

    try {
      const API_KEY = "bd5e378503939ddaee76f12ad7a97608"; // Substitua pela sua chave da OpenWeatherMap
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${trimmedCity}&appid=${API_KEY}&units=metric&lang=pt_br`
      );
      setWeather(response.data);
    } catch (err) {
      setError(
        "Não foi possível encontrar o clima da cidade. Verifique o nome e tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>Consulta de Clima</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome da cidade"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Buscar Clima" onPress={fetchWeather} />
      </View>

      {loading && (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      )}

      {error && <Text style={styles.error}>{error}</Text>}

      {weather && (
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText}>Clima em {weather.name}:</Text>
          <Text style={styles.weatherText}>
            Temperatura: {Math.round(weather.main.temp)}°C
          </Text>
          <Text style={styles.weatherText}>
            Descrição: {weather.weather[0].description}
          </Text>
          <Text style={styles.weatherText}>
            Umidade: {weather.main.humidity}%
          </Text>
          <Text style={styles.weatherText}>
            Vento: {weather.wind.speed} m/s
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    height: 300
  },
  header: {
    display: "flex",
    width: "100%",
    height: "200",
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    borderRadius: 7,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "90%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  loader: {
    marginVertical: 10,
  },
  error: {
    color: "red",
    marginVertical: 10,
  },
  weatherContainer: {
    display: "flex",
    height: "40%",
    width: "65%",
    marginTop: 200,
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: "#F7C7CF",
    borderRadius: 10,
    boxShadow: "1 1 6"
  },
  weatherText: {
    color: "#64635E",
    fontSize: 18,
    marginVertical: 2,
  },
});

export default WeatherApp;
