import React, { Component } from "react";
import "./styles.css";
import Bruxa from "./imagens/bruxa.png";
import Fantasma from "./imagens/fantasma.png";
import Vampiro from "./imagens/vampiro.png";
import Zumbi from "./imagens/zumbi.png";
import Fada from "./imagens/fada.png";
import Pirata from "./imagens/pirata.png";

class App extends Component {
  state = {
    personagens: [
      {
        img: `${Bruxa}`,
        title: "Bruxa"
      }, //índice 0
      {
        img: `${Fantasma}`,
        title: "Fantasma"
      }, //índice 1
      {
        img: `${Vampiro}`,
        title: "Vampiro"
      }, //índice 2
      {
        img: `${Zumbi}`,
        title: "Zumbi"
      },
      {
        // índice 3
        img: `${Fada}`,
        title: "Fada"
      }, //índice 4
      {
        img: `${Pirata}`,
        title: "Pirata"
      } //índice 5
    ] // final do array
  }; //final do state
  render() {
    return (
      <>
        <div className="body">
          <h1 className="logo">Carnaval VnW</h1>
          <section className="map">
            {this.state.personagens.map((item) => (
              <div className="box">
                <img src={item.img} alt={item.title} />
                <h2>{item.title}</h2>
              </div>
            ))}
          </section>
          <div className="footer">
            <p className="pFooter">Desenvolvido por: Daniel Roger Nitter</p>
          </div>
        </div>
      </>
    );
  }
}

export default App;
