{
    let blockresponsive = document.querySelector('.block-responsive');
    let body1pq = document.querySelector('.body1-pq');
    let headerresponsive = document.querySelector(".header-responsive");
    let header = document.querySelector("header");
    let headerbox = document.querySelector(".header-box");
    //var linkboxindexpq = document.querySelectorAll(".link-box-index-pq");
    let menuresponsive = document.querySelector(".menu-responsive");
    let logoboxpq = document.querySelector(".logo-box-pq");
    let headerresponsivelogo = document.querySelector(".header-responsive-logo");
    let checkboxresponsive = document.querySelector('.menu-responsive-input');
    
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
    if(body1pq != null){
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
                if (window.scrollY < 88) {
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

}
