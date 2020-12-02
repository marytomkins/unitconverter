function getLeng(inp, from, to){
    if (from == 'Kilometer'){
        if(to == 'Kilometer'){
            res = inp[0].value;
        }
        if(to == 'Meter'){
            res = inp[0].value * 1000;
        }
        if(to == 'Millimeter'){
            res = inp[0].value * 1000000;
        }
        if(to == 'Micrometer'){
            res = inp[0].value * 1000000000;
        }
        if(to == 'Nanometer'){
            res = inp[0].value * 1000000000000;
        }
        if(to == 'Inch'){
            res = inp[0].value * 39370.078;
        }
        if(to == 'Foot'){
            res = inp[0].value * 3280.84;
        }
        if(to == 'Yard'){
            res = inp[0].value * 1093.61;
        }
    }
    if (from == 'Meter'){
        if(to == 'Kilometer'){
            res = inp[0].value * 0.001;
        }
        if(to == 'Meter'){
            res = inp[0].value;
        }
        if(to == 'Millimeter'){
            res = inp[0].value * 1000;
        }
        if(to == 'Micrometer'){
            res = inp[0].value * 1000000;
        }
        if(to == 'Nanometer'){
            res = inp[0].value * 1000000000;
        }
        if(to == 'Inch'){
            res = inp[0].value * 39.3701;
        }
        if(to == 'Foot'){
            res = inp[0].value * 3.28084;
        }
        if(to == 'Yard'){
            res = inp[0].value * 1.09361;
        }
    }
    if (from == 'Millimeter'){
        if(to == 'Kilometer'){
            res = inp[0].value * 0.000001;
        }
        if(to == 'Meter'){
            res = inp[0].value * .001;
        }
        if(to == 'Millimeter'){
            res = inp[0].value;
        }
        if(to == 'Micrometer'){
            res = inp[0].value * 1000;
        }
        if(to == 'Nanometer'){
            res = inp[0].value * 1000000;
        }
        if(to == 'Inch'){
            res = inp[0].value * .0393701;
        }
        if(to == 'Foot'){
            res = inp[0].value * .00328084;
        }
        if(to == 'Yard'){
            res = inp[0].value * .00109361;
        }
    }
    if (from == 'Micrometer'){
        if(to == 'Kilometer'){
            res = inp[0].value * 0.000000001;
        }
        if(to == 'Meter'){
            res = inp[0].value * .000001;
        }
        if(to == 'Millimeter'){
            res = inp[0].value * .001;
        }
        if(to == 'Micrometer'){
            res = inp[0].value;
        }
        if(to == 'Nanometer'){
            res = inp[0].value * 1000;
        }
        if(to == 'Inch'){
            res = inp[0].value * .0000393;
        }
        if(to == 'Foot'){
            res = inp[0].value * .00000328;
        }
        if(to == 'Yard'){
            res = inp[0].value * .00000109;
        }
    }
    if (from == 'Nanometer'){
        if(to == 'Kilometer'){
            res = inp[0].value * 0.000000000001;
        }
        if(to == 'Meter'){
            res = inp[0].value * .000000001;
        }
        if(to == 'Millimeter'){
            res = inp[0].value * .000001;
        }
        if(to == 'Micrometer'){
            res = inp[0].value * .001;
        }
        if(to == 'Nanometer'){
            res = inp[0].value;
        }
        if(to == 'Inch'){
            res = inp[0].value * .0000000393;
        }
        if(to == 'Foot'){
            res = inp[0].value * .00000000328;
        }
        if(to == 'Yard'){
            res = inp[0].value * .00000000109;
        }
    }
    if (from == 'Inch'){
        if(to == 'Kilometer'){
            res = inp[0].value *  0.0000254;
        }
        if(to == 'Meter'){
            res = inp[0].value * 0.0254;
        }
        if(to == 'Millimeter'){
            res = inp[0].value * 25.4;
        }
        if(to == 'Micrometer'){
            res = inp[0].value * 25400;
        }
        if(to == 'Nanometer'){
            res = inp[0].value * 25400000;
        }
        if(to == 'Inch'){
            res = inp[0].value;
        }
        if(to == 'Foot'){
            res = inp[0].value * 0.0833333333;
        }
        if(to == 'Yard'){
            res = inp[0].value * 0.0277777778;
        }
    }
    if (from == 'Foot'){
        if(to == 'Kilometer'){
            res = inp[0].value *  0.0003048;
        }
        if(to == 'Meter'){
            res = inp[0].value * 0.3048;
        }
        if(to == 'Millimeter'){
            res = inp[0].value * 304.8;
        }
        if(to == 'Micrometer'){
            res = inp[0].value * 3048000;
        }
        if(to == 'Nanometer'){
            res = inp[0].value * 3048000000;
        }
        if(to == 'Inch'){
            res = inp[0].value * 12;
        }
        if(to == 'Foot'){
            res = inp[0].value;
        }
        if(to == 'Yard'){
            res = inp[0].value * 0.3333333333;
        }
    }
    if (from == 'Yard'){
        if(to == 'Kilometer'){
            res = inp[0].value *  0.0009144;
        }
        if(to == 'Meter'){
            res = inp[0].value * 0.9144;
        }
        if(to == 'Millimeter'){
            res = inp[0].value * 0.9144;
        }
        if(to == 'Micrometer'){
            res = inp[0].value * 914400;
        }
        if(to == 'Nanometer'){
            res = inp[0].value * 914400000;
        }
        if(to == 'Inch'){
            res = inp[0].value * 36;
        }
        if(to == 'Foot'){
            res = inp[0].value * 3;
        }
        if(to == 'Yard'){
            res = inp[0].value;
        }
    }

    document.getElementById("leng").innerHTML = inp[0].value + " " + from + "(s)" + " = " + res + " " + to + "(s)";
}

function getWeig(inp, from, to){
    if (from == 'Milligram'){
        if(to == 'Milligram'){
            res = inp[0].value;
        }
        if(to == 'Gram'){
            res = inp[0].value * .001;
        }
        if(to == 'Kilogram'){
            res = inp[0].value * .000001;
        }
        if(to == 'Ounce'){
            res = inp[0].value * 0.000035274;
        }
        if(to == 'Pound'){
            res = inp[0].value * 0.0000022046;
        }
    }
    if (from == 'Gram'){
        if(to == 'Milligram'){
            res = inp[0].value * 1000;
        }
        if(to == 'Gram'){
            res = inp[0].value;
        }
        if(to == 'Kilogram'){
            res = inp[0].value * .001;
        }
        if(to == 'Ounce'){
            res = inp[0].value * 0.035273;
        }
        if(to == 'Pound'){
            res = inp[0].value * 0.0022046244;
        }
    }
    if (from == 'Kilogram'){
        if(to == 'Milligram'){
            res = inp[0].value * 1000000;
        }
        if(to == 'Gram'){
            res = inp[0].value * 1000;
        }
        if(to == 'Kilogram'){
            res = inp[0].value;
        }
        if(to == 'Ounce'){
            res = inp[0].value * 35.27399;
        }
        if(to == 'Pound'){
            res = inp[0].value * 2.2046244;
        }
    }
    if (from == 'Ounce'){
        if(to == 'Milligram'){
            res = inp[0].value * 28349.5;
        }
        if(to == 'Gram'){
            res = inp[0].value * 28.3495;
        }
        if(to == 'Kilogram'){
            res = inp[0].value * .0283495;
        }
        if(to == 'Ounce'){
            res = inp[0].value;
        }
        if(to == 'Pound'){
            res = inp[0].value * 0.0625;
        }
    }
    if (from == 'Pound'){
        if(to == 'Milligram'){
            res = inp[0].value * 453592;
        }
        if(to == 'Gram'){
            res = inp[0].value * 453.592;
        }
        if(to == 'Kilogram'){
            res = inp[0].value * 0.453592;
        }
        if(to == 'Ounce'){
            res = inp[0].value * 16;
        }
        if(to == 'Pound'){
            res = inp[0].value;
        }
    }

    document.getElementById("weig").innerHTML = inp[0].value + " " + from + "(s)" + " = " + res + " " + to + "(s)";

}

function getTime(inp, from, to){
    if (from == 'Millisecond'){
        if(to == 'Millisecond'){
            res = inp[0].value;
        }
        if(to == 'Second'){
            res = inp[0].value * 0.001;
        }
        if(to == 'Minute'){
            res = inp[0].value * 0.0000166667;
        }
        if(to == 'Hour'){
            res = inp[0].value * .000000277777;
        }
    }
    if (from == 'Second'){
        if(to == 'Millisecond'){
            res = inp[0].value * 1000;
        }
        if(to == 'Second'){
            res = inp[0].value;
        }
        if(to == 'Minute'){
            res = inp[0].value * 0.0166666667;
        }
        if(to == 'Hour'){
            res = inp[0].value * 0.0002777778;
        }
    }
    if (from == 'Minute'){
        if(to == 'Millisecond'){
            res = inp[0].value * 60000;
        }
        if(to == 'Second'){
            res = inp[0].value * 60;
        }
        if(to == 'Minute'){
            res = inp[0].value;
        }
        if(to == 'Hour'){
            res = inp[0].value * 0.0166666667;
        }
    }
    if (from == 'Hour'){
        if(to == 'Millisecond'){
            res = inp[0].value * 3600000;
        }
        if(to == 'Second'){
            res = inp[0].value * 3600;
        }
        if(to == 'Minute'){
            res = inp[0].value * 60;
        }
        if(to == 'Hour'){
            res = inp[0].value * 1;
        }
    }
    document.getElementById("time").innerHTML = inp[0].value + " " + from + "(s)" + " = " + res + " " + to + "(s)";

}

function getTem(inp, from, to){
    if (from == 'Celsius'){
        if(to == 'Celsius'){
            res = inp[0].value;
        }
        if(to == 'Kelvin'){
            res = inp[0].value + 273.15;
        }
        if(to == 'Fahrenheit'){
            res = inp[0].value * 1.8 + 32;
        }
    }
    if (from == 'Kelvin'){
        if(to == 'Celsius'){
            res = inp[0].value - 273.15;
        }
        if(to == 'Kelvin'){
            res = inp[0].value;
        }
        if(to == 'Fahrenheit'){
            res = inp[0].value * 1.8 - 459.67;
        }
    }
    if (from == 'Fahrenheit'){
        if(to == 'Celsius'){
            res = (inp[0].value - 32) / 1.8;
        }
        if(to == 'Kelvin'){
            res = (inp[0].value + 459.67) * .555;
        }
        if(to == 'Fahrenheit'){
            res = inp[0].value;
        }
    }
    document.getElementById("tem").innerHTML = inp[0].value + " " + from + "(s)" + " = " + res + " " + to + "(s)";
}

$(document).ready(function () {


    var btn1 = document.getElementById("go1");
    var btn2 = document.getElementById("go2");
    var btn3 = document.getElementById("go3");
    var btn4 = document.getElementById("go4");



    $('#go1').on('click', function () {
        console.log("1Clicked");
        var inp = document.getElementsByClassName("len-input");
        var from = $("input[name='lengthtype1']:checked").val();
        var to = $("input[name='lengthtype2']:checked").val();
        getLeng(inp, from, to);
        $('.len-input').val("");
    });

    $('#go2').on('click', function () {
        console.log("2Clicked");
        var inp = document.getElementsByClassName("wt-input");
        var from = $("input[name='weighttype1']:checked").val();
        var to = $("input[name='weighttype2']:checked").val();
        getWeig(inp, from, to);
        $('.wt-input').val("");
    });

    $('#go3').on('click', function () {
        console.log("3Clicked");
        var inp = document.getElementsByClassName("time-input");
        var from = $("input[name='timetype1']:checked").val();
        var to = $("input[name='timetype2']:checked").val();
        getTime(inp, from, to);
        $('.time-input').val("");
    });

    $('#go4').on('click', function () {
        console.log("4Clicked");
        var inp = document.getElementsByClassName("temp-input");
        var from = $("input[name='temptype1']:checked").val();
        var to = $("input[name='temptype2']:checked").val();
        getTem(inp, from, to);
        $('.temp-input').val("");
    });



});