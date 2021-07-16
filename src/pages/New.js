// import React from "react";
// import Form from "../components/Form";
// import PostService from "../services/PostServices";

// import "../app.css";

// const New = (props) => {
//   const cityId = props.match.params.cityid;

//   const nullPost = {
//     zip_code: "",
//     available_date: "",
//     contact_email: "",
//     image: "",
//     twenty_hookup: "",
//     thirty_hookup: "",
//     fifty_hookup: "",
//     wifi: "",
//     water: ""
//     };

//   const onAdd = (post) => {
//     PostService.addPosts({...post, city_id: cityId})
//     .then(() => {
//       props.redirect(cityId)
//     })
//   }


//     return (
//       <div className= "App">
//         <Form
//             initialPost= {nullPost}
//             handleSubmit={onAdd}
//             buttonLabel="create new post"
//         />
//       </div>
//     )
// };

// export default New;