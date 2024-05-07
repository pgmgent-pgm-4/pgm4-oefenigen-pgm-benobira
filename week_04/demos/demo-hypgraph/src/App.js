import './App.css';
import { useQuery } from '@apollo/client';
import { GET_ALL_TODOS } from './graphql/queries';

function App() {
  const { loading, error, data } = useQuery(GET_ALL_TODOS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ...</p>;
  console.log(data);
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {data.todos.map((todo) => (
          <li key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <p>{todo.isCompleted ? "Completed" : "Not Completed"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
