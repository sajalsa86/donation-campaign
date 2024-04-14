import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! Something went wrong...</h1>
            <p className="text-lg text-gray-800 mb-8">We apologize for the inconvenience. Please try again later.</p>
            <img src="/error_image.png" alt="Error Illustration" className="max-w-sm mb-8" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <NavLink to='/'>Go Back</NavLink>
            </button>
        </div>
    );
};

export default ErrorPage;