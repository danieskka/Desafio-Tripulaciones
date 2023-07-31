import {Link} from "react-router-dom";

const Articles = ({ title, body }) => {
  return ( //
      <div className="articleCard">
        <h3> {title} </h3>
        <p > {body} </p>
        <Link to="/article" >
      <img src="" alt="" />  
      </Link>
      </div>

  );
};

export default Articles;
