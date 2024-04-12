{
    let blockresponsive = document.querySelector('.block-responsive');
    let body1pq = document.querySelector('.body1-pq');
    var headerresponsive = document.querySelector(".header-responsive");
    var header = document.querySelector("header");
    var headerbox = document.querySelector(".header-box");
    //var linkboxindexpq = document.querySelectorAll(".link-box-index-pq");
    var menuresponsive = document.querySelector(".menu-responsive");
    var logoboxpq = document.querySelector(".logo-box-pq");
    var headerresponsivelogo = document.querySelector(".header-responsive-logo");
    var checkboxresponsive = document.querySelector ('.menu-responsive-input');

    console.log(document.documentElement.scrollTop);
    /* window.onscroll = function () {
         
 
         if (document.documentElement.scrollTop > 88) {
             body1pq.classList.add("responsive-pq")
             
             headerresponsive.classList.add("responsive-pq")
             header.classList.add("responsive-pq")
             headerbox.classList.add("responsive-pq")
             //linkboxindexpq.classList.add("responsive-pq")
             menuresponsive.classList.add("responsive-pq")
         }
         if(document.documentElement.scrollTop < 87){
             body1pq.classList.remove("responsive-pq")
             headerresponsive.classList.remove("responsive-pq")
             header.classList.remove("responsive-pq")
             headerbox.classList.remove("responsive-pq")
             //linkboxindexpq.classList.remove("responsive-pq")
             menuresponsive.classList.remove("responsive-pq")
             
         }
         
     }*/
    document.addEventListener('DOMContentLoaded', function () {
        const scrollCallback = () => {
            if (window.scrollY > 87) {
                body1pq.classList.add("responsive-pq")

                headerresponsive.classList.add("responsive-pq")
                header.classList.add("responsive-pq")
                headerbox.classList.add("responsive-pq")
                menuresponsive.classList.add("responsive-pq")
                logoboxpq.classList.add("responsive-pq")
                headerresponsivelogo.classList.add("responsive-pq")
                checkboxresponsive.classList.add("responsive-pq")
            }
            if(window.scrollY < 88){
                body1pq.classList.remove("responsive-pq")
                headerresponsive.classList.remove("responsive-pq")
                header.classList.remove("responsive-pq")
                headerbox.classList.remove("responsive-pq")
                //linkboxindexpq.classList.remove("responsive-pq")
                menuresponsive.classList.remove("responsive-pq")
                logoboxpq.classList.remove("responsive-pq")
                headerresponsivelogo.classList.remove("responsive-pq")
                checkboxresponsive.classList.remove("responsive-pq")
                checkboxresponsive.checked = false;
            }
        };

        window.addEventListener('scroll', scrollCallback);
    });
}
