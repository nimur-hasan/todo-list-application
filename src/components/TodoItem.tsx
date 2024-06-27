import {
  Badge,
  Box,
  Divider,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useOutsideClick,
} from '@chakra-ui/react'
import { CiMenuKebab } from 'react-icons/ci'
import { TbCalendarDue } from 'react-icons/tb'
import { formatDate } from '../utils/dateConverter'
import { isDateExpired } from '../utils/isDateExpired'
import { useRef, useState } from 'react'

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
  const ref = useRef()
  const [isOpen, setIsOpen] = useState(false)
  const handleOnContext = (e: any) => {
    e.preventDefault()
    console.log('first')
    setIsOpen(true)
  }

  useOutsideClick({
    // @ts-ignore
    ref: ref,
    handler: () => setIsOpen(false),
  })

  return (
    // @ts-ignore
    <Box ref={ref} w='100%' p='8px' onContextMenu={handleOnContext}>
      <Box
        w='100%'
        p='16px'
        borderWidth='1px'
        borderColor='#dbdbdb'
        rounded='8px'
        bg='white'
      >
        <HStack
          maxW='100%'
          justifyContent='space-between'
          alignItems='flex-start'
          flexWrap='nowrap'
        >
          <Box flexGrow='1' fontSize='18px' fontWeight='600' noOfLines={2}>
            {todo.title}
          </Box>
          <Box>
            <Badge
              bg={`${
                todo.status.toLowerCase() === 'new'
                  ? `#E3F2FD`
                  : todo.status.toLowerCase() === 'ongoing'
                  ? `#FFF9C4`
                  : `#C8E6C9`
              }`}
              px='8px'
              py='4px'
            >
              {todo.status}
            </Badge>
          </Box>
        </HStack>
        <Text fontSize='14px'>{todo.description}</Text>
        <Divider my='8px' />
        <HStack justifyContent='space-between' alignItems='center'>
          <HStack mt='8px'>
            <TbCalendarDue />
            <Text fontSize='14px' fontWeight='600'>
              {formatDate(todo.due)}{' '}
            </Text>
            <Box>
              {isDateExpired(todo.due) && todo.status !== 'Done' && (
                <Badge as='span' color='red'>
                  Expired
                </Badge>
              )}
            </Box>
          </HStack>
          <Menu isOpen={isOpen}>
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
