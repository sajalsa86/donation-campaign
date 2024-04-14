
import { useEffect, useState } from "react";
import DonateList from "../DonateList/DonateList";
const Donations = () => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setDonations(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="my-12 grid grid-cols-4 gap-5">
            {donations.map(donateList =>
                <DonateList
                    key={donateList.id}
                    donateList={donateList}
                />
            )}
        </div>
    );
};

export default Donations;











