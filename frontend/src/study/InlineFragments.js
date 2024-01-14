// query search{
//   search(
//     first:2
//     query:"We work hard"
//     type:USER
//   )
//   {
//     nodes{
//       ... on User{
//         id
//         name
//         url
//       }... on Organization{
//         id
//         name
//         url
//         projectsUrl
//       }
//     }
//   }
// }

// query searchWithTypeNode{
//   search(
//     first:2
//     query:"We work hard"
//     type:USER
//   )
//   {
//     nodes{
//       __typename
//       ... on User{
//         id
//         name
//         url
//       }
//       __typename
//       ... on Organization{
//         id
//         name
//         url
//       }
//     }
//   }
// }
