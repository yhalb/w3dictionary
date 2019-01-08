(function () {
    function smoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    smoothScroll();

    window.onscroll = function() {handleTopButton()};
    function handleTopButton() {
        $("#button-top").toggle(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100);
    }
    handleTopButton();
})();