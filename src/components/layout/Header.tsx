import { Box, Divider, Text } from '@chakra-ui/react'


export default function Header() {
  return (
    <Box my='16px'>
      <Text
        textColor='lightgray'
        fontSize={{ base: '24px', md: '32px' }}
        textAlign='center'
        fontWeight='bold'
        my='20px'
      >
        TODO LIST APPLICATION
      </Text>
      <Divider />
    </Box>
  )
}
