/*
Name    : Responsive HTML5 Chat
Responsive HTML5 Chat helps you to create useful chatbox on your website easly. 
You can change skin and sizes. You can read the installation and support documentation 
before you begin. If you do not find the answer, do not hesitate to send a message to me.
Owner   : Vatanay Ozbeyli
Web     : www.vatanay.com
Support : hi@vatanay.com
*/

function responsiveChat(element) {
    $(element).html('<form class="chat"><span></span><div class="messages"></div><input type="text" placeholder="Your message"><input type="submit" value="Send"></form>');

    function showLatestMessage() {
        $(element).find('.messages').scrollTop($(element).find('.messages').height());
    }
    showLatestMessage();


    $(element + ' input[type="text"]').keypress(function (event) {
        if (event.which == 13) {
            event.preventDefault();
            $(element + ' input[type="submit"]').click();
        }
    });
    $(element + ' input[type="submit"]').click(function (event) {
        event.preventDefault();
        var message = $(element + ' input[type="text"]').val();
        if ($(element + ' input[type="text"]').val()) {
            var d = new Date();
            var clock = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
            var month = d.getMonth() + 1;
            var day = d.getDate();
            var currentDate =
                (("" + day).length < 2 ? "0" : "") +
                day +
                "." +
                (("" + month).length < 2 ? "0" : "") +
                month +
                "." +
                d.getFullYear() +
                "&nbsp;&nbsp;" +
                clock;
            $(element + ' div.messages').append(
                '<div class="message"><div class="myMessage"><p>' +
                message +
                "</p><date>" +
                currentDate +
                "</date></div></div>"
            );
            setTimeout(function () {
                $(element + ' > span').addClass("spinner");
            }, 100);
            setTimeout(function () {
                $(element + ' > span').removeClass("spinner");
            }, 2000);
        }
        $(element + ' input[type="text"]').val("");
        showLatestMessage();
    });
}

function responsiveChatPush(element, sender, origin, date, message) {
    var originClass;
    if (origin == 'me') {
        originClass = 'myMessage';
    } else {
        originClass = 'fromThem';
    }
    $(element + ' .messages').append('<div class="message"><div class="' + originClass + '"><p>' + message + '</p><date><b>' + sender + '</b> ' + date + '</date></div></div>');
}

/* Adobewordpress id'sine sahip öğenin scrollunu en alta çekmemizi sağlayan fonksiyonumuz */
function scrollDown(){
  var focusBottom = document.getElementById("adobewordpress");
  focusBottom.scrollTop = focusBottom.scrollHeight;
}
 
/* Eğer mesaj yazıldıktan sonra submit düğmesine değil de ENTER tuşuna basılırsa formun iletilmesini sağlayalım */
$("input").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        $('form.chat input[type="submit"]').click();
    }
});
/* Form kullanılırsa çalışacak temel click fonksiyonu */
$('form.chat input[type="submit"]').click(function(event){
  event.preventDefault(); // Sayfanın yeniden yüklenmesini engelleyelim.
  var message = $('form.chat input[type="text"]').val(); // Yazılan mesajı message değişkenine kaydedelim
  if( $('form.chat input[type="text"]').val()) { // Eğer mesaj yazılmışsa
    var d = new Date(); // Mesaj yazılma tarihini gösterelim
    var clock = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    var month = d.getMonth()+1;
    var day = d.getDate();
    var currentDate =
        ((''+day).length<2 ? '0' : '') + day + '.' +
        ((''+month).length<2 ? '0' : '') + month + '.' +
        d.getFullYear() +'&nbsp;&nbsp;'+ clock;
    /* Aşağıda mesajı ve yazılma tarihini panoya ekliyoruz */
    $('form.chat div.messages').append('<div class="message"><div class="myMessage"><p>'+message+'</p><date>'+currentDate+'</date></div></div>');
    setTimeout(function() {
      $('form.chat > span').addClass('spinner'); // Yukarıdaki yeşil bar (spinner) aktif olur
    }, 100);
    setTimeout(function() {
      $('form.chat > span').removeClass('spinner'); // Spinner kapanır
    }, 2000);
  }
  $('form.chat input[type="text"]').val(''); // Mesaj yazdığımız input'un value değeri sıfırlanır
  scrollDown(); // Pano ekranı aşağı kaydırılır
});


/* Activating chatbox on element */
responsiveChat('.responsive-html5-chat');

/* Let's push some dummy data */
responsiveChatPush('.chat', 'Kate', 'me', '08.03.2017 14:30:7', 'It looks beautiful!');
responsiveChatPush('.chat', 'John Doe', 'you', '08.03.2016 14:31:22', 'It looks like the iPhone message box.');
responsiveChatPush('.chat', 'Kate', 'me', '08.03.2016 14:33:32', 'Yep, is this design responsive?');
responsiveChatPush('.chat', 'Kate', 'me', '08.03.2016 14:36:4', 'By the way when I hover on my message it shows date.');
responsiveChatPush('.chat', 'John Doe', 'you', '08.03.2016 14:37:12', 'Yes, this is completely responsive.');

/* DEMO */
if (parent == top) {
  $("a.article").show();
