import {StyleSheet} from 'react-native';
import ScreenRatio from '../../components/constants/ScreenRatio';
import colors from '../../components/constants/colors';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height,
    width: ScreenRatio.width,
    padding: ScreenRatio.width / 10,
    backgroundColor: colors.bgColor,
  },
});

export default styles;
