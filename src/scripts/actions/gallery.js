$('#gallery').photobox('a', {time:0});

$('#gallery').photobox('li > a.family',{ time:0 }, callback);

function callback(){
    console.log('image has been loaded');
}

$('#gallery').photobox('destroy');

$('#gallery').photobox('prepareDOM');