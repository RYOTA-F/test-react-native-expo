import React from 'react'
import { StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types'
import { ParamListBase } from '@react-navigation/native'
import {
  View,
  Button,
  Text,
  Content,
  Footer,
  FooterTab,
  Icon,
} from 'native-base'
import GridImage from '../GridImage'

type NavigationProp = StackNavigationProp<ParamListBase, 'Feeds'>

interface Props {
  navigation: NavigationProp
}

const Grid = ({ navigation }: Props) => {
  return (
    <>
      <Content>
        <View style={styles.container}>
          <GridImage />
        </View>
      </Content>
      <Footer>
        <FooterTab>
          <Button vertical active>
            <Icon name="ios-grid-sharp" />
            <Text>Grid</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate('Camera')}>
            <Icon name="ios-folder-open-sharp" />
            <Text>Camera</Text>
          </Button>
        </FooterTab>
      </Footer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    marginTop: 32,
  },
  postInstagram: {
    marginTop: 40,
  },
})

export default Grid
