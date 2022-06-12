import './ErrorMessage.css';

const ErrorMessage = ({ children }) => {
  return (
    <div className="error-message">
        {children}
    </div>
  )
}

export default ErrorMessage