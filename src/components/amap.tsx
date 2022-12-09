// 高德地图插件

import React from "react";
import { Component, ReactNode } from "react";
import '@amap/amap-jsapi-types';
import AMapLoader from '@amap/amap-jsapi-loader';
interface prop {
    classname?: string;
    id: string;
    handleChildEvent: Function
}

class AMapComponent extends Component<prop> {
    map: AMap.Map | undefined;
    constructor(props: prop) {
        super(props);
        this.props.handleChildEvent(this)
    }
    componentDidMount() {
        AMapLoader.load({
            key: "878a3283bfe6d923f4da93307828bb63",                     // 申请好的Web端开发者Key，首次调用 load 时必填
            version: "2.0",              // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            plugins: [
                'AMap.ToolBar',
                'AMap.Scale',
                'AMap.HawkEye',
                'AMap.MapType',
                'AMap.Geolocation',
            ],               // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        }).then((amap) => {
            var scale = new AMap.Scale({
                visible: true
            })
            this.map = new AMap.Map(this.props.id, { //设置地图容器id
                viewMode: "3D",         //是否为3D地图模式
                center: [113.9563, 22.5387],
                zoom: 15,
            });
            this.map.addControl(scale);
            // this.map.addControl(new amap.Scale());
            // this.map.addControl(new amap.Geolocation());

        }).then(() => {

        }).catch(e => {
            console.log(e);
        })

    }

    render() {
        return (
            <div>
                <div className="map" id={this.props.id} style={{ width: "600px", height: "800px" }}></div>
            </div>
        )
    }

    addPoint() {
        var marker = new AMap.Marker({
            position: new AMap.LngLat(113.9561 + (0.5 - Math.random()) / 100, 22.5382 + (Math.random() - 0.5) / 100),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: '自定义标点',
        });
        marker.setClickable(true)
        marker.setDraggable(true)
        this.map.add(marker);
    }
}

export default AMapComponent;