import axios from 'axios';

const Login = () => {
  const url = 'http://43.200.169.48';
  // axios.get(`${url}/api/stay`).then(res => console.log(res));

  axios
    .post(`${url}/api/user/signup`, {
      email: 'test123@gmail.com',
      password: 'test12345',
      nickname: 'test12345',
    })
    .then(res => console.log(res));

  return <>login</>;
};

export default Login;
