import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer className="w-full bg-light-f4">
                <div className="flex justify-center items-start px-4 sm:px-6 md:px-4 py-8 md:py-8 lg:py-5 lg:bg-light-f4">
                    {/* Desktop: 1340px max-width container with 3 columns */}
                    <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap gap-5 md:gap-6 lg:gap-2.5 w-full md:w-auto lg:max-w-5xl lg:justify-start lg:items-start">
                        {/* Support Column */}
                        <div className="flex flex-col gap-5 w-full sm:w-auto md:flex-1 lg:w-96 lg:pt-5">
                            <h3 className="font-semibold text-base md:text-base lg:text-xl lg:font-semibold text-gray-900">
                                Support
                            </h3>
                            <Link
                                href="#"
                                className="font-normal text-sm md:text-sm lg:text-base text-gray-700 hover:text-orange-500 transition-colors"
                            >
                                Help Centre
                            </Link>
                            <Link
                                href="#"
                                className="font-normal text-sm md:text-sm lg:text-base text-gray-700 hover:text-orange-500 transition-colors"
                            >
                                AirCover
                            </Link>
                            <Link
                                href="#"
                                className="font-normal text-sm md:text-sm lg:text-base text-gray-700 hover:text-orange-500 transition-colors"
                            >
                                Combating discrimination
                            </Link>
                            <Link
                                href="#"
                                className="font-normal text-sm md:text-sm lg:text-base text-gray-700 hover:text-orange-500 transition-colors"
                            >
                                Supporting people with disabilities
                            </Link>
                            <Link
                                href="#"
                                className="font-normal text-sm md:text-sm lg:text-base text-gray-700 hover:text-orange-500 transition-colors"
                            >
                                Cancellation options
                            </Link>
                        </div>

                        {/* Hosting Column */}
                        <div className="flex flex-col gap-5 w-full sm:w-auto md:flex-1 lg:w-96 lg:pt-5">
                            <h3 className="font-semibold text-base md:text-base lg:text-xl lg:font-semibold text-gray-900">
                                Hosting
                            </h3>
                            <Link
                                href="#"
                                className="font-normal text-sm md:text-sm lg:text-base text-gray-700 hover:text-orange-500 transition-colors"
                            >
                                Local home
                            </Link>
                            <Link
                                href="#"
                                className="font-normal text-sm md:text-sm lg:text-base text-gray-700 hover:text-orange-500 transition-colors"
                            >
                                Cover for hosts
                            </Link>
                            <Link
                                href="#"
                                className="font-normal text-sm md:text-sm lg:text-base text-gray-700 hover:text-orange-500 transition-colors"
                            >
                                Hosting resources
                            </Link>
                            <Link
                                href="#"
                                className="font-normal text-sm md:text-sm lg:text-base text-gray-700 hover:text-orange-500 transition-colors"
                            >
                                Community forum
                            </Link>
                            <Link
                                href="#"
                                className="font-normal text-sm md:text-sm lg:text-base text-gray-700 hover:text-orange-500 transition-colors"
                            >
                                Hosting responsibly
                            </Link>
                        </div>

                        {/* Hostify Column */}
                        <div className="flex flex-col gap-5 w-full sm:w-auto md:flex-1 lg:w-96 lg:pt-5">
                            <h3 className="font-semibold text-base md:text-base lg:text-xl lg:font-semibold text-gray-900">
                                Hostify
                            </h3>
                            <Link
                                href="#"
                                className="font-normal text-sm md:text-sm lg:text-base text-gray-700 hover:text-orange-500 transition-colors"
                            >
                                Newsroom
                            </Link>
                            <Link
                                href="#"
                                className="font-normal text-sm md:text-sm lg:text-base text-gray-700 hover:text-orange-500 transition-colors"
                            >
                                New Features
                            </Link>
                            <Link
                                href="#"
                                className="font-normal text-sm md:text-sm lg:text-base text-gray-700 hover:text-orange-500 transition-colors"
                            >
                                Careers
                            </Link>
                            <Link
                                href="#"
                                className="font-normal text-sm md:text-sm lg:text-base text-gray-700 hover:text-orange-500 transition-colors"
                            >
                                Investres
                            </Link>
                            <Link
                                href="#"
                                className="font-normal text-sm md:text-sm lg:text-base text-gray-700 hover:text-orange-500 transition-colors"
                            >
                                Gift cards
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
