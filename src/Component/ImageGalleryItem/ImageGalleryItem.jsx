import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ img, alt, onClick }) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={onClick}>
      <img src={img} alt={alt} className={styles.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.defaultProps = {
  img:
    'https://static.wikia.nocookie.net/one-piece-fan-dnd/images/8/82/No-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg/revision/latest?cb=20201007034238',
};

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  img: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
