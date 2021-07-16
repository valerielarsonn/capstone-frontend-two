import Edit from "../pages/Edit";
import Home from "../pages/Home";
import New from "../pages/New";
import Posts from "../pages/Posts";
import PostService from "../services/PostServices";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

function Main(props) {
    const history = useNavigate();
    const [posts, setPosts] = useState(null);


    const redirectToCityPosts = (cityId) => {
      history.push(`/cities/${cityId}`)
    };

    const onAdd = async (post) => {
      const {city_id} = await PostService.addPosts(post)
      redirectToCityPosts(city_id);
    };


    return (
    <div>
      <Routes>
        <Route
          exact
          path="/cities"
          render={(routerProps) => <Home {...routerProps} />}
        />
        <Route
          exact
          path="/cities/:cityid"
          render={(routerProps) => <Posts {...routerProps} />}
        />
        <Route
          exact
          path="/cities/:cityid/create"
          render={(routerProps) => (
            <New
              {...routerProps}
              redirect = {redirectToCityPosts}
            />
          )}
        />
        <Route
          exact
          path="/cities/:cityid/posts/:postid/edit"
          render={(routerProps) => (
            <Edit
              {...routerProps}
              redirect = {redirectToCityPosts}
            />
          )}
        />
      </Routes>    
    </div>
  );
}

export default Main;