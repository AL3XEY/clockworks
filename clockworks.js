function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

var d,t,h,m,s;
var watchCanvaSize = 500;

function justTime(){
    d = new Date();
    t = d.getTime();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    $('#just-time').html(pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2));
}

setInterval(justTime, 1000);


function watch(){
    let normh, normm, norms;

    normh = (h%12)/12;
    normm = m/60;
    norms = s/60;

    let degh, degm, degs;

    degh = (-normh*360)+90;
    degm = (-normm*360)+90;
    degs = (-norms*360)+90;

    let radh, radm, rads;

    radh = degh*Math.PI/180;
    radm = degm*Math.PI/180;
    rads = degs*Math.PI/180;

    let xh, yh, xm, ym, xs, ys;

    xh = 250 + (Math.cos(radh)*230);
    yh = 250 + (-Math.sin(radh)*230);
    xm = 250 + (Math.cos(radm)*180);
    ym = 250 + (-Math.sin(radm)*180);
    xs = 250 + (Math.cos(rads)*50);
    ys = 250 + (-Math.sin(rads)*50); //TODO make sure everything is float, precision seems a bit off

    $('#watch-h').attr('x2', (xh));
    $('#watch-h').attr('y2', (yh));

    $('#watch-m').attr('x2', (xm));
    $('#watch-m').attr('y2', (ym));

    $('#watch-s').attr('x2', xs);
    $('#watch-s').attr('y2', ys);
}

setInterval(watch, 1000);
