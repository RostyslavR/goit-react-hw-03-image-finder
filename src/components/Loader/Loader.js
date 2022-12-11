import { Grid } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderBox>
      <Grid
        height="480"
        width="480"
        color="aqua"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderBox>
  );
};
