import MarketCryptoPageView from "./components/page-view";
import { CryptoFngData, USFngData } from "./types";

const MarketCryptoPage = async () => {
  const [usFngData, cryptoFngData] = await Promise.all([
    fetch("https://production.dataviz.cnn.io/index/fearandgreed/current", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept: "application/json",
        "Accept-Language": "en-US,en;q=0.9",
        Referer: "https://www.cnn.com/",
      },
    })
      .then((res) => res.json())
      .then((data) => data as USFngData),

    await fetch("https://api.alternative.me/fng")
      .then((res) => res.json())
      .then((data) => data as CryptoFngData),
  ]);

  return (
    <MarketCryptoPageView usFngData={usFngData} cryptoFngData={cryptoFngData} />
  );
};

export default MarketCryptoPage;
