import {StyleSheet} from 'react-native';
import ScreenRatio from '../../../../components/constants/ScreenRatio';
import colors from '../../../../components/constants/colors';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height / 20,
    width: ScreenRatio.width / 1.1,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.gray,
    justifyContent: 'center',
    padding: 10,
    marginVertical: 10,
  },
});
export default styles;
