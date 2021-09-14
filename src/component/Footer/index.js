import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import Shoes from "../Shoes";

export default function Footer() {
  return (
    <View>
      <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR</Text>
      <View style={{ flexDirection: "row" }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes
              img={require("../../assests/1.png")}
              cost="R$140,90"
              onClick={() => navigation.navigate("Detail")}
            >
              Nike Air Max Dia
            </Shoes>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <Shoes
              img={require("../../assests/3.png")}
              cost="R$180,90"
              onClick={() => alert("Clicou")}
            >
              Nike Squidward Tentacles
            </Shoes>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <Shoes
              img={require("../../assests/4.png")}
              cost="R$390,90"
              onClick={() => alert("Clicou")}
            >
              Nike Epic React Flyknit 2
            </Shoes>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <Shoes
              img={require("../../assests/5.png")}
              cost="R$270,90"
              onClick={() => alert("Clicou")}
            >
              Nike Joyride Run Flyknit
            </Shoes>
          </View>

          <View style={{ marginHorizontal: 10 }}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "Anton_400Regular",
    marginVertical: "2%",
    paddingHorizontal: "2%",
  },
});
