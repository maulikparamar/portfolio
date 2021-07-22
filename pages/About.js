import Particlesjsxs from '../component/Particlesjsxs';

const About = () => {
    return (
        <>
            <Particlesjsxs />
            <div className="h-full z-20 relative rounded py-5 bg-white border-2  border-black max-w-5xl mx-auto flex flex-col md:gap-10 my-14">
                <div className="w-full text-2xl  text-center   uppercase">
                    {' '}
                    About
                </div>
                <div className="flex md:flex-row gap-5 md:gap-0 flex-col p-3 md:px-0">
                    <div className="md:w-1/2 gap-5 w-full flex flex-col ">
                        <div className=" md:w-2/3 w-full rounded  py-3 border-2 border-gray-800 mx-auto  flex gap-5 shadow px-4">
                            <label className="font-semibold">Name :</label>
                            <label>Parmar Mauliksinh S.</label>
                        </div>
                        <div className="shadow px-4 py-3 border-2 border-gray-800 md:w-2/3 w-full rounded mx-auto  flex gap-5 ">
                            <label className="font-semibold">Birthday :</label>
                            <label>12/05/2000</label>
                        </div>
                        <div className="shadow px-4 py-3 border-2 border-gray-800 md:w-2/3 w-full rounded mx-auto  flex gap-5 ">
                            <label className="font-semibold">Age :</label>
                            <label>21</label>
                        </div>
                        <div className="shadow px-4 py-3 border-2 border-gray-800 md:w-2/3 w-full rounded mx-auto  flex gap-5 ">
                            <label className="font-semibold">Address :</label>
                            <label>Palanpur, Banaskantha</label>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full gap-5 flex flex-col">
                        <div className="shadow px-4 py-3  border-2 border-gray-800 md:w-2/3 w-full rounded mx-auto  flex gap-5 ">
                            <label className="font-semibold">Email :</label>
                            <label>maulikparamar711@gmail.com</label>
                        </div>
                        <div className="shadow px-4 py-3 border-2 border-gray-800 md:w-2/3 w-full rounded mx-auto  flex gap-5 ">
                            <label className="font-semibold">Phone :</label>
                            <label>###########</label>
                        </div>
                        <div className="shadow px-4 py-3 border-2 border-gray-800 md:w-2/3 w-full rounded mx-auto  flex gap-5 ">
                            <label className="font-semibold">Study :</label>
                            <label>Gokul Global University</label>
                        </div>
                        <div className="shadow px-4 py-3 border-2 border-gray-800 md:w-2/3 w-full rounded mx-auto  flex gap-5 ">
                            <label className="font-semibold">Work:</label>
                            <label>The Joy Giving Digimark</label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="md:text-2xl text-base uppercase text-center my-3  font-semibold">
                        Programming Languages
                    </div>
                    <div className="flex md:flex-row flex-col w-full font-mono">
                        <div className="md:w-1/3  w-full  px-5">
                            <div>
                                <label className="md:text-base text-sm">
                                    Javascript
                                </label>
                                <div className="overflow-hidden h-2 my-2 text-xs flex rounded bg-gray-200">
                                    <div
                                        style={{ width: '70%' }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"
                                    ></div>
                                </div>
                            </div>
                            <div>
                                <label className="md:text-base text-sm">
                                    Next js
                                </label>
                                <div className="overflow-hidden h-2 my-2 text-xs flex rounded bg-gray-200">
                                    <div
                                        style={{ width: '80%' }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"
                                    ></div>
                                </div>
                            </div>
                            <div>
                                <label className="md:text-base text-sm">
                                    Mysql
                                </label>
                                <div className="overflow-hidden h-2 my-2 text-xs flex rounded bg-gray-200">
                                    <div
                                        style={{ width: '60%' }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/3 w-full px-5">
                            <div>
                                <label className="md:text-base text-sm">
                                    Strapi CMS
                                </label>
                                <div className="overflow-hidden h-2 my-2 text-xs flex rounded bg-gray-200">
                                    <div
                                        style={{ width: '70%' }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"
                                    ></div>
                                </div>
                            </div>
                            <div>
                                <label className="md:text-base text-sm">
                                    React js
                                </label>
                                <div className="overflow-hidden h-2 my-2 text-xs flex rounded bg-gray-200">
                                    <div
                                        style={{ width: '70%' }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"
                                    ></div>
                                </div>
                            </div>
                            <div>
                                <label className="md:text-base text-sm">
                                    Node js
                                </label>
                                <div className="overflow-hidden h-2 my-2 text-xs flex rounded bg-gray-200">
                                    <div
                                        style={{ width: '50%' }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/3 w-full px-5">
                            <div>
                                <label className="md:text-base text-sm">
                                    Tailwind && Bootstrap
                                </label>
                                <div className="overflow-hidden h-2 my-2 text-xs flex rounded bg-gray-200">
                                    <div
                                        style={{ width: '60%' }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"
                                    ></div>
                                </div>
                            </div>
                            <div>
                                <label className="md:text-base text-sm">
                                    Php
                                </label>
                                <div className="overflow-hidden h-2 my-2 text-xs flex rounded bg-gray-200">
                                    <div
                                        style={{ width: '30%' }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"
                                    ></div>
                                </div>
                            </div>
                            <div>
                                <label className="md:text-base text-sm">
                                    Java
                                </label>
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
