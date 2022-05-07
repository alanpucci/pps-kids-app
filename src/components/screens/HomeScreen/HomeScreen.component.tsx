import React, { useEffect, useState } from 'react'
import Button from '../../atoms/Button/Button.component';
import { useDispatch } from 'react-redux';
import { handleLogout } from '../../../redux/authReducer';
import { StyledImageBackground, StyledImageContainer, StyledRow } from './HomeScreen.styled';
import { View } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import ImageButton from '../../atoms/ImageButton/ImageButton.component';
import Image from '../../atoms/Image/Image.component';
import { LANGS, THEMES } from '../../../consts/consts';
import { imageHandler } from '../../../utils/imageHandler';
import { Audio } from 'expo-av';
import { soundHandler } from '../../../utils/soundHandler';


const HomeScreen = () => {
  const [lang, setLang] = useState(LANGS.ESPANA);
  const [theme, setTheme] = useState(THEMES.ANIMALS);
  const [sound, setSound] = useState<any>();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(handleLogout());
  }

  async function playSound(index:number) {
    const {sound} = await Audio.Sound.createAsync(soundHandler(theme,lang)[index])
    setSound(sound);
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  const handleLang = name => {
    setLang(name);
  }

  const handleTheme = name => {
    setTheme(name);
  }

  const langs = [
    {
      text: "Español",
      name: LANGS.ESPANA,
      icon: <Image source={imageHandler(LANGS.ESPANA)}/>,
      position: 1
    },
    {
      text: "Inglés",
      name: LANGS.ESTADOSUNIDOS,
      icon: <Image source={imageHandler(LANGS.ESTADOSUNIDOS)}/>,
      position: 2
    },
    {
      text: "Portugués",
      name: LANGS.BRASIL,
      icon: <Image source={imageHandler(LANGS.BRASIL)}/>,
      position: 3
    }
  ];

  const themes = [
    {
      text: "Animales",
      name: THEMES.ANIMALS,
      icon: <Image source={imageHandler(THEMES.ANIMALS)[0]}/>,
      position: 4
    },
    {
      text: "Colores",
      name: THEMES.COLORS,
      icon: <Image style={{height:20, width:20}} source={imageHandler(THEMES.COLORS)[0]}/>,
      position: 5
    },
    {
      text: "Números",
      name: THEMES.NUMBERS,
      icon: <Image source={imageHandler(THEMES.NUMBERS)[0]}/>,
      position: 6
    }
  ]

  return (
    <View>
      <StyledImageBackground source={imageHandler('pink')} resizeMode="cover">
        <StyledRow>
          <StyledImageContainer>
            <Image source={imageHandler(lang)} />
          </StyledImageContainer>
          <ImageButton onPress={()=>playSound(0)} src={imageHandler(theme)[0]} />
        </StyledRow>
        <StyledRow>
          <ImageButton onPress={()=>playSound(1)} src={imageHandler(theme)[1]} />
          <ImageButton onPress={()=>playSound(2)} src={imageHandler(theme)[2]} />
        </StyledRow>
        <StyledRow>
          <ImageButton onPress={()=>playSound(3)} src={imageHandler(theme)[3]} />
          <ImageButton onPress={()=>playSound(4)} src={imageHandler(theme)[4]} />
        </StyledRow>
        <Button size='md' onPress={handleSignOut}>Cerrar sesión</Button>
      <FloatingAction onPressItem={handleLang} floatingIcon={<Image source={imageHandler(lang)}/>} distanceToEdge={{horizontal:10, vertical:10 }} showBackground actions={langs}/>
      <FloatingAction onPressItem={handleTheme} floatingIcon={<Image source={imageHandler(theme)[0]}/>} position='left' distanceToEdge={{horizontal:10, vertical:10 }} showBackground actions={themes}/>
      </StyledImageBackground>
    </View>
  )
}

export default HomeScreen