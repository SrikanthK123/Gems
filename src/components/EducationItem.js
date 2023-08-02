import React from 'react'

const EducationItem = (props) => {
    let {title,description,urlToImage,url,publishedAt} = props
  return (
    <div>
      <div className="card"  style={{ width: "18rem" }}>
      <img src={!urlToImage?"https://res.cloudinary.com/teepublic/image/private/s--6-Qiix7O--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1623258229/production/designs/22434943_0.jpg":urlToImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> {title}</h5>
              <p className="card-text">{description}......</p>
              <h6 className='educationdate'>{publishedAt}</h6>
             
              <a href={url} className="btn">
                Launcher
              </a>
            
          
          </div>
         
          
        </div>
    </div>
  )
}

export default EducationItem
