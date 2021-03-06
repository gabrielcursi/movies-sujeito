import React from 'react';
import {
  View,
  ActivityIndicator
} from 'react-native';
import styles from './styles'

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        color="#121212"
        size={45}
      />
    </View>
  );
};

export default Loading;
