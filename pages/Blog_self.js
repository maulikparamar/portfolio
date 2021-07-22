import Particlesjsxs from '../component/Particlesjsxs';

const Blog_self = () => {
    return (
        <>
            <Particlesjsxs />
            <div className="h-full  z-20 relative rounded py-5 gap-5 md:px-12 px-2 bg-white border-2  border-black max-w-5xl mx-auto flex flex-col  my-14">
                <div className="text-center capitalize text-2xl">
                    my blog to show currently working projects
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 mx-auto  w-24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                </svg>
                <div className="text-center uppercase">
                    {`/*
                    missing puzzle pieces is under construction
               */`}
                </div>
            </div>
        </>
    );
};

export default Blog_self;
