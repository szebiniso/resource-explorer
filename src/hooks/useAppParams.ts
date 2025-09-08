import { useRouter, useSearchParams } from 'next/navigation';

export const useAppParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateUrl = (newParams: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    router.push(`?${params.toString()}`);
  };

  return { updateUrl };
};
