import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
import Particlesjsxs from '../component/Particlesjsxs';
import { ToastContainer, toast } from 'react-toastify';
export default function Home() {
    const router = useRouter();
    const click = () => {
        toast(' 🤟😎Comming Soon', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        });
    };
    return (
        <div>
            <div>
                <ToastContainer />
                <Particlesjsxs />
                <div className="max-w-6xl z-30 relative mx-auto">
                    <div className="flex h-full md:mt-32  flex-col md:flex-row flex-wrap  rounded  md:bg-white">
                        <div className="md:hidden mx-auto w-1/2 mt-12 relative block">
                            <div className=" flex justify-center">
                                <div className="border-2  border-black rounded w-40">
                                    <Image
                                        layout="responsive"
                                        src={require('../component/image/profile.jpg')}
                                        alt="profile image"
                                        className=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2  overflow-hidden relative">
                            <div className="flex z-30 relative bg-white rounded-md shadow md:border-2 md:border-gray-800 p-6  flex-col gap-5   justify-center ">
                                <div className="text-3xl capitalize font-serif pt-8 tracking-wider font-semibold ">
                                    {' '}
                                    {`Hi! I'm Mauliksinh parmar`}
                                </div>
                                <div className="font-mono capitalize">
                                    Don’t repeat yourself. Every piece of
                                    knowledge must have a single, unambiguous,
                                    authoritative representation within a system
                                    <div className="flex gap-5  mx-auto my-7 w-52">
                                        <div
                                            className="tooltip"
                                            onClick={() => click()}
                                        >
                                            <Image
                                                src={require('../component/image/instagram.png')}
                                                className="cursor-pointer"
                                                alt="Instagram"
                                            />
                                            <span className="tooltiptext">
                                                Instagram
                                            </span>
                                        </div>
                                        <div
                                            className="tooltip"
                                            onClick={() => click()}
                                        >
                                            <Image
                                                src={require('../component/image/github.png')}
                                                className="cursor-pointer"
                                                alt="github"
                                            />
                                            <span className="tooltiptext">
                                                Github
                                            </span>
                                        </div>
                                        <div
                                            onClick={(e) =>
                                                (window.location =
                                                    'mailto:maulikparamar711@gmail.com')
                                            }
                                            className="tooltip"
                                        >
                                            <Image
                                                src={require('../component/image/gmail.png')}
                                                className="cursor-pointer"
                                                alt="gmail"
                                            />
                                            <span className="tooltiptext">
                                                Gmail
                                            </span>
                                        </div>
                                        <div
                                            className="tooltip"
                                            onClick={() => click()}
                                        >
                                            <Image
                                                src={require('../component/image/linkedin.png')}
                                                className="cursor-pointer"
                                                alt="linkedin"
                                            />
                                            <span className="tooltiptext">
                                                Linkedin
                                            </span>
                                        </div>
                                        <div
                                            className="tooltip"
                                            onClick={() => click()}
                                        >
                                            <Image
                                                src={require('../component/image/discord.png')}
                                                className="cursor-pointer "
                                                alt="discord"
                                            />
                                            <span className="tooltiptext">
                                                Discord
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-full font-sans flex flex-row   capitalize text-xl font-semibold justify-around px-3">
                                        <label>Web developer</label>
                                        <label>&</label>
                                        <label>Web designer</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:block w-1/2  relative hidden">
                            <div className=" flex justify-center">
                                <div className="border-2  border-black rounded -top-24 w-96 absolute">
                                    <Image
                                        layout="responsive"
                                        src={require('../component/image/profile.jpg')}
                                        alt="profile image"
                                        className=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
