(function ( $ ) {
	



	$.fn.skillsetnew = function( options ) {
		
		
		var duration = 40;

		_this = this;

		$.fn.extend({

			isOnScreennew: function(){

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
		if($(this).isOnScreennew() && !$(this).checkRun() ){
			create_trigger_new($(this));
		}

		function bar_loopnew(startnew,value,length){

			var j=0;
			for(var i = 0; i < length; i++){

				setTimeout(function(){

					if(j < value){
						var htmlnew= '<div class="full"></div>';
						$htmlnew.appendTo(startnew).css('width',100/length+'%');
					}else{
						var htmlnew= '<div class="empty"></div>';
						$htmlnew.appendTo(startnew).css('width',100/length+'%');
					}
					j++;

				},duration*i/(length/10));

			}

		}

		function create_trigger_new(element){

			var key, count = 0;
			for(key in options) {
				if(options.hasOwnProperty(key)) {
					count++;
				}
			}

			$(element).setRun(true);
			startnew = $(element).append('<ul class="skillset-list"></ul>');

			for(var i = 0; i < count; i++){

				startnew = $(element).find('ul');
				varhtmlnew= '<li class="skill-'+(i+1)+'""><p>'+options[i]['headline']+' <span class="icon-info-circled" data-info="'+options[i]['description']+'"></span></p><div class="bar"></div></li>';
				htmlnew= $htmlnew.appendTo(startnew).find('.bar');

				var value = options[i]['value'];
				var length = options[i]['length'];

				bar_loopnew(htmlnew,value,length);

			}

		}

		$(document).scroll(function(){

			if($(_this).isOnScreennew() && !$(_this).checkRun()){
				create_trigger_new($(_this));
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