/**
 * 获取手机验证码页面
 */
import { popNew } from '../../../../pi/ui/root';
import { notify } from '../../../../pi/widget/event';
import { Widget } from '../../../../pi/widget/widget';
export class GetVerifyingCode extends Widget {
    constructor() {
        super();
    }
    public create() {
        super.create();
        this.init();
    }
    public init() {
        this.state = {
            poneNumber: '',// 电话号码
            verifyingCode: '',// 验证码输入值
            canBeClicked: true,// 定义获取验证码按钮是否可以点击
            coutDown: 60// 定义多少秒后可以继续获取验证码
        };
    }
    /**
     * 点击获取兑换码
     */
    public toExchangeCode(event: any) {
        if (!this.state.poneNumber) {
            popNew('app-view-temporaryScheme-messageTips-messageTips', { text: '手机号不可为空' });

            return;
        }
        if (!this.state.verifyingCode) {
            popNew('app-view-temporaryScheme-messageTips-messageTips', { text: '验证码不可为空' });

            return;
        }
        notify(event.node, 'ev-route-to', { path: 'app-view-temporaryScheme-getExchangeCode-getExchangeCode' });
    }
    public phoneNumInput(e: any) {
        const currentValue = e.currentTarget.value;
        this.state.poneNumber = currentValue;
    }
    public verifyingCodeInput(e: any) {
        const currentValue = e.currentTarget.value;
        this.state.verifyingCode = currentValue;
    }

    /**
     * 点击获取验证码
     */
    public getVerifyingCode() {
        if (!this.state.canBeClicked) {
            return;
        }
        this.state.canBeClicked = false;// 设置为不能点击
        // 重新获取验证码倒计时
        const countDownInterval = setInterval(() => {
            this.state.coutDown -= 1;
            if (this.state.coutDown <= 0) {
                this.state.canBeClicked = true;
                this.state.coutDown = 60;
                this.paint();
                clearInterval(countDownInterval);
            }
            this.paint();
        }, 1000);
        // TODO 发送短信接口
        this.paint();
    }

    /**
     * 验证手机号是否正确
     */
    public validPhoneNum(phoneNum: any) {
        const phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
        if (!phoneReg.test(phoneNum)) {
            popNew('app-view-temporaryScheme-messageTips-messageTips', { text: '手机号不正确!' });

            return false;
        } else {
            return true;
        }
    }

}