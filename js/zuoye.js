$(function(){
	var sboxs=$('.box .sbox li img')
	var boxs=$('.box .sbox li')

	// console.log(boxs)
	var bbox=$('.box .bbox')
	// console.log(bbox)
	var bboxs=$('.box .bbox img')
	var bclose=$('.box .bbox .bclose')


	boxs.on('click',function(){
		index_li=$(this).index()
		// alert(index_li)
		bbox.show()
		bboxs.attr('src',$(this).find('img').attr('src'))
	})
	bclose.on('click',function(){
		bbox.hide()
	})

	var bleft=$('.box .bbox .bleft')
	var bright=$('.box .bbox .bright')
	// console.log(bleft)
	// console.log(bright)

	bleft.on('click',function(){
		// alert(index_li)
		if(index_li==-1){
			index_li=sboxs.length;
		}
		bboxs.attr('src',$(sboxs).eq(index_li--).attr('src'))
	})


	bright.on('click',function(){
		// alert(index_li)
		if(index_li==sboxs.length+1){
			index_li=0;
		}
		bboxs.attr('src',$(sboxs).eq(index_li++).attr('src'))
	})

	var bboxW=$(bbox).outerWidth(true)/2
	var bboxH=$(bbox).outerHeight(true)/2
	// var bboxsW=$(bboxs).outerWidth(true)
	

	// var Bbox=$('<div class=Bbox></div>').appendTo('.box .bbox')
	// var aBboxs=$('<div class=aBboxs></div>').appendTo('.box .bbox')
	// console.log(Bbox)
	// console.log(aBboxs)

	$(window).on('mousedown',false)
	
	

	bbox.on('click',function(e){
		var ele=e||window.event;
		// console.log(ele.pageX)
		var bboxsW=$(bboxs).width()/2
		var bboxsH=$(bboxs).height()/2
		console.log(bboxsW*2)

		if(ele.pageX<bboxW-bboxsW||ele.pageX>bboxW+bboxsW||ele.pageY<bboxH-bboxsH||ele.pageY>bboxH+bboxsH){
			$(this).hide()
		}else if(ele.pageX>bboxW-bboxsW&&ele.pageX<bboxW){
			bleft.trigger('click')
		}else if(ele.pageX>bboxW&&ele.pageX<bboxW+bboxsW){
			bright.trigger('click')
		}
	})




})
	