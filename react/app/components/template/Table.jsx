import React from 'react'

export const Table = (props) => (
    <div style={props.style ? props.style : {}}>
        {props.children}
    </div>
);

export const TableHeader = (props) => (
    <table className="table" style={{marginBottom: '-1px'}}>
        <thead>
            <tr style={props.type=='static' ? {background: '#f6f5f5'}: {}}>
                {props.children}
            </tr>
        </thead>
    </table>
);

export const TableColHeader = (props) => (
    <th style={props.width && {width: `${props.width}`}}>
        {props.children}
    </th>
);

export const TableBody = (props) => (
    <div className={props.mode=='modal'?"scrollModal":"scroll2"}>
        <table className={props.type=='static'?"table table-striped":"table table-products"}>
            <tbody>
                {props.children}
            </tbody>
        </table>
    </div>
);

export const TableCol = (props) => (
    <td style={{width: `${props.width?props.width:""}`, textAlign: `${props.align?props.align:""}`}}>
        {props.children}
    </td>
);

export const TableLine = (props) => (
    <tr className={props.selected ? "selected" : ""} onClick={props.onClick}>
        {props.children}
    </tr>
);

export const TableFooter = (props) => (
    <table className="table" style={{marginTop: '-4px', marginBottom: '-5px'}}>
        <tfoot>
            <tr style={{background: '#f6f5f5'}}>
                {props.children}
            </tr>
        </tfoot>
    </table>
);