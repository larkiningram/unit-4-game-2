// initialize variables

var hp = 120;
var ap = 6;
var cap = 15;
var characters = ["obi-wan", "luke", "sid", "maul"];



// restart function
function restart() {
    hp = 120;
    ap = 6;
    cap = 15;

    $(".obi-wan").attr({ healthPoints: hp, attackPower: ap, counterAttackPower: cap });
    $(".luke").attr({ healthPoints: hp, attackPower: ap, counterAttackPower: cap });
    $(".sid").attr({ healthPoints: hp, attackPower: ap, counterAttackPower: cap });
    $(".maul").attr({ healthPoints: hp, attackPower: ap, counterAttackPower: cap });
}


// stats function
function update() {
    ap += 6;
    $(".obi-wan").attr({ healthPoints: hp, attackPower: ap, counterAttackPower: cap });
    $(".luke").attr({ healthPoints: hp, attackPower: ap, counterAttackPower: cap });
    $(".sid").attr({ healthPoints: hp, attackPower: ap, counterAttackPower: cap });
    $(".maul").attr({ healthPoints: hp, attackPower: ap, counterAttackPower: cap });
}

// game function

// $(".obi-wan").on("click", function () {
//     $(".enemy1").html(".luke");
//     $(".enemy2").html(".sid");
//     $(".enemy3").html(".maul");
//     $(".sid, .luke, .maul").css(
//         "border", "red"
//     );
// });

// $(".luke").on("click", function () {
//     $(".sid, .luke, .maul").css(
//         "border", "red"
//     );
// });



function game() {
    //choose your character

    $(".obi-wan").on("click", function () {
        $(".init").animate({
            opacity: "0.05"
        });
        $(".enemy").animate({
            opacity: "1"
        });
        $(".obi-wan").animate({
            opacity: "0.05"
        });
    });

    $(".luke").on("click", function () {
        $(".init").animate({
            opacity: "0.05"
        });
        $(".enemy").animate({
            opacity: "1"
        });
        $(".luke").animate({
            opacity: "0.05"
        });
    });

    $(".sid").on("click", function () {
        $(".init").animate({
            opacity: "0.05"
        });
        $(".enemy").animate({
            opacity: "1"
        });
        $(".sid").animate({
            opacity: "0.05"
        });
    });

    $(".maul").on("click", function () {
        $(".init").animate({
            opacity: "0.05"
        });
        $(".enemy").animate({
            opacity: "1"
        });
        $(".maul").animate({
            opacity: "0.05"
        });
    });

    $("button").on("click", function () {
        ap += 6;
    })
}

game();
