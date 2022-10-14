export interface Data {
  id: string;
}

export const options = {
  services: {
    fetchData: (): Promise<Data> => {
      return new Promise((res) => {
        setTimeout(() => {
          res({
            id: "id-1"
          });
        }, 1000);
      });
    }
  }
};
