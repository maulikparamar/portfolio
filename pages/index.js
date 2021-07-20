import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
import Particlesjsxs from '../component/Particlesjsxs';
export default function Home() {
    const router = useRouter();
    return (
        <div>
            <div>
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
                                    <div className="flex gap-5 my-7 w-52">
                                        <label>
                                            <Image
                                                src={require('../component/image/instagram.png')}
                                                className="cursor-pointer"
                                                alt="Instagram"
                                            />
                                        </label>
                                        <label>
                                            <Image
                                                src={require('../component/image/github.png')}
                                                className="cursor-pointer"
                                                alt="github"
                                            />
                                        </label>
                                        <label>
                                            <Image
                                                src={require('../component/image/gmail.png')}
                                                className="cursor-pointer"
                                                alt="gmail"
                                            />
                                        </label>
                                        <label>
                                            <Image
                                                src={require('../component/image/linkedin.png')}
                                                className="cursor-pointer"
                                                alt="linkedin"
                                            />
                                        </label>
                                        <label>
                                            <Image
                                                src={require('../component/image/discord.png')}
                                                className="cursor-pointer"
                                                alt="linkedin"
                                            />
                                        </label>
                                    </div>
                                    <div className="w-full font-sans flex md:flex-row flex-col  capitalize text-xl font-semibold justify-around px-3">
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
