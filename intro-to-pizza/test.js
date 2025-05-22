// type UserRole = "guest" | "member" | "admin"|"contributor";
// type User = {
//      id:number,
//      username: string,
//      role: UserRole
// }
// type UpdatedUser = Partial<User>
// let nextUserId = 1;
// const users: User[] = [
//      {id:nextUserId++,username:"john",role:"admin"},
//      {id:nextUserId++,username:"mob",role:"member"},
//      {id:nextUserId++,username:"terry",role:"guest"},
// ]
// // function updateUser(id:number,updates:UpdatedUser) {
// //   const foundUser = users.find((user) => user.id === id);
// //      if (!foundUser) {
// //           console.log("User not found");
// //           return;
// //      }
// //      Object.assign(foundUser,updates)
// // }
// // updateUser(3, { username: "chrisbrown" });
// function addNewUser(newUser:any):User {
//      const user: User = {
//           id: nextUserId++,
//           ...newUser
//      }
//      users.push(user)
//      return user
// }
// addNewUser({username:"MeeMee",role:"admin"})
// console.log(users)
// // function getUserDetail(username:string):User {
// //      const user = users.find((user) => user.username === username);
// //      if (!user) {
// //           throw new Error("User not found")
// //      }
// //      return user;
// // }
// ======== Generis =========//
var gameScores = [14, 21, 35, 20, 19];
var favoriteThings = ["Swimming", "Running", "Basketball", "Football"];
var voters = [
    { name: "John", age: 35 },
    { name: "Michael", age: 28 },
];
function getLastItem(array) {
    return array[array.length - 1];
}
console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));
