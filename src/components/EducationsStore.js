import React ,{useState,useEffect} from 'react'
import EducationItem from './EducationItem'



const EducationsStore = () => {
  const [educations, setEducation] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=8bf2fd9ef6bf4517b0b3dfa7f05d7141')
      .then(response => response.json())
      .then(data => setEducation(data.articles)) // Assuming the 'articles' key contains the movie data in the API response
      .catch(err => console.log(err))
  }, []);
  return (
    <div>
       <div className='eduScreen'>
          <h3 className='Edutitle'>Education makes Growth</h3>
      <div className="container my-3" id='edu'>
      <div className="row">
            {Array.isArray(educations) && educations.map((education) => (
              <div className="col-md-4" key={education.url}>
                <EducationItem
                  title={education.title ? education.title.slice(0, 45) : ''}
                  description={education.description ? education.description.slice(0, 90) : '....'}
                  urlToImage={education.urlToImage}
                  url={education.url}
                  publishedAt={education.publishedAt}
                />
              </div>
            ))}
          </div>
      </div>
      </div>
      
    </div>
  )
}

export default EducationsStore
