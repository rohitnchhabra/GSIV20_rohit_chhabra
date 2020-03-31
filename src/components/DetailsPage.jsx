import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMovieRequest } from '../redux/actions';
import { IMAGE_URL } from '../config';
import Header from './generic/Header';

class DetailsPage extends Component {
    componentDidMount() {
        const { match: { params } } = this.props;
        this.props.getMovie(params);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.movie.isError && this.props.movie.isError !== prevProps.movie.isError) {
            this.props.history.push('/');
        }
    }

    render() {
        const { movie: { data, isLoading } } = this.props;
        if (isLoading) {
            return <div>Loading...</div>
        }
        return (
            <>
                <Header />
                <div className='details-wrapper'>
                    <div className='details-img'>
                        {data.backdrop_path ?
                            <img src={IMAGE_URL + data.backdrop_path} alt="" />
                            : null}
                    </div>
                    <div className='details'>
                        <div className='block'>
                            <span className='title-bold'>{data.title}</span> <span className='title-rating'>({data.vote_average})</span>
                        </div>
                        <div className='block description'>
                            {new Date(data.release_date).getFullYear()} | {data.runtime} minutes | Director
                    </div>
                        <div className='block description'>
                            Description: {data.overview}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    movie: state.movies.movie
})

const mapDispatchToProps = dispatch => ({
    getMovie: (params) => dispatch(getMovieRequest(params))
})


export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);