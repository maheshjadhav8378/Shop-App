import React from 'react';
import {HeaderButton, HeaderButtons} from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';
import colors from '../../constants/colors';

const HeaderButtonCom = props => {
  return (
    <HeaderButton
      {...props}
      color={Platform.OS === 'android' ? 'white' : colors.primary}
      IconComponent={Ionicons}
      iconSize={30}
    />
  );
};

export default props => {
  return <HeaderButtons {...props} HeaderButtonComponent={HeaderButtonCom} />;
};
