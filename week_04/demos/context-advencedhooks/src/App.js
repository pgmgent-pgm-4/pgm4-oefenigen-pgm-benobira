import './App.css';
import ThemeSwitcher from './components/ThemeSwitcher';
import { ThemeArea } from './context/ThemeContext';
import { useFetch } from './hooks/useFetch';

const url = 'https://fakestoreapi.com/products';

function App() {
  const { data : products, loading, error } = useFetch(url);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (products && 
  <ThemeArea>
    <h1>Products</h1>
    <ThemeSwitcher />
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p>${product.price}</p>
          <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        </li>
      ))}
    </ul>
  </ThemeArea>
  );
}

export default App;
