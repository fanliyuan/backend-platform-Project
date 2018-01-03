var ajaxMainCount=1;
//显示主列表
function showMain(){
    var html="";

    var count="";
    //console.log(data[0].url);
    for(var i=0;i<mainList.length;i++){
        html+='<div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title">';
        html+=`<a class="collapsed text-center sumList" data-toggle="collapse" data-parent="#gr1" href="#${mainList[i].url}">${mainList[i].name}</a>`;
        html+=`</h4></div><div class="panel-collapse collapse" id="${mainList[i].url}"><div class="panel-body"><ul class="list-unstyled adminList">`;
        count=mainList[i].child;
        var str="";
        for(var j=0;j<count.length;j++){
            str+=`<li><a href="${count[j].url}">${count[j].name}</a></li>`;
        }
        html+=str;
        html+=`</ul></div></div></div>`;
    }
    $("#gr1").html(html);
}

//将主列表中的数据存贮在mainList中，以备其他页面使用
var mainList="";
getMain();
function getMain(){
    $.ajax({
        type:"get",
        dataType:"json",
        url:"data/data.json",
        success:function(data){
            mainList=data.data;
            showMain();
            if(ajaxMainCount==1){
                //初始化页面操作
                $("#layerLeft .panel:first-child>.panel-heading a").addClass("active");
                $("#gr1_content").addClass("in");
                $("#gr1_content li:first-child a").addClass("hover");
            }
            else{
                //初始化页面操作
                $("#layerLeft .panel:first-child>.panel-heading a").addClass("active");
                $("#gr1_content").addClass("in");
                $("#gr1_content li:nth-child(3) a").addClass("hover");
            }
            console.log("请求一次主列表数据！");
            ajaxMainCount++;
        },
        error:function(){
            alert("服务器连接失败！")
        }
    })
}

$(function(){

//初始化页面操作
    $("#layerLeft .panel:first-child>.panel-heading a").addClass("active");
    $("#gr1_content").addClass("in");
    $("#gr1_content li:first-child a").addClass("hover");
    //主列表点击时箭头朝下
        $("#layerLeft").on("click",".panel-default>.panel-heading a",function(){
            if(!$(this).parent().parent().siblings(".panel-collapse").hasClass("in")){
                $("#layerLeft .panel>.panel-heading a").removeClass("active");
                $(this).addClass("active");
            }
            else{
                $(this).removeClass("active");
            }
        })
    //列表对应页面动态显示
    $("#classifyContent").load("tpl/adminList.html");
    function clickToggle(){
        $("#layerLeft").on("click",".adminList li>a",function(e){
            e.preventDefault();
            var ids=$(this).attr("href");
            //树形结构控件的显示或隐藏
            if(ids=="tpl/employeeList.html" || ids=="tpl/visitorList.html" || ids=="tpl/visitRecordList.html" || ids=="tpl/blackList.html" || ids=="tpl/sharingBlack.html" || ids=="tpl/deviceList.html"){
                $("#expandToggle").attr("data-show","1").html("隐藏").show();
            }
            else {
                $("#expandToggle").hide();
            }
            $("#classifyContent").load(ids);
            $(".adminList li a").removeClass("hover");
            $(this).addClass("hover");
        })
    }
    clickToggle();
    //登录页面的轮播
    var i=2;
    setInterval(function(){
        if(i>3){
            i=1;
        }
        var str="#bg0"+i;
        $(str).css({
            "visibility":"visible",
            "opacity":"1"
        }).siblings().css({
            "visibility":"hidden",
            "opacity":"0"
        });
        i++;
    },6000)
    //登录页面的轮播结束

    //登录页面的验证及动态提示
    $("#psd").click(function(){
        $("#Empty_error").css({
            "top":0,
            "display":"none"
        })
    })
    $("#username").click(function(){
        $("#Empty_error").css({
            "top":0,
            "display":"none"
        })
    })
    $("#loginBtn").click(function(e){
        e.preventDefault();
        if($("#username").val()=="admin" && $("#psd").val()=="123"){
            $("#alertInfo").html("登录成功").removeClass("animated shake").show();
            setTimeout(function(){
                window.location.href="index.html";
            },2000);

        }
        else if($("#username").val()==""){
            $("#Empty_error").css({
                "top":0,
                "display":"block"
            });
        }
        else if($("#psd").val()==""){
            $("#Empty_error").css({
                "top":"65px",
                "display":"block"
            });
        }
        else{
            $("#alertInfo").html("用户名或密码不正确").addClass("animated shake").show();
            setTimeout(function(){
                $("#alertInfo").hide();
            },2000);
            $("#psd").val("");
        }
    })
//    #roleLimitModal的checkbox
    $("#roleLimitModal .panel-heading input").change(function(){
        var status=$(this).prop("checked");
        $(this).siblings(".panel-collapse").find("input").prop("checked",status);
    })


})

