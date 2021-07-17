import Edit from "../pages/Edit";
import Home from "../pages/Home";
import New from "../pages/New";
import Posts from "../pages/Posts";
// import PostService from "../services/PostServices";
import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";


function Main(props) {
    const history = useHistory();
    // const [posts, setPosts] = useState([]);


    const redirectToCityPosts = (cityId) => {
      history.push(`/cities/${cityId}`)
    };


    return (
    <div>
      <Switch>
        <Route
          exact
          path="/cities"
          render={(routerProps) => <Home {...routerProps}/>}
        />
        <Route
          exact
          path="/cities/:city_id"
          render={(routerProps) => <Posts {...routerProps}/>}
        />
        <Route
          exact
          path="/cities/:city_id/create"
          render={(routerProps) => (
            <New
              {...routerProps}
              redirect = {redirectToCityPosts}
            />
          )}
        />
        <Route
          exact
          path="/cities/:city_id/posts/:post_id/edit"
          render={(routerProps) => (
            <Edit
              {...routerProps}
              redirect = {redirectToCityPosts}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default Main;