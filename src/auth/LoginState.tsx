import Cookies from 'js-cookie';

const LoginState = () : boolean =>  !!Cookies.get('accessToken');
export default LoginState;