import {Link} from "react-router-dom";

const Articles = ({ title, body, img }) => {
  return ( //
      <div className="articleCard">
        <Link to="/article" >
      <img src={img} alt="article imagen"/>  
      </Link>
        <div className="bodyArticleCard">
            <h3> {title} </h3>
            <p > {body} </p>          
        </div>
      </div>

  );
};

export default Articles;
