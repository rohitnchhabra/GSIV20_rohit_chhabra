import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {

    return (
        <header className='header'>
            {props.isHome ?
                <div className="search-container">
                    <form onSubmit={props.onSubmit}>
                        <input 
                            type="text" 
                            placeholder="Search.." 
                            name="search" 
                            value={props.searchText} 
                            onChange={props.onSearchChange} 
                        />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
                : <div className='page-title'>Movie Details</div>}
            <Link to='/'>
                <i className="fa fa-home" aria-hidden="true"></i>
            </Link>
        </header>
    )
}
