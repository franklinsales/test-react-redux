import User from "../types/User/User";

export const registerUserService = (data:User): User[] => {
  // Here would be a call to the API to register the user, but I'm pretending it saving the user in localstorage

  const usersStr = window.localStorage.getItem("users");
  const users: User[] = JSON.parse((usersStr || ""));

  users.push(data)

  window.localStorage.setItem("users", JSON.stringify(users));

  return users
  
};

export const loginUserService = (data:User): User | null => {

  const usersStr = window.localStorage.getItem("users");
  const users: User[] = JSON.parse((usersStr || ""));

  const usersResult = users.filter((i)=>{
    return data.username === i.username && data.password === i.password
  })

  return usersResult ? usersResult[0] : null
};