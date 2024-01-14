// long

// {
//   user1:user(login: "yuki-o1o5"){
//    bio
//    login
//    avatarUrl
//    bioHTML
//    company
//    createdAt
//   }
//   user2:user(login: "yukio1o5"){
//    bio
//    login
//    avatarUrl
//    bioHTML
//    company
//    createdAt
//   }
// }

// short

// {
//   user1:user(login: "yuki-o1o5"){
//    ...commonFiels ///Frgment spred
//   }
//     user2:user(login: "yukio1o5"){
//     ...commonFiels
//   }
// }

// fragment commonFiels on User{
//   bio
//   login
//   avatarUrl
//   bioHTML
//   company
//   createdAt
// }
