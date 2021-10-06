import createDataContext from "./createDataContext";
import axios from 'axios';

const authReducer = (state, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
const signin=()=>{
    return async ({email,password})=>{
        try {
            const response = await axios.post('http://192.168.0.130:3000/api/v1/users/login',{
              email :email,
            password : password
           });
            
            console.log(response.data);
          } catch (error) {
            console.log(error);
          }
    }
}

const signup = dispatch => {
    return async ({ email, password }) => {
      try {
        const response = await trackerApi.post('/signup', { email, password });
        console.log(response.data);
      } catch (err) {
        console.log(err.response.data);
      }
    };
  };
  

  
  const signout = dispatch => {
    return () => {
      // somehow sign out!!!
    };
  };
  
  export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { isSignedIn: false }
  );
  