import CompanyLogo from "./componemts/CompanyLogo"
import FeaturedProduct from "./componemts/FeaturedProduct"
import Footer from "./componemts/Footer"
import Header from "./componemts/Header"
import Navbar from "./componemts/Navbar"
import OurProducts from "./componemts/OurProducts"
import TopCategory from "./componemts/TopCategory"


export default function Home() {
  return (
    <div>
      <Navbar />
      <Header/>
      <CompanyLogo/>
      <FeaturedProduct/>
      <TopCategory/>
      <OurProducts/>
      <Footer/>
    </div>
  )
}