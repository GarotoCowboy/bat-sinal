import React from 'react';
import { Button, View, Image, Pressable, Text } from 'react-native';

import { styles } from './HomeScreenStyles';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import TextFieldComponent from '../../components/TextFieldComponent/TextFieldComponent';
import batmanLogo from '../../../assets/batmanLogo.png';


export function HomeScreen() {

 const[isVisible, setIsVisible] = React.useState(true);

  return (
    <View style={styles.container}>
      {
        isVisible && (
          <View>
        <Image source={batmanLogo} style={styles.image}/>
         </View>
        )
      }
      
      {
        isVisible && (
          <View >
        <ButtonComponent text='Activate Bat Sinal' visibilityFunction={() => setIsVisible(!isVisible)}/>
      </View>
        )
      }


      {
        !isVisible && (
          <View style ={{width: '100%',marginBottom: 20, alignItems: 'flex-start',marginLeft: 40}}>
        <Image source={batmanLogo} style={styles.imageSmall}/>
          </View>
        )
      }

      {
        !isVisible && (
          <View>
            <TextFieldComponent size='medium' label="Nome" hint="Digite o seu nome" keyboardType='default' multiline={false} />
            <TextFieldComponent size='medium' label="Email" hint="Digite o seu email" keyboardType='email-address' multiline={false} />
            <TextFieldComponent size='medium' label="Telefone" hint="Digite o seu telefone" keyboardType='phone-pad' multiline={false}/>
            <TextFieldComponent size='large' label="Observações" hint="Digite o seu problema" keyboardType='default' multiline={true}/>

          </View>
        )
      }

{
        !isVisible && (
          <View >
        <ButtonComponent text='Send' visibilityFunction={() => setIsVisible(!isVisible)}/>
      </View>
        )
      }

    </View>
  );
}