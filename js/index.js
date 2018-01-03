//table中 input checkbox的点击事件（总和分的选择）
function sumCheck(parent){
    $(function(){
        $(parent).on("click","input.sums",function(){
            var checkList="";
            var status=$(this).prop("checked");
            if(parent=="#roleLimitModal"){
               checkList=$(this).parents(".panel-heading").siblings(".panel-collapse").find(".indiv");
            }
                $.each(checkList,function(i,o){
                    $(o).prop("checked",status);
                })
            })

        $(parent).on("click","input.indiv",function(){
            var checkList="",sumsInput="";
            if(parent=="#roleLimitModal"){
                checkList=$(this).parents(".list-unstyled").find(".indiv");
                sumsInput=$(this).parents(".panel-collapse").siblings(".panel-heading").find(".sums");
            }
            var status=true;
            $.each(checkList,function(i,o){
                status*=$(o).prop("checked");
            })

            if(status){
                sumsInput.prop("checked",true);
            }
            else{
                sumsInput.prop("checked",false);
            }
        })
        })

}
//收起 展示的功能 树形结构
function toggleShow(){
    $("#expandToggle").click(function(){
        if($(this).attr("data-show")==1){
            $(this).attr("data-show","0").html("显示");
            $(".contentMains>.row>.col:first-child").hide();
            $(".contentMains>.row>.col:last-child").removeClass("col-sm-10").addClass("col-sm-12");
        }
        else
        {
            $(this).attr("data-show","1").html("隐藏");
            $(".contentMains>.row>.col:last-child").removeClass("col-sm-12").addClass("col-sm-10");
            $(".contentMains>.row>.col:first-child").show();
        }

    })
}
//删除前未选中任何的选项 的 提醒 按钮
function deleteBefore(){
    $("#alerts span").html("请选择要删除的选项");
    $("#alerts").css("display","block");
    setTimeout(function(){
        $("#alerts").css("display","none");
    },1500);
}
function getTrees(){
    //树形结构
    var setting = {
        async: {
            enable: true,
            url:"data/getNodes.php",
            autoParam:["id"],
//				dataFilter: filter,
            type: "get"
        },
        callback: {
            onClick: zTreeClick
//				beforeAsync: beforeAsync,
//				onAsyncSuccess: onAsyncSuccess,
//				onAsyncError: onAsyncError
        }
    };
    function zTreeClick(event,treeId, treeNode,lickFlag){
        console.log(treeNode);
    }
    $.fn.zTree.init($("#treeEmployer"), setting);
}


