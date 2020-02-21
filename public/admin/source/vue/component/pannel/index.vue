<template>
    <div class="c-component">
        <navigation :topRoute="topRoute" :position="position"></navigation>
        <div class="content">
            <div class="in">
                <div class="welcome">
                    <div class="top">欢迎回来 <b>{{ $store.state.user.username }}</b></div>
                    <div class="btm">最近一次登录于 <b>{{ $store.state.user.last_time }}</b></div>
                </div>
                <div class="today">
                    <div class="run-title">
                        <div class="left">今日统计资料</div>
                        <div class="right"></div>
                    </div>
                    <div class="list">

                        <div class="card">
                            <div class="left"><img src="./image/user1.png" class="image"></div>
                            <div class="right">
                                <div class="top">新增用户</div>
                                <div class="btm">
                                    <div class="line">今日：<b>{{ info.user.today }}</b></div>
                                    <div class="line">昨日：<b>{{ info.user.yesterday }}</b></div>
                                    <div class="line">相较昨天：<b>{{ info.user.ratio }}</b>
                                        <img src="./image/top.png" v-if="info.user.flag == 'up'" class="image">
                                        <img src="./image/btm.png" v-if="info.user.flag == 'down'" class="image">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="left"><img src="./image/group.png" class="image"></div>
                            <div class="right">
                                <div class="top">新增群组</div>
                                <div class="btm">
                                    <div class="line">今日：<b>{{ info.group.today }}</b></div>
                                    <div class="line">昨日：<b>{{ info.group.yesterday }}</b></div>
                                    <div class="line">相较昨天：<b>{{ info.group.ratio }}</b>
                                        <img src="./image/top.png" v-if="info.group.flag == 'up'" class="image">
                                        <img src="./image/btm.png" v-if="info.group.flag == 'down'" class="image">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="history">
                    <div class="run-title">
                        <div class="left">历史统计资料 </div>
                        <div class="right"></div>
                    </div>
                    <div class="list">

                        <div class="card-for-total">
                            <div class="left"><img src="./image/user1.png" class="image"></div>
                            <div class="right">
                                <div class="top">用户数</div>
                                <div class="btm">{{ info.user.total }}</div>
                            </div>
                        </div>

                        <div class="card-for-total">
                            <div class="left"><img src="./image/group.png" class="image"></div>
                            <div class="right">
                                <div class="top">群组数</div>
                                <div class="btm">{{ info.group.total }}</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="chart">

                    <!--<div class="top hide">-->

                        <!--<div class="month chart-box">-->
                            <!--<div class="run-title">-->

                                <!--<div class="left">-->
                                    <!--<div class="title"><img src="./image/month.png" class="image">月统计资料</div>-->
                                    <!--<div class="year">-->
                                        <!--年份：-->
                                        <!--<i-select v-model="yearForMonth" style="width: 80px;">-->
                                            <!--<i-option v-for="v in year" :key="v" :value="v">{{ v }}</i-option>-->
                                        <!--</i-select>-->
                                    <!--</div>-->
                                    <!--<div class="month single">-->
                                        <!--月份：-->
                                        <!--<i-select v-model="monthForMonth" style="width: 80px;">-->
                                            <!--<i-option v-for="(v,k) in month" :key="k" :value="parseInt(k)">{{ v }}</i-option>-->
                                        <!--</i-select>-->
                                    <!--</div>-->
                                    <!--<div class="btns">-->
                                        <!--<v-button color="blue" @click="monthChart">确定</v-button>-->
                                    <!--</div>-->
                                <!--</div>-->
                                <!--<div class="right"></div>-->
                            <!--</div>-->
                            <!--<div class="con">-->
                                <!--<div class="chart-container" ref="month"></div>-->
                                <!--<v-loading ref="month-loading"></v-loading>-->
                            <!--</div>-->
                        <!--</div>-->

                        <!--<div class="quarter chart-box">-->
                            <!--<div class="run-title">-->
                                <!--<div class="left">-->
                                    <!--<div class="title"><img src="./image/quarter.png" class="image">季度统计资料</div>-->
                                    <!--<div class="year">-->
                                        <!--年份：-->
                                        <!--<i-select v-model="yearForQuarter" style="width: 80px;">-->
                                            <!--<i-option v-for="v in year" :key="v" :value="v">{{ v }}</i-option>-->
                                        <!--</i-select>-->
                                    <!--</div>-->
                                    <!--<div class="month single">-->
                                        <!--季度：-->
                                        <!--<i-select v-model="quarterForQuarter" style="width: 100px;">-->
                                            <!--<i-option v-for="(v,k) in quarter" :key="k" :value="parseInt(k)">{{ v }}</i-option>-->
                                        <!--</i-select>-->
                                    <!--</div>-->
                                    <!--<div class="btns">-->
                                        <!--<v-button color="blue" @click="quarterChart">确定</v-button>-->
                                    <!--</div>-->
                                <!--</div>-->
                                <!--<div class="right"></div>-->
                            <!--</div>-->
                            <!--<div class="con">-->
                                <!--<div class="chart-container" ref="quarter"></div>-->
                                <!--<v-loading ref="quarter-loading"></v-loading>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->

                    <div class="btm chart-box">
                        <div class="run-title">
                            <div class="left">
                                <div class="title"><img src="./image/year.png" class="image">用户活跃度</div>
                                <div class="year">
                                    日期：
                                    <i-date-picker type="date" placement="bottom-end" placeholder="请选择日期" style="width: 200px" @on-change="setDate"></i-date-picker>
                                </div>
                                <div class="btns">
                                    <v-button color="blue" @click="chartForStatisUserActivityLog">确定</v-button>
                                </div>
                            </div>
                            <div class="right"></div>
                        </div>
                        <div class="con">
                            <div class="chart-container" ref="statistics-user-activity-log"></div>
                            <v-loading ref="statistics-user-activity-log-loading"></v-loading>
                        </div>
                    </div>
                </div>
                <div class="system">
                    <div class="run-title">
                        <div class="left">系统信息</div>
                        <div class="right"></div>
                    </div>
                    <table class="table">
                        <tbody>
                        <tr>
                            <td>系统版本</td>
                            <td>1.0.1</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>作者</td>
                            <td>grayVTouch</td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <v-loading ref="loading"></v-loading>
    </div>
</template>

<script src="./js/index.js"></script>
<style src="../public/css/global.css"></style>
<style scoped src="../public/css/public.css"></style>
<style scoped src="./css/index.css"></style>