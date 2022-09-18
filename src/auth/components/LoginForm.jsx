import React from "react";
import Container from "react-bootstrap/Container";
import Input from "../../components/Input";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import { Formik, Form, validateYupSchema, yupToFormErrors } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { updateWholeUser } from "../store/authSlice";
import UseEmailPasswordSignIn from "../hooks/useEmailPasswordSignIn";
import useGoogleSignIn from "../hooks/useGoogleSignIn";
import BsForm from "react-bootstrap/Form";

const REQUIRED_AUTHENTICATION = {
    email: "zzelaineg@hotmail.com",
    password: "password1",
};

const initialValues = {
    email: "",
    password: "",
};

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const LoginForm = () => {

    const dispatch = useDispatch();


    const signinWithEmailAndPassword = UseEmailPasswordSignIn();
    const signinWithGoogle = useGoogleSignIn();

    const onSubmit = (values) => {
        const signinWithEmailAndPassword= Object.entries(values).every(
            ([key, value]) => REQUIRED_AUTHENTICATION[key] === value
        );
        if (signinWithEmailAndPassword) {
            dispatch(updateWholeUser({email: values.email, password: values.password}));
           
        }
    };

    return (
        <Container fluid className="vh-80">
            <Container className="h-100 d-flex justify-content-center align-items-center">
                <Formik
                    onSubmit={onSubmit}
                    initialValues={initialValues}
                    validateOnChange
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .required("Ce champ est requis")
                            .email("Entrez un courriel valide"),
                        password: Yup.string()
                            .required("Le mot de passe est requis")
                            .matches(passwordRegex, "Votre mot de passe doit contenir 8 charactères et au moins 1 numéro"),
                    })}
                >
                    <Form as={BsForm} noValidate>
                        <Row>
                            <Col>
                                <Input
                                    id="email" 
                                    label="Email" 
                                    type="email"
                                />
                                <Input
                                    id="password"
                                    type="password"
                                    label="Password"
                                    autoComplete="current-password"
                                    required
                                />
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col>
                                <Button  className="w-50" type="submit">Connexion</Button>
                            </Col>
                        </Row>
                    </Form>
                </Formik>
                <Button onClick={signinWithGoogle} type="button" variant="danger">Connexion avec Google</Button>
            </Container>
        </Container>
    );

};

export default LoginForm;