//Index

jQuery(function(){
    jQuery(".modalmob__login").click(function(){
        jQuery(".modalmobtwo").css("display","block");
        jQuery(".modalmobtwo__title_two").css("color","#fff");
        jQuery(".modalmobtwo__line_two").css("display","block");
        jQuery(".modalmobtwo__title_one").css("color","#0E8F94");
        jQuery(".modalmobtwo__line_one").css("display","none");
        jQuery(".modalmobtwo__log").css("justify-content","center");
        jQuery(".modalmobtwo__reg").css("justify-content","flex-start");
        jQuery(".modalmobtwo__contentreg").css("display","none");
        jQuery(".modalmobtwo__contentlogin").css("display","block");
        jQuery(".body__hidden").css("overflow","hidden");
    })
});

jQuery(function(){
    jQuery(".modalmob__reg").click(function(){
        jQuery(".modalmobtwo").css("display","block");
        jQuery(".modalmobtwo__title_one").css("color","#fff");
        jQuery(".modalmobtwo__line_one").css("display","block");
        jQuery(".modalmobtwo__title_two").css("color","#0E8F94");
        jQuery(".modalmobtwo__line_two").css("display","none");
        jQuery(".modalmobtwo__reg").css("justify-content","center");
        jQuery(".modalmobtwo__log").css("justify-content","flex-start");
        jQuery(".modalmobtwo__contentreg").css("display","block");
        jQuery(".modalmobtwo__contentlogin").css("display","none");
        jQuery(".body__hidden").css("overflow","hidden");
    })
});

jQuery(function(){
    jQuery(".modalmobtwo__title_one").click(function(){
        jQuery(".modalmobtwo__title_one").css("color","#fff");
        jQuery(".modalmobtwo__line_one").css("display","block");
        jQuery(".modalmobtwo__title_two").css("color","#0E8F94");
        jQuery(".modalmobtwo__line_two").css("display","none");
        jQuery(".modalmobtwo__reg").css("justify-content","center");
        jQuery(".modalmobtwo__log").css("justify-content","flex-start");
        jQuery(".modalmobtwo__contentreg").css("display","block");
        jQuery(".modalmobtwo__contentlogin").css("display","none");
    })
});

jQuery(function(){
    jQuery(".modalmobtwo__title_two").click(function(){
        jQuery(".modalmobtwo__title_two").css("color","#fff");
        jQuery(".modalmobtwo__line_two").css("display","block");
        jQuery(".modalmobtwo__title_one").css("color","#0E8F94");
        jQuery(".modalmobtwo__line_one").css("display","none");
        jQuery(".modalmobtwo__log").css("justify-content","center");
        jQuery(".modalmobtwo__reg").css("justify-content","flex-start");
        jQuery(".modalmobtwo__contentreg").css("display","none");
        jQuery(".modalmobtwo__contentlogin").css("display","block");
    })
});

jQuery(function(){
    jQuery(".modalmobtwo__img").click(function(){
        jQuery(".modalmobtwo").css("display","none");
        jQuery(".body__hidden").css("overflow","auto");
    })
});

var i = 1;
jQuery(function(){
    jQuery(".menu__serch_320").click(function(){
        i = i +1;
            if (i % 2  == 0) {
            jQuery(".filtermob").css("display","block");
                } else {
            jQuery(".filtermob").css("display","none");}
    })
});


jQuery(function(){
    jQuery(".menu__filter").click(function(){
        jQuery(".menu__filter").addClass("bg__theme_hover");
    })
});

jQuery(function(){
    jQuery(".menu__burger").click(function(){
        jQuery(this).css("display","none");
        jQuery(".menu__close").css("display","block");
        jQuery(".modalmob").css("display","block");
    })
});

jQuery(function(){
    jQuery(".menu__close").click(function(){
        jQuery(this).css("display","none");
        jQuery(".menu__burger").css("display","block");
        jQuery(".modalmob").css("display","none");
    })
});

jQuery(function(){
    jQuery(".menu__filter").click(function(){
        jQuery(".filter").css("display","block");
    })
});

jQuery(function(){
    jQuery(".menu__btn").click(function(){
        jQuery(".filter").css("display","none");
    })
});

jQuery(function(){
    jQuery(".menu__login").click(function(){
        jQuery(".modal").css("display","block");
        jQuery('.modal__login').css('color', '#fff');
        jQuery(".modal__reg").css('color','#0E8F94');
        jQuery(".modal__line_two").css('display','block');
        jQuery(".modal__line_one").css('display','none');
        jQuery('.modal__loginblock').css('display','block');
        jQuery('.modal__regblock').css('display','none');
        jQuery('.modal').css('height','320px');
    })
});

jQuery(function(){
    jQuery(".menu__registration").click(function(){
        jQuery(".modal").css("display","block");
        jQuery(".modal__reg").css('color', '#fff');
        jQuery('.modal__login').css('color','#0E8F94');
        jQuery('.modal__line_one').css('display','block');
        jQuery('.modal__line_two').css('display','none');
        jQuery('.modal__regblock').css('display','block');
        jQuery('.modal__loginblock').css('display','none');
        jQuery('.modal').css('height','610px');
    })
});

jQuery(function(){
    jQuery(".modal__close").click(function(){
        jQuery(".modal").css("display","none");
    })
});

jQuery(function(){
    jQuery(".modal__close").click(function(){
        jQuery(".modal").css("display","none");
    })
});

jQuery(function(){
    jQuery(".modal__reg").click(function(){
        jQuery(this).css('color', '#fff');
        jQuery('.modal__login').css('color','#0E8F94');
        jQuery('.modal__line_one').css('display','block');
        jQuery('.modal__line_two').css('display','none');
        jQuery('.modal__regblock').css('display','block');
        jQuery('.modal__loginblock').css('display','none');
        jQuery('.modal').css('height','610px');

    })
});

jQuery(function(){
    jQuery('.modal__login').click(function(){
        jQuery(this).css('color', '#fff');
        jQuery(".modal__reg").css('color','#0E8F94');
        jQuery(".modal__line_two").css('display','block');
        jQuery(".modal__line_one").css('display','none');
        jQuery('.modal__loginblock').css('display','block');
        jQuery('.modal__regblock').css('display','none');
        jQuery('.modal').css('height','320px');
    })
});


//Event

jQuery(function() {
    jQuery('.event__one').click(function(){
    	jQuery('.event__js').css('color', '#0E8F94');
    	jQuery('.event__line').css('display', 'none');
    	jQuery(this).css('color', '#fff');
    	jQuery(".event__line_one").css('display', 'block');
    	jQuery(".event__block").css('display','none');
    	jQuery(".event__block_one").css('display','block');
    })
});

jQuery(function() {
    jQuery('.event__two').click(function(){
    	jQuery('.event__js').css('color', '#0E8F94');
    	jQuery('.event__line').css('display', 'none');
    	jQuery(this).css('color', '#fff');
    	jQuery(".event__line_two").css('display', 'block');
    	jQuery(".event__block").css('display','none');
    	jQuery(".event__block_two").css('display','block');
    })
});

jQuery(function(){
	jQuery(".event__three").click(function(){
		jQuery('.event__js').css("color","#0E8F94");
		jQuery('.event__line').css('display', 'none');
    	jQuery(this).css('color', '#fff');
    	jQuery(".event__line_three").css('display', 'block');
    	jQuery(".event__block").css('display','none');
    	jQuery(".event__block_three").css('display','block');
	})
});

//Translation

jQuery(function(){
    jQuery('.translation__buy').click(function(){
        jQuery('.translation__buy').css('display','none');
        jQuery('.translation__bought').css('display','flex');
    })
});

jQuery(function(){
    jQuery('.translation__bought').click(function(){
        jQuery('.translation__bought').css('display','none');
        jQuery('.translation__buy').css('display','flex');
    })
});