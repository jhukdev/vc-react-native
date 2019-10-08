import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

/* -----------------------------------
 *
 * HeaderBar
 *
 * -------------------------------- */

class HeaderBar extends Component<{}> {
   public render() {
      return (
         <View style={styles.wrapper}>
            <Text style={styles.titleText}>vouchercloud</Text>
         </View>
      );
   }
}

/* -----------------------------------
 *
 * Styles
 *
 * -------------------------------- */

const styles = StyleSheet.create({
   wrapper: {
      padding: 15,
      backgroundColor: '#009ED9',
   },
   titleText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
   },
});

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { HeaderBar };