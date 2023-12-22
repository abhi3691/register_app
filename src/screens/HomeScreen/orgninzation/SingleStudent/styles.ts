import {StyleSheet} from 'react-native';
import ScreenRatio from '../../../../components/constants/ScreenRatio';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../../../components/constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: ScreenRatio.height / 20,
    width: ScreenRatio.width / 1.1,
  },
  rightLineBox: {
    height: ScreenRatio.height / 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sl: {
    flex: 0.5,
  },
  age: {
    flex: 1,
  },
  name: {
    flex: 2,
  },
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: RFValue(10),
    color: colors.black,
  },
});

export default styles;
