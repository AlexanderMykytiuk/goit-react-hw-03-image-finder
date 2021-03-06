import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import Searchbar from "../Searchbar";
import hitsApi from "../../services/newsApi";
import Button from "../Button";
import Modal from "../Modal";
import Loader from "../Loader";

import styles from "./ImageGallery.module.css";

class ImageGallery extends Component {
  state = {
    hits: [],
    currentPage: 1,
    serchQuery: "",
    isLoading: false,
    error: null,
    largeImageURL: "",
    largeImageALT: "",
    scroll: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.serchQuery !== this.state.serchQuery) {
      this.fetchHits();
    }
  }

  onChangeQuery = (query) => {
    this.setState({
      serchQuery: query,
      currentPage: 1,
      hits: [],
      error: null,
      showModal: false,
    });
  };

  toggleModal = (url, alt) => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
      largeImage: url,
      largeImageURL: url,
      largeImageALT: alt,
    }));
  };

  fetchHits = () => {
    const { serchQuery, currentPage } = this.state;
    const options = {
      serchQuery,
      currentPage,
    };
    this.setState({ isLoading: true });
    hitsApi
      .fetchHits(options)
      .then((data) => {
        // console.log(data.hits);
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...data.hits],
          currentPage: prevState.currentPage + 1,
          scroll: true,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { hits, isLoading, error, scroll, showModal } = this.state;
    const shouldrenderLoadMore = hits.length > 0 && !isLoading;
    return (
      <>
        <Searchbar onSubmitForm={this.onChangeQuery} />
        {error && <h1>Error</h1>}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img
              src={this.state.largeImageURL}
              alt={this.state.largeImageALT}
            />
          </Modal>
        )}
        <ul className={styles.ImageGallery}>
          {hits.map(({webformatURL, tags, id, largeImageURL}) => (
            <ImageGalleryItem
              img={webformatURL}
              alt={tags}
              key={id}
              onClick={() => this.toggleModal(largeImageURL, tags)}
            />
          ))}
        </ul>
        {scroll &&
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          })}
        {isLoading && <Loader />}
        {shouldrenderLoadMore && <Button onClick={this.fetchHits} />}
      </>
    );
  }
}

export default ImageGallery;
