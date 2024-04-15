import Menu from "@/components/menu";

export default function Header() {
  return (
    <div className="relative w-full bg-norepeat flex items-center justify-between bg-[url('/static/header-bg.jpg')] bg-cover bg-center bg-top px-10 pb-[20rem] pt-[4rem] md:bg-auto md:pb-[45rem]">
      <Menu />
    </div>
  );
}
