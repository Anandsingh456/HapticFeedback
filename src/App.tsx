import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
  Image,
  Pressable,
} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import DiceOne from '../Assests/One.png';
import DiceTwo from '../Assests/Two.png';
import DiceThree from '../Assests/Three.png';
import DiceFour from '../Assests/Four.png';
import DiceFive from '../Assests/Five.png';
import DiceSix from '../Assests/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

function App(): React.JSX.Element {
  const [DiceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const RollDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;

      default:
        setDiceImage(DiceOne);
        break;
    }
    ReactNativeHapticFeedback.trigger('impactLight', options);
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={DiceImage} />
      <Pressable onPress={RollDice}>
        <Text style={styles.rollDiceBtnText}>Roll the dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#FFF2F2', // making backgound as white
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
