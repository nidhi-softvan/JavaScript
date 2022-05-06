import './App.css';
import ListItem from './keys';
import Numbers from './numbers';
import Blog from './Blog';
const posts=[
  {
    id:1,title:'hello react',content:'welcome to react blog'
  },
  {
    id:2,title:'friday',content:'lists and keys'
  }
]
const days=['monday ','tuesday']
function App() {
  return (
    <div className="App">
          <Numbers />
          <Blog posts={posts} />
          <ListItem value={days} />
    </div>
  );
}

export default App;
