import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../LocalStorage/LocalStorage";
import { Helmet } from "react-helmet-async";
const DonateDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const donation = donations.find(donation => donation.id === idInt);
    //Toast and donate handler
    const donateHandler = () => {
        const isSaved = saveDonation(idInt);
        if (isSaved) {
            toast('Your Donate Successfuly Send!!');
        } else {
            toast.error('You have Already Donated !!')
        }
    };

    return (
        <div className="my-12 w-4/5 mx-auto relative">
            {/* Added relative positioning */}
            <Helmet>
                <title>
                    Details | Page
                </title>
            </Helmet>
            <div className="relative">
                <img className="w-full rounded" src={donation.picture} alt="" style={{ height: 500 }} />
                <div className="overlay absolute bottom-0 left-0 right-0 bg-black text-white opacity-50 p-8 w-full rounded h-24">
                    <button onClick={donateHandler} className="absolute bottom-8 left-8 py-2 px-3 font-bold text-xl text-white rounded" style={{ backgroundColor: donation.text_color }}>
                        Donate ${donation.price}
                    </button>
                    <ToastContainer></ToastContainer>
                </div>

            </div>
            <h2 className="mt-8 mb-4 font-extrabold text-2xl">{donation.title}</h2>
            <p className="text-justify text-zinc-600">{donation.description}</p>
        </div>
    );
};

export default DonateDetails;
