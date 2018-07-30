/**
 * 消息提示
 */
import { Widget } from '../../../../pi/widget/widget';
interface Props {
    text:string;
}
export class MessageTips extends Widget {
    public ok:() => void;
    constructor() {
        super();
    }
    public setProps(props:Props,oldProps:Props) {
        super.setProps(props,oldProps);
        this.init();
    }
    public init() {
        this.state = {
            isShow:false
        };
        setTimeout(() => {
            this.state.isShow = true;
            this.paint();
        },100);
        setTimeout(() => {
            this.state.isShow = false;
            this.paint();
        },2000);
        setTimeout(() => {
            this.ok && this.ok();
        },3000);
    }

}