import Image from "next/image";

const Header = () => {
  return (
    <header className="h-[90px] w-full bg-secondary">
      <Image
        alt="MinistryofHT logo"
        src="/svgs/logo.svg"
        width={180}
        height={58}
      />
    </header>
  );
};

export { Header };
