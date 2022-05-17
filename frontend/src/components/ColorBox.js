import React, { Component } from 'react';
import chroma from 'chroma-js';
import "../components/Styles/ColorBox.css"
import lockOpen from './Lock';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    handleBoxClick = () => {
        this.props.newColor(this.props.id)
    }
    handleNameClick = (e) => {
        e.stopPropagation();
        this.props.copyColorCode(this.props.id)
    }
    render() {
        const {color, isCopied} = this.props;
        const isLightColor = chroma(color).luminance() >= 0.6;
        return ( 
            
            <div className="ColorBox" style={{backgroundColor: color}} onClick={this.handleBoxClick}>
                <div className={`ColorBox-ColorName ${isLightColor && 'dark-text'}`} onClick={this.handleNameClick}>
                    {isCopied ? 'Copied!' : color}
                    
                </div>
                
<p id="lock" onClick={()=>lockOpen()} class="fa fa-2x"></p>

            </div>
         );
    }
}
 
export default ColorBox;