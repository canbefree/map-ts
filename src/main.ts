// 913ca1ff7628b102d0be9624126a5ae9
// 高新南-出行-Demo

// import {ReactDOM} from "react"
import ReactDOM from "react-dom"
import React from "react"

import './scss/app.scss'

import '@amap/amap-jsapi-types'

var map = new AMap.Map(
    'container',
    {
        center: [113.9563, 22.5387],
        zoom: 18,
    },
);