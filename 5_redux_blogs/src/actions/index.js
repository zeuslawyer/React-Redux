import jsonPlaceholder from "../apis/jsonplaceholder";

//METHOD 1 with .then()
// const dummyAction = () => {
//   jsonPlaceholder
//     .get("/posts")
//     .then(res => {
//         return{
//             type: "DUMMY_ACTION",
//             payload: {name: 'dummy name'}
//         }
//     })
//     .catch(e => console.log(e.message));

//   console.log("axios fetch action just ran");

//   // return {
//   //     type:"DUMMY_ACTION",
//   //     payload: {name:'dummy action'}
//   // }
// };

//METHOD 2 : using async - await
const dummyAction = async () => {
    const response  = await jsonPlaceholder.get('/posts');
    return{
        type: "DUMMY_ACTION",
        payload: response
    }
  };

export { dummyAction };
