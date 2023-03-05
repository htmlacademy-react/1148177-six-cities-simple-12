import { Main } from '../../pages/main';

export type AppProps = {
  offers: number;
};

export function App({ offers }: AppProps) {
  return <Main offers={offers} />;
}
