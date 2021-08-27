import * as React from "react";

type ColorBoxProps = {
    color: string,
}

class ColorBox extends React.Component<ColorBoxProps, {}> {
    constructor(props){
        super(props);
    }
    
    render(){
        return (<div className="color-box" style={{backgroundColor: this.props.color}}></div>);
    }
}

// ColorBox.defaultProps = {
    
// }

export default ColorBox;