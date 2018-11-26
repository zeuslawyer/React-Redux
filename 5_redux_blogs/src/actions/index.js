import jsonPlaceholder from "../apis/jsonplaceholder";

const dummyAction = () => {
  jsonPlaceholder
    .get("/posts")
    .then(res => {
        return{
            type: "DUMMY_ACTION",
            payload: {name: 'dummy name'}
        }
    })
    .catch(e => console.log(e.message));

  console.log("axios fetch action just ran");

  // return {
  //     type:"DUMMY_ACTION",
  //     payload: {name:'dummy action'}
  // }
};

export { dummyAction };
