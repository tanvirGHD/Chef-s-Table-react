
const Banner = () => {
    return (
        <div>
            <div
        className="hero w-11/12 mx-auto h-[500px]"
        style={{ backgroundImage: "url('https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp')" }}
        >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn bg-purple-500 text-white hover:bg-slate-100 hover:text-black">Get Started</button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Banner;