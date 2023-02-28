import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    useBreakpointValue,
    Icon,
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";


  export default function Login() {
    return (
      <Box position={"relative"}>
        <Container
          as={SimpleGrid}
          maxW={"7xl"}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 18, lg: 28 }}
        >
          <Stack spacing={{ base: 10, md: 20 }}>
            <Stack direction={"row"} spacing={4} align={"center"}>
            </Stack>
          </Stack>
          <Stack
            bg={"gray.50"}
            rounded={"xl"}
            p={{ base: 2, sm: 4, md: 6 }}
            spacing={{ base: 8 }}
            maxW={{ lg: "lg" }}
          >
            <Stack spacing={4}>
              <Heading
                color={"gray.800"}
                lineHeight={1.1}
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              >
                Welcome to  Task Ecommerce
                <Text
                  as={"span"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text"
                >
                  !
                </Text>
              </Heading>
              <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                Please Register to continue,
                Task Ecommerce is a platform where you can buy and sell your products
              </Text>
            </Stack>
            <Box as={"form"} mt={10}>
              <Stack spacing={4}>
                <Input
                  placeholder="Username"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
                <Input
                type="email"
                  placeholder="email"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
                                <Input
                type="password"
                  placeholder="Password"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
                <Button fontFamily={"heading"} bg={"gray.200"} color={"gray.800"}>
                  Login
                </Button>
                <text
              color={"gray.500"}
              p={2}
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
              >Already Have an account&nbsp;
                <Link to="/" color={"red.500"} transition="all 0.2s ease-out">
                click here to Login
                </Link>
                </text>
              </Stack>

            </Box>
            form
          </Stack>
        </Container>
        <Blur
          position={"absolute"}
          top={-10}
          left={-10}
          style={{ filter: "blur(70px)" }}
        />
      </Box>
    );
  }

  export const Blur = (props) => {
    return (
      <Icon
        width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
        zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
        height="560px"
        viewBox="0 0 528 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <circle cx="71" cy="61" r="111" fill="#F56565" />
        <circle cx="244" cy="106" r="139" fill="#ED64A6" />
        <circle cy="291" r="139" fill="#ED64A6" />
        <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
        <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
        <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
        <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
      </Icon>
    );
  };
