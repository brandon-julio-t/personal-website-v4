import MarketCryptoPageView from "./components/page-view";

// invalidate every 15 minutes
export const revalidate = 900;

const MarketCryptoPage = async () => {
  return <MarketCryptoPageView />;
};

export default MarketCryptoPage;
