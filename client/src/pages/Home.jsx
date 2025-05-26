import Layout from "../components/layouts/layout";
import  Carousel  from "../components/Craousel";
import JustArrivedProducts from "../components/JustArrived";
import AllProducts from "../components/AllProducts";
import CategoriesPage from "../components/Caregories";
import BrandCarousel from "../components/BrandCarousel";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <Layout>
     <div className="w-full rounded">
        <div className="w-11/12 mx-auto my-2">
            <Carousel />
        </div>
        <div className="w-11/12 mx-auto my-1">
            <JustArrivedProducts />
        </div>
        <div className="w-11/12 mx-auto my-1">
            <CategoriesPage />
        </div>
        <div className="w-11/12 mx-auto my-10">
            <AllProducts />
        </div>
        <div className="w-11/12 mx-auto my-10">
            <BrandCarousel />
        </div>
        <div className="w-11/12 mx-auto my-10">
            <Stats />
        </div>


     </div>

       
    </Layout>
  );
}

export default Home;