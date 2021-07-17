//Jquery

$(document).ready(function(){
    // Dialog Modal
    $('.dialog-close').click(function(){
        $('.dialog-body').fadeOut('200', function(){
            $('.dialog').fadeOut('200'); 
        });
    });
    /*FadeOut Fecha */
    /*FadeIn Abre */
    $('.dialog-open').click(function(e){
        e.preventDefault();/* Evitar # no link */
        var target = $(this).attr('href');
        $('.dialog').fadeIn('200', function(){
            $(target).fadeIn('200');
        });
    });

    //Menu
    //quando clicar
    //Chamar Class Active
    $('#nav-toggle').click(function(e){
        //Prevenindo a # no endereço de link
        e.preventDefault();
        /*Função TOGGLE
            verifica se existe;
            se existe = apaga;
            se não existe = adiciona;
        */ 
        $(this).toggleClass('active');
        $('.header-collapse').toggleClass('active');
    });
    /*===================================*/
    /*SCROOL
    =====================================*/
    //Variaveis
    var nav = $('.header-nav'),
        navHeight = nav.outerHeight(),
        sections = $('.section');

    //Scrool
    $(window).on('scroll',function(){
        var sTop = $(this).scrollTop();
        //Fixando Header
        if(sTop > navHeight){
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }
        //marcando menu scroll
        if(sTop == 0){
            nav.find('a').removeClass('active');
             nav.find('a[href="#home"]').addClass('active');
        }else{
           sections.each(function(){
                var top = $(this).offset().top - navHeight;

                if(sTop >= top){
                    nav.find('a').removeClass('active');
                    nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
                }
            }); 
        }
        
    });
    /*===================================*/
    //Navegação
    nav.find('a').on('click',function(e){
        e.preventDefault();
        $('.header-collapse').removeClass('active');
        $('#nav-toggle').removeClass('active');

        var target = $(this).attr('href');
        if(target == "#home"){
            $('html,body').animate({scrollTop: 0}, 700);
        }else{
            $('html,body').stop().animate({
                scrollTop: $(target).offset().top
            }, 700);
        }
    });

    //Back - Top - Rolagem
    $('.back-top').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 700);
    });

    
    //Carousel Principal
    $('#carousel_principal').owlCarousel({
        items:1,//Numeros de img que será exibido por vez.
        lazyLoad:true,
        loop:true,
        margin:0,
        //Ativar setas
        nav:true,
        //velocidade das transições
        navSpeed: 1000,
        //mudando conteudo das setas
        //Left , Right
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        //Ativar Barras
        dots: true,
        dotsSpeed: 1000,
        //Transição Automática
        autoplay: true,
        autoplaySpeed: 1000,
        responsiveRefreshRate: 10
    });
    //Carousel Testemunhas
    $('#carousel_testemunhas').owlCarousel({
        items: 1,//Numeros de img que será exibido por vez.
        loop:true,
        margin:40,
        //Ativar setas
        nav:false,
        //velocidade das transições
        navSpeed: 1000,
        //mudando conteudo das setas
        //Left , Right
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        //Ativar Barras
        dots: true,
        dotsSpeed: 1000,
        //Transição Automática
        autoplay: true,
        autoplaySpeed: 1000,
        responsiveRefreshRate: 10,
        responsive:{
            960:{
                items: 2
            },
            1280:{
                items: 2,
                nav:true
            }
        }
    });
    //Carrousel Portifolio
    $('.carousel_portfolio').owlCarousel({
        items:1,//Numeros de img que será exibido por vez.
        lazyLoad:true,
        loop:true,
        margin: 0,
        //Ativar setas
        nav:true,
        //velocidade das transições
        navSpeed: 1000,
        //mudando conteudo das setas
        //Left , Right
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        //Ativar Barras
        dots: false,//Desativando bolinhas do carrousel
        dotsSpeed: 1000,
        //Transição Automática
        autoplay: true,
        autoplaySpeed: 1000,
        responsiveRefreshRate: 10
    });

    // Portifolio
    $('.portifolio-nav li a').click(function(e){
        e.preventDefault();/*Evitar Alto recarregamento da página*/
        $('.portifolio-nav li a').removeClass('active');/*Removendo a classe Active após click*/
        $(this).addClass('active');

        // Ativando o Click
        $('.portifolio').removeClass('visible');
        if(this.id == "all"){
            $('.portifolio').addClass('visible');
        }else{
            $('.portifolio.' + this.id).addClass('visible');
        }
    });
});