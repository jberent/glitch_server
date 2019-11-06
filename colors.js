let active_button_green = 0x4a9e21;
var almost_dark_blue = 0x100c49;
var almost_dark_green = 0x0c4b0c;
var almost_dark_orange = 0x4b270c;
var almost_dark_purple = 0x270c4b;
var almost_dark_red = 0x490c10;
var almost_dark_teal = 0x0c3a4b;
var background_black = 0x000000;
var background_dark_gray = 0x444444;
var background_orange = 0xff9000;
var background_white = 0xffffff;
var border_orange = 0xff6700;
var bright_blue = 0x190aff;
var bright_green = 0x0aff0a;
var bright_orange = 0xff740a;
var bright_purple = 0x740aff;
var bright_red = 0xff0a19;
var bright_teal = 0x0abeff;
var dark_blue = 0x06014e;
var dark_green = 0x014b01;
var dark_orange = 0x4b2101;
var dark_purple = 0x21014b;
var dark_red = 0x4e0106;
var dark_teal = 0x01384b;
var firstblue = 0x009cd7;
var firstgreen = 0x00a651;
var firstorgange = 0xf57e25;
var firstred = 0xed1c24;
var inactive_button_gray = 0x666666;
var info_shadow = 0xA8A8A8;
var light_blue = 0x1005bf;
var light_green = 0x05bd05;
var light_orange = 0xbd5505;
var light_purple = 0x5505bd;
var light_red = 0xbf0510;
var light_teal = 0x059bd1;
var line_gray = 0xaaaaaa;
var medium_blue = 0x150e79;
var medium_dark_blue = 0x070253;
var medium_dark_green = 0x025502;
var medium_dark_orange = 0x552602;
var medium_dark_purple = 0x260255;
var medium_dark_red = 0x530207;
var medium_dark_teal = 0x023f55;
var medium_green = 0x0e770e;
var medium_light_blue = 0x0e04a6;
var medium_light_green = 0x04a404;
var medium_light_orange = 0xa44904;
var medium_light_purple = 0x4904a4;
var medium_light_red = 0xa6040e;
var medium_light_teal = 0x0588b8;
var medium_medium_blue = 0x080262;
var medium_medium_green = 0x026402;
var medium_medium_orange = 0x642c02;
var medium_medium_purple = 0x2c0264;
var medium_medium_red = 0x620208;
var medium_medium_teal = 0x025978;
var medium_orange = 0xa95414;
var medium_purple = 0x3b0e77;
var medium_red = 0x790e15;
var medium_teal = 0x106989;
var text_error = 0xff0000; // = bright_red;
var text_okay = 0x009900;
var text_warning = 0xff8000;
var text_white = 0xFFFFFFFF;
var text_toast = text_white; // = text_white;
var very_dark_blue = 0x06023f;
var very_dark_green = 0x024002;
var very_dark_orange = 0x401d02;
var very_dark_purple = 0x1d0240;
var very_dark_red = 0x3f0206;
var very_dark_teal = 0x023040;
var very_very_dark_blue = 0x04012d;
var very_very_dark_green = 0x012d01;
var very_very_dark_orange = 0x2d1401;
var very_very_dark_purple = 0x14012d;
var very_very_dark_red = 0x2d0104;
var very_very_dark_teal = 0x01212d;

module.exports = {
themeToLess: function(res)
{
    var theme = {

 textWhite: text_white,
//<item name="android:textViewStyle">@style/FtcTextViewStyle</item>
//<item name="android:buttonStyle">@style/FtcButtonStyle</item>

//  <style name="AppTheme.Red">
    textBright: bright_red,
 textLight: light_red,
 textMedium: medium_red,
//var textMediumMedium = medium_red;
//var textMediumLight = medium_red;
//var textMediumAlmostDark = medium_dark_red;
 textMediumDark: medium_dark_red,
 textVeryDark: very_dark_red,
 textVeryVeryDark: very_very_dark_red,

 backgroundLight: light_red,
 backgroundMediumLight: medium_light_red,
 backgroundMedium: medium_red,
 backgroundMediumMedium: medium_medium_red,
 backgroundMediumDark: medium_dark_red,
 backgroundAlmostDark: almost_dark_red,
 backgroundDark: dark_red,
 backgroundVeryDark: very_dark_red,
 backgroundVeryVeryDark: very_very_dark_red,
 lineBright: bright_red,
 lineLight: light_red,
 feedbackBackground: background_orange,
 feedbackBorder: border_orange,
//var feedbackShape">@drawable/feedback_shape_orange;

    }
    res.write('@textError:#FF0000;');
    res.write('@textWarning:#FF9900;');
    res.write('@textOkay:#00FF00;');
    res.write(toLess('textWhite'));
    res.write(toLess('textBright'));
    res.write(toLess('textLight'));
    res.write(toLess('textMedium'));
    res.write(toLess('textMediumDark'));
    res.write(toLess('textVeryDark'));
    res.write(toLess('textVeryVeryDark'));
    res.write(toLess('backgroundLight'));
    res.write(toLess('backgroundMediumLight'));
    res.write(toLess('backgroundMediumMedium'));
    res.write(toLess('backgroundMedium'));
    res.write(toLess('backgroundMediumDark'));
    res.write(toLess('backgroundAlmostDark'));
    res.write(toLess('backgroundDark'));
    res.write(toLess('backgroundVeryDark'));
    res.write(toLess('backgroundVeryVeryDark'));
    res.write(toLess('lineBright'));
    res.write(toLess('lineLight'));
    res.write(toLess('feedbackBackground'));
    res.write(toLess('feedbackBorder'));

    function toLess(name)
    {
        return '@' + name + ':#' + theme[name].toString(16) + ';';

    }
},
} 



