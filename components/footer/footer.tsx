import Link from "next/link";

const Footer = () => {
    return (
      <>
        <footer className="w-full footer-bg">
          <div className="flex justify-center items-start px-5 lg:px-0 py-8 md:py-8 lg:py-5">
            {/* Footer columns container */}
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-2.5 w-full header-content justify-start items-start">
              {/* Support Column */}
              <div className="footer-column">
                <h3 className="footer-column-title">
                  Support
                </h3>
                <Link href="#" className="footer-column-link">
                  Help Centre
                </Link>
                <Link href="#" className="footer-column-link">
                  AirCover
                </Link>
                <Link href="#" className="footer-column-link">
                  Combating discrimination
                </Link>
                <Link href="#" className="footer-column-link">
                  Supporting people with disabilities
                </Link>
                <Link href="#" className="footer-column-link">
                  Cancellation options
                </Link>
              </div>

              {/* Hosting Column */}
              <div className="footer-column">
                <h3 className="footer-column-title">
                  Hosting
                </h3>
                <Link href="#" className="footer-column-link">
                  Local home
                </Link>
                <Link href="#" className="footer-column-link">
                  Cover for hosts
                </Link>
                <Link href="#" className="footer-column-link">
                  Hosting resources
                </Link>
                <Link href="#" className="footer-column-link">
                  Community forum
                </Link>
                <Link href="#" className="footer-column-link">
                  Hosting responsibly
                </Link>
              </div>

              {/* Hostify Column */}
              <div className="footer-column">
                <h3 className="footer-column-title">
                  Hostify
                </h3>
                <Link href="#" className="footer-column-link">
                  Newsroom
                </Link>
                <Link href="#" className="footer-column-link">
                  New Features
                </Link>
                <Link href="#" className="footer-column-link">
                  Careers
                </Link>
                <Link href="#" className="footer-column-link">
                  Investres
                </Link>
                <Link href="#" className="footer-column-link">
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
