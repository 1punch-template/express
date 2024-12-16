const getData = (): Promise<{ list: any[] }> => {
  return new Promise((resolve) => {
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) => response.json())
    //   .then((data) => resolve({ list: data as any[] }));
    setTimeout(() => {
      resolve({
        list: [
          {
            userId: 1,
            id: 1,
            title: "de222",
            completed: false,
          },
          {
            userId: 1,
            id: 2,
            title: "quis ut nam facilis et officia qui",
            completed: false,
          },
        ],
      });
    }, 1000);
  });
};

async function loader() {
  const res = await getData();
  return res;
}

export default loader;
