var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var nextUserId = 1;
var users = [
    { id: nextUserId++, username: "john", role: "admin" },
    { id: nextUserId++, username: "mob", role: "member" },
    { id: nextUserId++, username: "terry", role: "guest" },
];
// function updateUser(id:number,updates:UpdatedUser) {
//   const foundUser = users.find((user) => user.id === id);
//      if (!foundUser) {
//           console.log("User not found");
//           return;
//      }
//      Object.assign(foundUser,updates)
// }
// updateUser(3, { username: "chrisbrown" });
function addNewUser(newUser) {
    var user = __assign({ id: nextUserId++ }, newUser);
    users.push(user);
    return user;
}
addNewUser({ username: "MeeMee", role: "admin" });
console.log(users);
// function getUserDetail(username:string):User {
//      const user = users.find((user) => user.username === username);
//      if (!user) {
//           throw new Error("User not found")
//      }
//      return user;
// }
