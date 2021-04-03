import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Grid, Col, Row, Icon, Text, Button, View } from 'native-base'
// import Share from 'react-native-share'

const image1 = '../../assets/gun1.jpg'
const image2 = '../../assets/gun2.jpg'
const image3 = '../../assets/gun3.jpg'
const image4 = '../../assets/gun4.jpg'
const image5 = '../../assets/gun5.jpg'
const image6 = '../../assets/gun6.jpg'

const images: string[] = []

const GridImage = () => {
  const [checkedImage1, setCheckedImage1] = useState(false)
  const [checkedImage2, setCheckedImage2] = useState(false)
  const [checkedImage3, setCheckedImage3] = useState(false)
  const [checkedImage4, setCheckedImage4] = useState(false)
  const [checkedImage5, setCheckedImage5] = useState(false)
  const [checkedImage6, setCheckedImage6] = useState(false)

  const handleChange = (is_checked: boolean, image: string) => {
    let image_url = ''

    switch (image) {
      case 'image1':
        setCheckedImage1(is_checked)
        image_url = image1
        break
      case 'image2':
        setCheckedImage2(is_checked)
        image_url = image2
        break
      case 'image3':
        setCheckedImage3(is_checked)
        image_url = image3
        break
      case 'image4':
        setCheckedImage4(is_checked)
        image_url = image4
        break
      case 'image5':
        setCheckedImage5(is_checked)
        image_url = image5
        break
      case 'image6':
        setCheckedImage6(is_checked)
        image_url = image6
        break
    }

    if (is_checked) {
      images.push(image_url)
    } else {
      const idx = images.indexOf(image_url)
      if (idx >= 0) {
        images.splice(idx, 1)
      }
    }
  }

  const postToInstagram = async () => {
    const shareOptions = {
      message: 'This is a test message',
    }

    try {
      // const shareResponse = await Share.open(shareOptions)
      console.log('share実行')
    } catch (err) {
      console.log('Error => ', err)
    }
  }

  return (
    <>
      <Grid>
        <Col style={styles.colContainer}>
          <Row style={styles.rowContainer}>
            <TouchableOpacity
              onPress={() => handleChange(!checkedImage1, 'image1')}
            >
              <Icon
                name="ios-checkmark-circle"
                style={checkedImage1 ? styles.iconGreen : styles.iconGray}
              />
              <Image source={require(image1)} style={styles.imageContainer} />
            </TouchableOpacity>
          </Row>
          <Row style={styles.rowContainer}>
            <TouchableOpacity
              onPress={() => handleChange(!checkedImage2, 'image2')}
            >
              <Icon
                name="ios-checkmark-circle"
                style={checkedImage2 ? styles.iconGreen : styles.iconGray}
              />
              <Image source={require(image2)} style={styles.imageContainer} />
            </TouchableOpacity>
          </Row>
          <Row style={styles.rowContainer}>
            <TouchableOpacity
              onPress={() => handleChange(!checkedImage3, 'image3')}
            >
              <Icon
                name="ios-checkmark-circle"
                style={checkedImage3 ? styles.iconGreen : styles.iconGray}
              />
              <Image source={require(image3)} style={styles.imageContainer} />
            </TouchableOpacity>
          </Row>
        </Col>
        <Col style={styles.colContainer}>
          <Row style={styles.rowContainer}>
            <TouchableOpacity
              onPress={() => handleChange(!checkedImage4, 'image4')}
            >
              <Icon
                name="ios-checkmark-circle"
                style={checkedImage4 ? styles.iconGreen : styles.iconGray}
              />
              <Image source={require(image4)} style={styles.imageContainer} />
            </TouchableOpacity>
          </Row>
          <Row style={styles.rowContainer}>
            <TouchableOpacity
              onPress={() => handleChange(!checkedImage5, 'image5')}
            >
              <Icon
                name="ios-checkmark-circle"
                style={checkedImage5 ? styles.iconGreen : styles.iconGray}
              />
              <Image source={require(image5)} style={styles.imageContainer} />
            </TouchableOpacity>
          </Row>
          <Row style={styles.rowContainer}>
            <TouchableOpacity
              onPress={() => handleChange(!checkedImage6, 'image6')}
            >
              <Icon
                name="ios-checkmark-circle"
                style={checkedImage6 ? styles.iconGreen : styles.iconGray}
              />
              <Image source={require(image6)} style={styles.imageContainer} />
            </TouchableOpacity>
          </Row>
        </Col>
      </Grid>

      <View style={styles.buttonContainer}>
        <Button onPress={() => postToInstagram()}>
          <Text>Post to Instagram</Text>
        </Button>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  colContainer: {
    width: 190,
  },
  rowContainer: {
    padding: 2,
    position: 'relative',
  },
  iconGray: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2,
    color: '#C0C0C0',
  },
  iconGreen: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2,
    color: '#98FB98',
  },
  imageContainer: {
    height: 186,
    width: 186,
  },
  buttonContainer: {
    marginTop: 8,
  },
})

export default GridImage
