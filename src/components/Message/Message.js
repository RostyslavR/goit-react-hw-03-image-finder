import { Box } from 'components/Common/Box.styled';

export const Message = ({ type = 'message', children }) => {
  let color = 'blue';
  type === 'error' ? (color = 'red') : (color = 'blue');
  return (
    <Box>
      <p style={{ color: color, textAlign: 'center' }}>{children}</p>
    </Box>
  );
};
