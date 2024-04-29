import Menu from "@/components/menu";

interface HeaderProps {
  section?: string;
}

export default function Header({ section }: HeaderProps) {
  let renderHeader;
  const renderHeaderHome = () => (
    <div
      className={`relative w-full bg-norepeat flex items-center justify-between bg-[url('/static/header-home.jpg')] bg-cover bg-center bg-top px-10 pb-[20rem] pt-[4rem] md:bg-auto md:pb-[45rem]`}
    >
      <Menu />
    </div>
  );
  const renderHeaderAbout = () => (
    <div
      className={`relative w-full bg-norepeat flex items-center justify-between bg-[url('/static/header-about.jpg')] bg-cover bg-center bg-top px-10 pb-[20rem] pt-[4rem] md:bg-auto md:pb-[45rem]`}
    >
      <Menu />
    </div>
  );

  if (section === "home") {
    renderHeader = renderHeaderHome;
  } else if (section === "about") {
    renderHeader = renderHeaderAbout;
  } else {
    renderHeader = renderHeaderHome;
  }
  return renderHeader();
}
