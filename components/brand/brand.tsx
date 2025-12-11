import Link from "next/link";

const Brand = () => {
  return (
    <div className="w-full max-w-screen-xl h-10 flex flex-col md:flex-row items-center justify-between border-t border-gray-200 bg-white mx-auto px-8 py-3 gap-2">
      <span className="text-xs text-gray-500">
        © 2023 Hostify, Inc. All Rights Reserved
      </span>
      <div className="flex gap-4">
        <Link href="#" className="text-xs text-gray-500 hover:text-orange-500">
          Privacy Policy
        </Link>
        <Link href="#" className="text-xs text-gray-500 hover:text-orange-500">
          Terms & Conditions
        </Link>
        <Link href="#" className="text-xs text-gray-500 hover:text-orange-500">
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default Brand;
