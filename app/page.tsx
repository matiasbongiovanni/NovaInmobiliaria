import Footer  from "./components/Footer";
import Nav from "./components/Navbar";
import HomeScreen from "./pages/Home"
import SecondPage from "./pages/SecondPage";
import { Nunito } from "next/font/google";
import Contact from "./pages/Contact";
import Bento from "./components/Bento";


const nunito = Nunito({
  subsets: ["latin"], 
  weight: "400",
});


export default function Home() {
  return (
    <main className={`min-h-screen ${nunito.className}`}>
      <Nav />
      <HomeScreen />
      <SecondPage />
      <Bento />
      <Contact />
      <Footer />
    </main>
  );
}
