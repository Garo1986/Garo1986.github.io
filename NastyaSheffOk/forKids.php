<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="canonical" href="https://shevnasti.ru/">
    <meta name="description" content="Онлайн-школа «Супер Мама» — это ресурс, который поможет эффективно заниматься с детьми дома и получать высокие результаты. А мамам даст возможность перезагрузиться и больше времени уделять себе">
    <meta name="keywords" content="Онлайн-школа «Супер Мама» Заниматься с детьми дома и получать высокие результаты. У мамам будет возможность перезагрузиться и больше времени уделять себе.">
    <meta property="og:title" content="«Супер Мама» Онлайн-школа Анастасии Шевченко">
    <meta property="og:description" content="Онлайн-школа «Супер Мама» — это ресурс, который поможет эффективно заниматься с детьми дома и получать высокие результаты. А мамам даст возможность перезагрузиться и больше времени уделять себе">
    <meta property="og:type" content="article">
    <meta property="og:image" content="https://shevnasti.ru/">
    <meta property="og:site_name" content="«Супер Мама» Онлайн-школа">
    <link rel="shortcut icon" href="image/super_mama.png" type="image/png">
    <title>Для Детей</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="sass/normalize.css">
    <link rel="stylesheet" href="sass/style.css">
</head>
<body>
    <?php 
        include('nav.php')
    ?>
    <header class="header">
        <div class="container">
            <div class="header__wrap">
                <div class="wrapper">
                    <h1 class="header__title">Для Детей</h1>
                    <p class="header__subtitle">Онлайн-школа Анастасии&nbsp;Шевченко</p>  
                </div>                      
            </div>
            </div>        
    </header>
    <main>
        <div class="container">
            <section class="offer">            
                <p class="offer__desc">
                        Онлайн-школа «Супер Мама» — это ресурс, который поможет эффективно заниматься с детьми дома и получать высокие результаты. А мамам даст возможность перезагрузиться и больше времени уделять себе. 
                </p>            
            </section>
            <section class="variant">
                <h2 class="variant__title">Выберите вариант:</h2>
                <div class="variant__wrap">
                    <div class="variant__many">
                        <a href="#">
                            <img class="img__mom" src="image/mom__bg.png" alt="для мам">
                        <h3>для мам</h3>
                        </a>
                        
                    </div>
                    <div class="variant__many">
                        <a href="">
                            <img class="img__kids" src="image/kids__bg.png" alt="для детей">
                        <h3>для детей</h3>
                        </a>                        
                    </div>
                </div>
            </section>
        </div>        
    </main>
    <?php 
        include('footer.php')
    ?>
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"
  integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
  crossorigin="anonymous"></script>
    <script>
    $(document).ready(function () {
        let menuBtn = $('.nav-row__btn');
        let menu = $('.nav-row__item');

        menuBtn.on('click', function(event) {
            event.preventDefault();
            menu.toggleClass('nav-row__active');
        });
    });
    </script>
</body>
</html>