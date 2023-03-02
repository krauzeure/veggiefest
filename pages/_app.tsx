import '@/styles/global.css';
import type { AppProps } from 'next/app';
import Container from '@/components/Container/Container';
import { Poppins } from 'next/font/google';
const poppins = Poppins({ weight: ['400', '600', '700'], subsets:['latin'] })


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </Container>
  );
}
