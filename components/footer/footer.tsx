import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer className="w-full flex flex-col items-center border-t border-gray-200 bg-gray-100 opacity-100 p-5">
                <div className="w-full max-w-5xl h-56 flex flex-wrap gap-2 md:gap-4 justify-between items-start">
                    <div className="flex flex-col gap-5 w-80 min-w-72 h-56 opacity-100 pt-5">
                        <span className="font-archivo font-semibold text-xl leading-none text-gray-800 mb-1">
                            Support
                        </span>
                        <Link
                            href="#"
                            className="font-archivo font-normal text-base leading-none text-gray-700 hover:text-orange-500"
                        >
                            Help Centre
                        </Link>
                        <Link
                            href="#"
                            className="font-archivo font-normal text-base leading-none text-gray-700 hover:text-orange-500"
                        >
                            AirCover
                        </Link>
                        <Link
                            href="#"
                            className="font-archivo font-normal text-base leading-none text-gray-700 hover:text-orange-500"
                        >
                            Combating discrimination
                        </Link>
                        <Link
                            href="#"
                            className="font-archivo font-normal text-base leading-none text-gray-700 hover:text-orange-500"
                        >
                            Supporting people with disabilities
                        </Link>
                        <Link
                            href="#"
                            className="font-archivo font-normal text-base leading-none text-gray-700 hover:text-orange-500"
                        >
                            Cancellation options
                        </Link>
                    </div>
                    <div className="flex flex-col gap-5 w-80 min-w-72 h-56 opacity-100 pt-5">
                        <span className="font-archivo font-semibold text-xl leading-none text-gray-800 mb-1">
                            Hosting
                        </span>
                        <Link
                            href="#"
                            className="font-archivo font-normal text-base leading-none text-gray-700 hover:text-orange-500"
                        >
                            Local home
                        </Link>
                        <Link
                            href="#"
                            className="font-archivo font-normal text-base leading-none text-gray-700 hover:text-orange-500"
                        >
                            Cover for hosts
                        </Link>
                        <Link
                            href="#"
                            className="font-archivo font-normal text-base leading-none text-gray-700 hover:text-orange-500"
                        >
                            Hosting resources
                        </Link>
                        <Link
                            href="#"
                            className="font-archivo font-normal text-base leading-none text-gray-700 hover:text-orange-500"
                        >
                            Community forum
                        </Link>
                        <Link
                            href="#"
                            className="font-archivo font-normal text-base leading-none text-gray-700 hover:text-orange-500"
                        >
                            Hosting responsibly
                        </Link>
                    </div>
                    <div className="flex flex-col gap-5 w-80 min-w-72 h-56 opacity-100 pt-5">
                        <span className="font-archivo font-semibold text-xl leading-none text-gray-800 mb-1">
                            Hostify
                        </span>
                        <Link
                            href="#"
                            className="font-archivo font-normal text-base leading-none text-gray-700 hover:text-orange-500"
                        >
                            Newsroom
                        </Link>
                        <Link
                            href="#"
                            className="font-archivo font-normal text-base leading-none text-gray-700 hover:text-orange-500"
                        >
                            New Features
                        </Link>
                        <Link
                            href="#"
                            className="font-archivo font-normal text-base leading-none text-gray-700 hover:text-orange-500"
                        >
                            Careers
                        </Link>
                        <Link
                            href="#"
                            className="font-archivo font-normal text-base leading-none text-gray-700 hover:text-orange-500"
                        >
                            Investres
                        </Link>
                        <Link
                            href="#"
                            className="font-archivo font-normal text-base leading-none text-gray-700 hover:text-orange-500"
                        >
                            Gift cards
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
