import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import style from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        console.log('login success');
        resetForm();
      })
      .catch(() => {
        console.log('login error');
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={style.form} autoComplete="off">
          <label className={style.label}>
            Email
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </label>
          <label className={style.label}>
            Password
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Log In
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;