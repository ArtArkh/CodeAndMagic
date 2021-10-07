window.renderStatistics = function(ctx, names, times) {
    ctx.fillStyle = 'rgba(0,0,0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.fillRect(100, 10, 420, 270);
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.font = '16px, PT Mono';
    ctx.fillText('Ура! Вы победили!', 130, 40);
    ctx.fillText('Список Результатов:', 130, 60);

    var maxTime = 0;
    for(var i = 0; i < times.length; i++) {
        if (times[i] > maxTime) {maxTime = times[i];}
    }
    var proportion = 150 / maxTime;
    
    var startX = 165;
    var COLOM_Y = 250;
    var COLON_WIGHT = 40;
    var NAME_Y = 270;
    var SCORE_Y = 247;

    for(var i = 0; i < names.length; i++) {
        var ColomHeight = proportion*times[i];
        var ColomOpacity = Math.random()*(0.9-0.3)+0.3;
        if (names[i] === 'Вы') {
            ctx.fillStyle = 'red';
        } else {
            ctx.fillStyle = 'rgba(0, 0, 255,'+ColomOpacity+')';
        }
        ctx.fillRect(startX, COLOM_Y-ColomHeight, COLON_WIGHT, ColomHeight);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillText(names[i], startX, NAME_Y);
        ctx.fillText(Math.round(times[i]), startX, SCORE_Y-ColomHeight);
        startX+=90;
    }
};