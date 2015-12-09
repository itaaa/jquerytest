'use strict';
console.log('\'Allo \'Allo!');

//$('a.btn').click(function(){
// location.href = 'http://www.yahoo.co.jp';
//});

$('button#testbutton').click(function(){
	location.href = 'http://www.google.co.jp';
});

$('h1').click(function(){
	location.href = 'http://www.google.co.jp';
});

$('span#dammybutton').click(function(){
	location.href = 'http://www.google.co.jp';
});

$('span#dammybutton').attr('role', 'button');

//$('input#textbox').blur(function(){
//	alert('はずれた');
//});

$('input#textbox').blur(function() {
	var txt = $('input#textbox').val();
	if(txt) {
		$('#confirm').removeAttr('disabled');　　　//ボタンが有効になる
		$('#nyuryoku').text('');　　　//テキストが空の時
	} else {
		$('#confirm').attr('disabled', 'disabled');　　　//ボタンが無効になる　※disabledは属性値がないのでこのような書き方をする
		$('#nyuryoku').text('入力されてません').css('color', 'red');　　　//テキストを挿入する
	}
});

//var number = 0;
//if(number > 1){
//	alert('2以上です');
//} else {
//	alert('2未満です');
//}


//var number = 5;
//if(number > 1){
//	alert('2以上です');
//	if(number > 3){
//		alert('4以上です');
//} else {
//	alert('2未満です');
//}


$('#run').click(function(){
	var options = {
		width: '70%',
		opacity: 0.4,
		marginLeft: '0.6in',
		fontSize: '3em', 
		borderWidth: '10px'
	};

	var func1 = function(){
		$('.anim').text('終わり');
	};

	$('.anim').animate(options, 1500, 'swing', func1);   //.animateは引数を4つ指定できる。後ろ3つは省略可能。
});
//↑↑↑runのボタンをクリックするとoptionsが割り当てられanimが変化する。処理が終わればanim内のテキストが変化。


$('#show').click(function(){
	$('#dialog').css('display', 'none')
	.css('width', '1px')
	.css('height', '1px')
	.text('');

	$('button.dialog').css('display', 'block');

	var options = {
		width: '70%',
	};
	$('#dialog').animate(options, 500);

	var options02 = {
		height: '70%',
	};
	$('#dialog').animate(options02, 500);

	var tex1 = function(){
		$('#dialog').text('終わり');
	};
	$('#dialog').animate(options, 100, 'swing', tex1);
});
//↑↑↑クリック後青枠でる処理。まずは出現→横に伸びる→縦に伸びる→文字がでる
//※クリックするたび繰り返し出現する処理。73行目から76行目→もとに戻す処理（removeAttrでもよい）。初めにおく。

/*
$("#show").click(function(){
	$("#dialog").css('display', 'none')
	.css('width', '1px')
	.css('height', '1px')
	.text('');
↑ループするために元に戻す処理。

	$("#dialog").css('display', 'block');
↑style属性でdisplay:blockを追加。※style属性のがcssより優先されるため、htmlで指定してるdisplay:noneは無効になる。

	var options = {
		width: "300px",
	}
↑伸びきったときは幅300px

	var step1 = function(){
		var options = {
			height: "80px"
		};
	$("#dialog").animate(options, 100, step2);
	};
↑伸びきったときは高さ80px。animateで幅300pxに伸ばす。この時点では「step2」はから。

	var step2 = function(){
		$("#dialog").text('hallo world');
	};
↑テキストでhallo worldを挿入。

	$("#dialog").animate(options, 100, step1);
↑animateでstep1を実行。
});
↑↑↑村岡さんの模範解答
*/


$('#anim-btn').click(function(){
	$('#anim-btn').css('width', '100px');
	var options = {
		width: '450px'
	};
	$('#anim-btn').animate(options, 1000, 'easeInElastic');

});

$('#stbtn').click(function(){
	$('#stbtn').css('width', '100px')
	.css('background-color', '#000000');
	var options = {
		width: '450px',
		marginTop: '100px'
	};
	$('#stbtn').animate(options, 1000, 'easeOutElastic');
});


$('#stbtn2').click(function(){
	$('#stlog').css('display', 'none')
	.css('width', '1px')
	.css('height', '1px')
	.text('');

	$('button.stlog').css('display', 'block');

	var opst = {
		height: '100px',
	};
	$('#stlog').animate(opst, 500);

	var opst02 = {
		width: '500px',
	};
	$('#stlog').animate(opst02, 500);

	var tex1 = function(){
		$('#stlog').text('自習3');
	};
	$('#stlog').animate(opst, 100, 'swing', tex1);
});

$('#stlog').click(function(){

	$('button.stlog').css('width', '100px');

		var opst3 = {
			width: '500px',
			marginLeft: '1200px'
		};

	var non1 = function(){
		$('#stlog').css('display', 'none');
	};

	$('#stlog').animate(opst3, 2000, 'easeInBounce', non1);

});



$('#change ul li:nth-child(2)').css('display', 'none');
$('#change ul li:nth-child(3)').css('display', 'none');

$('option.b').click(function(){
	$('#change ul li:nth-child(2)').css('display', 'block');
	$('#change ul li:nth-child(1)').css('display', 'none');
	$('#change ul li:nth-child(3)').css('display', 'none');
});

$('option.c').click(function(){
	$('#change ul li:nth-child(3)').css('display', 'block');
	$('#change ul li:nth-child(2)').css('display', 'none');
	$('#change ul li:nth-child(1)').css('display', 'none');
});

$('option.a').click(function(){
	$('#change ul li:nth-child(1)').css('display', 'block');
	$('#change ul li:nth-child(3)').css('display', 'none');
	$('#change ul li:nth-child(2)').css('display', 'none');
});

