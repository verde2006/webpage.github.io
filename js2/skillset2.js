(function ( $ ) {

	$.fn.skillset = function( options ) {
		
		
		var duration = 40;

		_this = this;

		$.fn.extend({

			isOnScreen: function(){

				var win = $(window);
				var viewport = {
					top : win.scrollTop(),
					left : win.scrollLeft()
				};
				viewport.right = viewport.left + win.width();
				viewport.bottom = viewport.top + win.height();
				var bounds = this.offset();
				bounds.right = bounds.left + this.outerWidth();
				bounds.bottom = bounds.top + this.outerHeight();

				return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
			},

			setRun: function(option){
				hasRun = option;
			},
			checkRun: function(){
				return hasRun;
			}

		});


		$(this).setRun(false);
		if($(this).isOnScreen() && !$(this).checkRun() ){
			create_trigger($(this));
		}

		function bar_loop(start,value,length){

			var j=0;
			for(var i = 0; i < length; i++){

				setTimeout(function(){

					if(j < value){
						var html = '<div class="full"></div>';
						$(html).appendTo(start).css('width',100/length+'%');
					}else{
						var html = '<div class="empty"></div>';
						$(html).appendTo(start).css('width',100/length+'%');
					}
					j++;

				},duration*i/(length/10));

			}

		}

		function create_trigger(element){

			var key, count = 0;
			for(key in options) {
				if(object.hasOwnProperty(key)) {
					count++;
				}
			}

			$(element).setRun(true);
			start = $(element).append('<ul class="skillset-list"></ul>');

			for(var i = 0; i < count; i++){

				start = $(element).find('ul');
				var html = '<li class="skill-'+(i+1)+'""><p>'+options[i]['headline']+' <span class="icon-info-circled" data-info="'+options[i]['description']+'"></span></p><div class="bar"></div></li>';
				html = $(html).appendTo(start).find('.bar');

				var value = options[i]['value'];
				var length = options[i]['length'];

				bar_loop(html,value,length);

			}

		}

		$(document).scroll(function(){

			if($(_this).isOnScreen() && !$(_this).checkRun()){
				create_trigger($(_this));
			}

		});

		$('.icon-info-circled').hover(function(){
			$(this).css('color','#222222');
			$(this).parent().parent().append('<div id="list-info" ><p>'+$(this).data('info')+'</p></div>');
			setTimeout( function(){
				$('#list-info').css({'opacity':0.9, 'bottom':50});
			},100);
		}, function(){
			$(this).css('color','auto');
			$('#list-info').remove();
		});

	};

}( jQuery ));