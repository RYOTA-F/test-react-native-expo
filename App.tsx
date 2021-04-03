import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Router from './Router'
import { Container } from 'native-base'

const App = () => {
  return (
    <React.Fragment>
      <Container>
        <Router />
        <StatusBar style="auto" />
      </Container>
    </React.Fragment>
  )
}

export default App
