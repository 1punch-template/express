// import Marked from "./rsc.server";
// import { parse } from "marked"; // Not included in bundle
// import sanitizeHtml from "sanitize-html"; // Not included in bundle
// import os from "node:os";
import { renderToReadableStream } from "react-dom/server";
// import ClientComponent from "./ClientComponent";

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      {/* <h2>
        {os.type()} {os.arch()} {os.release()}
      </h2> */}
      {new Date().toISOString()}
    </>
  );
}

export default function Rsc() {
  // console.log("rsc");
  // const res = await fetch("https://jsonplaceholder.typicode.com/todos").then(
  //   (response) => response.json() as Promise<any[]>,
  // );
  // const onClick = () => {
  //   alert(1);
  // };
  return renderToReadableStream(<App />);
  // return (
  //   <>
  //     {/* <button onClick={onClick}>rsc</button> */}
  //     {/* <Marked /> */}
  //     {/* <div>{res?.map((item) => <div key={item.id}>{item.title}</div>)}</div> */}
  //   </>
  // );
}
