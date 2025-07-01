import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from '../styles/styles';

const SubcategoryScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.loadingContainer}>
        <Text style={{ color: '#FFFFFF', fontSize: 24 }}>Subcategory Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default SubcategoryScreen;
