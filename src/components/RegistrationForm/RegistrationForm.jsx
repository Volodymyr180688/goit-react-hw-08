import { useDispatch } from 'react-redux';
import { registration } from '../../redux/auth/operations';
import style from './RegistrationForm.module.css';

export const RegistrationForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        dispatch(
            registration({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
            <label className={style.label}>
                Username
                <input type="text" name="name" />
            </label>
            <label className={style.label}>
                Email
                <input type="email" name="email" />
            </label>
            <label className={style.label}>
                Password
                <input type="password" name="password" />
            </label>
            <button type="submit">Registration</button>
        </form>
    );
};