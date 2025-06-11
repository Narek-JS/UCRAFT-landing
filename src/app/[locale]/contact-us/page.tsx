import { LocationIcon } from "@/components/Icons/LocationIcon";
import { MailIcon } from "@/components/Icons/MailIcon";
import { PhoneIcon } from "@/components/Icons/Phone";
import Link from "next/link";

export default function ContactUs() {
  return (
    <main className="h-screen w-screen bg-[url('/map.webp')] bg-cover bg-center relative flex items-start justify-center pt-[90px]">
      <div className="container mx-auto mt-auto mb-auto px-4">
        <div className="bg-white p-6 sm:p-10 w-full max-w-[600px] mx-auto xl:mx-0 rounded-[10px] shadow-md">
          <h1 className="text-[28px] leading-[36px] sm:text-[38px] sm:leading-[48px] font-normal text-black font-[Mardoto] mb-2">
            Մենք կարևորում ենք ձեր կարծիքը
          </h1>

          <p className="text-base font-light mb-7">
            Կայքում հրապարակված տեղեկատվության պարզաբանումների համար կարող եք
            դիմել հասարակության հետ կապերի բաժին
          </p>

          <p className="text-[16px] leading-[25px] font-normal text-black font-[Mardoto] mb-6">
            Կոնտակտային տվյալներ
          </p>

          <Link
            href="tel:+374-10590189"
            className="flex items-center gap-2 text-base font-light mb-4"
          >
            <PhoneIcon />
            010-59-01-89
          </Link>

          <p className="flex items-center gap-2 text-base font-light mb-4">
            <LocationIcon className="-mt-1" />
            Վազգեն Սարգսյան 3/3, Երևան 0010, <br /> Հայաստանի Հանրապետություն
          </p>

          <Link
            href="mailto:info@hti.am"
            className="flex items-center gap-2 text-base font-light"
          >
            <MailIcon />
            info@hti.am
          </Link>
        </div>
      </div>
    </main>
  );
}
