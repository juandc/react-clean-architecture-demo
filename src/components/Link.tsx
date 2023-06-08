import NextLink from 'next/link';
import { useRouter } from 'next/router';

export function Link({ children, href, ...props }) {
  const router = useRouter();
  
  return (
    <NextLink href={{
      pathname: href,
      query: router.query,
    }} {...props}>
      {children}
    </NextLink>
  );
}
