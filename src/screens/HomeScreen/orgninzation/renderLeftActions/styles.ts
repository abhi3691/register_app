import {StyleSheet} from 'react-native';
import ScreenRatio from '../../../../components/constants/ScreenRatio';
import colors from '../../../../components/constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: ScreenRatio.height / 20,
    width: ScreenRatio.width / 5,
    marginTop: 10,
  },
  buttonContainer: {
    height: 30,
    width: 30,
    borderRadius: 30,
    backgroundColor: colors.black,
    marginRight: 10,
  },
});

export default styles;
