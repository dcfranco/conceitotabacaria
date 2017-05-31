import React from 'react'
import {MenuPage} from './MenuPage'

export const Page = (props) => (
    <div className="container-fluid text-center">
        <div className="row content">
            <MenuPage />
            <div className="col-sm-11 text-left scroll">
            </div>
        </div>
    </div>
);