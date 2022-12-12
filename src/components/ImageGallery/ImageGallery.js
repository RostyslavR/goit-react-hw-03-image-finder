import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageModal } from 'components/Modal/Modal';
import { Component } from 'react';
import { Gallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    lageImage: null,
  };

  setLageImage = lageImage => this.setState({ lageImage });
  onClose = () => this.setState({ lageImage: null });

  render() {
    return (
      <>
        <Gallery>
          {this.props.images.map(({ id, ...others }) => (
            <ImageGalleryItem
              key={id}
              img={others}
              showLageImage={this.setLageImage}
            />
          ))}
        </Gallery>
        <ImageModal
          isOpen={Boolean(this.state.lageImage)}
          onClose={this.onClose}
        >
          <img
            src={this.state.lageImage}
            alt="lageImage"
            onClick={this.onClose}
          />
        </ImageModal>
      </>
    );
  }
}
