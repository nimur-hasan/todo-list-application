import { Box, Select } from '@chakra-ui/react'

export default function SelectStatus({ onChange }: { onChange: any }) {
  return (
    <Box>
      <Box as='label' htmlFor='status' fontWeight='600'>
        Status
      </Box>
      <Select
        name='status'
        id='status'
        mt='8px'
        placeholder='Select option'
        onChange={onChange}
        required
      >
        <option value='New'>New</option>
        <option value='Ongoing'>Ongoing</option>
        <option value='Done'>Done</option>
      </Select>
    </Box>
  )
}
