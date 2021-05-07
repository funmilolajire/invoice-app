import { FC } from 'react';
import { useField } from 'formik';
import styles from './styles/TextInput.module.css';

const TextInput: FC<TextInputProps> = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div className={styles.container}>
            <label className={meta.touched && meta.error ? styles.labelError : ''} htmlFor={props.id}>{label}</label>
            {!props.value ? <input className={meta.touched && meta.error ? styles.inputError : ''} {...field} {...props} />
                : <input {...props} {...field} value={props.value} />
            }
            {
                meta.touched && meta.error ? (
                    <div className={styles.error}>{meta.error}</div>
                )
                    : null
            }
        </div>
    )
}

export default TextInput
