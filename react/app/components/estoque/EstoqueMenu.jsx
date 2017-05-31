import React from 'react'

export default (props) => (
    <div className="col-sm-1 sidenav">
        <ul>
            <li className={props.selected=="principal"?"active":""} onClick={() => props.onClick("principal")}><a>Principal</a></li>
            <li className={props.selected=="produtos"?"active":""} onClick={() => props.onClick("produtos")}><a>Produtos</a></li>
            <li className={props.selected=="marcas"?"active":""} onClick={() => props.onClick("marcas")}><a>Marcas</a></li>
            <li className={props.selected=="grupos"?"active":""} onClick={() => props.onClick("grupos")}><a>Grupos</a></li>
        </ul>
    </div>
);