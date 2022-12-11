import { Component } from 'react';
import { SearchBar } from 'components/SearchBar/SeachBar';
import { fetchImages } from 'components/ImageApi/ImageApi';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ToolBar } from 'components/ToolBar/ToolBar';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    q: '',
    page: 0,
    totalPages: 0,
    images: [],
    isLoading: false,
    error: '',
  };

  handlerSearch = (q = '') => {
    if (this.state.q !== q && q !== '') {
      this.setState({ q, page: 1, totalPages: 0, images: [] });
    }
  };

  async componentDidUpdate(_, prevstate) {
    const { q, page } = this.state;
    if (prevstate.q !== q || prevstate.page !== page) {
      try {
        this.setState({ isLoading: true, error: '' });
        const { images, totalPages } = await fetchImages(q, page);
        this.setState({ images, totalPages });
      } catch {
        this.setState({
          error: 'Sorry ... something is wrong',
          q: '',
        });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  setPage = step => {
    const { page, totalPages } = this.state;

    if ((page > 1 && step < 0) || (page < totalPages && step > 0)) {
      this.setState(prevstate => ({
        page: prevstate.page + step,
      }));
    }

    if (step === 0) {
      this.setState({ page: 1 });
    }

    if (step === totalPages) {
      this.setState({ page: totalPages });
    }
  };

  render() {
    const { q, images, page, totalPages, error, isLoading } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handlerSearch} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {totalPages > 0 && (
          <ToolBar
            query={q}
            currentPage={page}
            totalPages={totalPages}
            onClick={this.setPage}
          />
        )}
        {images.length !== 0 && <ImageGallery images={images} />}
        {isLoading && <Loader />}
        {totalPages > 0 && (
          <ToolBar
            query={q}
            currentPage={page}
            totalPages={totalPages}
            onClick={this.setPage}
          />
        )}
      </>
    );
  }
}
