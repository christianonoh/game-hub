import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {
  const { data, error } = usePlatforms();

  if (error) return;

  return (
    <Menu>  
      <MenuButton as={Button} rightIcon={<IoChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : 'Platforms'}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
