import React from 'react';
// import defaultImage from '../default.jpg';
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
    'https://st.depositphotos.com/1106005/3146/i/600/depositphotos_31468817-stock-photo-coming-soon-sign.jpg',
};

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  img: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
© 2021 GitHub, Inc.