import { useEffect } from "react";

export default function SomeError({ data }: { data?: any }) {
  //   const title = data.title;
  // hydration fail -> 
  return <div>{typeof window !== "undefined" ? "client" : "server"}</div>;
}
