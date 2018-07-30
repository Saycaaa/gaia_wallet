/**
 * 临时方案主组件
 */
import { Widget } from '../../../pi/widget/widget';
export class TemporarySchemeMain extends Widget {
    constructor() {
        super();
    }
    public create() {
        super.create();
        this.init();
    }
    public init() {
        this.state = {
            wtagName: 'app-view-temporaryScheme-getVerifyingCode-getVerifyingCode'
        };
    }
    public routeTo(event:any) {
        this.state.wtagName = event.path;
        this.paint();
    }

}