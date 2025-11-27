import React, { useEffect, useState } from 'react'
import NewsItem from './newsItem'
import Spinner from './spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

//import News from './news';


const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  const UpdateNews = async () => {
  props.setProgress(10);
  setLoading(true);

  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

  let data = await fetch(url);
  props.setProgress(40);

  let parsedData = await data.json();
  props.setProgress(70);
  
  setArticles(parsedData.articles);
  setLoading(false);
  setTotalResults(parsedData.totalResults);

  props.setProgress(100);
}


  const fetchMoreData = async () => {
      
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey  }&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page + 1);
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      setArticles(articles.concat(parsedData.articles));
      setLoading(false);
      setTotalResults(parsedData.totalResults);
  };

  useEffect(() => {
    document.title = `KhabarNow - ${capitalizeFirstLetter(props.category) }`;
      if (props.mode === 'dark') {
          document.body.style.backgroundColor = '#121212';
          document.body.style.color = 'white';
      } else {
          document.body.style.backgroundColor = 'white';
          document.body.style.color = 'black';
      }
    UpdateNews();
    
  }, [props.category, props.mode])  // eslint-disable-line react-hooks/exhaustive-deps


    return (
      <>
      
        <h1 className='text-center' style={{paddingTop: "68px"}}>Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={ page < Math.ceil(totalResults / props.pageSize) }
            loader={<Spinner />}
          >


          <div className="container">

          <div className="row">
            {articles.map((element)=> {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}  mode={props.mode}/>
              </div>
              
              
            })}
          </div>

          </div>
        </InfiniteScroll>

</>
    )
} 

News.defaultProps = {
    country: 'us',
    pageSize: 5,
    category: 'general'
  } 
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  } 


export default News
