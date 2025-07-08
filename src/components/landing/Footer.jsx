"use client";

import Image from "next/image";
import TermsPrivacyModals from "../TermsPrivacyModals";
import { FadeInSection } from "../utils/FadeInSection";
import LanguageSwitcher from "../LanguageSwitcher";

const Footer = () => {
  return (
    <FadeInSection>
      <div className="bg-black text-[#BCBCBC] text-sm py-8">
        <div className="flex flex-col md:flex-row gap-7 items-center md:gap-3 md:text-nowrap text-center justify-evenly mx-10">
          <div className="">
            &copy; 2025 AsylMind, Inc. Все права защищены.
          </div>
          <div className="flex flex-col gap-5 md:gap-2 items-center justify-center">
            <div>
              <TermsPrivacyModals />
            </div>
            <div>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Footer;