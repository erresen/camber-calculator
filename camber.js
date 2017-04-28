$(function(){
    $('.update-results').on('change blur keyup', updateResults);
    updateResults();
});

function updateResults () {
    var top = parseFloat($('#top').val());
    var bottom = parseFloat($('#bottom').val());
    var diameter = parseFloat($('#wheel-diameter').val());
    var camber = calculateCamber(top, bottom, diameter);
    displayResults(camber);
}

function displayResults (camber) {
    var orientation = '';
    var angleText = '?';
    if(!isNaN(camber)){
        if (camber > 0) {
            orientation = 'positive ';
        } else if(camber < 0){
            orientation = 'negative ';                
        }
        var absCamber = Math.abs(camber);
        angleText = parseFloat(absCamber.toFixed(2)) + '&deg;';
    }
    $('.angle').html(angleText);
    $('.orientation').html(orientation + 'camber');
}

function calculateCamber (top, bottom, diameter) {
    var offset = bottom - top;
    var camber = Math.sin(offset / diameter);
    return radToDegrees(camber);
}

function radToDegrees (angle) {
    return angle * (180 / Math.PI);
}