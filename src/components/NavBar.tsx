import { HStack, Image, Text } from "@chakra-ui/react"
import Logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"

const NavBar = () => {
  return (
    <HStack justify='space-between'>
      <Image src={Logo} boxSize="64px" alt="logo" />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
