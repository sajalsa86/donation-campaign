import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Item = ({ item }) => {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const { id, picture, title, category, price, category_bg, card_bg, text_color } = item;
    return (
        <div style={{ backgroundColor: card_bg }} className="card card-side bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Movie" /></figure>
            <div className="card-body">
                <h4 className="py-1 text-center w-20 rounded font-semibold" style={{ backgroundColor: category_bg, color: text_color }}>{category}</h4>
                <h3>{title}</h3>
                <p style={{ color: text_color }}>$ {price}</p>
                <Link to={`/donateDetails/${id}`}>
                    <button style={{ backgroundColor: text_color }} className="w-28 px-2 py-1 rounded text-white">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Item;