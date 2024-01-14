// query{
// 	user(
//     login:"yuki-o1o5"
//   ){
//     url
//   }
// }

// === (Above function is same with the following one)

// {
// 	user(
//     login:"yuki-o1o5"
//   ){
//     url
//   }
// }

// Error

// {
// 	user(
//     login:"yuki-o1o5"
//   ){
//     url
//   }
// }

// {
// 	user(
//     login:"yuki-o1o5"
//   ){
//     url
//   }
// }

// Okay

// query getUser1{
//   user(
//     login:"yuki-o1o5"
//   ){
//    url
//   }
// }

// query getUser2{
//   user(
//     login:"yuki-o1o5"
//   ){
//    url
//   }
// }
