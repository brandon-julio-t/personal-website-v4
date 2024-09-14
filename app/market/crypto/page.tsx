import MarketCryptoPageView from "./components/page-view";

// invalidate every 15 minutes
export const revalidate = 15 * 60;

const MarketCryptoPage = async () => {
  return <MarketCryptoPageView />;
};

export default MarketCryptoPage;
