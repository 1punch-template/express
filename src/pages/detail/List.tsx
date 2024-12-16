import { use } from "react";

const getData = (): Promise<{ list: any[] }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        list: [
          {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
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
    }, 3000);
  });
};

function List() {
  const data = use(getData());

  return (
    <div>
      {data?.list?.map((item) => <div key={item.id}>{item.title}</div>)}
    </div>
  );
}

export default List;
// export default withDataFetching(List, { getData });
