export const Message = ({ type = 'message', children }) => {
  let color = 'blue';
  type === 'error' ? (color = 'red') : (color = 'blue');
  return <p style={{ color: color, textAlign: 'center' }}>{children}</p>;
};
