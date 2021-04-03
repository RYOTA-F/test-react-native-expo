import React, { useEffect } from 'react'
import { Linking, StyleSheet } from 'react-native'
import { Button, View, Text, Icon } from 'native-base'
import * as ImagePicker from 'expo-image-picker'
import * as Notifications from 'expo-notifications'

const PostInstagram = () => {
  useEffect(() => {
    requestPermissionsAsync()
  })

  return (
    <>
      <View>
        <Button style={styles.button} onPress={postToInstagram}>
          <Icon name="camera" />
          <Text style={styles.buttonText}>Select from album</Text>
        </Button>
      </View>

      <View>
        <Button
          bordered
          info
          style={styles.button2}
          onPress={scheduleNotificationAsync}
        >
          <Text style={styles.buttonText}>3秒後に通知</Text>
        </Button>
      </View>
    </>
  )
}

/**
 * カメラロールからInstagramへ投稿
 */
const postToInstagram = async () => {
  let image: any = await ImagePicker.launchImageLibraryAsync()
  let encodedURL = encodeURIComponent(image.uri)
  let instagramURL = `instagram://library?AssetPath=${encodedURL}`
  Linking.openURL(instagramURL)
}

// 通知のフォアグラウンド許可設定
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})

/**
 * 通知権限を要求するポップアップを表示
 */
const requestPermissionsAsync = async () => {
  const { granted } = await Notifications.getPermissionsAsync()
  if (granted) {
    return
  }

  await Notifications.requestPermissionsAsync()
}

/**
 * 3秒後にポップアップ通知を表示
 */
const scheduleNotificationAsync = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Instagramへ投稿してください',
      subtitle: '投稿時間が近づいています',
      body: 'アプリ内の[Select from album]よりInstagramへ投稿してください',
    },
    trigger: {
      seconds: 3,
    },
  })
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
  },
  button: {
    height: 50,
  },
  button2: {
    marginTop: 40,
  },
  buttonText: {
    fontSize: 20,
  },
})

export default PostInstagram
