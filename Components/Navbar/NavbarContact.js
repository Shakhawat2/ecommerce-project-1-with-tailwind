import Link from 'next/link';
import {
	BsFacebook,
	BsInstagram,
	BsLinkedin,
	BsTelephoneFill,
	BsTwitter
} from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';

const NavbarContact = () => {
    return (
        <div className="bg-gray-900 text-white hidden lg:block sticky -top-0">
            <div className="flex flex-col lg:flex-row lg:justify-between container mx-auto py-3 px-5">
                <div className="flex justify-center items-center gap-5">
                    <Link className="font-bold text-lg" href="">
                        Follow Us
                    </Link>
                    <span className="text-slate-500">|</span>
                    <Link href="">
                        <BsFacebook />
                    </Link>
                    <span className="text-slate-500">|</span>
                    <Link href="">
                        <BsTwitter />
                    </Link>
                    <span className="text-slate-500">|</span>
                    <Link href="">
                        <BsLinkedin />
                    </Link>
                    <span className="text-slate-500">|</span>
                    <Link href="">
                        <BsInstagram />
                    </Link>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <Link
                        className="flex items-center gap-2 font-semibold text-lg"
                        href=""
                    >
                        <BsTelephoneFill /> 11987654321
                    </Link>
                    <span className="text-slate-500">|</span>
                    <Link
                        className="flex items-center gap-2 font-semibold text-lg"
                        href=""
                    >
                        <ImLocation /> Banani, Dhaka, Bangladesh
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavbarContact;