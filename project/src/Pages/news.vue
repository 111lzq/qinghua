<script setup>
import { ref, computed, onMounted } from 'vue';
const swit = ref(false);
const close = 'close';
const open = 'open';
const change = () => {
    swit.value = !swit.value
}
const over = () => {
    swit.value = true;
}


</script>
<template>
    <div class="top">
        <div class="link">
            <router-link to="/" class="gohome">清华主页 </router-link>
            <b>.</b>
            <span>English Version</span>
        </div>
    </div>
    <nav>
        <img src="../image/logonews.png" alt="">
        <div class="right">
            <div class="serch">
                <input type="text" class="text">
                <input type="submit" value="" class="sub">
            </div>
            <div class="share">
                <img src="../image/btn1.png" alt="">
                <img src="../image/btn2.png" alt="">
                <img src="../image/btn3.png" alt="">
            </div>
            <div class="btn" :class="swit ? open : close" @click="change" @mouseenter="over">
                <div class="list" v-if="swit" style="display: block;">
                    <ul>
                        <li>头条新闻</li>
                        <li>专题推荐</li>
                        <li>最新动态</li>
                        <li>媒体清华</li>
                        <li>综合时讯</li>
                        <li>人才培养</li>
                        <li>科学研究</li>
                        <li>交流合作</li>
                        <li>清华人物</li>
                        <li>青青校园</li>
                        <li>图说清华</li>
                        <li>视频清华</li>
                        <li>清华广角</li>
                        <li>清华史宛</li>
                        <li>清华思客</li>
                        <li>清华报刊</li>
                        <li>新闻合集</li>
                    </ul>

                </div>
            </div>
        </div>
    </nav>
    <div class="banner">
        <div class="big">
            <img src="../image/bl1.jpg" alt="">
            <div class="new">
                <span>头条新闻</span>
                <div class="tit">纪念蒋南翔同志诞辰110周年座谈会在清华大学举行</div>
                <p>11月22日，中国科学院、中国工程院公布了2023年院士增选结果。清华大学航天航空学院
                    教授李路明、生命科学学院教授时松海、计算机科学与技术系教授湖事民、·交叉信息研究院教
                    授段路明、生命科学学院教授颜宁共5位教师当选为中国科学院院士。清华大学能源
                    与动力工程系教授吕俊复当选为中国工程院院士。此外，还有5位校友获选中国科学院、中国工程院院士。</p>
            </div>
        </div>
        <div class="aside">
            <ul>
                <li>
                    <div class="time">2023.11.23</div>
                    <div class="text">清华大学6位教师5位校友当选中国科学院、中国工程院院士</div><img src="../image/bl1.jpg" alt="">
                </li>
                <li>
                    <div class="time">2023.11.22</div>
                    <div class="text">乌拉圭总统拉卡列访问清华大学并演讲</div><img src="../image/bl2.jpg" alt="">
                </li>
                <li>
                    <div class="time">2023.11.16</div>
                    <div class="text">2022年度北京市科学技术奖揭晓 清华荣获突出贡献中关村奖1人，成果奖一等奖7项，二等奖9项</div><img src="../image/bl3.jpg"
                        alt="">
                </li>
                <li>
                    <div class="time">2023.11.12</div>
                    <div class="text">纪念蒋南翔同志诞辰110周年座谈会在清华大学举行</div><img src="../image/bl4.jpg" alt="">
                </li>
                <li>
                    <div class="time">2023.11.10</div>
                    <div class="text">清华大学召开2023年文科工作会议</div><img src="../image/bl5.jpg" alt="">
                </li>
            </ul>
        </div>
        <div class="bor"></div>
        <div class="bar"></div>
    </div>
    <div class="special">
        <div class="title"><span class="tit">专题推荐</span>更多></div>
        <div class="arrow">
            <div class="left"></div>
            <div class="right"></div>
        </div>
    </div>
    <div class="lun">
        <ul>
            <li><img src="../image/l1.jpg" alt=""><div class="name">清华五道口全球金融论坛</div></li>
            <li><img src="../image/l2.jpg" alt=""><div class="name">深入学习贯彻习近平总书记重要讲话精神</div></li>
            <li><img src="../image/l3.jpg" alt=""><div class="name">庆祝清华大学建校112周年</div></li>
            <li><img src="../image/l4.jpg" alt=""><div class="name"></div>第26次教育工作讨论会</li>
            <li><img src="../image/l5.jpg" alt=""><div class="name">庆祝清华大学建校112周年</div></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>

    <div class="swl">
        <div class="left">
            <ul>
                <li>综合时讯</li>
                <li>人才培养</li>
                <li>科学研究</li>
                <li>交流合作</li>
                <li>清华人物</li>
                <li>青青校园</li>
            </ul>
        </div>
        <div class="mid">
            <ul>
                <li>
                    <img src="../image/m1.png" alt="">
                    <div class="text">
                        <div class="tit">
                            <strong>【新百年教学成就奖】崔建莲：永远都充满期待的课堂源于最初的梦想与热爱</strong>
                        </div>
                        <p>在她的课堂上，有同学解开了更多的难题，有同学锻炼了表达的能力，有同学在互助间收获了友谊，有同
                            学在挫折中鼓起勇气重新塑造了自己。二十余年的执教生涯中，
                            她教过的本科生数以千计，微积分总能被她讲述得饱含...</p>
                    </div>
                </li>
                <li>
                    <img src="../image/m5.png" alt="">
                    <div class="text">
                        <div class="tit">
                            <strong>刘光廷：一颗报国心，一世筑坝人</strong>
                        </div>
                        <p>清华大学水利水电工程系教授刘光廷，凭一腔朴素的知识报国情怀，几十年在水工结构科学
                            技术施工工程研究方面探索创新，
                            先后参加了国内32座水利水电工程科研和设计工作，解决了大量工程关键问题和理论依据。</p>
                    </div>
                </li>
                <li>
                    <img src="../image/m2.png" alt="">
                    <div class="text">
                        <div class="tit">
                            <strong>化工系魏飞团队：在分子世界里寻找绿色密钥</strong>
                        </div>
                        <p>在清华大学化学工程系教授魏飞的日常工作中，与工业界频繁的互动占据了他几乎一半的时间，这是一个窗口，
                            魏飞由此体会到现代化工企业的痛点和难点。为此，他带领团队聚力攻关，突破了一批“卡脖子”难题，自觉承...</p>
                    </div>
                </li>
                <li>
                    <img src="../image/m3.png" alt="">
                    <div class="text">
                        <div class="tit">
                            <strong>清华大学教授薛其坤荣获2024年度美国物理学会巴克利奖</strong>
                        </div>
                        <p>北京时间2023年10月24日，美国物理学会（American Physical Society）宣布，中国科学院院士、清华大学教授、
                            南方科技大学校长薛其坤获得本年度的巴克利奖（2024 Oliver E. Buckley Condensed Matter Physics Priz...</p>
                    </div>
                </li>
                <li>
                    <img src="../image/m4.png" alt="">
                    <div class="text">
                        <div class="tit">
                            <strong>【新百年教学成就奖】张雄：讲台不止三尺，更有广阔天地</strong>
                        </div>
                        <p>作为全村第一个考上大学的人，他用自身努力撼动命运的齿轮，以平凡的出身书写不凡的人
                            生。他将力学理论从生活里带到课堂上，
                            再引领学生将课堂所学投射到更广阔的天地。一心耕耘，几番桃李，学生眼中的他是“严肃...</p>
                    </div>
                </li>
            </ul>
            <div class="more">更多></div>
        </div>
        <div class="right">
            <div class="lt">最新动态</div>
            <div class="rt">媒体清华</div>
            <div class="bod1">
                <ul>
                    <li>
                        <div class="time">
                            23 <br>
                            <span>2023.11</span>
                        </div>
                        <div class="tit">第六届清华大学世界法治论坛举行</div>
                    </li>
                    <li>
                        <div class="time">
                            23 <br>
                            <span>2023.11</span>
                        </div>
                        <div class="tit">深圳国际研究生院廖然、马辉团队在海洋颗粒物分类探测原位样机研究方面取得新进展</div>
                    </li>
                    <li>
                        <div class="time">
                            23 <br>
                            <span>2023.11</span>
                        </div>
                        <div class="tit">清华大学开展“双向挂职”年轻干部专题学习蒋南翔教育思想培训</div>
                    </li>
                    <li>
                        <div class="time">
                            23 <br>
                            <span>2023.11</span>
                        </div>
                        <div class="tit">清华大学-京津冀润泽（廊坊）数字信息有限公司智能社会联合研究院揭牌</div>
                    </li>
                    <li>
                        <div class="time">
                            23 <br>
                            <span>2023.11</span>
                        </div>
                        <div class="tit">化学系曲良体教授课题组合作在电化学滤波电容领域取得重要进展</div>
                    </li>
                    <li>
                        <div class="time">
                            23 <br>
                            <span>2023.11</span>
                        </div>
                        <div class="tit">清华大学6位教师5位校友当选中国科学院、中国工程院院士，2位校友当选中国工程院外籍院士</div>
                    </li>
                    <li>
                        <div class="time">
                            22 <br>
                            <span>2023.11</span>
                        </div>
                        <div class="tit">乌拉圭总统拉卡列访问清华大学并演讲</div>
                    </li>
                    <li>
                        <div class="time">
                            22 <br>
                            <span>2023.11</span>
                        </div>
                        <div class="tit">校工会举办纪念蒋南翔诞辰110周年教职工座谈会</div>
                    </li>
                    <li>
                        <div class="time">
                            22 <br>
                            <span>2023.11</span>
                        </div>
                        <div class="tit">生命学院合作揭示翻译调控型T-box核糖开关折叠与tRNA识别耦联的结构与动态机制</div>
                    </li>
                    <li>
                        <div class="time">
                            22 <br>
                            <span>2023.11</span>
                        </div>
                        <div class="tit">校长王希勤会见新加坡卫生部部长王乙康</div>
                    </li>

                </ul>
            </div>
            <div class="bod2">
                <ul>
                    <li>
                        <div class="time">
                            23 <br>
                            <span>2023.11</span>
                        </div>
                        <div class="tit">专访清华大学吴烨教授：深化减污降碳，机动车排放控制不可松懈</div>
                    </li>
                    <li>
                        <div class="time">
                            24 <br>
                            <span>2023.11</span>
                        </div>
                        <div class="tit">投身昌平建设，四名“清北”博士有话说</div>
                    </li>
                    <li>
                        <div class="time">
                            24 <br>
                            <span>2023.11</span>
                        </div>
                        <div class="tit">中国石油和清华大学打造卓越工程师培养“样板间”</div>
                    </li>
                    <li>
                        <div class="time">
                            24 <br>
                            <span>2023.11</span>
                        </div>
                        <div class="tit">《柳叶刀》系列期刊“西太平洋地区气候变化与健康适应专辑”在京发布</div>
                    </li>
                    <li>
                        <div class="time">
                            24 <br>
                            <span>2023.11</span>
                        </div>
                        <div class="tit">2023年度《柳叶刀人群健康与气候变化倒计时报告》发布</div>
                    </li>
                    <li>
                        <div class="time">
                            24 <br>
                            <span>2023.11</span>
                        </div>
                        <div class="tit">报告：北京蝉联全球第一科研城市</div>
                    </li>
                    <li>
                        <div class="time">
                            24 <br>
                            <span>2023.11</span>
                        </div>
                        <div class="tit">两份指数报告发布 中国城市创新生态仍有上升空间</div>
                    </li>
                    <li>
                        <div class="time">
                            24 <br>
                            <span>2023.11</span>
                        </div>
                        <div class="tit">133人新当选两院院士，清华6人当选，居高校之首</div>
                    </li>
                    <li>
                        <div class="time">
                            23 <br>
                            <span>2023.11</span>
                        </div>
                        <div class="tit">专访清华大学吴烨教授：深化减污降碳，机动车排放控制不可松懈</div>
                    </li>
                    <li>
                        <div class="time">
                            23 <br>
                            <span>2023.11</span>
                        </div>
                        <div class="tit">柳叶刀报告：去年热浪死亡人数增加两倍多，气候变化从你的健康里偷走了什么?</div>
                    </li>

                </ul>
            </div>
        </div>
    </div>
    <div class="picture">
        <ul>
            <li><img src="../image/p1.jpg" alt="">
                <div class="mid"></div>
            </li>
            <li><img src="../image/p2.jpg" alt="">
                <div class="mid"></div>
            </li>
            <li><img src="../image/p3.jpg" alt="">
                <div class="mid"></div>
            </li>
            <li><img src="../image/p4.jpg" alt="">
                <div class="mid"></div>
            </li>
            <li><img src="../image/p5.jpg" alt="">
                <div class="mid"></div>
            </li>
            <li><img src="../image/p6.jpg" alt="">
                <div class="mid"></div>
            </li>
        </ul>
    </div>
    <div class="box">
        <div class="list">
            <div class="first">
                <div class="tit"><span>清华广角</span></div>
                <div class="text">
                    <ul>
                        <li class="time">2023.11.23</li>
                        <li>清华大学外文系博士后及研究生论坛举行</li>
                    </ul>
                </div>
                <div class="text">
                    <ul>
                        <li class="time">2023.11.23</li>
                        <li>航天航空学院教授曹炳阳担任《国际热科学杂志》期刊副主编</li>
                    </ul>
                </div>
                <div class="text">
                    <ul>
                        <li class="time">2023.11.23</li>
                        <li>故宫博物院研究馆员周乾做客新人文讲座 细探故宫建筑里的秘密</li>
                    </ul>
                </div>
            </div>
            <div class="first">
                <div class="tit"><span>清华史宛</span></div>
                <div class="text">
                    <ul>
                        <li class="time">2023.11.23</li>
                        <li>275封书信里的钱三强</li>
                    </ul>
                </div>
                <div class="text">
                    <ul>
                        <li class="time">2023.11.23</li>
                        <li>教育家影像：只为一张平静的书桌</li>
                    </ul>
                </div>
                <div class="text">
                    <ul>
                        <li class="time">2023.11.23</li>
                        <li>梁启超与中国图书馆事业</li>
                    </ul>
                </div>
            </div>
            <div class="first">
                <div class="tit"><span>清华思客</span></div>
                <div class="text">
                    <ul>
                        <li class="time">2023.11.23</li>
                        <li>邹广文：肩负起建设中华民族现代文明的文化使命</li>
                    </ul>
                </div>
                <div class="text">
                    <ul>
                        <li class="time">2023.11.23</li>
                        <li>张国刚：关于唐代藩镇研究的几点新认识</li>
                    </ul>
                </div>
                <div class="text">
                    <ul>
                        <li class="time">2023.11.23</li>
                        <li>艾四林：从人民群众的创造中汲取理论创新智慧</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    <footer>
        <div class="foot">
            <img src="../image/logonews.png" alt="">
            <div class="bar">
                <div class="link">
                    关于我们<em>|</em>友情链接<em>|</em>清华地图<em>|</em>意见反馈
                </div>
                <div class="content">
                    清华大学新闻中心版权所有，清华大学新闻网编辑部维护，电子信箱: news@tsinghua.edu.cn <br>
                    Copyright 2001-2020
                    news.tsinghua.edu.cn. All rights reserved.
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped>
.lun li .name{
    margin: 20px 0;
}
.lun li img{
    width: 330px;
    height: 203px;
}
.banner .big img{
    width: 100%;
    height: 100%;
}
footer .link em{
    margin: 0 5px;
}
footer .foot .content {
    width: 1195px;
    height: 35px;
    color: #ccc;
    font-size: 12px;
}

footer .bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

footer .foot .link {
    width: 1195px;
    height: 30px;
    font-size: 12px;
    color: #ccc;
}

footer .foot .bar {
    background-color: #701AA8;
    width: 1348px;
    height: 124px;
    position: absolute;
    bottom: 0;
    right: -116px;
}

footer .foot img {
    width: 192px;
    height: 40px;
    margin-left: 50px;
}

footer .foot {
    width: 1232px;
    height: 290px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    position: relative;

}

footer {
    width: 100%;
    height: 290px;
}

.box .first .text {
    display: flex;
    align-items: center;
}

.box .first li {
    margin: 10px 0;
}

.box .first .time {
    font-size: 12px;
}

.box .tit span {
    position: absolute;
    bottom: 7px;
    font-size: 21px;
}

.box .first {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.box .first div {
    width: 100%;
    height: 96px;
    margin: 15px 0;
}

.box .list .first:hover {
    color: #701AA8;
}

.box .list .tit {
    width: 100%;
    font-size: 12px;
    color: black;
    position: relative;
    margin-top: 50px;
    border-bottom: 1px solid #ccc;
}

.box .list div {
    width: 370px;
    height: 100%;
}

.box .list {
    width: 1232px;
    height: 414px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 0px;
    left: calc((100% - 1232px)/2);
    z-index: 3;
}

.box {
    width: 100%;
    height: 761px;
    background-color: #e5e4e4;
    /* position: relative; */
    margin-top: -320px;
    z-index: -2;
    position: relative;
}

.picture li .mid {
    width: 47px;
    height: 47px;
    z-index: 3;
    position: absolute;
    top: calc((100% - 47px)/2);
    left: calc((100% - 47px)/2);
    background: rgba(0, 0, 0, 0.3) url('../image/play.png') center no-repeat;
}

.picture li img:hover {
    transform: scale(1.2);
}

.picture li img {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
}

.picture li {
    width: 410px;
    height: 252px;
    overflow: hidden;
    position: relative;
}

.picture ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.picture {
    width: 100%;
    height: 500px;
    margin-top: 150px;
}

.swl .right .lt {
    color: white;
    text-align: center;
    line-height: 63px;
}

.swl .right .rt {
    color: white;
    text-align: center;
    line-height: 63px;
}

.swl .right .tit {
    width: 241px;
}

.swl .right span {
    font-size: 12px;
    margin-left: -10px;
}

.swl .right li {
    width: 100%;
    height: 91px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: white;
}

.swl .right .bod2 {
    width: 100%;
    height: 100%;
    position: absolute;
    display: none;
}

.swl .right .bod1 {
    width: 100%;
    height: 100%;
    position: absolute;

}

.swl .right ul {
    width: 100%;
    height: 100%;
}

.swl .right .lt:hover {
    background-color: #e6e4e4;
}

.swl .right .rt:hover {
    background-color: #e6e4e4;
}


.swl .right .lt,
.rt {
    width: 50%;
    height: 63px;
    display: inline-block;
    transition: background-color 0.3s ease;
}

.swl .right {
    background: linear-gradient(to bottom, #791CB5 70%, #4220D6);
    position: relative;
    top: 52px;
}

.banner .aside .time {
    font-size: 12px;
    color: #ccc;
}

.swl .mid .more {
    width: 100%;
    height: 20px;
    color: #777;
    text-align: right;
    font-size: 14px;
    line-height: 20px;
    padding-top: 10px;
}

.swl .mid li:nth-last-child(1) {
    border-bottom: 1px solid #d5d3d3;
}

.swl .text .tit {
    margin-top: 10px;
}

.swl .text p {
    font-size: 12px;
    line-height: 23px;
    margin-top: 12px;
}

.swl .mid .text {
    width: 297px;
    height: 172px;
    position: absolute;
    right: 0;
    top: 0;
}

.swl .mid img {
    position: absolute;
    left: 0;
    top: 0;
    width: 264px;
    height: 162px;
}

.swl .mid li {
    width: 100%;
    height: 20%;
    position: relative;
}

.swl .mid ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

}

.swl .left li::after {
    content: "";
    display: block;
    position: relative;
    left: 110px;
    top: -53px;
    background: url('../image/arrow6.png') center no-repeat;
    background-size: 100%;
    width: 5px;
    height: 53px;

}

.swl .left li:hover {
    color: #791CB5;
    border-right: none;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}

.swl .left ul {
    width: 100%;

}

.swl .left li {
    width: 100%;
    height: 53px;
    border-right: 1px solid #ccc;
    line-height: 53px;
    text-indent: 2rem;
    color: #777;
    cursor: pointer;
}

.swl .right::after {
    content: '';
    width: 490px;
    height: 1147px;
    display: block;
    position: relative;
    left: 30px;
    top: -104px;
    background-color: #e6e4e4;
    z-index: -2;
}

.swl .right {
    width: 396px;
    height: 100%;
}

.swl .mid {
    width: 591px;
    height: 100%;
}

.swl .left {
    width: 126px;
    height: 100%;
    display: flex;
}

.swl {
    width: 1232px;
    height: 1182px;
    margin: 0 auto;
    padding-top: 32px;
    display: flex;
    justify-content: space-between;
}

.lun ul {
    width: max-content;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden;
}

.lun li {
    width: 330px;
    height: 356px;
    margin-right: 30px;
    flex-shrink: 0;
}

.lun {
    width: 100%;
    height: 356px;
    overflow-x: hidden;
}

.special .arrow .right::after {
    content: '\\';
    width: 31px;
    height: 17px;
    display: block;
    position: relative;
    left: -12px;
    top: 2px;
    color: #791CB5;
    font-size: 20px;
    text-align: right;
    border-bottom: 1px solid #791CB5;
}

.special .arrow .left::after {
    content: "/";
    width: 31px;
    height: 17px;
    display: block;
    position: relative;
    left: 21px;
    top: 2px;
    color: #791CB5;
    font-size: 20px;
    border-bottom: 1px solid #791CB5;
}

.special .arrow div:hover {
    border: 1px solid #791CB5;
}

.special .arrow div {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid #ca96ec;
    margin-left: 38px;
    cursor: pointer;
}

.special .arrow {
    width: 155px;
    height: 36px;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    right: 20px;
    top: 58px;
}

.special .title {
    position: relative;
    top: 58px;
}

.special .tit::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 1.5rem;
    background-color: #ccc;
    margin: 0 10px;
    position: relative;
    top: 4px;
}

.special div {
    font-size: 13px;
    color: #ccc;
}

.special .tit {
    font-size: 23px;
    font-weight: 900;
    color: black;
}

.special {
    width: 1408px;
    height: 120px;
    margin: 0 auto;
    position: relative;
}

.banner .new p {
    color: #ccc;
    font-size: 12px;
    margin-top: 30px;
}

.banner .new .tit {
    font-size: 20px;
    color: white;
    font-weight: 900;
    margin-top: 20px;
}

.banner .new span {
    width: 64px;
    height: 17px;
    color: white;
    font-size: 14px;
    background-color: #791CB5;
}

.banner .new {
    width: 861px;
    height: 150px;
    position: absolute;
    bottom: 50px;
    left: calc((100% - 861px)/2);
}

.banner ul li:hover {
    background-color: #BA9A05;
    color: white;
}

.banner li .time {
    top: 15px;
}

.banner li .text {
    top: 31px;
}

.banner li div {
    width: 193px;
    position: absolute;
    left: 35px;
}

.banner ul img {
    width: 193px;
    height: 113px;
    position: absolute;
    top: 2px;
    right: 0;

}

.banner ul {
    width: 100%;
    height: 100%;
}

.banner ul li {
    width: 100%;
    height: 20%;
    border-bottom: 1px solid #e7e5e5;
    position: relative;

}

.banner .aside {
    width: 454px;
    height: 591px;
    position: absolute;
    top: 40px;
    right: 40px;
}

.banner .big {
    width: 914px;
    height: 591px;
    position: absolute;
    top: 40px;
}

.banner .bar {
    width: 40px;
    height: 616px;
    position: absolute;
    right: 0;
    background: linear-gradient(to bottom, #1F22ED 60%, #671EC0);
}

.banner .bor {
    width: 1338px;
    height: 40px;
    background: linear-gradient(to right, #791CB5 65%, #1F22ED);
    position: absolute;
    right: 0;
}

.banner {
    width: 1408px;
    height: 633px;
    position: relative;
    left: calc(100% - 1408px);
}

nav ul li:hover {
    color: #BA9A05;
    border-bottom: 1px solid #BA9A05;
}

nav ul li {
    width: 80%;
    height: 6%;
    border-bottom: 1px solid #ccc;
    align-self: flex-end;
    line-height: 34px;
}

nav ul {
    width: 100%;
    height: 98%;
    display: flex;
    position: absolute;
    right: 0;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
}

nav .list {
    width: 176px;
    height: 696px;
    background: linear-gradient(to top, #291FDF, #701AA8);
    position: relative;
    left: -185px;
    display: none;
    z-index: 3;
}

nav .close {
    background: url('../image/A.png') no-repeat center;
}

nav .open {
    background: url('../image/B.png') no-repeat center;
}

nav .right .serch {
    display: flex;
    flex-wrap: wrap;
    height: 38px;
    background-color: #eeecec;
    border-radius: 34px;
}

nav .right .btn {
    width: 38px;
    height: 38px;
    background-color: black;
    border-radius: 50%;
    position: relative;
}

nav .right {
    display: flex;
    flex-wrap: wrap;
}

nav img {
    width: 271px;
    height: 55px;
}

nav .share {
    width: 160px;
    height: 38px;
    display: flex;
    justify-content: center;
}

nav .share::after {
    content: '';
    width: 1px;
    height: 30px;
    background-color: #ccc;
    position: relative;
    top: 4px;
}

nav .share img {
    width: 38px;
    height: 38px;
}

nav .text:focus {
    outline: none;
}

nav .text {
    width: 209px;
    height: 100%;
    border: none;
    text-indent: 1.5rem;
    background-color: transparent;
}

nav .sub {
    width: 45px;
    height: 100%;
    border: none;
    cursor: pointer;
    background-color: transparent;
    background: url('../image/search.png') no-repeat center center;
}

nav {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-around;
    align-items: center;

}

.top .link span {
    color: #791CB5;
}

.top .link b {
    position: relative;
    top: -4px;
    margin: 0 7px;
}

.top {
    width: 100%;
    height: 40px;
    border-bottom: 2px solid #ccc;
}

.top .link {
    line-height: 40px;
    position: relative;
    width: 200px;
    left: 80%;
    font-size: 12px;
}</style>