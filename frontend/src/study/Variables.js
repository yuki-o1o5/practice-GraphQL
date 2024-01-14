// {
//   user(
//     login:"yuki-o1o5"){
//       name
//       url
//     }
// }

// query getUser1($login:String!){
//   user(
//     login:$login){
//       name
//       url
//     }
// }

// Variables
// {
//   "login":"yuki-o1o5"
// }

// I can set default variables. In that case, I dont need to set variables
// ===

// query getUser1($login:String= "yuki-o1o5"){
//   user(
//     login:$login){
//       name
//       url
//     }
// }
