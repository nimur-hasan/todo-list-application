import { Box, Input, Textarea } from '@chakra-ui/react'
import React from 'react'

export default function InputField({
  name,
  title,
  onChange,
  placeholder,
  isTextArea,
  ...params
}: {
  name: string
  title: string
  placeholder: string
  onChange: any
  isTextArea?: boolean
}) {
  return (
    <Box>
      <Box as='label' htmlFor={name} fontWeight='600'>
        {title}
      </Box>
      {isTextArea ? (
        <Textarea
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          mt='8px'
          required
          {...params}
        />
      ) : (
        <Input
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          mt='8px'
          required
          {...params}
        />
      )}
    </Box>
  )
}
