import React, { useEffect, useState } from 'react'
import { NewsItem, Break, Button } from '../../components'
import './news.scss'
import { useHistory } from 'react-router'
import Axios from 'axios'

const News = () => {
    const history = useHistory();
    const [news, setNews] = useState([]);
    useEffect(() => {
        Axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=60b569ee8e0f49cf980598fba481ff1c')
        .then(result => {
            const responseAPI = result.data;
            console.log(responseAPI.articles);
            setNews(responseAPI.articles)
        }).catch(err => {
            console.log('error', err)
        })
    }, [])
    return (
        <div className="news-wrapper">
            <div className="content-wrapper">
                {news.map(news => {
                    return <NewsItem key={news.title} title={news.title} author={news.author} content={news.description} img={news.urlToImage} url={()=>history.push(`/newsdetail/setberita${news.title}`)} />
                })}
            </div>            
            <div className="pagination">
                <Button label="Previous" />
                <Break width={20} />
                <Button label="Next" />                
            </div>
        </div>
    )
}

export default News
