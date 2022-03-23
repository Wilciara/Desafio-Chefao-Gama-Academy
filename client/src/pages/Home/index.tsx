import Banner from "../../componets/Banner";
import "../../assets/styles/global.css";
import Header from "../../componets/Header";
import Footer from "../../componets/Header/Footer";

function Home() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;