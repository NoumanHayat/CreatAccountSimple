import axios from 'axios';
const Signin=  async ()=>{
    // console.log('working')
    // return async ({email,password})=>{
        try {
          console.log('working')
            const response = await axios.post('http://192.168.0.130:3000/api/v1/users/login',{
            //   email :email,
            // password : password
            email :"lisa@example.com",
    password : "test1234"
           });
            
            console.log(response.data);
          } catch (error) {
            console.log(error);
          }
    // }
}
export default sin=Signin;