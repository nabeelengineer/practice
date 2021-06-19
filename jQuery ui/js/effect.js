$(document).ready(function(){
	$('.b-mode').click(

function(){
$(this).css({'background':'blue','color':'white'});
var txtbtn = $('.btn').html();
var count = 0;
	$('.email-list').selectable({
		selected:function(event,ui){
			$('.btn').html('Delete');
		},

		unselected:function(event,ui){
			$('.btn').html(txtbtn);
		},

		stop:function(event,ui){
			$('.btn').click(function(){

				count += $('.ui-selected').length;
				var z = $('.ui-selected');
				$('.btn').html(count+" item deleted !");
				$('.ui-selected').remove();
				$('.restore-btn').fadeIn(1000);
				$('.restore-btn').click(function(){
				$('.email-list').append(z);
				$(this).fadeOut(function(){
				$('.notice').html(count+" item restored");
				$('.notice').delay(2000).fadeOut(500,function(){
					location.reload();
				});
				});

				 
				});

			});
		}
});

}


		);
}

	);




$(document).ready(function(){
	$('.c-mode').click(

function(){
$(this).css({'background':'blue','color':'white'});
$('.btn').fadeOut(function(){
	$('.del').fadeIn();
});
var txtbtn = $('.btn').html();
var count = 0;

	$('.email-list li').draggable({
		helper:function(event,ui){
			return $("	<i class='fa fa-trash' style='font-size:50px;border:1px solid #ccc;border-radius:50%;padding:25px;width:100px;height:100px;box-sizing:border-box;'></i>")
		},
		revert:'invalid',
	});

	$('.del').droppable({

		accept:'li',
		drop:function(event,ui){
			count+=ui.draggable.length;
			$(ui.draggable).remove();
			$('.undo').fadeIn();
			$('.undo').click(function(){
				$('.email-list').append(ui.draggable);
				$(this).fadeOut(function(){
					$('.notice').html(count+' item restored');
					$('.notice').delay(1000).fadeOut();
				});
			});
		}
	});

}


		);
}

	);

