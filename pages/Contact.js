import Particlesjsxs from '../component/Particlesjsxs';

const Contact = () => {
    return (
        <>
            <Particlesjsxs />
            <div className="h-full z-20 relative rounded py-5 gap-5 px-12 bg-white border-2  border-black max-w-5xl mx-auto flex flex-col  my-14">
                <div className="text-center text-3xl uppercase ">Contact</div>
                <div>
                    <label className="text-lg">Name</label>
                    <input
                        className="w-full px-3 py-1 border-2 rounded border-gray-800   placeholder-gray-500"
                        placeholder="Enter Your Name"
                    />
                </div>
                <div>
                    <label className="text-lg">Email</label>
                    <input
                        className="w-full px-3 py-1 border-2 border-gray-800 rounded"
                        placeholder="Enter Your Email"
                    />
                </div>
                <div>
                    <label className="text-lg">FeedBack</label>
                    <textarea
                        className="w-full px-3 py-1 border-2 border-gray-800 rounded"
                        placeholder="Enter Your FeedBack"
                    />
                </div>
                <div>
                    <button className="w-full bg-gray-800 py-2 rounded text-white duration-300 ease-in-out transform text-base uppercase tracking-wider hover:bg-gray-900">
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
};

export default Contact;
