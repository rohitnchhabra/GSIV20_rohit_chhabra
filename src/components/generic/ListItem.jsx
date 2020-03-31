import React from 'react'
import { IMAGE_URL } from '../../config';
import { Link } from 'react-router-dom';

export default function ListItem({ movie: { id, title, overview, backdrop_path, vote_average } }) {
    return (
        <Link to={`/movie/${id}`}>
            <div className='card'>
                {backdrop_path ? <img src={IMAGE_URL + backdrop_path} /> : null}
                <div className='title with-rating'>
                    <div>{title}</div><div>{vote_average}</div>
                </div>
                <div className='title'>{overview}</div>
            </div>
        </Link>
    )
}
