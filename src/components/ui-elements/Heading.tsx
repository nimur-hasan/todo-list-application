import { Badge, HStack, Text } from '@chakra-ui/react'
import React from 'react'

export default function Heading({
  children,
  item = 0,
  bg,
}: {
  children: React.ReactNode
  item: any
  bg: string
}) {
  return (
    <HStack bg={bg} justifyContent='space-between' p='16px'>
      <Text textColor='white' fontWeight='600'>
        {children}
      </Text>
      <Badge bg='white' className='shadow' px='8px'>
        {item}
      </Badge>
    </HStack>
  )
}
