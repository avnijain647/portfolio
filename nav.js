//
//
// $(function() {
//     var img = $('.rick2').html();
//     for (var i = 0; i < 10; i++) {
//         moar(img);
//     }
//     $(window).on('scroll', function() {
//         if ($(this).scrollTop() >= $('.rick2').height() - $(this).height()) {
//             moar(img);
//         }
//     });
//     function moar(content) {
//         $('.rick2').append(content);
//     }
// });
//
// $(function() {
//     var img = $('.rick').html();
//     for (var i = 0; i < 10; i++) {
//         moar(img);
//     }
//     $(window).on('scroll', function() {
//         if ($(this).scrollTop() >= $('.rick').height() - $(this).height()) {
//             moar(img);
//         }
//     });
//     function moar(content) {
//         $('.rick').append(content);
//     }
// });


$('.filters-list a').on('click', function() {
  var filter = $(this).attr('data-filter')
  console.log(filter)
  $('.portfolio').hide()
  $(filter).show()
    $('.filters-list a').removeClass('select')
  $(this).addClass('select')
  var boxsize = $(this).attr('data-size')
  $(filter).removeClass('small large')
  $(filter).addClass(boxsize)
  return false
})

$('.script3').hover(function(){
   $('.script6_1').fadeToggle(0)
   $('.script8').fadeToggle(0)
   $('.script5').fadeToggle(0)
   $('.script9').toggleClass('inline')
})
$('.script5').hover( function(){
 $('.script8').fadeToggle(0)
   $('.script10').toggleClass('inline')
})

$(".loading, .loadingbox").show()

setTimeout(function () {
  $(".loading, .loadingbox").fadeOut(1000)
}, 2000)

//NooraHealth

var animation = bodymovin.loadAnimation({
container: document.getElementById('nh-container0'),
path: 'fig-cover-square.json',
renderer: 'svg',
loop: true,
autoplay: true,
name: "Demo Animation",
});

var animation = bodymovin.loadAnimation({
container: document.getElementById('nh-container1'),
path: 'WorldMentalHealthDayPost.json',
renderer: 'svg',
loop: true,
autoplay: true,
name: "Demo Animation",
});

var animation = bodymovin.loadAnimation({
container: document.getElementById('nh-container2'),
path: 'WorldPatientDayPost.json',
renderer: 'svg',
loop: true,
autoplay: true,
name: "Demo Animation",
});


var animation = bodymovin.loadAnimation({
container: document.getElementById('nh-container3'),
path: 'WorldHeartDayPost.json',
renderer: 'svg',
loop: true,
autoplay: true,
name: "Demo Animation",
});



var animation = bodymovin.loadAnimation({
container: document.getElementById('nh-container5'),
path: 'Icon-gifs.json',
renderer: 'svg',
loop: true,
autoplay: true,
name: "Demo Animation",
});

var animation = bodymovin.loadAnimation({
container: document.getElementById('nh-container6'),
path: 'nh-animal-gif.json',
renderer: 'svg',
loop: true,
autoplay: true,
name: "Demo Animation",
});

var animation = bodymovin.loadAnimation({
container: document.getElementById('nh-container7'),
path: 'nh-logo-animation-applications.json',
renderer: 'svg',
loop: true,
autoplay: true,
name: "Demo Animation",
});

var animation = bodymovin.loadAnimation({
container: document.getElementById('nh-container8'),
path: 'social-media-animation-post.json',
renderer: 'svg',
loop: true,
autoplay: true,
name: "Demo Animation",
});



//Fig
var animation = bodymovin.loadAnimation({
container: document.getElementById('fig-container1'),
path: 'fig-time-sm.json',
renderer: 'svg',
loop: true,
autoplay: true,
name: "Demo Animation",
});



var animation = bodymovin.loadAnimation({
container: document.getElementById('fig-container2'),
path: 'fig-sm-mockup-1.json',
renderer: 'svg',
loop: true,
autoplay: true,
name: "Demo Animation",
});

var animation = bodymovin.loadAnimation({
container: document.getElementById('fig-container3'),
path: 'fig-sm-mockup-2.json',
renderer: 'svg',
loop: true,
autoplay: true,
name: "Demo Animation",
});

var animation = bodymovin.loadAnimation({
container: document.getElementById('fig-container4'),
path: 'fig-thematic.json',
renderer: 'svg',
loop: true,
autoplay: true,
name: "Demo Animation",
});
