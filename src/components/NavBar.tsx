import { HStack, Image, Text } from "@chakra-ui/react"
import Logo from "../assets/logo.webp"

const NavBar = () => {
  return (
    <HStack>
      <Image src={Logo} boxSize="64px" alt="logo" />
      <Text fontSize="xl" color="black">NavBar</Text>
    </HStack>
  )
}

export default NavBar
