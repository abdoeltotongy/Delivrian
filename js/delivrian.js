 $(document).ready(function(){
    'use strict';
     
     $('.tab-overview ul li').on('click' , function (){
         $(this).addClass('active').siblings().removeClass('active');
     });
     
     $('.plan-options ul li').on('click' , function (){
         $(this).addClass('active').siblings().removeClass('active');
     });
     
     $('.timer').countTo();
});     