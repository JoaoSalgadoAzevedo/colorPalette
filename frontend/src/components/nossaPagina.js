import React from 'react'

export default function nossaPagina() {
  return (
    <div className="styles.geral">
        Aqui vai estar o flex default
        <div className="styles.cabecalho">
            logo, topo esquerda NEON (ir buscar efeito neon)
        </div>

        <div className = "styles.mainCartas">
            5 divs (cartas) (é necessário ir ao w3school, buscar o flipcard effect)
            Como dividir as cores em vários eixos?
            como criar cores aleatórias para cada uma das cartas? (danilo já fez, roubar)
            <div className="styles.cartas"></div>
            <div className="styles.cartas"></div>
            <div className="styles.cartas"></div>
            <div className="styles.cartas"></div>
            <div className="styles.cartas"></div>
        </div>

        <div className="styles.botoes">
        5 botoes neutros (ir buscar ao instagram)
        </div>

        <div className="styles.randomize">
            1 botão randomize (ir buscar ao insta)
        </div>
    </div>

  )
}
