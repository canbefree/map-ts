import React, { ReactElement, ReactNode } from "react";
import AMapComponent from "./components/amap";


interface Props {
}
export default class App extends React.Component<Props>{
    amap:any;
    childRef:any

    constructor(props:any) {
        super(props);
        this.amap = <AMapComponent id="container" handleChildEvent={this.handleChildEvent}></AMapComponent>
    }

    handleChildEvent = (ref:any) => {
        this.childRef = ref
      }
    render(): ReactNode {
        let input = React.createElement("input", {
            type: "button",
            onClick:()=>{
                this.handle()
            },
            value:"点击添加标记1"
        })
        return (
            <div>
                {input}
                {this.amap}
            </div>
        )
    }
    handle = ()=>{
        this.childRef.addPoint()
    }
}