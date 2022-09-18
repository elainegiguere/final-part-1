import AuthService from "../service/AuthService";
 const auth = new AuthService ();

 const UseEmailPasswordSignIn = () => {
    return auth.signinWithEmailAndPassword.bind(auth);
 }

 export default UseEmailPasswordSignIn;