<div w-class="exchangeCodeWidget">
    <div w-class="title">
        您的兑换码
        <span w-class="goBack" on-tap="goBack">
            返回预约
        </span>
    </div>
    <div w-class="exchangeCodeBox" id="exchangeCodeBox" on-tap="copy">
        {{it1.exchangeCode}}
    </div>
    <div w-class="tips">
        <ul style="margin: 0;">
            <li>每个手机号只能获得一个兑换码</li>
            <li>可以复制保存或截图保存</li>
            <li>kuPay开放测试后可使用兑换码</li>
        </ul>
    </div>
</div>