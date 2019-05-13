<template>
    <div class="top">
        <div class="title">
            <h1>我的</h1>
        </div>
        <div class="header">
            <img src="/img/3.jpg" alt="">
        </div>
        <div class="container">
            <div class="orders">
                <div class="title2">我的订单</div>
                <div class="list-two">
                     <div class="list-movie"><img src="/img/3.png" alt=""><a href="#"><p>电影</p></a></div>
                     <div class="list-store"><img src="/img/4.png" alt=""><a href="#"><p>商城</p></a></div>
                </div>
            </div>
            <div class="group">
                <div class="group1"><span>在线观影</span></div>
                <div class="group2"><span>优惠券</span></div>
                <div class="group3"><span>折扣卡</span></div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .top{
        background: #f3f3f3;
    }
    .title {
        background:#e54847;
        height: 50.5px;
        text-align: center;
        color: #ffffff;
        line-height: 50.5px;
    }
    .title h1 {
        font-size: 18px;
    }
    .header {
        width: 100%;
        height: 150px;
        
        background: url(/img/5.png) no-repeat;
       
    }
    .header img {
        display: inline-block;
        margin-top: 30px;
        width: 60px;
        height: 60px;
        border-radius: 60px;
        border: 3px solid #fff;
        margin-left: 41%;
    }
    .container {
        font-size: 14px;
        color: #777;
        height: 410px;
    }
    .orders {
        background: #fff;
        height: 149px;
        margin-top: 10px;
    }
    .title2 {
        padding-top: 13px;
        font-size: 15px;
        line-height: 21px;
        height: 21px;
        color: #333;
        width: 80px;
        margin: 0 auto;
    }
    .list-two {
        display: flex;
    }
    .list-movie {
        width: 50%;
        height: 97px;
        margin-top: 18px;
    }
    .list-store {
        width: 50%;
        height: 97px;
        margin-top: 18px;
    }
    .list-movie img {
        width: 40px;
        height: 40px;
        margin:0 auto;
        display: block;
    }
    .list-movie p {
        margin-top: 10px;
    }
    .list-store img {
        width: 40px;
        height: 40px;
        margin:0 auto;
        display: block;
    }
    .list-store p {
        margin-top: 10px;
    }
    .list-two a {
        color: #333;
        font-size: 15px;
        text-decoration: none;
        text-align: center;
    }
    .group {
        margin-top: 10px;
        background: #fff;
        height: 132px;
        color: #333;
    }
    .group1 {
        height: 44px;
        line-height: 44px;
        font-size: 15px;
        margin-left: 15px;
        padding-right: 15px;
        border-bottom: 0.5px solid #f3f3f3;
    }
    .group2 {
        height: 44px;
        line-height: 44px;
        font-size: 15px;
        margin-left: 15px;
        padding-right: 15px;
        border-bottom: 0.5px solid #f3f3f3;
    }
    .group3 {
        height: 44px;
        line-height: 44px;
        font-size: 15px;
        margin-left: 15px;
        padding-right: 15px;
        border-bottom: 0.5px solid #f3f3f3;
    }
</style>

