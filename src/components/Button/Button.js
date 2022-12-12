import { Box } from 'components/Common/Box.styled';
export const Button = ({ onClick }) => {
  return (
    <Box>
      <button type="button" onClick={onClick}>
        Load more
      </button>
    </Box>
  );
};
