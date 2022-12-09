
interface Config{
    visible?:boolean
}

declare global {
    namespace AMap {
        export class Scale extends Control {
            constructor(object: Config)
        }
    }
}
export {}
