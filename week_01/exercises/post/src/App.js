import './App.css';
import Post from './components/Post';

function App() {
  const posts = [
    {
      id: 1,
      title: "Post 1 Title",
      synopsis: "Synopsis of Post 1",
      story: "Story of Post 1",
      author: { name: "Author 1", picture: "author1.jpg" },
      publishDate: "2024-04-09"
    },
    {
      id: 2,
      title: "Post 2 Title",
      synopsis: "Synopsis of Post 2",
      story: "Story of Post 2",
      author: { name: "Author 2", picture: "author2.jpg" },
      publishDate: "2024-04-08"
    },
    {
      id: 3,
      title: "Post 3 Title",
      synopsis: "Synopsis of Post 3",
      story: "Story of Post 3",
      author: { name: "Author 3", picture: "author3.jpg" },
      publishDate: "2024-04-07"
    }
  ];

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          synopsis={post.synopsis}
          story={post.story}
          publishDate={post.publishDate}
        />
      ))}
    </div>
  );
}

export default App;
