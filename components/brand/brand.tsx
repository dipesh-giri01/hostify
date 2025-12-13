import Link from "next/link";

const Brand = () => {
  return (
    <div className="w-full brand-height flex flex-col md:flex-row items-center justify-center bg-white mx-auto px-5 lg:px-0 gap-2">
      <div className="header-content w-full flex flex-col md:flex-row items-center justify-between gap-3 md:gap-5">
        <span className="text-xs font-light text-gray-900">
          © 2023 Hostify, Inc. All Rights Reserved
        </span>
        <div className="flex gap-5 md:gap-8">
          <Link href="#" className="text-xs font-light text-gray-900 hover:text-orange-500 transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs font-light text-gray-900 hover:text-orange-500 transition-colors">
            Terms & Conditions
          </Link>
          <Link href="#" className="text-xs font-light text-gray-900 hover:text-orange-500 transition-colors">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Brand;
