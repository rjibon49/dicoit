import Layout from "../components/Layout";
import TopBanner from "../components/Home/TopBanner";
import AboutBanner from "../components/Home/AboutBanner";
import Process from "../components/Home/Process";
import OurService from "../components/Home/OurService";
import Affordable from "../components/Home/Affordable";
import PortfolioData from "../components/Home/PortfolioData";
import RedesignNote from "../components/Home/RedesignNote";


const Index = () => {
    return (
        <Layout>
            <TopBanner />
            <AboutBanner />
            <Process />
            <OurService />
            <Affordable />
            <PortfolioData />
            <RedesignNote />
        </Layout>
    );
};

export default Index;