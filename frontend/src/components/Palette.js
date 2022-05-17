import React, { Component } from 'react'
import PaletteBox from './PaletteBox';
import  "../components/Styles/Generate.css"
// function Botao(){
//     return this.handleNewPalette()
// }
class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            reRendered: 0
        }
    }
    
    // window.addEventListener("keypress",()=>{})
    //é para fazer didMount com o eventlistner, e um dismount


    handleNewPalette = () => {
        this.setState((curState) => ({
            reRendered: ++curState.reRendered
        }))
    }
    randomKey = () => {
        return '_' + Math.random().toString(36).substring(2, 9);
}



    render() { 
        return ( 
            <div className="Palette">
            <PaletteBox key={this.randomKey()}/>
            <a href="#" className="button-6" onClick={this.handleNewPalette}>  
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <b className="texto">Change</b>
   </a>
            </div>
         );
    }
}
 
export default Palette;