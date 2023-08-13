import React from "react";

import dirtImg from '../assets/img/dirt.png';
import Mole from "./Mole";

const holeStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'center',
    minHeight: '100px',
    padding: '0px',
    width: '100px',
    '@media screen and (maxWidth: 600px)': {
        height: '70px',
        width: '70px',
    },
    '@media screen and (maxHeight: 600px)': {
        height: '70px',
        width: '70px',
    },
};

const dirtStyle = {
    backgroundImage: `url(${dirtImg})`,
    backgroundSize: '100% 100%',
    height: '50%',
    width: '100%',
    position: 'absolute',
};

const Hole = (props) => {
    return (
        <div className="col-4 m-3" style={holeStyle}>
            <img src={dirtImg} alt="dirt" style={dirtStyle} />
            <Mole onClick={props.onClick} />
        </div>
    );
}

export default Hole;
