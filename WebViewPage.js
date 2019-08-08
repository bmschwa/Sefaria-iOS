'use strict';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  WebView,
} from 'react-native';

import {
  CategoryColorLine,
  CloseButton,
  LoadingView,
} from './Misc.js';
import { GlobalStateContext } from './StateManager';
import styles from './Styles';

const WebViewPage = ({ close, uri }) => {
  const { theme } = useContext(GlobalStateContext);
  return (
    <View style={{flex:1, flexDirection: "column", alignSelf: 'stretch'}}>
      <CategoryColorLine category={"Other"} />
      <View style={[styles.header, theme.header]}>
        <CloseButton onPress={close} />
        <Text>{"sefaria.org"}</Text>
      </View>
      <WebView
        source={{ uri }}
        renderLoading={() => (<LoadingView />)}
        startInLoadingState={true}
      />
    </View>
  );
}
WebViewPage.propTypes = {
  close: PropTypes.func.isRequired,
  uri:      PropTypes.string.isRequired,
};

export default WebViewPage;
