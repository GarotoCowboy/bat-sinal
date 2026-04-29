import React from 'react';
import { View, Image,Text, Pressable } from 'react-native';

import { styles } from './ButtonStyles';
import TextFieldComponent from '../TextFieldComponent/TextFieldComponent';


interface ButtonComponentProps{
text : string;
visibilityFunction(): void;
}
export default function ButtonComponent(props: ButtonComponentProps) {


return(
     <Pressable 
            style={({pressed}) =>[
              styles.button,
              pressed ? {backgroundColor: 'black'} : null
            ]} 
            onPress={() => props.visibilityFunction()}>
            <Text style={{fontSize: 24, color: 'white'}}>{props.text}</Text>
            </Pressable>

)
}

