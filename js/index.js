var darkTheme = false;

$(".header__toggler").click(function(){
    if ( darkTheme == false ) {
        $("html").css("--toggle-from", "hsl(210, 78%, 56%)");
        $("html").css("--toggle-to", "hsl(146, 68%, 55%)");
        $("html").css("--bg", "hsl(230, 17%, 14%)");
        $("html").css("--top-bg", "hsl(232, 19%, 15%)");
        $("html").css("--stat-bg", "hsl(228, 28%, 20%)");
        $("html").css("--text","hsl(228, 34%, 66%)");
        $("html").css("--dark-text", "hsl(0, 0%, 100%)");
        $("body").css("background-color","rgba(0, 0, 0, 0.925)");
        $(".header__toggler").css("padding-left","3rem");
        
        darkTheme = true;
    } else {
        $("html").css("--toggle-from", " hsl(230, 22%, 74%)");
        $("html").css("--toggle-to", "hsl(230, 22%, 74%)");
        $("html").css("--bg", "hsl(0, 0%, 100%)");
        $("html").css("--top-bg", "hsl(225, 100%, 98%)");
        $("html").css("--stat-bg", "hsl(227, 47%, 96%)");
        $("html").css("--text","hsl(228, 12%, 44%)");
        $("html").css("--dark-text", "hsl(230, 17%, 14%)");
        $("body").css("background-color","white");
        $(".header__toggler").css("padding-left","0");

        darkTheme = false;
    }
})