import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../../../components/constants/colors';
import ScreenRatio from '../../../../components/constants/ScreenRatio';

const styles = StyleSheet.create({
  container: {
    marginVertical: ScreenRatio.height / 30,
    padding: 20,
  },
  emptyText: {
    fontSize: RFValue(14),
    color: colors.gray,
  },
});

export default styles;
