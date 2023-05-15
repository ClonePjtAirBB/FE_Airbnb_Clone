import axios from 'axios';

const Login = () => {
  const url = 'http://43.200.169.48';
  axios.get(`${url}/api/stay`).then(res => console.log(res));

  return <>login</>;
};

export default Login;
