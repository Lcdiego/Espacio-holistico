import React from 'react';
import { Link } from 'react-router-dom';
import './blog.css'

const BlogPage = () => {
    return (
        <div className='contenedor_blog'>
            <h1>hola desde blog</h1>
            <Link to="/" >Ir a la página de ejemplo</Link>
        </div>
    )
}

export default BlogPage;

