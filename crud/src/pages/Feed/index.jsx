import HeaderMain from "../../components/HeaderMain";
import { Link } from "react-router-dom";
import './style.css';
export default function Feed() {
  return (
    <div>
      <HeaderMain />
      <main>
        <div className="cards">
          <div className="card">
            <header>
              <h2>Consumindo API</h2>
            </header>
            <div className="line"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              magni rerum dolores quis officia beatae maiores suscipit obcaecati
              atque, ipsum reiciendis, impedit minima reprehenderit quam id
              fugit amet nemo porro.
            </p>
            <div className="btns">
              <div className="btn-edit">
                <Link to="/update">
                  <button>Editar</button>
                </Link>
              </div>

              <div className="btn-readmore">
                <Link to="/more">
                  <button>Ler mais</button>
                </Link>
              </div>

              <div className="btn-delete">
                  <button>Apagar</button>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
