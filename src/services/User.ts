import User from "../types/User/User";
import Login from "../types/Login/Login";

export const registerUserService = (data:User): User[] => {
  // Here would be a call to the API to register the user, but I'm pretending it saving the user in localstorage

  const usersStr = window.localStorage.getItem("users");
  const users: User[] = JSON.parse((usersStr || ""));

  users.push(data)

  window.localStorage.setItem("users", JSON.stringify(users));

  return users
  
};

export const loginUserService = (payload:any): Login | null => {

  console.debug("loginUserService() called", payload)

  const data: User = payload.user

  console.debug("data", data)

  const usersStr = window.localStorage.getItem("users");
  const users: User[] = usersStr ? JSON.parse(usersStr) : usersStr;

  let loginResult: Login = {} as Login
  if(users){
    const usersResult = users.filter((i)=>{
      return data.username === i.username && data.password === i.password
    })

    if(loginResult){
      loginResult = {error: null, user: usersResult[0]}
      return loginResult
    }else{
      loginResult = {error: "user invalid"}
    }
  }else{
    loginResult = {error: "user invalid"}
  }

  return loginResult
};