// External Modules
import React from 'react';
import { Text, View } from 'react-native';

// Internal Modules
import styles from "./Example.scss";

export default function Example(props) {
  return (
    <View>
      <Text className={styles.txt}>Example Text</Text>
    </View>
  );
}