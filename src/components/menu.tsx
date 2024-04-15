import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function Menu() {
  return (
    <Menubar className="absolute bottom-[-20px] bg-[#f1ece5] border-[#c09b75] text-[#c3a587]">
      <MenubarMenu>
        <MenubarTrigger>Home</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>About Me</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Offerings</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Sound Healing</MenubarItem>
          <MenubarItem>Full Day Expansion Session</MenubarItem>
          <MenubarItem>1:1 Customized Retreats</MenubarItem>
          <MenubarItem>Tantric Healing</MenubarItem>
          <MenubarItem>Group Retreats</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Contact</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
