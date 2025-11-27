import React from 'react'

const NewsItem = (props) => {
  
    let {title, description, imageUrl, newsUrl, author, date, source, mode} = props;
    
    return (
      <div className='my-3'>
        <div className={`card bg-${mode === "light" ? "light" : "dark"} text-${mode === "light" ? "dark" : "light"}`}>
          <div>
            <span className="badge rounded-pill bg-danger" 
              style={{
                display: "flex",
                justifyContent:"flex-end",
                position:"absolute",      
                right: "0"
              }}>
              {source}
            </span>
          </div>

          <img 
            src={!imageUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqxMCaePDZd0aZlYLjcLJwBtfuWFXwNnDjug&s" : imageUrl}  
            className="card-img-top" alt="..." 
          />

          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text" >
              <small className={`text-${mode === "light" ? "gray" : "light"}`}>
                By {author ? author : "unknown"} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">Read More</a>
          </div>

        </div>
      </div>
    )
}

export default NewsItem;
