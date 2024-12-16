// import { preload } from "react-dom";
import s from "./index.module.scss";
import ZustandDemo from "./ZustandDemo";
// import Comments from "../../widgets/use";
// import SomeError from "@/widgets/error";
// import ErrorBoundary from "@/widgets/ErrorBoundary";

export default function Home({ list }: { list: any[] }) {
  // preload("http://localhost:4000/client/client.js", { as: "script" });
  // preload("", { as: "image" });
  const onClick = () => {
    // @ts-ignore
    alert(1);
  };
  return (
    <>
      <title>home</title>
      {/* <script> alert("hi!") </script> */}
      <button className={s.red} onClick={onClick}>
        isbutton
      </button>
      <ZustandDemo />
      {/* <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <SomeError />
      </ErrorBoundary> */}
      <div>{list?.map((item) => <div key={item.id}>{item.title}</div>)}</div>
    </>
  );
}
