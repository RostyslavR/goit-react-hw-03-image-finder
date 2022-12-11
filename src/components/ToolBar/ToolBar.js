import { Box } from 'components/Common/Box.styled';

export const ToolBar = ({ query, currentPage, totalPages, onClick }) => {
  return (
    <Box>
      <button
        type="button"
        onClick={() => {
          onClick(0);
        }}
      >
        start
      </button>
      <button
        type="button"
        onClick={() => {
          onClick(-1);
        }}
      >
        {'<<'} prev
      </button>
      <p>
        {query} /{currentPage} / {totalPages}
      </p>
      <button
        type="button"
        onClick={() => {
          onClick(1);
        }}
      >
        next {'>>'}
      </button>
      <button
        type="button"
        onClick={() => {
          onClick(totalPages);
        }}
      >
        end
      </button>
    </Box>
  );
};
