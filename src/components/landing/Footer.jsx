"use client";

import Image from "next/image";
import TermsPrivacyModals from "../TermsPrivacyModals";
import { FadeInSection } from "../utils/FadeInSection";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Home.footer");
  const subtext = t.raw('subtext');

  return (
    <FadeInSection>
      <div className="bg-black text-[#BCBCBC] text-sm py-8">
        <div className="flex flex-col md:flex-row gap-7 items-center md:gap-3 md:text-nowrap text-center justify-evenly mx-10">
          <div className="">
            &copy; 2025 AsylMind, Inc. {t("title")}
          </div>
          <div className="flex flex-col gap-5 md:gap-2 items-center justify-center">
            <div>
              <TermsPrivacyModals subtext={subtext} />
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