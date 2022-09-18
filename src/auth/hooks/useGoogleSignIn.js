import AuthService from "../service/AuthService";

const auth = new AuthService();

const useGoogleSignIn = () => {
    return auth.signinWithGoogle.bind (auth);
}

export default useGoogleSignIn;