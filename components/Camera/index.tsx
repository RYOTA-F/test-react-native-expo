import React from 'react'
import { StyleSheet } from 'react-native'
import {
  View,
  Button,
  Text,
  Content,
  Footer,
  FooterTab,
  Icon,
} from 'native-base'
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types'
import { ParamListBase } from '@react-navigation/native'
import PostInstagram from '../PostInstagram'

type NavigationProp = StackNavigationProp<ParamListBase, 'Feeds'>

interface Props {
  navigation: NavigationProp
}

const Camera = ({ navigation }: Props) => {
  return (
    <>
      <Content>
        <View style={styles.container}>
          <PostInstagram />
        </View>
      </Content>
      <Footer>
        <FooterTab>
          <Button vertical onPress={() => navigation.navigate('Grid')}>
            <Icon name="ios-grid-sharp" />
            <Text>Grid</Text>
          </Button>
          <Button vertical active>
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
    marginTop: 300,
    alignItems: 'center',
  },
  button: {
    marginTop: 32,
  },
})

export default Camera
