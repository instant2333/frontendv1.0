import React ,{Component}from 'react';
import Titlemenu from './Title'
import Chartoption from './Chartoption'
import 'antd/dist/antd.css';

class App extends Component{
    constructor(props){
        super(props);
        //this.draw_detail_chart=this.draw_detail_chart().bind(this)
        this.state={
            name:"instant2333",
            coin:"",
        }
    }
    componentDidMount() {
        this.draw();
    }
    draw(){
        //
        const {name} = this.state;
        var current_id=0;
        var chart=document.getElementById("currency_detail_chart")
        var chartctx=chart.getContext("2d")
        var current_coin_price=[3,2,4,1,5,6,7,9,4,2,3]
        chart.height = 400;
        const img3 = document.createElement('img3');
        img3.src = encodeURI("timg2.jpg");

        //画分时图
        function draw_detail_chart(id){
            //console.log("ready to draw")
            console.log(circles[id].name)
            var max=Math.max.apply(null,current_coin_price)
            var min=Math.min.apply(null,current_coin_price)
            var range=max-min

            chart.style.backgroundSize = `${img3.width}px ${img3.height}px`;
            chart.style.backgroundImage = 'url("' + img3.src + '")';

            var single_dis=chart.width/(current_coin_price.length+1)
            var i=0
            chartctx.beginPath()
            chartctx.moveTo(0,chart.height-(current_coin_price[0]-min)/range*chart.height*0.8-30)
            for(i=1;i<current_coin_price.length;i++){
                chartctx.lineTo(i*single_dis,chart.height-(current_coin_price[i]-min)/range*chart.height*0.8-30)
                console.log()
            }
            chartctx.lineTo(single_dis*i,chart.height)
            chartctx.lineTo(0,chart.height)
            chartctx.lineTo(0,chart.height-(current_coin_price[0]-min)/range*chart.height*0.8-30)
            //chartctx.stroke()
            chartctx.closePath()
            chartctx.globalAlpha=0.5
            chartctx.fillStyle="#b9e5a5";
            chartctx.fill();
        }

        var coinlist=[["BTC","3.99USDT"],["ETH","2.11USDT"],["EOS","5.14"],["XRP","0.3125"],["USDT","1"],["BCH","0.12"],["ETC","31"]]
        var c=document.getElementById("myCanvas");
        var ctx=c.getContext("2d");
        c.addEventListener("mousedown", doMouseDown, false);
        c.addEventListener('mousemove', doMouseMove, false);
        c.addEventListener('mouseup',   doMouseUp, false);


        function getPointOnCanvas(canvas, x, y) {
            var bbox =canvas.getBoundingClientRect();
            return { x: x- bbox.left *(canvas.width / bbox.width),
                y:y - bbox.top  * (canvas.height / bbox.height)
            };
        }

        var started = false;
        var chooseid=-1;
        var loc;

        //鼠标点击事件
        function doMouseDown(event) {
            var x = event.pageX;
            var y = event.pageY;
            var canvas = event.target;
            loc = getPointOnCanvas( canvas, x, y);
            console.log("mouse down at point( x:" + loc.x + ", y:" + loc.y + ")");
            for(var i=0;i<circles.length;i++){
                if(inrange(circles[i],loc)){
                    chooseid=i
                    current_id=i
                    started = true;
                }

            }
            console.log(chooseid)
        }

        function inrange(circle,loc){//判断是否在circle内
            var x=circle.x
            var y=circle.y
            var r=circle.r
            if(loc.x>(x-r)&&loc.x<(x+r)&&loc.y>(y-r)&&loc.y<(y+r))return true
            else return false
        }

        function doMouseMove(event) {
            var x = event.pageX;
            var y = event.pageY;
            var canvas = event.target;
            var loc1 = getPointOnCanvas(canvas, x, y);
            if (started===true&&chooseid>=0) {
                circles[chooseid].xv=0;
                circles[chooseid].yv=0;
                circles[chooseid].x=circles[chooseid].x+loc1.x-loc.x
                circles[chooseid].y=circles[chooseid].y+loc1.y-loc.y
                loc=loc1
            }
        }

        function doMouseUp(event) {
            console.log("mouse up now");
            if (started===true&&chooseid>=0) {
                circles[chooseid].xv=(Math.random()-0.5)*2
                circles[chooseid].yv=(Math.random()-0.5)*2
                chooseid=-1
                started = false;
            }
        }



        const img2 = document.createElement('img');
        img2.src = encodeURI("timg.jpg");
        img2.onload=function(){
            c.height = 400;
            c.style.backgroundSize = `${img2.width}px ${img2.height}px`;
            c.style.backgroundImage = 'url("' + img2.src + '")';
        }

        var timer=0;

        function Circle(coin){
            this.x=Math.random()*300+40;
            this.y=Math.random()*300+40;
            this.r=Math.random()*10+20;
            this.yv=(Math.random()-0.5)*2;
            this.xv=(Math.random()-0.5)*2;
            this.alreadycrashed=-1;
            this.name=coin[0]
            this.data=coin[1]
            //绘制圆形
            this.paint=function(){
                ctx.beginPath();
                ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
                ctx.fillStyle="#13d3d3";
                ctx.globalAlpha = 0.3;
                ctx.fill();
                ctx.fillStyle="white";
                ctx.globalAlpha = 1;
                //ctx.strokeStyle = "#fff";

                ctx.fillText(this.name,this.x-ctx.measureText(this.name).width/2,this.y);
                ctx.fillText(this.data,this.x-ctx.measureText(this.data).width/2,this.y+10)
                //ctx.strokeText(this.name,50,100);
            }
            //控制圆形移动
            this.step=function(){
                this.yv=this.yv+(Math.random()-0.5)/100;
                this.xv=this.xv+(Math.random()-0.5)/100;
                if(this.xv>0.5)this.xv-=0.3;
                else if(this.xv<-0.5)this.xv+=0.3;
                if(this.yv>0.5)this.yv-=0.3;
                else if(this.yv<-0.5)this.yv+=0.3;

                if(this.x>c.width-this.r){
                    this.xv=-this.xv
                    this.x=c.width-this.r
                }
                else if(this.x<this.r)this.xv=-this.xv
                if(this.y>c.height-this.r)this.yv=-this.yv
                else if(this.y<this.r)this.yv=-this.yv
                this.y+=this.yv;
                this.x+=this.xv;
            }
        }
        var circles=[];

        function createCircles(coin){
            //this.coinname=coinname
            var circle=new Circle(coin);//??????
            circles[circles.length]=circle;
        }
        function paintCircles(){
            for(var i=0;i<circles.length;i++){
                circles[i].paint();
            }
        }
        function stepCircles(){
            for(var i=0;i<circles.length;i++){
                circles[i].step();
            }
        }

        function crashcheck(){
            for (i in circles){
                var ballx1=circles[i].x;
                var bally1=circles[i].y;
                var ballr1=circles[i].r;
                var ac1=circles[i].alreadycrashed
                //var notcrahed=true
                for(var j in circles){
                    if(i!==j){
                        var ballr2=circles[j].r;
                        var ballx2=circles[j].x;
                        var bally2=circles[j].y;
                        var ac2=circles[j].alreadycrashed
                        var col_dis=ballr1+ballr2;
                        var distence = Math.sqrt((ballx1 - ballx2) * (ballx1 - ballx2) + (bally1 - bally2) * (bally1 - bally2));
                        if(distence<col_dis&&ac1===-1&&ac2===-1){
                            console.log("crashed")
                            circles[i].xv=-circles[i].xv
                            circles[i].yv=-circles[i].yv
                            circles[j].xv=-circles[j].xv
                            circles[j].yv=-circles[j].yv
                            circles[i].alreadycrashed=j
                            circles[j].alreadycrashed=i
                            //notcrahed=false
                        }
                        else if(distence<col_dis&&ac1===j&&ac2===i){
                            console.log("crashed")
                            //notcrahed=false
                        }
                        else if(distence>col_dis&&ac1===j&&ac2===i){
                            circles[i].alreadycrashed=-1
                            circles[j].alreadycrashed=-1
                        }
                    }
                }
                //if(notcrahed)circles[i].alreadycrashed=-1
            }

        }


        for (var i in coinlist) {
            createCircles(coinlist[i]);
        }

        setInterval(function(){
            c.width = document.querySelector('body').offsetWidth-10;
            chart.width = document.querySelector('body').offsetWidth-10;
            chartctx.beginPath();
            chartctx.fill()
            //ctx.drawImage(img2,0,0)
            timer++;
            if(timer%20===0){
                //createCircles();
            }
            paintCircles();
            stepCircles();
            crashcheck();
            draw_detail_chart(current_id);

        },10);
    }
    render(){
        console.log("2d")
        return(<div>
            <Titlemenu/>
            <canvas id="myCanvas"    ></canvas>
            <div></div>
            <Chartoption/>
            <canvas id="currency_detail_chart"  ></canvas>
                hello world
        </div>
        )

    }
}

export default App;
