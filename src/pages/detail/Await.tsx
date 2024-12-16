import { useRef } from "react";

export function useLoaderData<T>(fetchData: () => Promise<T>) {
  const storage = useRef<{
    resolved: boolean;
    rejected: boolean;
    promise?: Promise<T | void>;
    result?: T;
  }>({
    resolved: false,
    rejected: false,
    promise: undefined,
    result: undefined,
  });

  return {
    loader: () => {
      if (storage.current.rejected) return;

      if (storage.current.resolved) return storage.current.result;

      if (storage.current.promise) throw storage.current.promise;

      storage.current.promise = fetchData()
        .then((res: T) => {
          storage.current.promise = undefined;
          storage.current.resolved = true;
          storage.current.result = res;
          return res;
        })
        .catch(() => {
          storage.current.promise = undefined;
          storage.current.rejected = true;
        });

      throw storage.current.promise;
    },
  };
}

export function Await<T>({
  loader,
  children,
}: {
  loader: () => T;
  children: (data: T) => JSX.Element;
}) {
  const result = loader();
  return children(result);
}
