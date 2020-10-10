document.getElementById("open-search").onclick=()=>{document.getElementById("search-req").classList.toggle("active");}



$(document).ready(()=>{
	$(".viewport").css("width", $(".slider-item").width()*$(".slider-item").length* $(".slider-item").length);
	const width = $(".viewport").width() / $(".slider-item").length;
	$(".pointer").click((e)=>e.preventDefault());
	function slider()
	{
		const buttons = $(".arrow");

		let counter = 0;


		buttons[1].onclick = ()=>{
			counter++;
			if(counter == $(".slider-item").length)
			{
				$(".viewport").css("transform", "translateX(0px)");
				counter = 0;
			}
			else
			{
				$(".viewport").css("transform", "translateX("+(-width*counter)+"px)");
			}


			$(".pointer").removeClass("active");
			$(".pointer").eq(counter).addClass("active");
		}
		buttons[0].onclick = ()=>{

			if(counter == 0)
			{
				counter = $(".slider-item").length;
				$(".viewport").css("transform", "translateX("+(-width*(counter-1))+"px)");
			}
			else
			{
				$(".viewport").css("transform", "translateX("+(-width*(counter-1))+"px)");
			}

			counter--;

			$(".pointer").removeClass("active");
			$(".pointer").eq(counter).addClass("active");
		}
	}

		$(".pointer").click(function(){
			$(".pointer").removeClass("active");
			$(this).addClass("active");

			let index = $(".pointer.active").index();

			
			$(".viewport").css("transform", "translateX("+(-width*index)+"px)");

		});

	const selectCategory = () => {
		$(".category").click(function(){
			$(".category").removeClass("active");
			$(this).addClass("active");
		})
	}

	const drawTime = () =>{
		let time = new Date();
		let hours = 0;
		let minutes = 0;
		(time.getHours().toString().length < 2) ? hours = `0${time.getHours().toString()}` : hours = time.getHours().toString();
		(time.getMinutes().toString().length < 2) ? minutes = `0${time.getMinutes().toString()}` : minutes = time.getMinutes().toString();
		let strTime = `${hours}:${minutes}`;
		$(".time").append(strTime);
	}


    $("#video").click(function(){
    	if($('video')[0].paused) {
    		$('video')[0].play();
    		$(".video-content").addClass("disabled");
    	} else{
    		$('video')[0].pause();
    		$(".video-content").removeClass("disabled");
    	}    	
    })
    
    $(".project-item .foreground").css("height", $(".image").height()-5);
    $(".burger").click(()=>$(".burger-menu").addClass("active"));
    $(".close").click(()=>$(".burger-menu").removeClass("active"));

	drawTime();
	selectCategory();
	slider();
})
