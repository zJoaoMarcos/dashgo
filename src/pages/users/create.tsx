import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import * as yup from "yup";

import { Input } from "@/components/Form/Input";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

type CreateNewUserFormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const createNewUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome  Obrigatório"),
  email: yup.string().required("E-mail  Obrigatório").email(),
  password: yup
    .string()
    .required("Senha  Obrigatória")
    .min(6, "No minimo 6 caracteres"),
  passowrdConfirmation: yup
    .string()
    .oneOf([null!, yup.ref("password")], "As senhas precisam ser iguais"),
});

export default function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<CreateNewUserFormData>({
    resolver: yupResolver(createNewUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<CreateNewUserFormData> = async (
    data,
    event
  ) => {
    event?.preventDefault();
    console.log(data);
  };

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                label="Nome Completo"
                {...register("name")}
                error={errors.name}
              />
              <Input
                label="E-mail"
                {...register("email")}
                error={errors.email}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                {...register("password")}
                error={errors.password}
                label="Senha"
                type="password"
              />
              <Input
                {...register("passwordConfirmation")}
                error={errors.passwordConfirmation}
                label="Confirmação da senha"
                type="password"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button as={Link} href="/users" colorScheme="whiteAlpha">
                Cancelar
              </Button>

              <Button isLoading={isSubmitting} type="submit" colorScheme="pink">
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
