/**
 * 临时方案主组件
 */
import { Widget } from '../../../../pi/widget/widget';
export class TemporarySchemeMain extends Widget {
    public countInterval:any = null;
    constructor() {
        super();
    }
    public create() {
        super.create();
        this.init();
    }
    public init() {
        this.state = {
            curTime:(new Date()).getTime(),// 当前时间
            targetTime:new Date('2018-8-15 12:1:1').getTime(),// 目标时间
            countDown: ''// 显示的时分秒字符串
        };
        const curTime = this.state.curTime;
        const targetTime = this.state.targetTime;
        let distance = Math.floor((targetTime - curTime) / 1000);// 计算时间相差多少秒
        if (distance <= 0) {
            this.state.countDown = '活动结束';
        }
        this.state.countDown = this.secondToDate(distance);
        this.countInterval = setInterval(() => {
            distance -= 1;
            this.state.countDown = this.secondToDate(distance);
            this.paint();
        },1000);
    }
    /**
     * 秒转换为时分秒格式
     */
    public secondToDate(result:any) {
        const h = Math.floor(result / 3600) < 10 ? `0${Math.floor(result / 3600)}` : Math.floor(result / 3600);
        const m = Math.floor((result / 60 % 60)) < 10 ? `0${Math.floor((result / 60 % 60))}` : Math.floor((result / 60 % 60));
        const s = Math.floor((result % 60)) < 10 ? `0${Math.floor((result % 60))}` : Math.floor((result % 60));
        
        return result = `${h}:${m}:${s}`;
    }

}