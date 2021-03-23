import {Dimensions, Platform} from 'react-native';

export const colors = {
  primary: '#400959',
  secondary: '#ffffff',
  background: '#fbfbfd',
  button: '#22c7b8',
  darkBackground: '#fbfbfd',
  lightBackground: '#fbfbfd',
  grey: '#a3a3a3',
  primaryLight: 'rgba(64, 9, 89,0.5)',
  red:'rgb(250,93,93)'
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const metrics = {
  width: width,
  height: height,
  defaultMargin: Dimensions.get('window').width * 0.05,
  smallMargin: width * 0.03,
  largeMargin: width * 0.08,
};

export const fonts = {
  primary: Platform.select({
    android:'',
    ios:''
  }),
  primaryBold: Platform.select({
    android:'',
    ios:''
  }),
  secondary: Platform.select({
    android:'',
    ios:''
  }),
  secondaryBold: Platform.select({
    android:'',
    ios:''
  }),
}
