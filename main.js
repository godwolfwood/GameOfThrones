
$(document).ready(function(){
    $('img').click(function(){
        $.get("https://anapioficeandfire.com/api/houses/"+ $(this).attr('id') + "/" , function(res) {
            console.log(res.name,res.words,res.titles);
            var titles = "<p>Titles: " + res.titles[0];
            for(var i = 1; i < res.titles.length; i++){
                titles += ", " + res.titles[i];
            }
            titles += "</p>";

            $('.info').html(
                "<p>Name: " + res.name + "</p>" +
                "<p>Words: " + res.words + "</p>" +
                titles
            )
        });
    });
});