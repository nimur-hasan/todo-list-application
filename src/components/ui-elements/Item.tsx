import {
  Box,
  Divider,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import { CiMenuKebab } from 'react-icons/ci'
import { TbCalendarDue } from 'react-icons/tb'
import { formatDate } from '../../utils/dateConverter'

export default function Item({
  index,
  todo,
  handleUpdateStatus,
  handleRemove,
  type,
}: {
  index: number
  todo: { title: string; description: string; status: string; due: string }
  handleUpdateStatus: any
  handleRemove: any
  type: 'NEW' | 'ONGOING' | 'DONE'
}) {
  return (
    <Box w='100%' p='8px'>
      <Box
        w='100%'
        p='16px'
        borderWidth='1px'
        borderColor='#dbdbdb'
        rounded='8px'
        bg='white'
      >
        <Text fontSize='18px' fontWeight='600'>
          {todo.title}
        </Text>
        <Text fontSize='14px'>{todo.description}</Text>
        <Divider my='8px' />
        <HStack justifyContent='space-between' alignItems='center'>
          <HStack mt='8px'>
            <TbCalendarDue />
            <Text fontSize='14px' fontWeight='600'>
              {formatDate(todo.due)}
            </Text>
          </HStack>
          <Menu>
            <MenuButton>
              <CiMenuKebab />
            </MenuButton>
            <MenuList>
              {type !== 'NEW' && (
                <MenuItem
                  onClick={() => {
                    handleUpdateStatus(index, 'New')
                  }}
                >
                  New
                </MenuItem>
              )}
              {type !== 'ONGOING' && (
                <MenuItem
                  onClick={() => {
                    handleUpdateStatus(index, 'Ongoing')
                  }}
                >
                  Ongoing
                </MenuItem>
              )}
              {type !== 'DONE' && (
                <MenuItem
                  onClick={() => {
                    handleUpdateStatus(index, 'Done')
                  }}
                >
                  Done
                </MenuItem>
              )}
              <MenuItem
                onClick={() => {
                  handleRemove(index)
                }}
              >
                <Box
                  borderTopWidth='1px'
                  borderTopColor='#dbdbdb'
                  w='100%'
                  pt='8px'
                  textColor='red'
                >
                  Remove
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Box>
    </Box>
  )
}
