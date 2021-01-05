import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Comments from './components/Comments/Comments';
import About from './components/About/About';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <div>
    <Router>
      <Switch>

        <Route path="/home">
            <Header></Header>
            <News></News>
        </Route>

        <Route path="/posts">
            <Header></Header>
            <News></News>
        </Route>

        <Route path="/post/:id">
            <Header></Header>
            <PostDetail></PostDetail>
        </Route>

        <Route exact path="/">
            <Header></Header>
            <News></News>
        </Route>

        <Route path="/comments">
            <Header></Header>
            <Comments></Comments>
        </Route>

        <Route path="/about">
            <Header></Header>
            <About></About>
        </Route>

        <Route path="*">
            <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
