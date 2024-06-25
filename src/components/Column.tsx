import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Column({
  children,
  type,
}: {
  children: React.ReactNode
  type: 'NEW' | 'ONGOING' | 'DONE'
}) {
  return (
    <Box
      bg={`${
        type === 'NEW' ? `#E3F2FD` : type === 'ONGOING' ? `#FFF9C4` : `#C8E6C9`
      }`}
      className='shadow'
      rounded='8px'
      overflow='hidden'
    >
      {children}
    </Box>
  )
}
