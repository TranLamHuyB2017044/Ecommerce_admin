import axios from "axios";

const BaseURL = "http://localhost:5000/api/";
// const BaseURL = "https://tranlamhuy-be-ecommerce.onrender.com/api/";
// console.log(token)
export const publicRequest = axios.create({
  baseURL: BaseURL,
  
});
// export const userRequest = axios.create({
//   baseURL: BaseURL,
//   headers: {token: `Bearer ${token}`}
// });
