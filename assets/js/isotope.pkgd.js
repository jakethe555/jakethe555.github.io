// external js: isotope.pkgd.js

var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer'
    }
});

// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});


function reload() {
    $grid.isotope('layout');
}

function resize_item() {
    var cw = $('.grid-item').width();
    $('.grid-item').css({'height': cw + 'px'});
}


document.addEventListener("DOMContentLoaded", resize_item);
document.addEventListener("DOMContentLoaded", reload);
window.onresize = resize_item;



