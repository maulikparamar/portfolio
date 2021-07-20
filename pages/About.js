import Particlesjsxs from '../component/Particlesjsxs';

const About = () => {
    return (
        <>
            <Particlesjsxs />
            <div className="h-full z-20 relative rounded py-5 bg-white border-2  border-black max-w-5xl mx-auto flex flex-col gap-10 my-14">
                <div className="w-full text-2xl  text-center   uppercase">
                    {' '}
                    About
                </div>
                <div className="flex">
                    <div className="w-1/2 gap-5  flex flex-col ">
                        <div className=" w-2/3 rounded  py-3 border-2 border-gray-800 mx-auto  flex gap-5 shadow px-4">
                            <label className="font-semibold">Name :</label>
                            <label>Parmar Mauliksinh S.</label>
                        </div>
                        <div className="shadow px-4 py-3 border-2 border-gray-800 w-2/3 rounded mx-auto  flex gap-5 ">
                            <label className="font-semibold">Birthday :</label>
                            <label>12/05/2000</label>
                        </div>
                        <div className="shadow px-4 py-3 border-2 border-gray-800 w-2/3 rounded mx-auto  flex gap-5 ">
                            <label className="font-semibold">Age :</label>
                            <label>21</label>
                        </div>
                        <div className="shadow px-4 py-3 border-2 border-gray-800 w-2/3 rounded mx-auto  flex gap-5 ">
                            <label className="font-semibold">Address :</label>
                            <label>Palanpur, Banaskantha</label>
                        </div>
                    </div>
                    <div className="w-1/2 gap-5 flex flex-col">
                        <div className="shadow px-4 py-3  border-2 border-gray-800 w-2/3 rounded mx-auto  flex gap-5 ">
                            <label className="font-semibold">Email :</label>
                            <label>maulikparamar711@gmail.com</label>
                        </div>
                        <div className="shadow px-4 py-3 border-2 border-gray-800 w-2/3 rounded mx-auto  flex gap-5 ">
                            <label className="font-semibold">Phone :</label>
                            <label>###########</label>
                        </div>
                        <div className="shadow px-4 py-3 border-2 border-gray-800 w-2/3 rounded mx-auto  flex gap-5 ">
                            <label className="font-semibold">Study :</label>
                            <label>Gokul Global University</label>
                        </div>
                        <div className="shadow px-4 py-3 border-2 border-gray-800 w-2/3 rounded mx-auto  flex gap-5 ">
                            <label className="font-semibold">Work:</label>
                            <label>The Joy Giving Digimark</label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-2xl uppercase text-center my-3  font-semibold">
                        Programming Languages
                    </div>
                    <div className="flex w-full font-mono">
                        <div className="w-1/3  px-5">
                            <div>
                                <label>Javascript</label>
                                <div className="overflow-hidden h-2 my-2 text-xs flex rounded bg-gray-200">
                                    <div
                                        style={{ width: '70%' }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"
                                    ></div>
                                </div>
                            </div>
                            <div>
                                <label>Next js</label>
                                <div className="overflow-hidden h-2 my-2 text-xs flex rounded bg-gray-200">
                                    <div
                                        style={{ width: '80%' }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"
                                    ></div>
                                </div>
                            </div>
                            <div>
                                <label>Mysql</label>
                                <div className="overflow-hidden h-2 my-2 text-xs flex rounded bg-gray-200">
                                    <div
                                        style={{ width: '60%' }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/3 px-5">
                            <div>
                                <label>Strapi CMS</label>
                                <div className="overflow-hidden h-2 my-2 text-xs flex rounded bg-gray-200">
                                    <div
                                        style={{ width: '70%' }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"
                                    ></div>
                                </div>
                            </div>
                            <div>
                                <label>React js</label>
                                <div className="overflow-hidden h-2 my-2 text-xs flex rounded bg-gray-200">
                                    <div
                                        style={{ width: '70%' }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"
                                    ></div>
                                </div>
                            </div>
                            <div>
                                <label>Node js</label>
                                <div className="overflow-hidden h-2 my-2 text-xs flex rounded bg-gray-200">
                                    <div
                                        style={{ width: '50%' }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/3 px-5">
                            <div>
                                <label>Tailwind && Bootstrap</label>
                                <div className="overflow-hidden h-2 my-2 text-xs flex rounded bg-gray-200">
                                    <div
                                        style={{ width: '60%' }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"
                                    ></div>
                                </div>
                            </div>
                            <div>
                                <label>Php</label>
                                <div className="overflow-hidden h-2 my-2 text-xs flex rounded bg-gray-200">
                                    <div
                                        style={{ width: '30%' }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"
                                    ></div>
                                </div>
                            </div>
                            <div>
                                <label>Java</label>
                                <div className="overflow-hidden h-2 my-2 text-xs flex rounded bg-gray-200">
                                    <div
                                        style={{ width: '30%' }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
