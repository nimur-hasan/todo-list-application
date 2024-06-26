import { useEffect, useState } from 'react'

import {
  Box,
  Center,
  Divider,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import Heading from './ui-elements/Heading'
import TodoContainer from './TodoContainer'
import TodoItem from './TodoItem'
import CreateNewTodo from './CreateNewTodo'
import { FiPlus } from 'react-icons/fi'

export default function MainApp() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [todos, setTodos] = useState<any>([])

  const createNewTodo = (newTodo: {
    title: string
    description: string
    status: string
    due: string
  }) => {
    setTodos([...todos, newTodo])
    saveTodosToLocalStorage([...todos, newTodo])
  }

  const handleUpdateStatus = (index: any, status: any) => {
    const newTodos = [...todos]
    newTodos[index].status = status

    const updatedTodo = newTodos.splice(index, 1)[0]
    newTodos.unshift(updatedTodo)
    setTodos(newTodos)
    saveTodosToLocalStorage(newTodos)
  }

  const handleRemove = (index: number) => {
    const newTodos = [...todos]

    newTodos.splice(index, 1)

    setTodos(newTodos)
    saveTodosToLocalStorage(newTodos)
  }

  const getTodosLengthByStatus = (status: string) => {
    return todos.filter((todo: any) => todo.status === status).length
  }

  const saveTodosToLocalStorage = (todos: any[]) => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  // Function to load todos from local storage
  const loadTodosFromLocalStorage = () => {
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      try {
        const parsedTodos = JSON.parse(storedTodos)
        setTodos(parsedTodos)
      } catch (error) {
        console.error('Error parsing todos from local storage:', error)
      }
    }
  }

  // Load todos from local storage when component mounts
  useEffect(() => {
    loadTodosFromLocalStorage()
  }, [])

  return (
    <Box>
      <HStack justifyContent='space-between' mb='8px'>
        {/* <HStack flexGrow={{ base: 1, md: 0 }}>
          <Text display={{ base: 'none', md: 'block' }}>Due:</Text>
          <Input type='date' />
        </HStack> */}

        {/* Action Button */}
      </HStack>
      <Grid templateColumns='repeat(3, 1fr)' gap='16px'>
        <GridItem colSpan={{ base: 3, md: 1 }} overflow='hidden'>
          <TodoContainer type='NEW'>
            <Heading bg='#4285F4' item={getTodosLengthByStatus('New')}>
              New
            </Heading>
            <Divider />
            <VStack gap='0px'>
              {todos.map((todo: any, index: number) => (
                <>
                  {todo.status === 'New' && (
                    <TodoItem
                      key={index}
                      index={index}
                      todo={todo}
                      type='NEW'
                      handleRemove={handleRemove}
                      handleUpdateStatus={handleUpdateStatus}
                    />
                  )}
                </>
              ))}
            </VStack>
            <Box p='16px'>
              <Box
                p='16px'
                display='flex'
                justifyContent='center'
                borderStyle='dashed'
                borderWidth='1px'
                borderColor='white'
                onClick={onOpen}
                bg='#FFFFFF79'
              >
                <HStack alignItems='center'>
                  <FiPlus />
                  <Text>New Todo</Text>
                </HStack>
              </Box>
            </Box>
          </TodoContainer>
        </GridItem>
        <GridItem colSpan={{ base: 3, md: 1 }} overflow='hidden'>
          <TodoContainer type='ONGOING'>
            <Heading bg='#F4B400' item={getTodosLengthByStatus('Ongoing')}>
              Ongoing
            </Heading>
            <Divider />
            <VStack gap='0px'>
              {todos.map((todo: any, index: number) => (
                <>
                  {todo.status === 'Ongoing' && (
                    <TodoItem
                      key={index}
                      index={index}
                      todo={todo}
                      type='ONGOING'
                      handleRemove={handleRemove}
                      handleUpdateStatus={handleUpdateStatus}
                    />
                  )}
                </>
              ))}
            </VStack>
            {getTodosLengthByStatus('Ongoing') === 0 && (
              <Center p='16px'>Empty</Center>
            )}
          </TodoContainer>
        </GridItem>
        <GridItem colSpan={{ base: 3, md: 1 }} overflow='hidden'>
          <TodoContainer type='DONE'>
            <Heading bg='#0F9D58' item={getTodosLengthByStatus('Done')}>
              Done
            </Heading>
            <Divider borderColor='white' />
            <VStack gap='0px'>
              {todos.map((todo: any, index: number) => (
                <>
                  {todo.status === 'Done' && (
                    <TodoItem
                      key={index}
                      index={index}
                      todo={todo}
                      type='DONE'
                      handleRemove={handleRemove}
                      handleUpdateStatus={handleUpdateStatus}
                    />
                  )}
                </>
              ))}
            </VStack>
            {getTodosLengthByStatus('Done') === 0 && (
              <Center p='16px'>Empty</Center>
            )}
          </TodoContainer>
        </GridItem>
      </Grid>
      <CreateNewTodo
        isOpen={isOpen}
        onClose={onClose}
        createNewTodo={createNewTodo}
      />
    </Box>
  )
}
