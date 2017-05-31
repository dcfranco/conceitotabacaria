import React from 'react'

export const Panel = (props) => (
    <div className="panel panel-default">
        <div className="panel-heading"><i className={`${props.icon} marginRight10`}></i><strong>{props.title}</strong></div>
        <div className="panel-body">
            {props.children}
        </div>
    </div>    
);

export const PanelContent = (props) => (
    <div className="row input-type" style={{ marginLeft: '10px'}}>
        {props.children}
    </div>
)

export const PanelContainer = (props) => (
    <div className={`col-sm-${props.size} ${props.className}`} style={props.align && {textAlign: props.align}}>
        {props.children}
    </div>
);

export const PanelFooter = (props) => (
    <div className="row">
        <hr />
        {props.children}
    </div>
)

export const HeaderLine = (props) => (
    <p><i className={`${props.icon} marginRight20`}></i><span style={{fontWeight: 'bold'}}>{props.description}</span></p>
);

export const TextBodyLine = (props) => (
    <p>{props.description} {props.smallDescription && <span className="font11">({props.smallDescription})</span>}</p>
);
export const CustomBodyLine = (props) => (
    <p>{props.children} {props.smallDescription && <span className="font11">({props.smallDescription})</span>}</p>
);