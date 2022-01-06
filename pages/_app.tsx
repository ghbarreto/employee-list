import '../styles/reset.css';
import type { AppProps } from 'next/app';
import { EmployeeContextProvider } from '../context/EmployeeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EmployeeContextProvider>
      <Component {...pageProps} />
    </EmployeeContextProvider>
  );
}

export default MyApp;
