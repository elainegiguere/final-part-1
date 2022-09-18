import AuthService from "../service/AuthService";

const auth = new AuthService();

const useEmailPasswordSignUp = ()=> {
    return auth.signupWithEmailAndPassword.bind(auth);
}

export default useEmailPasswordSignUp;