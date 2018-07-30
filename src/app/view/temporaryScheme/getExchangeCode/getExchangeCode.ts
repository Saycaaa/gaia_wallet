/**
 * 兑换码页面
 */
import { popNew } from '../../../../pi/ui/root';
import { notify } from '../../../../pi/widget/event';
import { Widget } from '../../../../pi/widget/widget';
import { copyToClipboard } from '../../../utils/tools';

export class GetExchangeCode extends Widget {
    constructor() {
        super();
    }
    public create() {
        super.create();
        this.init();
    }
    public init() {
        this.state = {
            exchangeCode : 'RTYHGF562Ds'
        };
    }
    public goBack(event:any) {
        notify(event.node,'ev-route-to',{ path:'app-view-temporaryScheme-getVerifyingCode-getVerifyingCode' });
    }
    public copy(event:any) {
        copyToClipboard(this.state.exchangeCode);
        popNew('app-view-temporaryScheme-messageTips-messageTips',{ text:'复制成功' });
    }
}