import styles from './Input.module.css';

const Input = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  icon,
  required = false,
  ...props 
}) => {
  const getIcon = () => {
    switch(icon) {
      case 'email':
        return '📧';
      case 'lock':
        return '🔒';
      default:
        return null;
    }
  };

  return (
    <div className={styles.inputWrapper}>
      {icon && <span className={styles.icon}>{getIcon()}</span>}
      <input
        type={type}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        {...props}
      />
    </div>
  );
};

export default Input;