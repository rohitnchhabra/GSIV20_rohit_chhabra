import React, { Component } from 'react'
import { connect } from 'react-redux';
import { moviesListRequest, searchMoviesRequest } from '../redux/actions';
import ListItem from "./generic/ListItem";
import Header from './generic/Header';

class ListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            isSearch: false,
            page: 1
        }

    }
    componentDidMount() {
        const { page } = this.state;
        this.props.getMoviesList(page);
    }

    searchChange = (e) => {
        this.setState({ searchText: e.target.value })
    }

    cancelSearch = () => {
        this.setState({ isSearch: false });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { searchText: text } = this.state;
        if (text !== '') {
            this.setState({ isSearch: true, page: 1 });
            this.props.searchMovies({ text, page: 1 });
        }
    }

    onPageChange = (e) => {
        const { searchText: text, page, isSearch } = this.state;
        let newPage = page;
        if (e.target.name === 'prev') {
            newPage--;
        } else {
            newPage++;
        }
        this.setState({ page: newPage });
        if (isSearch) {
            this.props.searchMovies({ text, page: newPage });
        } else {
            this.props.getMoviesList(newPage);
        }
    }

    render() {
        const { movies, search } = this.props;
        const { isSearch, page } = this.state;

        let movies_list = isSearch ? search : movies;
        let isPrev = page !== 1, isNext = movies_list.isSuccess && movies_list.data.total_pages > page;
        
        return (
            <>
                <Header isHome onSubmit={this.onSubmit} onSearchChange={this.searchChange} searchText={this.state.searchText} />

                {isSearch ? <button className='cancel' onClick={this.cancelSearch}>Cancel</button> : null}

                {movies_list.isLoading ? <div>Loading...</div> :
                    <>
                        <div className='pagination'>
                            <button name='prev' onClick={this.onPageChange} disabled={!isPrev}>Prev</button>
                            <span className='page-number'>{page}</span>
                            <button name='next' onClick={this.onPageChange} disabled={!isNext}>Next</button>
                        </div>
                        <div className='card-wrapper'>
                            {movies_list.data && movies_list.data.results && movies_list.data.results.map((movie, i) => (
                                <ListItem movie={movie} key={i} />
                            ))}
                        </div>
                    </>
                }
            </>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies.moviesList,
    search: state.movies.search
})

const mapDispatchToProps = dispatch => ({
    getMoviesList: (page) => dispatch(moviesListRequest(page)),
    searchMovies: (data) => dispatch(searchMoviesRequest(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
