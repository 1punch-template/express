import { use } from "react";

const getData = (): Promise<any[]> => {
  return new Promise((resolve) => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
      resolve(response.json() as Promise<any[]>),
    );
  });
};

export default function Comments() {
  const comments = use(getData());
  return comments.map((comment) => <p key={comment.id}>{comment.title}</p>);
}
