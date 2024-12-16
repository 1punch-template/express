import { useStore } from "./store";

function BearCounter() {
  const bears = useStore((state) => state.bears);
  return <h1>{bears} around here ...</h1>;
}

function Controls() {
  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);
  const removeAllBears = useStore((state) => state.removeAllBears);

  return (
    <>
      <button onClick={increasePopulation}>one up</button>
      {bears > 0 && <button onClick={removeAllBears}>clear</button>}
    </>
  );
}

export default () => {
  return (
    <>
      <BearCounter />
      <Controls />
    </>
  );
};
