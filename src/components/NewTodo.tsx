import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import InputField from './ui-elements/InputField'
import SelectStatus from './ui-elements/SelectStatus'

export default function NewTodo({
  isOpen,
  onClose,
  createNewTodo,
}: {
  isOpen: boolean
  onClose: any
  createNewTodo: any
}) {
  const isBase = useBreakpointValue({ base: true, md: false })
  const [formValues, setFormValues] = useState({ status: 'New' })
  const handleChange = (e: any) => {
    console.log(e.target.value)
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log({ formValues })
    createNewTodo(formValues)
    onClose()
  }

  return (
    <>
      {!isBase ? (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent borderColor='#DBDBDB' borderWidth='1px'>
            <Box as='form' onSubmit={handleSubmit}>
              <HStack p='16px' justify='space-between'>
                <Text fontSize='18px' fontWeight='600'>
                  Create New Todo
                </Text>
                <Box onClick={onClose} cursor='pointer'>
                  <IoCloseOutline size='22px' />
                </Box>
              </HStack>
              <Divider />
              <Stack p='16px' gap='12px'>
                <InputField
                  name='title'
                  title='Title'
                  placeholder='Enter the title'
                  onChange={handleChange}
                />
                <InputField
                  name='description'
                  isTextArea
                  title='Description'
                  placeholder='Enter the description'
                  onChange={handleChange}
                />
                {/* <SelectStatus onChange={handleChange} /> */}
                <Stack>
                  <Text fontWeight='600'>Due Date:</Text>
                  <Input
                    name='due'
                    onChange={handleChange}
                    type='date'
                    required
                  />
                </Stack>
              </Stack>
              <Divider mt='16px' />
              <HStack justifyContent='flex-end' p='16px'>
                <Button variant='ghost' onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='blue' type='submit'>
                  Create
                </Button>
              </HStack>
            </Box>
          </ModalContent>
        </Modal>
      ) : (
        <Drawer placement='bottom' isOpen={isOpen} onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent borderColor='#DBDBDB' borderWidth='1px'>
            <Box as='form' onSubmit={handleSubmit}>
              <HStack p='16px' justify='space-between'>
                <Text fontSize='18px' fontWeight='600'>
                  Create New Todo
                </Text>
                <Box onClick={onClose} cursor='pointer'>
                  <IoCloseOutline size='22px' />
                </Box>
              </HStack>
              <Divider />
              <Stack p='16px' gap='12px'>
                <InputField
                  name='title'
                  title='Title'
                  placeholder='Enter the title'
                  onChange={handleChange}
                />
                <InputField
                  name='description'
                  isTextArea
                  title='Description'
                  placeholder='Enter the description'
                  onChange={handleChange}
                />
                <SelectStatus onChange={handleChange} />
                <Stack>
                  <Text fontWeight='600'>Due Date:</Text>
                  <Input
                    name='due'
                    onChange={handleChange}
                    type='date'
                    required
                  />
                </Stack>
              </Stack>
              <Divider mt='16px' />
              <HStack justifyContent='flex-end' p='16px'>
                <Button variant='ghost' onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='blue' type='submit'>
                  Create
                </Button>
              </HStack>
            </Box>
          </DrawerContent>
        </Drawer>
      )}
    </>
  )
}
