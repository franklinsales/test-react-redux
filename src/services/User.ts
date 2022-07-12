import User from "../types/User/User";
import Login from "../types/Login/Login";
import Register from "../types/Register/Register";
import SearchUser from "../types/SearchUser/SearchUser";

export const registerUserService = (payload:any): Register => {
  // Here would be a call to the API to register the user, but I'm pretending it saving the user in localstorage

  const data: User = payload?.user

  const usersStr = window.localStorage.getItem("users");
  const users: User[] = usersStr ? JSON.parse(usersStr) : [];
  
  const usersResult = users.filter((i)=>{
    return data.username === i.username
  })

  if(usersResult.length > 0){
    return {error: "user already exists", user: users}
  }  

  data.id = (users.length) + 1
  users.push(data)

  window.localStorage.setItem("users", JSON.stringify(users));

  return {error: null, user: users}
  
};

export const loginUserService = (payload:any): Login | null => {

  const data: User = payload.user

  const usersStr = window.localStorage.getItem("users");
  const users: User[] = usersStr ? JSON.parse(usersStr) : usersStr;

  let loginResult: Login = {} as Login
  if(users){
    const usersResult = users.filter((i)=>{
      return data.username === i.username && data.password === i.password
    })

    if(usersResult.length > 0){
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


export const searchUsers = (payload:any): User[] => {

  const data:SearchUser = payload.searchUser

  const usersStr = window.localStorage.getItem("users");
  const users: User[] = usersStr ? JSON.parse(usersStr) : usersStr;
  
  let usersResult: User[] = []

  if(!data.username){
   return users
  }

  usersResult = users.filter((i:User)=>{
    return data.username === i.username
  })

  return usersResult
  
}