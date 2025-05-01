
import React from "react";
import { Smartphone, Nfc, Shield, User, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#FFF8F0] dark:bg-gray-900 pt-12 pb-6 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#2E7D32] to-green-600 flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="text-xl font-bold text-black dark:text-white">Afri<span className="text-[#2E7D32]">Tap</span></span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-sm">
              Building the future of inclusive finance—simple, accessible, and built for the realities of Africa.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map(social => (
                <a 
                  key={social}
                  href="#"
                  className="text-gray-600 hover:text-[#2E7D32] dark:text-gray-300 dark:hover:text-green-500"
                >
                  <span className="sr-only">{social}</span>
                  <div className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-xs">{social.charAt(0).toUpperCase()}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Services</h3>
            <ul className="space-y-3">
              {['USSD Banking', 'Tap-to-Pay', 'Microloans', 'Group Savings', 'Money Transfer'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#2E7D32] dark:hover:text-green-500 hover-underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Company</h3>
            <ul className="space-y-3">
              {['About', 'Blog', 'Careers', 'Press', 'Impact'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#2E7D32] dark:hover:text-green-500 hover-underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-[#2E7D32]" />
                <a href="mailto:info@afritap.com" className="text-gray-600 dark:text-gray-300 hover:text-[#2E7D32] dark:hover:text-green-500 hover-underline">
                  info@afritap.com
                </a>
              </li>
              <li className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-2 text-[#2E7D32]" />
                <a href="tel:+2349163232188" className="text-gray-600 dark:text-gray-300 hover:text-[#2E7D32] dark:hover:text-green-500 hover-underline">
                  +234 9163 232 188
                </a>
              </li>
              <li className="flex items-center">
                {/* <Smartphone className="h-4 w-4 mr-2 text-[#2E7D32]" />
                <span className="text-gray-600 dark:text-gray-300">
                  USSD: *384#
                </span> */}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} AfriTap. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#2E7D32] dark:hover:text-green-500">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#2E7D32] dark:hover:text-green-500">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#2E7D32] dark:hover:text-green-500">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
