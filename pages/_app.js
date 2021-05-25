import { ChakraProvider } from '@chakra-ui/react';
import '../styles/Reset.scss';
import '../styles/Poster.scss';
import '../styles/About.scss';
import '../styles/Education.scss';
import '../styles/Experience.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
