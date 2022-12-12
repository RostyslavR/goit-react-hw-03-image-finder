import { Component } from 'react';
import { SearchBar } from 'components/SearchBar/SeachBar';
import { fetchImages } from 'components/ImageApi/ImageApi';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Message } from './Message/Message';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    q: '',
    page: 0,
    totalPages: 0,
    images: [],
    process: '',
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
        this.setState({
          process: "I'm working, wait few seconds, please.",
          error: '',
        });
        const { images, totalPages } = await fetchImages(q, page);
        this.setState(prevstate => ({
          images: [...prevstate.images, ...images],
        }));
        this.setState({ totalPages });
      } catch {
        this.setState({
          error: 'Sorry, ... something is wrong.',
          q: '',
        });
      } finally {
        this.setState({ process: '' });
      }
    }
  }

  loadMore = () => {
    this.setState(prevstate => ({
      page: prevstate.page + 1,
    }));
  };

  render() {
    const { q, images, page, totalPages, error, process } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handlerSearch} />
        {error && <Message type={'error'}>{error}</Message>}
        {images.length !== 0 && <ImageGallery images={images} />}
        {totalPages > 0 && page < totalPages && !process && (
          <Button onClick={this.loadMore} />
        )}
        {(page === totalPages || totalPages === 0) && q !== '' && !process && (
          <Message>that's all the pictures</Message>
        )}
        {process && <Loader />}
      </>
    );
  }
}
