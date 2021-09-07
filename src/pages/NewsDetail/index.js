import React, { useEffect, useState } from 'react'
import './newsdetail.scss'
import Axios from 'axios'
import { useParams } from 'react-router-dom';

const NewsDetail = (props) => {
    const [news, setNews] = useState([]);
    const  id  = document.location.href;    
    const id3 = id.split('setberita')[1];
    const id2 = id3.replace(/%20/g, " ");
    useEffect(() => {        
        Axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=60b569ee8e0f49cf980598fba481ff1c')
        .then(result => {
            const responseAPI = result.data;
            setNews(responseAPI.articles)
        }).catch(err => {
            console.log('error', err)
        })
    }, [props])
    return (
            <div className="news-detail-wrapper">
                        {news.filter(r => r.title.includes(id2)).map(filteredNews => (
                            <div key={filteredNews.url}>
                            <img className="cover" src={filteredNews.urlToImage} alt={filteredNews.title} />
                            <p className="nw-title">{filteredNews.title}</p>
                            <p className="nw-author">{filteredNews.author}</p>
                            <p className="content">{filteredNews.description}</p>
                            </div>
                        ))}
            </div>
    )
}

export default NewsDetail
