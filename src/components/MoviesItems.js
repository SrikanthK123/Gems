import React from "react";


const MoviesItems = (props) => {
  let { title, description, urlToImage, urlWeb,publishedAt } = props;
  
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={!urlToImage?"https://th.bing.com/th/id/R.6734282e09d8330fc3e3c4f97868d779?rik=z1%2b%2f3n8MwYp1Yw&riu=http%3a%2f%2fwww.elks.org%2fSharedElksOrg%2flodges%2fimages%2f2117_nopicavail.jpg&ehk=r1Rp1EBckjZ3Zo%2fg98YTa811F3kmRNubZpjnk8sXzU4%3d&risl=&pid=ImgRaw&r=0":urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}....</h5>
          <p className="card-text">{description}....</p>
          <h6 className="date">{publishedAt}</h6>
          <a href={urlWeb} className="btn btn-primary">
            Watch Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default MoviesItems;
