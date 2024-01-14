import { gql, useQuery } from "@apollo/client";
import "./App.css";

const USERS = gql`
  query ExampleQuery {
    getUser {
      name
      location
    }
  }
`;

function Users() {
  const { loading, error, data } = useQuery(USERS);
  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;
  return data.getUser.map(({ name, location }) => (
    <div key={name}>
      <p>{name}</p>
      <p>{location}</p>
    </div>
  ));
}

function App() {
  return (
    <>
      <h2>GraphQL</h2>
      <Users />
    </>
  );
}

export default App;
