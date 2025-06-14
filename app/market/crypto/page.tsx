import MarketCryptoPageView from "./components/page-view";

// Add this export to mark the page as dynamic
export const dynamic = "force-dynamic";

const MarketCryptoPage = async () => {
  return <MarketCryptoPageView />;
};

export default MarketCryptoPage;
