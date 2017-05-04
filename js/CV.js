// JavaScript Document
$('#CVbtn').click(function(){
	$('#CV').css('z-index','9999998').css('display','block');
	$('#blackboard').css('z-index','9999997').css('display','block');
	$('html').css('overflow','hidden');
	$('#CVclose').css('display','block');
	})
$('#CVclose').click(function(){
	$('#CV').css('z-index','-9999998').css('display','none');
	$('#blackboard').css('z-index','9999997').css('display','none');
	$('html').css('overflow','auto');
	$('#CVclose').css('display','none');
	})