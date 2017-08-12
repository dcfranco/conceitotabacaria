import React from 'react'

export const MODAL_TYPE = {
    QUESTION:   0,
    SUCCESS:    1,
    ALERT:      2,
    ERROR:      3
}

export const ModalHeader = (props) => (
    <div>
        <p style={{color: '#555', fontWeight: 'bold', fontSize: '18px'}}><i className={`${props.icon}`}></i> {props.title}</p>
        <span style={{color: '#555', fontFamily: 'Arial, Helvetica, sans-serif'}}>{props.description}</span>
    </div>
);

export const ModalContent = (props) => (
    <div className="row" style={!props.removeMargin ? {marginLeft: '10px'} : {}}>
        {props.children}
    </div>
);

export const ModalContainer = (props) => (
    <div className={`col-sm-${props.size} ${props.className}`} style={props.align && {textAlign: props.align}}>
        {props.children}
    </div>
);

export const HeaderLine = (props) => (
    <p><i className={`${props.icon} marginRight20`}></i><span style={{fontWeight: 'bold'}}>{props.description}</span></p>
);

export const TextBodyLine = (props) => (
    <p>{props.description} {props.smallDescription && <span className="font11">({props.smallDescription})</span>}</p>
);

export const CustomBodyLine = (props) => (
    <p>{props.children} {props.smallDescription && <span className="font11">({props.smallDescription})</span>}</p>
);