<div class="ga-new-page" ev-back-click="backClick">
    <app-components-topBar-topBar>{title:"兑换记录"}</app-components-topBar-topBar>
    <div w-class="ga-body">
        {{for index,item of it1.txList}}
        <div w-class="ga-item">
            <div w-class="ga-item-top">
                <div w-class="ga-box1">
                    <span w-class="ga-status">兑换成功</span>
                    <div w-class="ga-inout"><span>{{item.inputCurrency}}</span><span w-class="ga-arrow">→</span><span>{{item.outputCurrency}}</span></div>
                </div>
                <div w-class="ga-box2">
                    <div w-class="ga-rate">汇率:&nbsp;{{item.shiftRate}}</div>
                    <div w-class="ga-time">{{item.timestamp_show}}</div>
                </div>
            </div>
            <div w-class="ga-item-bottom">
                <div w-class="ga-box3">
                    <div w-class="ga-out-hash">{{item.inputTXID_show}}</div>
                    <div w-class="ga-out-amount">-{{item.inputAmount}}</div>
                </div>
                <div w-class="ga-box4">
                    <div w-class="ga-in-hash">{{item.outputTXID_show}}</div>
                    <div w-class="ga-in-amount">+{{item.outputAmount}}</div>
                </div>
            </div>
        </div>
        {{end}}
    </div>
</div>