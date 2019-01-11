(function () {
    $('.entry-text a').each(function() {
        var $link = $(this);
        var href = $link.attr('href')
        if (href[0] == '#') {
            $entry = $(href);

            $link.attr('data-toggle', 'popover');
            $link.attr('data-content', $entry.find('.entry-text').text());
            $link.attr('title', $entry.find('.card-header').text())
            $link.attr('data-trigger', 'hover');
            $link.attr('data-html', 'true');
            $link.attr('data-placement', 'auto');
        }
    });

    $(function () {
        $('[data-toggle="popover"]').popover()
    })

    window.onscroll = function() {handleTopButton()};
    function handleTopButton() {
        $("#button-top").toggle(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100);
    }
    handleTopButton();
})();