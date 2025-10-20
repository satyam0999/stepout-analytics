import styles from './Button.module.css';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary',
  fullWidth = false,
  disabled = false,
  ...props 
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;