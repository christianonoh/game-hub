import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
  FaXbox,
  FaWindows
} from "react-icons/fa";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformListIcons = ({ platforms }: Props) => {
  const iconsMap: {[key: string]: IconType} = {
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    xbox: FaXbox,
    playstation: FaPlaystation,
    pc: FaWindows,
    nintendo: BsNintendoSwitch,
    web: BsGlobe,
    ios: MdPhoneIphone
  }
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => 
          <Icon as={iconsMap[platform.slug]} color='gray.500' key={platform.slug} />
      )}
    </HStack>
  );
};

export default PlatformListIcons;
