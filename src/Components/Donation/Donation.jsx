import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonatios } from "../LocalStorage/LocalStorage";
import { useState } from "react";
import Item from "../Item/Item";
import { Helmet } from "react-helmet-async";
const Donation = () => {
    const donated = useLoaderData();
    const [donateItem, setDonateItem] = useState([]);
    const [showAll, setShowAll] = useState(false); // State to track whether to show all items
    const [dataLength] = useState(4);

    useEffect(() => {
        const storedDonate = getStoredDonatios();
        if (donated.length > 0) {
            const itemDonate = donated.filter(don => storedDonate.includes(don.id));
            setDonateItem(itemDonate);
        }
    }, []);

    const handleSeeAll = () => {
        setShowAll(true); // Set showAll to true when "see all" button is clicked
    };

    return (
        <div className="w-4/5 mx-auto mb-12">
            <Helmet>
                <title>
                    Donation | Page
                </title>
                <link rel="icon" type="image/svg+xml" href="/public/donation.svg" />
            </Helmet>
            <div className="grid grid-cols-2 gap-5">
                {donateItem.slice(0, showAll ? donateItem.length : dataLength).map(item => (
                    <Item key={item.id} item={item}></Item>
                ))}
            </div>
            {!showAll && donateItem.length > 4 && ( // Only show "see all" button if there are more than 4 items
                <div className="text-center my-4">
                    <button className="btn btn-success capitalize" onClick={handleSeeAll}>
                        see all
                    </button>
                </div>
            )}
        </div>
    );
};

export default Donation;
