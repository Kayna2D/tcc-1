import {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './register.css'
import { Formik, Form, Field, ErrorMenssage } from 'formik';
import * as yup from "yup";
import axios from "axios";

function app() {
  const handleClickRegister = (values) => console.log(values);
  const handleClickLogin = (values) => console.log(values);

}

export function Register() {

  const [name, setName] = useState('')
  const [code, setCode] = useState('')  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  return (
    <Formik
    initialVaues={{}}
    onSubmit={handleClickRegister}
    validationSchema = {validationRegister}
    >

    <div className='center'>
      <div className='auth'>
        <form name='registration_form'>
        <h2>Faça o seu <span>cadastro</span></h2>
          <Form className="register-form">
            <div className="register=form-group">
              <Field name="nome" className="form-fied"
              placeholder="Nome Completo"/>

              <ErrorMenssage
              component="span"
              name="nome"
              className="form-error"
              />
            </div>

            <div className="register=form-group">
              <Field name="cod" className="form-fied"
              placeholder="Codigo da escola"/>

              <ErrorMenssage
              component="span"
              name="cod"
              className="form-error"
              />
            </div>
            <div className="register=form-group">
              <Field name="Emaik" className="form-fied"
              placeholder="Email"/>

              <ErrorMenssage
              component="span"
              name="email"
              className="form-error"
              />
            </div>
            <div className="register=form-group">
              <Field name="senha" className="form-fied"
              placeholder="Senha"/>

              <ErrorMenssage
              component="span"
              name="senha"
              className="form-error"
              />
            </div>
            <div className="register=form-group">
              <Field name="confirmSenha" className="form-fied"
              placeholder="Confirme sua senha"/>

              <ErrorMenssage
              component="span"
              name="confirmSenha"
              className="form-error"
              />
            </div>
          </Form>
          <button type='submit'>Cadastrar</button>
        </form>
        <span>
          Já possui uma conta?
          <Link to='/'> Login</Link>
        </span>
      </div>
    </div>
    </Formik>
  )
}
