import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer className="w-full flex flex-col items-center border-t border-light-e8 footer-bg p-5 lg:px-0 lg:py-6">
                <div className="w-full header-content flex flex-col lg:flex-row gap-5 lg:gap-10 justify-between items-start pb-8">
                    <div className="flex flex-col gap-5 w-full sm:w-auto pt-5">
                        <span className="font-semibold text-lg text-gray-900 mb-1">
                            Support
                        </span>
                        <Link
                            href="#"
                            className="font-normal text-sm text-gray-700 hover:text-orange-500 transition-colors"
                        >
                            Help Centre
                        </Link>
                        <Link
                            href="#"
                            className="font-normal text-sm text-gray-700 hover:text-orange-500 transition-colors"
                        >
                            AirCover
                        </Link>
                        <Link
                            href="#"
                            className="font-normal text-sm text-gray-700 hover:text-orange-500 transition-colors"
                        >
                            Combating discrimination
                        </Link>
                        <Link
                            href="#"
                            className="font-normal text-sm text-gray-700 hover:text-orange-500 transition-colors"
                        >
                            Supporting people with disabilities
                        </Link>
                        <Link
                            href="#"
                            className="font-normal text-sm text-gray-700 hover:text-orange-500 transition-colors"
                        >
                            Cancellation options
                        </Link>
                    </div>
                    <div className="flex flex-col gap-5 w-full sm:w-auto pt-5">
                        <span className="font-semibold text-lg text-gray-900 mb-1">
                            Hosting
                        </span>
                        <Link
                            href="#"
                            className="font-normal text-sm text-gray-700 hover:text-orange-500 transition-colors"
                        >
                            Local home
                        </Link>
                        <Link
                            href="#"
                            className="font-normal text-sm text-gray-700 hover:text-orange-500 transition-colors"
                        >
                            Cover for hosts
                        </Link>
                        <Link
                            href="#"
                            className="font-normal text-sm text-gray-700 hover:text-orange-500 transition-colors"
                        >
                            Hosting resources
                        </Link>
                        <Link
                            href="#"
                            className="font-normal text-sm text-gray-700 hover:text-orange-500 transition-colors"
                        >
                            Community forum
                        </Link>
                        <Link
                            href="#"
                            className="font-normal text-sm text-gray-700 hover:text-orange-500 transition-colors"
                        >
                            Hosting responsibly
                        </Link>
                    </div>
                    <div className="flex flex-col gap-5 w-full sm:w-auto pt-5">
                        <span className="font-semibold text-lg text-gray-900 mb-1">
                            Hostify
                        </span>
                        <Link
                            href="#"
                            className="font-normal text-sm text-gray-700 hover:text-orange-500 transition-colors"
                        >
                            Newsroom
                        </Link>
                        <Link
                            href="#"
                            className="font-normal text-sm text-gray-700 hover:text-orange-500 transition-colors"
                        >
                            New Features
                        </Link>
                        <Link
                            href="#"
                            className="font-normal text-sm text-gray-700 hover:text-orange-500 transition-colors"
                        >
                            Careers
                        </Link>
                        <Link
                            href="#"
                            className="font-normal text-sm text-gray-700 hover:text-orange-500 transition-colors"
                        >
                            Investres
                        </Link>
                        <Link
                            href="#"
                            className="font-normal text-sm text-gray-700 hover:text-orange-500 transition-colors"
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
