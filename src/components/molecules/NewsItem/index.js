import React from 'react'
import './newsitem.scss'
import { Link, Break } from '../../../components'

const NewsItem = ({img, title, author, content, url}) => {
    return (
        <div className="news-item">
            <img className="thumbnail" src={img} alt={title} />
            <div className="content-detail">
                <p className="title">{title}</p>
                <Break height={5} />
                <p className="author">{author}</p>
                <Break height={20} />
                <p className="content">{content}</p>
                <Break height={30} />
                <Link label="Read More.." action={url}/>
            </div>
        </div>
    )
}

export default NewsItem
