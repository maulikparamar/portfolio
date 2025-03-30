'use client';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link'
import Particlesjsxs from '../component/Particlesjsxs';
import { ToastContainer, toast } from 'react-toastify';
import { AiFillDiscord, AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
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

    

    const technologies_list =  [
        {
            "name":"Asp.net",
            "image":require("../component/image/icons/Asp.net core.png"),
        },
        {
            "name":"MSSQL",
            "image":require('../component/image/icons/Sql Server.png'),
        },
        {
            "name":"C#",
            "image":require("../component/image/icons/c-sharp.png"),
        },
        {
            "name":"Github",
            "image":require("../component/image/icons/Github.png"),
        },
        {
            "name":"Java",
            "image":require("../component/image/icons/java.png"),
        },
        {
            "name":"Javascript",
            "image":require("../component/image/icons/javascript.png"),

        },
        {
            "name":"kotlin",
            "image":require("../component/image/icons/kotlin.avif"),

        },
        {
            "name":"MySql",
            "image":require("../component/image/icons/MySql.png"),

        },
        {
            "name":"node js",
            "image":require("../component/image/icons/node js.jpg"),

        },
        {
            "name":"PHP",
            "image":require("../component/image/icons/PHP.png"),

        },
        {
            "name":"python",
            "image":require("../component/image/icons/python.png"),

        },
        {
            "name":"PyTorch",
            "image":require("../component/image/icons/PyTorch.png"),

        },
        {
            "name":"swiftui",
            "image":require("../component/image/icons/swiftui.png"),

        },
        {
            "name":"tailwind",
            "image":require("../component/image/icons/tailwind.png"),

        },
        {
            "name":"TensorFlow",
            "image":require("../component/image/icons/TensorFlow.png"),

        }
    ]

    function bottom_view() {
        window.scrollBy({ top: document.body.scrollHeight, behavior: 'smooth' })
    }

    return (
        <div>
            {/* Hello Maulik */}
            <div id='home' className="h-screen bg-background flex justify-center items-center text-white">
                <div className="flex flex-row h-2/3 w-3/4">
                    <div className='w-1/2 justify-items-center flex items-center p-10'>
                        <div className='flex flex-col gap-7 items-start'>
                            <label className='text-yellow-400'>Hello, Welcome</label>
                            <h2 className='font-bold text-4xl'>I'm Mauliksinh Parmar</h2>
                            <h4 className='text-colour-label'>🚀 Data Scientist | 💻 Backend Developer | 📊 Web Developer | 📱 Mobile Application Developer</h4>
                            <button onClick={bottom_view} className='btn-background-colour py-2 px-3 text-black rounded-sm font-semibold'>Contact us</button>
                        </div>
                    </div>
                    <div className="flex justify-center  w-1/2">
                        <div className="mt-11">
                            <Image
                            layout="responsive"
                            src={require('../component/image/profile.jpg')}
                            alt="profile image"
                            className="rounded-xl"
                            />
                        </div>
                    </div>
                </div>       
            </div>

           {/* about us */}
            <div id='about_use' className="h-screen bg-background-dark flex justify-center items-center text-white">
                <div className='flex flex-row h-2/3 w-3/4'>
                <div className="flex justify-center w-1/2 z-10">
                    <div className="mt-11 yellow-round-border relative">
                        <Image
                            layout="responsive"
                            src={require('../component/image/profile.jpg')}
                            alt="profile image"
                            className="rounded-xl yellow-round-border z-10"
                        />
                    </div>
                </div>
                <div className='w-1/2 justify-items-center flex items-center p-10'>
                        <div className='flex flex-col gap-5 items-start'>
                            <div className='text-4xl font-semibold'>
                                <label className='text-white'>About</label> <label className='text-yellow-300'>Me.</label>
                            </div>
                            <div className='text-colour-label'>
                            I am passionate about data science, backend development, web, and mobile application development. I love solving complex problems and continuously learning new technologies. With an adaptable and self-driven mindset, I thrive in dynamic environments, transforming data into real-world solutions.
                            </div>
                            <div className='text-colour-label'>
📈 I stay updated with industry trends and focus on building innovative and impactful projects. My goal is to contribute to meaningful work that drives business growth and technological advancement. Let’s create something amazing together! 🚀
                            </div>
                            <button onClick={bottom_view} className='btn-background-colour py-2 px-3 text-black rounded-sm font-semibold'>Contact us</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technologies Worked*/}
            <div id='technologies_worked' className='h-screen items-center bg-background flex  text-white justify-center'>
                <div className='flex flex-col gap-8 h-2/3 w-3/4 justify-center'>
                    <div className='text-4xl  font-bold'>
                        <label className='text-white'>Technologies</label> <label className='text-yellow-300'>Worked</label>
                    </div>
                    {/* <div className='text-colour-label w-1/2'>
                        There are many variations of passages ofLorem Ipsum
                        available, but the majority havesuffered alteration in some 
                        form, by injected humour,
                    </div> */}
                    <div className='grid grid-flow-col grid-rows-3 gap-8 justify-center'>
                        {technologies_list.map((e) => (
                            <div className='flex justify-items-center items-center gap-7 text-center py-5 px-10 bg-background-dark rounded-2xl'>
                                <div className='w-14'>
                                    {e.image != "" && (<Image
                                    layout="intrinsic"
                                    src={e.image}
                                    alt="profile image"
                                    className=""
                                    />)}
                                </div>
                                <div className='text-base capitalize font-medium'>{e.name}</div>
                                {/* <div className='text-colour-label'>{e.description}</div> */}
                            </div>
                        ))}

                        {/* <div className='flex flex-col items-center text-center gap-10 bg-background-dark py-10 px-14 rounded-2xl'>
                            <div>
                                <Image
                                layout="responsive"
                                src={require('../component/image/icons/Sql Server.png')}
                                alt="profile image"
                                className="rounded-xl"
                                />
                            </div>
                            <div className='text-2xl font-bold'>MSSQL</div>
                            <div className='text-colour-label'>There are many variations of passages ofLorem Ipsumavailable, but the majority havesuffered 
                            alteration in some </div>
                        </div>
                        <div className='flex flex-col items-center text-center gap-10 bg-background-dark py-10 px-14 rounded-2xl'>
                            <div>Image</div>
                            <div className='text-2xl font-bold'></div>
                            <div className='text-colour-label'>There are many variations of passages ofLorem Ipsumavailable, but the majority havesuffered 
                            alteration in some </div>
                        </div>
                        <div className='flex flex-col items-center text-center gap-10 bg-background-dark py-10 px-14 rounded-2xl'>
                            <div>Image</div>
                            <div className='text-2xl font-bold'>Creative
                            Graphic Design</div>
                            <div className='text-colour-label'>There are many variations of passages ofLorem Ipsumavailable, but the majority havesuffered 
                            alteration in some </div>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* My Education */}
            <div id='my_education' className='h-screen items-center bg-background-dark flex text-white justify-center'>
                <div className='flex flex-col gap-8 h-2/3 w-3/4 justify-center'>
                    <div className='text-4xl  font-bold'>
                        <label className='text-white'>My</label> <label className='text-yellow-300'>Education</label>
                    </div>
                    {/* <div className='text-colour-label w-1/2'>
                        There are many variations of passages ofLorem Ipsum
                        available, but the majority havesuffered alteration in some 
                        form, by injected humour,
                    </div> */}
                    <div className='flex gap-4 flex-col'>
                        <div className='flex flex-col gap-3 bg-background py-6 px-8 rounded-2xl'>
                            <div className='flex justify-between'>
                                <div className='font-bold'>Nirma University Institute of Technology, Ahmedabad</div> 
                                <div>Expected June-July 2025</div>
                            </div>
                            <div className=''>Master of Technology in Computer Science and Engineering (Data science) (CGPA: 7.87 / 10.00)</div>
                        </div>
                        <div className='flex flex-col gap-3 bg-background py-6 px-8 rounded-2xl'>
                            <div className='flex justify-between'>
                                <div className='font-bold'>Hansaba College of Engineering and Technology, Siddhpur</div> 
                                <div>Completed May 2023</div>
                            </div>
                            <div className=''>Bachelor of Engineering Computer Engineering (CGPA: 8.23 / 10.00)</div>
                        </div>
                        <div className='flex flex-col gap-3 bg-background py-6 px-8 rounded-2xl'>
                            <div className='flex justify-between'>
                                <div className='font-bold'>Jashodaba Polytechnic Institute, Siddhpur</div> 
                                <div>Completed Sep 2020</div>
                            </div>
                            <div className=''>Diploma in Computer Engineering (CGPA: 8.33 / 10.00)</div>
                        </div>
                        <div className='flex justify-around items-center bg-background py-4 px-14 rounded-2xl'>
                        <button onClick={() => (window.location.href = "https://www.codechef.com/users/maulik92")}>
                            <Image width={100} height={2} src={require("../component/image/CodeChef.png")}/>
                        </button>
                        <button className='bg-white items-center flex px-4 py-4 rounded-md' onClick={() => (window.location.href = "https://www.hackerrank.com/profile/maulikparamar711")}>
                            <Image width={100} height={2} src={require("../component/image/Hackerrank.png")}/>
                        </button>
                        <button onClick={() => (window.location.href = "https://leetcode.com/maulikparmar/")}>
                            <Image width={50} height={2} src={require("../component/image/LeetCode_logo_rvs.png")}/>
                        </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* My Projects */}
            <div id='my_project' className='h-screen items-center bg-background flex  text-white justify-center'>
                <div className='flex flex-col gap-8 h-2/3 w-3/4 justify-center'>
                    <div className='text-4xl  font-bold'>
                        <label className='text-white'>My</label> <label className='text-yellow-300'>Projects</label>
                    </div>
                    {/* <div className='text-colour-label w-1/2'>
                        There are many variations of passages ofLorem Ipsum
                        available, but the majority havesuffered alteration in some 
                        form, by injected humour,
                    </div> */}
                    {/* <div className='flex gap-16'>
                        <div className='flex flex-col items-center text-center gap-10 bg-background-dark py-10 px-14 rounded-2xl'>
                            <div>Image</div>
                            <div className='text-2xl font-bold'>Digital 
                            Marketing</div>
                            <div className='text-colour-label'>There are many variations of passages ofLorem Ipsumavailable, but the majority havesuffered 
                            alteration in some </div>
                        </div>
                        <div className='flex flex-col items-center text-center gap-10 bg-background-dark py-10 px-14 rounded-2xl'>
                            <div>Image</div>
                            <div className='text-2xl font-bold'>Web
                            Devlopment</div>
                            <div className='text-colour-label'>There are many variations of passages ofLorem Ipsumavailable, but the majority havesuffered 
                            alteration in some </div>
                        </div>
                        <div className='flex flex-col items-center text-center gap-10 bg-background-dark py-10 px-14 rounded-2xl'>
                            <div>Image</div>
                            <div className='text-2xl font-bold'>Creative
                            Graphic Design</div>
                            <div className='text-colour-label'>There are many variations of passages ofLorem Ipsumavailable, but the majority havesuffered 
                            alteration in some </div>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* Contact Me */}
            <div id='contact_me' className='h-screen items-center bg-background-dark flex  text-white justify-center'>
                <div className='flex flex-col gap-8 h-2/3 w-3/4 justify-center'>
                    <div className='text-4xl text-center  font-bold'>
                        <label className='text-white'>Contact</label> <label className='text-yellow-300'>Me</label>
                    </div>
                    <div className='text-colour-label text-center w-1/2 mx-auto'>
                    I’m always open to new opportunities, collaborations, and exciting projects! Feel free to reach out.
                    </div>
                    <div className='flex gap-6 justify-center text-4xl'>
                        <button onClick={() => window.location.href = 'https://www.linkedin.com/in/mauliksinh-parmar-092a42228/'}><AiFillLinkedin /></button>
                        {/* <label>Leetcode </label>
                        <label>Hackerrank</label>
                        <label>twitter</label> */}

                        <button onClick={() => window.location.href = "http://discordapp.com/users/maulikparmar711"}><AiFillDiscord /></button>
                        <button onClick={() => window.location.href = "mailto:maulikparamar711@gmail.com"}><AiOutlineMail /></button>
                        <button onClick={() => window.location.href = "https://github.com/maulikparamar"}><AiFillGithub /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
