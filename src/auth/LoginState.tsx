import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

const LoginState = () : boolean => {
    const token : string | undefined = Cookies.get('accessToken');

    if(token){
        try{
            const decodedToken : any = jwtDecode(token);
            const currentTime = Date.now() / 1000;
        
            return decodedToken.exp > currentTime;
        }catch(e : any){
            return false;
        }
    }else{
        return false;
    }
}
export default LoginState;