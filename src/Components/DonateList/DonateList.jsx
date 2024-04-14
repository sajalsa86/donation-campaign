import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const DonateList = ({ donateList }) => {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const { id, picture, title, category, category_bg, card_bg, text_color } = donateList;
    return (
        <Link to={`/donateDetails/${id}`}>
            <div style={{ backgroundColor: card_bg }} className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={picture} alt="" /></figure>
                <div className="card-body">
                    <h4 className="py-1 text-center w-20 rounded font-semibold" style={{ backgroundColor: category_bg, color: text_color }}>{category}</h4>
                    <h2 style={{ color: text_color }} className="card-title">{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default DonateList;

