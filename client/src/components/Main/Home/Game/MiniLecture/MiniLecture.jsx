import {Link} from "react-router-dom";

const MiniLecture = () => {
  return (
    <section className="homeWrapper">
      <h1>OLAS DE CALOR</h1>
      <article className="lectureText">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis velit, quo debitis excepturi nobis cumque quod dolorem impedit quaerat amet dolores voluptatibus corporis id voluptatum iure totam exercitationem voluptatem fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aliquam consequatur quam corrupti, dolores nulla aliquid incidunt? Cupiditate magni quos voluptatibus ratione deserunt consequuntur, tempore corporis natus explicabo beatae at.
        </p>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore maxime, maiores temporibus repellendus recusandae officia magnam eveniet. Velit pariatur voluptates voluptas distinctio unde quae iure libero, ducimus magnam aliquid laudantium!Lorem</p>
      </article>

      <Link to="/gamequiz">
      <button className="quizNextQuestion">COMENZAR QUIZ</button>
      </Link>

    </section>

  );
};

export default MiniLecture;
