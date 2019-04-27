$(document).ready(function () {

    // hide the packets

    $("#rec1td").click(function () { // hide packet 1
        $("#mp1").text("was killed");
        $("#rec1td").css("display", "none")
    })

    $("#rec2td").click(function () { // hide packet 2
        $("#mp2").text("was killed");
        $("#rec2td").css("display", "none")
    })

    $("#rec3td").click(function () { // hide packet 3
        $("#mp3").text("was killed");
        $("#rec3td").css("display", "none")
    })

    $("#rec4td").click(function () { // hide packet 4
        $("#mp4").text("was killed");
        $("#rec4td").css("display", "none")
    })

    $("#rec5td").click(function () { // hide packet 5
        $("#mp5").text("was killed");
        $("#rec5td").css("display", "none")
    })





    ////////////////// for 1 packet //////////////////////

    function resend1() {
        setTimeout(function () { // wait for 28.5s then send packet
            $("#mp1").text("seq=0");
            $("#rec1tdr").animate({
                top: "406px"
            }, 10000, function () { // start callBack() func
                $("#rec1ds").css("background-color", "darkblue");
                $("#rec1tdr").css("background-color", "green");
                $("#mp1").text("ack=1");
                $("#rec1tdr").animate({
                    top: "46px"
                }, 10000, function () {
                    $("#rec1tdr").css("background-color", "yellow");
                });
            })
        }, 28500)
    } //end settimeout()

    function packet1() {
        $("#mp1").text("seq=0");
        $("#rec1td").animate({
                top: "406px"
            }, 10000, function () { // start callBack() func
                if ($("#rec1td").css("display") !== 'none') {
                    $("#rec1ds").css("background-color", "darkblue");
                    $("#rec1td").css("background-color", "green");
                    $("#mp1").text("ack=1");
                    $("#rec1td").animate({
                        top: "46px"
                    }, 10000, function () {
                        if ($("#rec1td").css("display") == 'none') {
                            resend1(); // if ack was killed , then resend the packet
                        } else
                            $("#rec1td").css("background-color", "yellow");
                    });
                } else { // if packet was been killed
                    resend1();

                } //end else
            } //end callBack() func
        ) // end func animate()
    } // end packet1()

    ////////////////// for 1 packet //////////////////////

    ////////////////// for 2 packet /////////////////////

    function resend2() {
        setTimeout(function () { // wait for 28.5s then send packet
            $("#mp2").text("seq=1");
            $("#rec2tdr").animate({
                top: "406px"
            }, 10000, function () { // start callBack() func
                $("#rec2ds").css("background-color", "darkblue");
                $("#rec2tdr").css("background-color", "green");
                $("#mp2").text("ack=2");
                $("#rec2tdr").animate({
                    top: "46px"
                }, 10000, function () {
                    $("#rec2tdr").css("background-color", "yellow");
                });
            })
        }, 28500) //end settimeout()
    }

    function packet2() {
        $("#mp2").text("seq=1");
        $("#rec2td").animate({
                top: "406px"
            }, 11000, function () { // start callBack() func
                if ($("#rec2td").css("display") !== 'none') {
                    $("#rec2ds").css("background-color", "darkblue");
                    $("#rec2td").css("background-color", "green");
                    $("#mp2").text("ack=2");
                    $("#rec2td").animate({
                        top: "46px"
                    }, 11000, function () {
                        if ($("#rec2td").css("display") == 'none') {
                            resend2() // if ack was killed , then resend the packet
                        } else
                            $("#rec2td").css("background-color", "yellow");
                    });
                } else {
                    resend2()
                } // end else
            } //end callBack() func
        ) // end func animate()
    } // end packet2()

    ////////////////// for 2 packet //////////////////////

    ////////////////// for 3 packet //////////////////////

    function resend3() {
        setTimeout(function () { // wait for 28.5s then send packet
            $("#mp3").text("seq=2");
            $("#rec3tdr").animate({
                top: "406px"
            }, 10000, function () { // start callBack() func
                $("#rec3ds").css("background-color", "darkblue");
                $("#rec3tdr").css("background-color", "green");
                $("#mp3").text("ack=3");
                $("#rec3tdr").animate({
                    top: "46px"
                }, 10000, function () {
                    $("#rec3tdr").css("background-color", "yellow");
                });
            })
        }, 28500) //end settimeout()
    }

    function packet3() {
        $("#mp3").text("seq=2");
        $("#rec3td").animate({
                top: "406px"
            }, 12000, function () { // start callBack() func
                if ($("#rec3td").css("display") !== 'none') {
                    $("#rec3ds").css("background-color", "darkblue");
                    $("#rec3td").css("background-color", "green");
                    $("#mp3").text("ack=3");
                    $("#rec3td").animate({
                        top: "46px"
                    }, 12000, function () {
                        if ($("#rec3td").css("display") == 'none') {
                            resend3()
                        } else
                            $("#rec3td").css("background-color", "yellow");
                    });
                } else {
                    resend3()
                } // end else
            } //end callBack() func
        ) // end func animate()
    } // end packet3()

    ////////////////// for 3 packet //////////////////////

    ////////////////// for 4 packet //////////////////////

    function resend4() {
        setTimeout(function () { // wait for 28.5s then send packet
            $("#mp4").text("seq=3");
            $("#rec4tdr").animate({
                top: "406px"
            }, 10000, function () { // start callBack() func
                $("#rec4ds").css("background-color", "darkblue");
                $("#rec4tdr").css("background-color", "green");
                $("#mp4").text("ack=4");
                $("#rec4tdr").animate({
                    top: "46px"
                }, 10000, function () {
                    $("#rec4tdr").css("background-color", "yellow");
                });
            })
        }, 28500) //end settimeout()
    }

    function packet4() {
        $("#mp4").text("seq=3");
        $("#rec4td").animate({
                top: "406px"
            }, 13000, function () { // start callBack() func
                if ($("#rec4td").css("display") !== 'none') {
                    $("#rec4ds").css("background-color", "darkblue");
                    $("#rec4td").css("background-color", "green");
                    $("#mp4").text("ack=4");
                    $("#rec4td").animate({
                        top: "46px"
                    }, 13000, function () {
                        if ($("#rec4td").css("display") == 'none') {
                            resend4()
                        } else
                            $("#rec4td").css("background-color", "yellow");
                    });
                } else {
                    resend4()
                } // end else
            } //end callBack() func
        ) // end func animate()
    } // end packet4()

    ////////////////// for 4 packet //////////////////////

    ////////////////// for 5 packet //////////////////////

    function resend5() {
        setTimeout(function () { // wait for 26.5s then send wasted packet
            $("#mp5").text("seq=4");
            $("#rec5tdr").animate({
                top: "406px"
            }, 10000, function () { // start callBack() func
                $("#rec5ds").css("background-color", "darkblue");
                $("#rec5tdr").css("background-color", "green");
                $("#mp5").text("ack=5");
                $("#rec5tdr").animate({
                    top: "46px"
                }, 10000, function () {
                    $("#rec5tdr").css("background-color", "yellow");
                });
            })
        }, 26500) //end settimeout()

    }

    function packet5() {
        $("#mp5").text("seq=4");
        $("#rec5td").animate({
                top: "406px"
            }, 14000, function () { // start callBack() func
                if ($("#rec5td").css("display") !== 'none') {
                    $("#rec5ds").css("background-color", "darkblue");
                    $("#rec5td").css("background-color", "green");
                    $("#mp5").text("ack=5");
                    $("#rec5td").animate({
                        top: "46px"
                    }, 14000, function () {
                        if ($("#rec5td").css("display") == 'none') {
                            resend5()
                        } else
                            $("#rec5td").css("background-color", "yellow");
                    });
                } else {
                    resend5()
                } // end else
            } //end callBack() func
        ) // end func animate()
    } // end packet5()

    ////////////////// for 5 packet //////////////////////


    ////////// active button send /////////

    $("button").click(function () {

        packet1(), packet2(), packet3(), packet4(), packet5()
    })




}) // end .ready()
