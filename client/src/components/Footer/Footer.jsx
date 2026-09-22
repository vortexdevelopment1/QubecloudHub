import React from 'react';
import logoImg from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="relative z-10 w-full bg-[#06050a] border-t border-purple-500/15 py-5 sm:py-6">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] text-gray-500 w-full text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-2.5">
          <img
            alt="QubecloudHub Logo"
            className="h-6 w-auto object-contain"
            src={logoImg}
          />
          <span className="font-bold text-gray-300 tracking-wide">QUBECLOUDHUB</span>
          <span>© 2026 QubecloudHub. All Rights Reserved.</span>
        </div>
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <a className="hover:text-purple-300 transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-purple-300 transition-colors" href="#">
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
