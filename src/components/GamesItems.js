import React from "react";

const GamesItems = (props) => {
  let { title, description,ImagesUrl,gameurl} = props;

  
  return (
    <div>
          <div className="card"  style={{ width: "18rem" }}>
            <img src={ImagesUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> {title}</h5>
              <p className="card-text">{description}......</p>
             
              <a href={gameurl} className="btn">
                Launcher
              </a>
            
          
          </div>
         
          
        </div>
      </div>
    
  );
};

export default GamesItems;
