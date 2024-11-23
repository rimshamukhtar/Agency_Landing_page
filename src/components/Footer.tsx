import Image from "next/image";
import logo from "../../public/Logo (1).png"

const Footer = () => {
    return (
      <footer className="bg-gray-50 py-4 border-t border-gray-200">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
         
          <div className="flex items-center space-x-2">
          
             <a href='#'>
        <Image src="/Logo (1).png" alt='logo' width={150} height={40} className='top-[48px] left-[135px] '/>
    </a>
            <span className="text-gray-600 text-sm">
              © 2020 Epixelab. All rights reserved.
            </span>
          </div>
  
        
          <div className="flex space-x-6 mt-4 lg:mt-0">
            <a href="#" className="text-sm text-gray-800 hover:text-orange-500">
              Portfolio
            </a>
            <a href="#" className="text-sm text-gray-800 hover:text-orange-500">
              How it Works
            </a>
            <a href="#" className="text-sm text-gray-800 hover:text-orange-500">
              Pricing
            </a>
            <a href="#" className="text-sm text-gray-800 hover:text-orange-500">
              About
            </a>
            <a href="#" className="text-sm text-gray-800 hover:text-orange-500">
              Login
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  