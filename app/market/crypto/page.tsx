import MarketCryptoPageView from "./components/page-view";

export const revalidate = 3600; // invalidate every hour

const MarketCryptoPage = async () => {
  return <MarketCryptoPageView />;
};

export default MarketCryptoPage;
