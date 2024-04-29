import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

import Link from "next/link";

export default function Menu() {
  return (
    <Menubar className="absolute bottom-[-20px] bg-[#f1ece5] border-[#c09b75] text-[#c3a587]">
      <MenubarMenu>
        <a href="/">
          <MenubarTrigger>Home</MenubarTrigger>
        </a>
      </MenubarMenu>
      <MenubarMenu>
        <Link href="/about" legacyBehavior passHref>
          <MenubarTrigger>About Me</MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Offerings</MenubarTrigger>
        <MenubarContent>
          <Link href="/offerings/sound-therapy" legacyBehavior passHref>
            <MenubarItem>Sound Healing</MenubarItem>
          </Link>
          <Link href="/offerings/expansion-session" legacyBehavior passHref>
            <MenubarItem>Full Day Expansion Session</MenubarItem>
          </Link>
          <Link href="/offerings/customized-retreat" legacyBehavior passHref>
            <MenubarItem>1:1 Customized Retreats</MenubarItem>
          </Link>
          <Link
            href="/offerings/tantric-bodywork-for-women"
            legacyBehavior
            passHref
          >
            <MenubarItem>Tantric Healing</MenubarItem>
          </Link>
          <Link href="/offerings/group-retreats" legacyBehavior passHref>
            <MenubarItem>Group Retreats</MenubarItem>
          </Link>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Contact</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
