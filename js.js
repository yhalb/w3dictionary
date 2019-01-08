(function () {
    window.onscroll = function() {handleTopButton()};
    function handleTopButton() {
        $("#button-top").toggle(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100);
    }
    handleTopButton();
})();