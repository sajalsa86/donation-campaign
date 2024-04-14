
const Bannar = () => {

    return (
        <div className="w-4/5 mx-auto text-center pb-48">

            <h2 className="text-4xl">I Grow By Helping People In Need</h2>
            <div className="mt-10 join">
                <input
                    type="text"
                    placeholder="Search by Category...."
                    className="join-item w-72 input input-bordered input-xl w-full max-w-xs"
                    value=""
                    onChange=""
                />
                <button className="join-item btn btn-secondary">
                    Search
                </button>
            </div>
        </div>
    );
};

export default Bannar;






