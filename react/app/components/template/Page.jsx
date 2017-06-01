import React from 'react'

export const Page = (props) => (
    <div className={`col-sm-${props.size} text-left scroll`}>
        {props.children}
    </div>
);

export const PageContent = (props) => (
    <div className="row">
        {props.children}
    </div>
);

export const PageContainer = (props) => (
    <div className={`col-sm-${props.size}`}>
        {props.children}
    </div>
);

export const PageHeader = (props) => (
    <div>
        <h2><i className={`${props.icon}`}></i> {props.title}</h2>
        <span className="span-subtitle">{props.description}</span>
        <hr />
    </div>
);

export const PageHeaderIcons = (props) => (
    <div className="carrinho noselect">
        {props.children}
    </div>
);

export const HeaderIcon = (props) => (
        <span className="marginRight30">
            <i className={`${props.icon}`} title={`${props.hint}`} onClick={props.onClick}></i>            
        </span>
);

export const LucroPercent = (props) => {
    if(props.value > 0.0)
        return (<span style={{ fontSize: '12px', color: 'darkgreen', fontWeight: 'bold'}}>{props.value}%</span>)
    return (<span style={{ fontSize: '12px', color: 'darkred', fontWeight: 'bold'}}>{props.value}%</span>)
}