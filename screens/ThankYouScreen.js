import { View, Text } from 'react-native'

export default function ThankYouScreen () {
    return (
        <View style={styles.container}>
          <Text style={[styles.text, alignStyle]}>{props.label}</Text>
        </View>
      )
    }
    
    // COMPONENT STYLE
    /////////////////////////////////////////////////////////////////////
    
    const styles = StyleSheet.create({
      container: {},
      text: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 30,
        textTransform: 'uppercase'
      },
      textCenter: {
        textAlign: 'center'
      }
    })