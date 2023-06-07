import {
  LinkProps as ChakraLinkProps,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";

interface NavLinkProps extends ChakraLinkProps {
  icon: React.ElementType;
  children: React.ReactNode;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignItems="center" py="1" {...rest}>
      <Icon as={icon} />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
