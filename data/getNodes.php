<?php ?>
[<?php
$pId = "0";
$pName = "";
$pLevel = "";
$pCheck = "";
if(array_key_exists( 'id',$_REQUEST)) {
	$pId=$_REQUEST['id'];
}
if(array_key_exists( 'lv',$_REQUEST)) {
	$pLevel=$_REQUEST['lv'];
}
if(array_key_exists('n',$_REQUEST)) {
	$pName=$_REQUEST['n'];
}
if(array_key_exists('chk',$_REQUEST)) {
	$pCheck=$_REQUEST['chk'];
}
if ($pId==null || $pId=="") $pId = "0";
if ($pLevel==null || $pLevel=="") $pLevel = "0";
if ($pName==null) $pName = "";
else $pName = $pName.".";

$pId = htmlspecialchars($pId);

$pName = htmlspecialchars($pName);

//for ($i=1; $i<9999; $i++) {
//	for ($j=1; $j<999; $j++) {
//
//	}
//}

if($pId==0){
	echo "{id:1,name:'钱林恒兴',isParent:true}";
	echo ",";
	echo "{id:2,name:'海信科技公司',isParent:true}";
}
if($pId==1){
	echo "{id:3,name:'华北区',isParent:false}";
	echo ",";
	echo "{id:4,name:'华南区',isParent:false}";
	echo ",";
    echo "{id:5,name:'华西区',isParent:false}";
}
if($pId==2){
	echo "{id:6,name:'南区',isParent:false}";
	echo ",";
	echo "{id:7,name:'北区',isParent:false}";
	echo ",";
	echo "{id:8,name:'东区',isParent:false}";
}
?>]
