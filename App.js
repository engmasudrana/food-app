import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  StatusBar,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
export class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <StatusBar hidden />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              overflow: "hidden",
              borderBottomRightRadius: 50,
            }}
          >
            <ImageBackground
              style={{
                width: "100%",
                height: 250,
              }}
              source={{
                uri:
                  "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingHorizontal: 20,
                  marginTop: 20,
                }}
              >
                <View>
                  <MaterialCommunityIcons name="text" size={24} color="white" />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      marginRight: 20,
                    }}
                  >
                    <Feather name="bell" size={22} color="white" />
                  </View>
                  <View>
                    <Feather name="search" size={22} color="white" />
                  </View>
                </View>
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  flex: 1,
                  marginTop: -15,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Hello Haksa,
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Hope you have a great day!
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      borderRadius: 10,
                      marginTop: 5,
                      backgroundColor: "grey",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 10,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      CASUAL MEMBER
                    </Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        {/* end home banner */}
          {/* Hotest Food! */}
        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
            <Text
              style={{
                fontSize: 16,
                color: "black",
                fontWeight: "bold",
              }}
            >
              HOTEST FOOD!,
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "grey",
                fontWeight: "bold",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </Text>
          </View>
          <ScrollView
            horizontal={true}
            style={{
              paddingLeft: 20,
              paddingRight: 10,
              marginTop: 10,
            }}
            showsHorizontalScrollIndicator={false}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  overflow: "hidden",
                  borderRadius: 10,
                  marginRight: 10,
                  maxHeight: 200,
                }}
              >
                <ImageBackground
                  style={{
                    width: 150,
                    height: 200,
                  }}
                  source={{
                    uri:
                      "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
                  }}
                >
                  <View style={{ position: "absolute", bottom: 20, left: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      <Feather name="star" size={18} color="white" /> 5
                    </Text>
                  </View>
                </ImageBackground>
              </View>
              <View
                style={{
                  overflow: "hidden",
                  borderRadius: 10,
                  marginRight: 10,
                  maxHeight: 200,
                }}
              >
                <ImageBackground
                  style={{
                    width: 150,
                    height: 200,
                  }}
                  source={{
                    uri:
                      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
                  }}
                >
                  <View style={{ position: "absolute", bottom: 20, left: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      <Feather name="star" size={18} color="white" /> 5
                    </Text>
                  </View>
                </ImageBackground>
              </View>
              <View
                style={{
                  overflow: "hidden",
                  borderRadius: 10,
                  marginRight: 10,
                  maxHeight: 200,
                }}
              >
                <ImageBackground
                  style={{
                    width: 150,
                    height: 200,
                  }}
                  source={{
                    uri:
                      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=387&q=80",
                  }}
                >
                  <View style={{ position: "absolute", bottom: 20, left: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      <Feather name="star" size={18} color="white" /> 5
                    </Text>
                  </View>
                </ImageBackground>
              </View>
              <View
                style={{
                  overflow: "hidden",
                  borderRadius: 10,
                  marginRight: 10,
                  maxHeight: 200,
                }}
              >
                <ImageBackground
                  style={{
                    width: 150,
                    height: 200,
                  }}
                  source={{
                    uri:
                      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
                  }}
                >
                  <View style={{ position: "absolute", bottom: 20, left: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      <Feather name="star" size={18} color="white" /> 5
                    </Text>
                  </View>
                </ImageBackground>
              </View>
              <View
                style={{
                  overflow: "hidden",
                  borderRadius: 10,
                  marginRight: 10,
                  maxHeight: 200,
                }}
              >
                <ImageBackground
                  style={{
                    width: 150,
                    height: 200,
                  }}
                  source={{
                    uri:
                      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=353&q=80",
                  }}
                >
                  <View style={{ position: "absolute", bottom: 20, left: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      <Feather name="star" size={18} color="white" /> 5
                    </Text>
                  </View>
                </ImageBackground>
              </View>
              <View style={{ width: 30 }}></View>
            </View>
          </ScrollView>



          
        </ScrollView>
      </View>
    );
  }
}

export default App;