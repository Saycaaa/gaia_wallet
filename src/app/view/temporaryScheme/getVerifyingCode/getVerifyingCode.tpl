<div w-class="verifyingCodeWidget">
    <div w-class="title">
        KuPay兑换码预约中
    </div>
    <div w-class="phoneNum">
        <span>+86</span>
        <input type="number" placeholder="请填入手机号" w-class="numberInput" value="{{it1.poneNumber}}" on-input="phoneNumInput(e)"/>
    </div>
    <div w-class="verifyingCode">
        <input type="text" w-class="verifyingCodeInput" placeholder="请填入验证码" value="{{it1.verifyingCode}}" on-input="verifyingCodeInput(e)"/>
        
        {{if it1.canBeClicked}}
        <span w-class="getVerifyingCodeBtn" on-tap="getVerifyingCode">获取验证码</span>
        {{else}}
        <span w-class="getVerifyingCodeBtn" style="color: #999;">{{it1.coutDown}}s重新获取验证码</span>
        {{end}}
    </div>
    <div w-class="blueBtn" on-tap="toExchangeCode">
        获得兑换码
    </div>
    <div w-class="tips">
        兑换码用于领取单独的礼物
    </div>
</div>