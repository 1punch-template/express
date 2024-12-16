import { lazy, Suspense } from "react";
import s from "./index.module.scss";
const List = lazy(
  () => import(/* webpackChunkName: "pages/detail/list" */ "./List"),
);

export default function Detail({ id }: { id: string }) {
  const onClick = () => {
    // @ts-ignore
    alert(1);
  };
  return (
    <>
      <button onClick={onClick} className={s.red}>
        id: {id}
      </button>
      <Suspense fallback={<div>loading deferred data</div>}>
        <List />
      </Suspense>
    </>
  );
}
