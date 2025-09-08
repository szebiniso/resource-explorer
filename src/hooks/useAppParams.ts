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

    const newUrl = `?${params.toString()}`;
    if (newUrl !== `?${searchParams.toString()}`) {
      router.push(newUrl);
    }
  };

  return { updateUrl };
};
