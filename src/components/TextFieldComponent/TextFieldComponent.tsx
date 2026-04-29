import React, { use, useState } from "react";
import { TextInput, View, Text } from "react-native";

import { styles } from "./TextFieldComponentStyles";

interface TextFieldComponentProps {
  hint: string;
  label: string;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  size?: "medium" | "large";
  multiline: boolean;
}

export default function TextFieldComponent(props: TextFieldComponentProps) {
  const [valor, setValor] = useState("");

  return (
    <>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={[
          styles.container,
          props.size === "medium" ? styles.medium : styles.large,
        ]}
        onChangeText={setValor}
        value={valor}
        placeholder={props.hint}
        keyboardType={props.keyboardType}
        multiline={props.multiline}
      />
    </>
  );
}
