import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Input,
    Image,
    Alert,
    AlertIcon,
  } from '@chakra-ui/react';
  import { MoonIcon, SunIcon } from '@chakra-ui/icons';
  import Data from './data';
  import { useState } from 'react';
  import { Link as ReachLink } from 'react-router-dom';

  const NavLink = ({ children }) => (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}
    >
      {children}
    </Link>
  );

  export default function Nav() {
    const data = Data.map((item) => item.name);

    const { colorMode, toggleColorMode } = useColorMode();
    // eslint-disable-next-line no-unused-vars
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [alert, setAlert] = useState(null);

    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        const input = event.target.value;
        if (data.includes(input)) {
          setAlert(
            <Alert status='success'>
              <AlertIcon />
              particular product is available
            </Alert>
          );
          console.log(`"${input}" exists in data`);
        } else {
          setAlert(
            <Alert status='warning'>
              <AlertIcon />
              Seems like the product is not available
            </Alert>
          );
          console.log(`"${input}" does not exist in data`);
        }
        setTimeout(() => {
          setAlert(null);
        }, 1000);
      }
    };

    return (
      <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Box><Image src = 'https://img.icons8.com/color-glass/48/null/online-shop-2.png'></Image></Box>
            <Input
              height='50%'
              width='50%'
              border='1px'
              variant='filled'
              placeholder='Search'
              onKeyPress={handleKeyPress}
            />
            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7}>
                <Flex align='baseline'>
                  <ReachLink to='/dashboard'>
                  <Image
                    src='https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-dashboard-computer-programming-flaticons-flat-flat-icons.png'
                    alt='Image'
                    w='34px'
                    h='34px'
                  />
                  </ReachLink>

                </Flex>
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>

                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      size={'sm'}
                      src={
                        'https://avatars.dicebear.com/api/male/username.svg'
                      }
                    />
                  </MenuButton>
                  <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                      <Avatar
                        size={'2xl'}
                        src={
                          'https://avatars.dicebear.com/api/male/username.svg'
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </Flex>
          {alert}
        </Box>
      </>
    );
  }
