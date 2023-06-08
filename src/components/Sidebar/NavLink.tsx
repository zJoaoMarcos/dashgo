import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Icon,
  Text,
} from "@chakra-ui/react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon: React.ElementType;
  children: React.ReactNode;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" py="1" {...rest}>
        <Icon as={icon} />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
