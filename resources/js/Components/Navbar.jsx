import { Link, Head } from '@inertiajs/react';
import logo from "../../../public/Logo.png"

const Navbar = () => {
    return (
        <div className='w-screen flex justify-between'>
            <div className='flex justify-center items-center'>
                <img className='h-9 w-9' src={logo} alt="logo"/>
            </div>
            <div className='w-1/3 flex justify-between items-center'>
                <Link href='/'>
                    <p className='font-sans text-lg font-medium text-white'>Home</p>
                </Link>
                <Link href='/product'>
                    <p className='font-sans text-lg font-medium text-white'>Product</p>
                </Link>
                <Link href='/about'>
                    <p className='font-sans text-lg font-medium text-white'>About</p>
                </Link>
                <Link href='/account'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" className='fill-white'>
                        <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/>
                    </svg>
                </Link>
            </div>
        </div>
    )
}
export default Navbar