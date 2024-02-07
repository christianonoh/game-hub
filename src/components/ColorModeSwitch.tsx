import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack p='10px'>
      <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
      <Text whiteSpace='nowrap'>Dark mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch
