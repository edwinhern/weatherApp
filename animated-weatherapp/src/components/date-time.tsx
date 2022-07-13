import { ActivityIndicator, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const DateTime = () => {
  const [isLoading, setLoading] = useState(true);
  const [city, setCity] = useState();
  const [dayhour, setDayHour] = useState();
  const [temp, setTemp] = useState();

  const getWeather = async () => {
    try {
      let apiData = await fetch(
        "https://weatherdbi.herokuapp.com/data/weather/Denton"
      );
      apiData = await apiData.json();
      setCity(apiData.region);
      setDayHour(apiData["currentConditions"].dayhour);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return <View>{isLoading ? <ActivityIndicator /> : <Text>City:{city} DayHour:{dayhour}</Text>}</View>;
};

export default DateTime;

