import React from "react"
import { AppProps } from "next/app"
import { ChakraProvider, theme } from "@chakra-ui/react"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
