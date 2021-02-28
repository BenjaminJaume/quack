import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <WebView
      scalesPageToFit={true}
      bounces={false}
      javaScriptEnabled
      source={{
        html: `
          
              <iframe src="http://www.benjaminjau.me/"
                title="iframe Example 1" width="100%" height="100%">
              </iframe>
    `,
      }}
      automaticallyAdjustContentInsets={false}
    />
  );
}
