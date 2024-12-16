// import { parse } from "marked"; // Not included in bundle
// import sanitizeHtml from "sanitize-html"; // Not included in bundle
const content = `# Marked in browser\n\nRendered by **marked**.`;

async function getParsedContent() {
  console.log("parse");
  const { parse } = await import("marked");
  return parse(content);
}

export default async function Marked() {
  // console.log("rsc");
  // const res = await fetch("https://jsonplaceholder.typicode.com/todos").then(
  //   (response) => response.json() as Promise<any[]>,
  // );
  // const onClick = () => {
  //   alert(1);
  // };
  const parsedContent = await getParsedContent();
  return (
    <>
      {/* <button onClick={onClick}>rsc</button> */}
      <div dangerouslySetInnerHTML={{ __html: parsedContent }}></div>
      {/* <div>{res?.map((item) => <div key={item.id}>{item.title}</div>)}</div> */}
    </>
  );
}
