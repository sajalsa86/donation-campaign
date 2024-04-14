
import Donations from "../Donations/Donations";
import { Helmet } from "react-helmet-async";

const Home = () => {

    return (
        <div className="w-4/5 mx-auto">
            <Helmet>
                <title>Home | Page</title>
                <link rel="icon" type="image/svg+xml" href="/public/home.svg" />
            </Helmet>
            <Donations></Donations>
        </div>
    );
};

export default Home;

