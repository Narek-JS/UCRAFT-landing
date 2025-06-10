/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useLocale, useTranslations } from "next-intl";
import { ArrowIcon } from "../Icons/ArrowIcon";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Burger and close icons

const locales = {
  hy: "Հայերեն",
  en: "English",
};

export const Header = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("header");
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (prefix: string) => {
    router.replace(pathname, { locale: prefix });
    setLangOpen(false);
  };

  return (
    <header className="fixed bg-secondary h-[90px] w-full z-50">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <Link href="/">
          <Image
            src="/svgs/logo.svg"
            alt="Ministry of HighTech logo"
            width={180}
            height={58}
          />
        </Link>

        {/* Burger Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={28} className="cursor-pointer" />
          ) : (
            <Menu size={28} className="cursor-pointer" />
          )}
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/project-submission"
            className="bg-primary text-white px-6 py-2 rounded-full mr-8 text-sm font-medium"
          >
            {t("projectSubmission")}
          </Link>

          <nav className="flex items-center space-x-6 text-white text-sm">
            <Link
              href="/about-the-project"
              className="hover:text-primary transition"
            >
              {t("aboutProject")}
            </Link>
            <Link href="/contact" className="hover:text-primary transition">
              {t("contactUs")}
            </Link>

            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 hover:text-primary transition cursor-pointer focus:outline-none"
              >
                {(locales as any)[locale]}
                <ArrowIcon
                  className={classNames("text-white duration-300", {
                    "rotate-180": langOpen,
                  })}
                />
              </button>

              {langOpen && (
                <ul className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-md py-1 z-10">
                  {Object.entries(locales)
                    .filter(([code]) => code !== locale)
                    .map(([code, name]) => (
                      <li key={code}>
                        <button
                          onClick={() => switchLanguage(code)}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {name}
                        </button>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-[90px] left-0 w-full bg-secondary text-white px-4 py-6">
          <nav className="mx-auto container flex flex-col gap-4 text-sm">
            <Link href="/project-submission" className="text-white">
              {t("projectSubmission")}
            </Link>
            <Link href="/about-the-project" className="text-white">
              {t("aboutProject")}
            </Link>
            <Link href="/contact" className="text-white">
              {t("contactUs")}
            </Link>
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 hover:text-primary transition focus:outline-none"
              >
                {(locales as any)[locale]}
                <ArrowIcon
                  className={classNames("text-white duration-300", {
                    "rotate-180": langOpen,
                  })}
                />
              </button>

              {langOpen && (
                <ul className="mt-2 text-black rounded-md shadow-md py-1 z-10">
                  {Object.entries(locales)
                    .filter(([code]) => code !== locale)
                    .map(([code, name]) => (
                      <li key={code}>
                        <button
                          onClick={() => switchLanguage(code)}
                          className="block rounded-md bg-white text-black cursor-pointer text-left px-4 py-2 hover:bg-gray-100"
                        >
                          {name}
                        </button>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
