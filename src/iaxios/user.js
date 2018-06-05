import iAxios from "./axios.config.js";

export const Login=()=>{
    return iAxios({
      url:"https://passportceshi.muheda.com/api/shuzhi/login.html",
    })
}