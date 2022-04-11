import titleImage from '../images/title2.png';
import pokeBall from '../images/pokeball.png';
import pikachu from '../images/pikachu.gif';
import trainer from '../images/trainer.png';

import '../styles/Header.css';

function Header() {
  return (
    <div className="header">
      <p className="tag">
        Get points by clicking on an image but do not click on any more than
        once!
      </p>
      <div className="headerUpper">
        <img className="pikachuGif" src={pikachu} alt="" />
        <div className="titleDiv">
          <img className="title" src={titleImage} alt="pokemon memory" />
        </div>
        <img className="trainerImg" src={trainer} alt="" />
      </div>
      <div className="headerLower">
        <div className="headerBorder" />
        <img className="pokeBall" src={pokeBall} alt="poke ball" />
      </div>
    </div>
  );
}

export default Header;
