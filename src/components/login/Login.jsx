import { useContext, useRef, useState } from "react";
import { Button, Card, Col, Form, FormGroup, Row } from
    "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../services/authContext/AuthContext";
import ToggleTheme from "../ui/toggleTheme/ToggleTheme";
import ComboLanguage from "../ui/comboLanguage/ComboLanguage";
import useTranslation from "../custom/useTranslation/useTranslation";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        email: false,
        password: false,
    });

    const { handleLogin } = useContext(AuthContext);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const translate = useTranslation();
    const navigate = useNavigate();

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
        setErrors(prevErrors => ({
            ...prevErrors,
            email: event.target.value.length === 0
        }));
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
        setErrors(prevErrors => ({
            ...prevErrors,
            password: event.target.value.length === 0
        }));
    };

    const handleLoginUser = async () => {
        if (emailRef.current.value.length === 0) {
            alert("¡Email vacío!");
            emailRef.current.focus();
            setErrors(prevErrors => ({
                ...prevErrors,
                email: true
            }));
            return;
        }

        if (password.length === 0) {
            alert("¡Password vacío!");
            passwordRef.current.focus();
            setErrors(prevErrors => ({
                ...prevErrors,
                password: true
            }));
            return;
        }
        try {
            const res = await fetch("https://localhost:7120/api/Authentication",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ email, password })
                });

            if (!res.ok) {
                throw res;
            }

            const data = await res.text();
            handleLogin(email, data);
            navigate("/");
        }
        catch (error) {
            console.error(error);
        }
    };

    return (
        <Card className="mt-5 mx-3 p-3 px-5 shadow">
            <Card.Body>
                <Row>
                    <ComboLanguage />
                </Row>
                <Row>
                    <ToggleTheme />
                </Row>
                <Row>
                    <h5>{translate('welcome')}</h5>
                </Row>
                <Form>
                    <FormGroup className="mb-4">
                        <Form.Control
                            ref={emailRef}
                            value={email}
                            onChange={handleChangeEmail}
                            type="email"
                            placeholder="Ingresar email" />
                        {errors.email &&
                            <p className="text-danger">El email no debe ser vacío</p>
                        }
                    </FormGroup>
                    <FormGroup className="mb-4">
                        <Form.Control
                            ref={passwordRef}
                            value={password}
                            onChange={handleChangePassword}
                            type="password"
                            required
                            placeholder="Ingresar contraseña"
                        />
                        {errors.password &&
                            <p className="text-danger">El password no debe ser vacío</p>}
                    </FormGroup>
                </Form>
                <Row>
                    <Col />
                    <Col md={6} className="d-flex justify-content-end">
                        <Button variant="secondary"
                            onClick={handleLoginUser}
                            type="button">
                            {translate("login")}
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};
export default Login;