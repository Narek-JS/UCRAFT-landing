"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();

  const targetLocale = locale === "en" ? "hy" : "en";

  const handleToggle = () => {
    router.replace(pathname, { locale: targetLocale });
  };

  return (
    <button type="button" onClick={handleToggle}>
      {targetLocale.toUpperCase()}
    </button>
  );
}
