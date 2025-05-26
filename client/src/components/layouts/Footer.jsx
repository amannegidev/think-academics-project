import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="px-4 divide-y dark:bg-red-900 dark:text-white font-[helvetica]">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        {/* Logo Section */}
        <div className="lg:w-1/3">
          <Link to="/" className="">
           
            <span className="  text-sm xl:text-lg font-semibold">OnlyOne</span>
          </Link>
          <p className='sm:w-full md:w-8/12  my-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae neque enim voluptates possimus dolorem porro aliquam quasi tenetur quos dignissimos.</p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            © 2025 OnlyOne. All rights reserved.
          </p>
        </div>

        {/* Navigation Section */}
        <div className="grid grid-cols-2 text-sm xl:text-lg gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-wite">Product</h3>
            <ul className="space-y-1">
              <li><Link to="#">Features</Link></li>
              <li><Link to="#">Integrations</Link></li>
              <li><Link to="#">Pricing</Link></li>
              <li><Link to="#">FAQ</Link></li>
              <li><Link to="#">Testimonials</Link></li>
              <li><Link to="#">Case Studies</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-wite">Company</h3>
            <ul className="space-y-1">
              <li><Link to="#">Privacy</Link></li>
              <li><Link to="#">Terms of Service</Link></li>
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Careers</Link></li>
              <li><Link to="#">Contact</Link></li>
              <li><Link to="#">Blog</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="uppercase dark:text-wite">Developers</h3>
            <ul className="space-y-1">
              <li><Link to="#">Public API</Link></li>
              <li><Link to="#">Documentation</Link></li>
              <li><Link to="#">Guides</Link></li>
              <li><Link to="#">Support</Link></li>
              <li><Link to="#">Changelog</Link></li>
              <li><Link to="#">Community</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-3  text-sm xl:text-lg">
            <div className="uppercase dark:text-wite">Social media</div>
            <div className="flex space-x-3">
              <a href="#" className="p-1" title="Facebook">
                <i className="bi bi-facebook "></i>
              </a>
              <a href="#" className="p-1" title="Twitter">
                <i className="bi bi-twitter "></i>
              </a>
              <a href="#" className="p-1" title="Instagram">
                <i className="bi bi-instagram "></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
