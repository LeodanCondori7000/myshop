import { Alert } from "react-bootstrap"

const Message = ({ variant = 'info', children }) => {
  return (
    <Alert variant={variant}>{children}</Alert>
  )
}

// outdated?
// Message.defaultProps = {
//   variant: 'info'
// }

export default Message