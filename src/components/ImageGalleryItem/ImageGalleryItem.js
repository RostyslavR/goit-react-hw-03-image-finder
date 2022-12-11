import { Image, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, img, showLageImage }) => {
  const { webformatURL, largeImageURL, tags } = img;
  return (
    <Item key={id} onClick={() => showLageImage(largeImageURL)}>
      <Image src={webformatURL} alt={tags} />
    </Item>
  );
};
