
import Image from 'next/image';
import Link from 'next/link';
import { IoMdMenu } from 'react-icons/io';

const Navbar = () => {
    return (
        <div className='container pt-8'>
            <div className='flex justify-between items-center'>
                <div className='text-xl font-medium'>

                    Rafia
                </div>
                <ul className='gap-10 lg:gap-16 hidden md:flex'>
                    <li className='menuLink'><a href="#hero">Home</a></li>
                    <li className='menuLink'><a href="/about">About</a></li>
                    <li className='menuLink'><a href="/projects">Projects</a></li>
                    <li className='menuLink'><a href="/skills">Skills</a></li>
                    <li className='menuLink'><a href="contact">Contact</a></li>
                </ul>
                <IoMdMenu className='md:hidden' size={30} />
                <ul>
                    <li>
                        <Link href="/"></Link>
                        <Link href="/about"></Link>
                        <Link href="/projects"></Link>
                        <Link href="/skills"></Link>
                        <Link href="/contact"></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}


export default Navbar;