import { useRouter as useNextRouter } from 'next/router';

export function useRouter() {
  const router = useNextRouter();
  
  return router;
}
