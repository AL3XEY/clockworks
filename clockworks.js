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

function initWatch(){
    let normh, degh, radh, x1h, y1h, x2h, y2h;
    for(i=1;i<13;i++){
        normh = (h-1)/12;
        degh = (-normh*360)+90;
        radh = degh*Math.PI/180;
        x1h = 250 + (Math.cos(radh)*220);
        y1h = 250 + (-Math.sin(radh)*220);
        x2h = 250 + (Math.cos(radh)*248);
        y2h = 250 + (-Math.sin(radh)*248);
        $('#watch-'+i).attr('x1', x1h);
        $('#watch-'+i).attr('y1', y1h);
        $('#watch-'+i).attr('x2', x2h);
        $('#watch-'+i).attr('y2', y2h);
    }
}

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
    xs = 250 + (Math.cos(rads)*130);
    ys = 250 + (-Math.sin(rads)*130); // TODO make sure everything is float, precision seems a bit off

    $('#watch-h').attr('x2', xh);
    $('#watch-h').attr('y2', yh);

    $('#watch-m').attr('x2', xm);
    $('#watch-m').attr('y2', ym);

    $('#watch-s').attr('x2', xs);
    $('#watch-s').attr('y2', ys);
}

function binary(){
    let bh10, bh1, bm10, bm1, bs10, bs1;

    hh = ''+pad(h, 2);
    mm = ''+pad(m, 2);
    ss = ''+pad(s, 2);

    bh10 = parseInt(hh[0]).toString(2);
    bh1 = parseInt(hh[1]).toString(2);
    bm10 = parseInt(mm[0]).toString(2);
    bm1 = parseInt(mm[1]).toString(2);
    bs10 = parseInt(ss[0]).toString(2);
    bs1 = parseInt(ss[1]).toString(2);

    let missingZeros;
    if(bh10.length < 3){
        missingZeros = 3 - bh10.length;
        for(i=0;i<missingZeros;i++){
            bh10 = '0' + bh10;
        }
    }
    if(bh1.length < 4){
        missingZeros = 4 - bh1.length;
        for(i=0;i<missingZeros;i++){
            bh1 = '0' + bh1;
        }
    }
    if(bm10.length < 3){
        missingZeros = 3 - bm10.length;
        for(i=0;i<missingZeros;i++){
            bm10 = '0' + bm10;
        }
    }
    if(bm1.length < 4){
        missingZeros = 4 - bm1.length;
        for(i=0;i<missingZeros;i++){
            bm1 = '0' + bm1;
        }
    }
    if(bs10.length < 3){
        missingZeros = 3 - bs10.length;
        for(i=0;i<missingZeros;i++){
            bs10 = '0' + bs10;
        }
    }
    if(bs1.length < 4){
        missingZeros = 4 - bs1.length;
        for(i=0;i<missingZeros;i++){
            bs1 = '0' + bs1;
        }
    }

    if(bh10[0] == '1'){ $('#binary-h10 .binary-4').addClass('on'); }else{ $('#binary-h10 .binary-4').removeClass('on'); }
    if(bh10[1] == '1'){ $('#binary-h10 .binary-2').addClass('on'); }else{ $('#binary-h10 .binary-2').removeClass('on'); }
    if(bh10[2] == '1'){ $('#binary-h10 .binary-1').addClass('on'); }else{ $('#binary-h10 .binary-1').removeClass('on'); }

    if(bh1[0] == '1'){ $('#binary-h1 .binary-8').addClass('on'); }else{ $('#binary-h1 .binary-8').removeClass('on'); }
    if(bh1[1] == '1'){ $('#binary-h1 .binary-4').addClass('on'); }else{ $('#binary-h1 .binary-4').removeClass('on'); }
    if(bh1[2] == '1'){ $('#binary-h1 .binary-2').addClass('on'); }else{ $('#binary-h1 .binary-2').removeClass('on'); }
    if(bh1[3] == '1'){ $('#binary-h1 .binary-1').addClass('on'); }else{ $('#binary-h1 .binary-1').removeClass('on'); }

    if(bm10[0] == '1'){ $('#binary-m10 .binary-4').addClass('on'); }else{ $('#binary-m10 .binary-4').removeClass('on'); }
    if(bm10[1] == '1'){ $('#binary-m10 .binary-2').addClass('on'); }else{ $('#binary-m10 .binary-2').removeClass('on'); }
    if(bm10[2] == '1'){ $('#binary-m10 .binary-1').addClass('on'); }else{ $('#binary-m10 .binary-1').removeClass('on'); }

    if(bm1[0] == '1'){ $('#binary-m1 .binary-8').addClass('on'); }else{ $('#binary-m1 .binary-8').removeClass('on'); }
    if(bm1[1] == '1'){ $('#binary-m1 .binary-4').addClass('on'); }else{ $('#binary-m1 .binary-4').removeClass('on'); }
    if(bm1[2] == '1'){ $('#binary-m1 .binary-2').addClass('on'); }else{ $('#binary-m1 .binary-2').removeClass('on'); }
    if(bm1[3] == '1'){ $('#binary-m1 .binary-1').addClass('on'); }else{ $('#binary-m1 .binary-1').removeClass('on'); }

    if(bs10[0] == '1'){ $('#binary-s10 .binary-4').addClass('on'); }else{ $('#binary-s10 .binary-4').removeClass('on'); }
    if(bs10[1] == '1'){ $('#binary-s10 .binary-2').addClass('on'); }else{ $('#binary-s10 .binary-2').removeClass('on'); }
    if(bs10[2] == '1'){ $('#binary-s10 .binary-1').addClass('on'); }else{ $('#binary-s10 .binary-1').removeClass('on'); }

    if(bs1[0] == '1'){ $('#binary-s1 .binary-8').addClass('on'); }else{ $('#binary-s1 .binary-8').removeClass('on'); }
    if(bs1[1] == '1'){ $('#binary-s1 .binary-4').addClass('on'); }else{ $('#binary-s1 .binary-4').removeClass('on'); }
    if(bs1[2] == '1'){ $('#binary-s1 .binary-2').addClass('on'); }else{ $('#binary-s1 .binary-2').removeClass('on'); }
    if(bs1[3] == '1'){ $('#binary-s1 .binary-1').addClass('on'); }else{ $('#binary-s1 .binary-1').removeClass('on'); }

}

function binaryAlt(){
    let bh, bm, bs;

    bh = (h%12).toString(2);
    bm = m.toString(2);
    bs = s.toString(2);

    // add leading zeros so that it matches exactly the format
    let missingZeros ;
    if(bh.length < 4){
        missingZeros = 4 - bh.length;
        for(i=0;i<missingZeros;i++){
            bh = '0' + bh;
        }
    }
    if(bm.length < 6){
        missingZeros = 6 - bm.length;
        for(i=0;i<missingZeros;i++){
            bm = '0' + bm;
        }
    }
    if(bs.length < 6){
        missingZeros = 6 - bs.length;
        for(i=0;i<missingZeros;i++){
            bs = '0' + bs;
        }
    }

    // for each char in string, 0 = off and 1 = on
    if(bh[0] == '1'){ $('#binary-alt-h .binary-8').addClass('on'); }else{ $('#binary-alt-h .binary-8').removeClass('on'); }
    if(bh[1] == '1'){ $('#binary-alt-h .binary-4').addClass('on'); }else{ $('#binary-alt-h .binary-4').removeClass('on'); }
    if(bh[2] == '1'){ $('#binary-alt-h .binary-2').addClass('on'); }else{ $('#binary-alt-h .binary-2').removeClass('on'); }
    if(bh[3] == '1'){ $('#binary-alt-h .binary-1').addClass('on'); }else{ $('#binary-alt-h .binary-1').removeClass('on'); }

    if(bm[0] == '1'){ $('#binary-alt-m .binary-32').addClass('on'); }else{ $('#binary-alt-m .binary-32').removeClass('on'); }
    if(bm[1] == '1'){ $('#binary-alt-m .binary-16').addClass('on'); }else{ $('#binary-alt-m .binary-16').removeClass('on'); }
    if(bm[2] == '1'){ $('#binary-alt-m .binary-8').addClass('on'); }else{ $('#binary-alt-m .binary-8').removeClass('on'); }
    if(bm[3] == '1'){ $('#binary-alt-m .binary-4').addClass('on'); }else{ $('#binary-alt-m .binary-4').removeClass('on'); }
    if(bm[4] == '1'){ $('#binary-alt-m .binary-2').addClass('on'); }else{ $('#binary-alt-m .binary-2').removeClass('on'); }
    if(bm[5] == '1'){ $('#binary-alt-m .binary-1').addClass('on'); }else{ $('#binary-alt-m .binary-1').removeClass('on'); }

    if(bs[0] == '1'){ $('#binary-alt-s .binary-32').addClass('on'); }else{ $('#binary-alt-s .binary-32').removeClass('on'); }
    if(bs[1] == '1'){ $('#binary-alt-s .binary-16').addClass('on'); }else{ $('#binary-alt-s .binary-16').removeClass('on'); }
    if(bs[2] == '1'){ $('#binary-alt-s .binary-8').addClass('on'); }else{ $('#binary-alt-s .binary-8').removeClass('on'); }
    if(bs[3] == '1'){ $('#binary-alt-s .binary-4').addClass('on'); }else{ $('#binary-alt-s .binary-4').removeClass('on'); }
    if(bs[4] == '1'){ $('#binary-alt-s .binary-2').addClass('on'); }else{ $('#binary-alt-s .binary-2').removeClass('on'); }
    if(bs[5] == '1'){ $('#binary-alt-s .binary-1').addClass('on'); }else{ $('#binary-alt-s .binary-1').removeClass('on'); }
}

function binaryBs(){
    let bh;

    bh = (h%12).toString(2);

    // add leading zeros so that it matches exactly the format
    let missingZeros ;
    if(bh.length < 4){
        missingZeros = 4 - bh.length;
        for(i=0;i<missingZeros;i++){
            bh = '0' + bh;
        }
    }

    // for each char in string, 0 = off and 1 = on
    if(bh[0] == '1'){ $('.binary-bs-h-8').addClass('on'); }else{ $('.binary-bs-h-8').removeClass('on'); }
    if(bh[1] == '1'){ $('.binary-bs-h-4').addClass('on'); }else{ $('.binary-bs-h-4').removeClass('on'); }
    if(bh[2] == '1'){ $('.binary-bs-h-2').addClass('on'); }else{ $('.binary-bs-h-2').removeClass('on'); }
    if(bh[3] == '1'){ $('.binary-bs-h-1').addClass('on'); }else{ $('.binary-bs-h-1').removeClass('on'); }

    let m30 = 0;
    let m15 = 0;
    if(m > 45){
        m30 = 1;
        m15 = 1;
        m = 45 - m;
    }else if(m > 30){
        m30 = 1;
        m = 30 - m;
    }else if(m > 15){
        m15 = 1;
        m = 15 - m;
    }

    if(m30){ $('.binary-bs-m-30').addClass('on'); }else{ $('.binary-bs-m-30').removeClass('on'); }
    if(m15){ $('.binary-bs-m-15').addClass('on'); }else{ $('.binary-bs-m-15').removeClass('on'); }

    let bm = m.toString(2);
    if(bm.length < 4){
        missingZeros = 4 - bm.length;
        for(i=0;i<missingZeros;i++){
            bm = '0' + bm;
        }
    }
    if(bm[0] == '1'){ $('.binary-bs-m-8').addClass('on'); }else{ $('.binary-bs-m-8').removeClass('on'); }
    if(bm[1] == '1'){ $('.binary-bs-m-4').addClass('on'); }else{ $('.binary-bs-m-4').removeClass('on'); }
    if(bm[2] == '1'){ $('.binary-bs-m-2').addClass('on'); }else{ $('.binary-bs-m-2').removeClass('on'); }
    if(bm[3] == '1'){ $('.binary-bs-m-1').addClass('on'); }else{ $('.binary-bs-m-1').removeClass('on'); }
}

initWatch();
justTime(); //
watch(); //
setInterval(justTime, 1000);
setInterval(watch, 1000);
setInterval(binary, 1000);
setInterval(binaryAlt, 1000);
setInterval(binaryBs, 1000);
