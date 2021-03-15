import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';

const LoaderComponent = () => {
  return (
    <div className={styles.Loader}>
      <Loader type="BallTriangle" color="#18ce64" height={100} width={100} />
    </div>
  );
};
export default LoaderComponent;