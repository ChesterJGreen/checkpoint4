// @ts-ignore
export const sandBox = axios.create
  ({
    //TODO Change YOURNAME to your actual name
    baseURL: "https://bcw-sandbox.herokuapp.com/api",
    setTimeout: 10000
  });
