import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";


interface Props {
  onSearchSubmit: (searchText: string) => void 
}

const NavBar = ({onSearchSubmit}: Props) => {
  return (
    <HStack justify="space-between">
      <Image src={Logo} boxSize="64px" alt="logo" />
      <SearchInput onSearchSubmit={onSearchSubmit} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
