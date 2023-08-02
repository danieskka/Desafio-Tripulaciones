

const Gallery = ({ head, img, url }) => {

  return (
    <>
      <a href={url}>
          <div className="galleryCard" id='tracking_gallery_cards'>
            <img src={img} alt="noticia" />
            <h3> {head} </h3>
          </div>
      </a>
    </>
    );
};

export default Gallery;
