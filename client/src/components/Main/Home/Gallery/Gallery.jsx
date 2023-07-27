

const Gallery = ({ head, img, url }) => {

  return (
    <>
      <a href={url}>
          <div className="galleryCard">
            <h3> {head} </h3>
            <img src={img} alt="noticia" />
          </div>
      </a>
    </>
    );
};

export default Gallery;
