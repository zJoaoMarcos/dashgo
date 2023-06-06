import { Input } from "@/components/Form/Input";
import { Button, Flex, Stack } from "@chakra-ui/react";
import Head from "next/head";

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
        <Flex
          as="form"
          w="100%"
          maxW={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
        >
          <Stack spacing={4}>
            <Input
              name="email"
              label="E-mail"
              type="text"
              placeholder="Ex: jhon.doe"
            />
            <Input
              name="password"
              label="Senha"
              type="password"
              placeholder="**************"
            />
          </Stack>

          <Button type="submit" mt="6" colorScheme="pink">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
