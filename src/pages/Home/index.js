import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Shoes from "../../component/Shoes";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View style={style.heard}>
        <Image
          source={require("../../assests/banner.png")}
          style={style.image}
        />

        <View style={style.textContainer}>
          <Text style={style.text}>Tênis</Text>
          <Text style={[style.text, { color: "#CECECF" }]}>•</Text>
          <Text style={[style.text, { color: "#CECECF" }]}>MASCULINO</Text>
          <TouchableOpacity
            style={{ position: "absolute", right: 0, alignSelf: "center" }}
          >
            <MaterialIcons name="filter-list" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.line} />

      <ScrollView>
        <Text style={style.text}>LANÇAMENTOS</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../assests/1.png")}
            cost="R$140,90"
            onClick={() => navigation.navigate("Detail")}
          >
            Nike Air Max Dia
          </Shoes>
          <Shoes
            img={require("../../assests/2.png")}
            cost="R$290,90"
            onClick={() => navigation.navigate("Detail")}
          >
            Nike Dowshifter 10
          </Shoes>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../assests/3.png")}
            cost="R$180,90"
            onClick={() => alert("Clicou")}
          >
            Nike Squidward Tentacles
          </Shoes>
          <Shoes
            img={require("../../assests/4.png")}
            cost="R$390,90"
            onClick={() => alert("Clicou")}
          >
            Nike Epic React Flyknit 2
          </Shoes>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../assests/5.png")}
            cost="R$270,90"
            onClick={() => alert("Clicou")}
          >
            Nike Joyride Run Flyknit
          </Shoes>
          <Shoes
            img={require("../../assests/6.png")}
            cost="R$490,90"
            onClick={() => alert("Clicou")}
          >
            Nike React 20
          </Shoes>
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
  heard: {
    marginBottom: 8,
  },
  image: {
    width: "100%",
  },
  textContainer: {
    flexDirection: "row",
    marginVertical: "5%",
    marginHorizontal: "5%",
  },
  text: {
    fontFamily: "Anton_400Regular",
    fontSize: 26,
    marginHorizontal: "1%",
  },
  line: {
    borderBottomColor: "#d8d8d8",
    borderBottomWidth: 2,
  },
});
