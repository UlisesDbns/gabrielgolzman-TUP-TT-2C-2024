import { Button, Card, Col, Form, FormGroup, Row } from
    "react-bootstrap";
const Login = () => {
    return (
        <Card className="mt-5 mx-3 p-3 px-5 shadow">
            <Card.Body>
                <Row>
                    <h5>¡Bienvenidos a Books Champion!</h5>
                </Row>
                <Form>
                    <FormGroup className="mb-4">
                        <Form.Control type="email" required placeholder="Ingresar
email" />
                    </FormGroup>
                    <FormGroup className="mb-4">
                        <Form.Control
                            type="password"
                            required
                            placeholder="Ingresar contraseña"
                        />
                    </FormGroup>
                </Form>
                <Row>
                    <Col />
                    <Col md={6} className="d-flex justify-content-end">
                        <Button variant="secondary" type="submit">
                            Iniciar sesión
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};
export default Login;