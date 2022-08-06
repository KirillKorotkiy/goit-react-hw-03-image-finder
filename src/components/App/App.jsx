import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
import searchAPI from '../Servises/SearchApi';
import ImageGallery from '../ImageGalery/ImageGallery';
import { Loading, LoadingContainer, ContainerLoadMore } from './App.styled';
import LoadButton from 'components/LoadButton/LoadButton';
import ModalView from 'components/Modal/Modal';
import Notiflix from 'notiflix';

export class App extends React.Component {
  state = {
    page: 1,
    search: [],
    currentQuery: '',
    isLoading: false,
    largeImageURL: '',
    index: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevSeacrh = prevState.currentQuery;
    const nextSearch = this.state.currentQuery;
    if (prevSeacrh !== nextSearch) {
      this.setState({ search: [] });
      this.handleSearch();
    }
  }

  handleSearch = async () => {
    try {
      this.setState({ isLoading: true });
      const { page, currentQuery } = this.state;
      const search = await searchAPI(currentQuery, page);
      this.setState(state => ({
        search: [...state.search, ...search],
      }));
      this.setState(prevState => ({
        page: prevState.page + 1,
      }));
    } catch (error) {
      Notiflix.Notify.warning('Something goes wrong:( Try again');
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onSubmitHandler = currentQuery => {
    this.setState({ currentQuery: currentQuery, page: 1 });
  };

  toggleModal = () => {
    this.setState({ largeImageURL: '', index: '' });
  };

  getLargeImg = img => {
    this.setState({
      largeImageURL: img,
    });
  };

  changeURL = (value) => {
    const { search } =this.state
    this.setState(prevState => ({
      index: prevState.index + value,
      largeImageURL: search[prevState.index + value].largeImageURL,
    }));
  };



  findCurrentIndex = () => {
    const index = this.state.search
      .map(el => el.largeImageURL)
      .indexOf(this.state.largeImageURL);
    this.setState({ index: index });
  };

  render() {
    const { search, isLoading, largeImageURL, index } = this.state;
    const totalItem = this.state.search.length
    return (
      <>
        <Searchbar onSubmit={this.onSubmitHandler} />
        <ImageGallery items={search} getLargeImg={this.getLargeImg} />
        {isLoading && (
          <LoadingContainer>
            <Loading color="#d13411" />
          </LoadingContainer>
        )}

        {search.length > 0 && (
          <ContainerLoadMore>
            <LoadButton onClick={this.handleSearch}></LoadButton>
          </ContainerLoadMore>
        )}
        {largeImageURL.length > 0 && (
          <ModalView
            disabledLeft={index === 0}
            disabledRigth={index + 1 === totalItem}
            onClose={this.toggleModal}
            largeImageURL={largeImageURL}
            changeURL={this.changeURL}
            findCurrentIndex={this.findCurrentIndex}
          ></ModalView>
        )}
      </>
    );
  }
}
