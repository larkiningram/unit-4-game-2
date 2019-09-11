// initialize variables

// var characters = {};
var hp = { obi: 120, luke: 100, sid: 140, maul: 170};
var ap = 6;
var cap = {obi: 15, luke: 12, sid: 10, maul: 17};
var you = "";
var them = "";

$(".hp1").html("HP: " + hp.obi);
$(".hp2").html("HP: " + hp.luke);
$(".hp3").html("HP: " + hp.sid);
$(".hp4").html("HP: " + hp.maul);

$(".obi-wan").attr({ healthPoints: hp, attackPower: ap, counterAttackPower: cap });
$(".luke").attr({ healthPoints: hp, attackPower: ap, counterAttackPower: cap });
$(".sid").attr({ healthPoints: hp, attackPower: ap, counterAttackPower: cap });
$(".maul").attr({ healthPoints: hp, attackPower: ap, counterAttackPower: cap });



// restart function
function restart() {
    hp = { obi: 120, luke: 100, sid: 140, maul: 170 };
    ap = 6;
    cap = {obi: 15, luke: 12, sid: 10, maul: 17};

    $(".obi-wan").attr({ healthPoints: hp.obi, attackPower: ap, counterAttackPower: cap });
    $(".luke").attr({ healthPoints: hp.luke, attackPower: ap, counterAttackPower: cap });
    $(".sid").attr({ healthPoints: hp.sid, attackPower: ap, counterAttackPower: cap });
    $(".maul").attr({ healthPoints: hp.maul, attackPower: ap, counterAttackPower: cap });

    $("#obi-wan").html("HP: " + hp.obi);
    $("#luke").html("HP: " + hp.luke);
    $("#sid").html("HP: " + hp.sid);
    $("#maul").html("HP: " + hp.maul);

}


// stats function
function update() {
    ap += 6;
    $("#obi-wan").html("HP: " + hp.obi);
    $("#luke").html("HP: " + hp.luke);
    $("#sid").html("HP: " + hp.sid);
    $("#maul").html("HP: " + hp.maul);
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



function chooseCharacter() {
    //choose your character

    $(".obi-wan").on("click", function () {
        $(".init, .name, .hp").animate({
            opacity: "0.05"
        });
        $(".enemy").animate({
            opacity: "1"
        });

        $(".obi-wan, #obi-wan, .hp1").animate({
            opacity: "1"
        });
        $(".obi-wan-en, #obi-wan-en").animate({
            opacity: "0.05"
        });
        you = "Obi-Wan";
        // $(".user").html(you);
        chooseOpponent();

    });

    $(".luke").on("click", function () {
        $(".init, .name, .hp").animate({
            opacity: "0.05"
        });
        $(".enemy").animate({
            opacity: "1"
        });
        $(".luke, #luke, .hp2").animate({
            opacity: "1"
        });
        $(".luke-en, #luke-en").animate({
            opacity: "0.05"
        });
        you = "Luke";
        // $(".user").html(you);
        chooseOpponent();

    });

    $(".sid").on("click", function () {
        $(".init, .name, .hp").animate({
            opacity: "0.05"
        });
        $(".enemy").animate({
            opacity: "1"
        });
        $(".sid, #sid, .hp3").animate({
            opacity: "1"
        });
        $(".sid-en, #sid-en").animate({
            opacity: "0.05"
        });
        you = "Darth Sidious";
        // $(".user").html(you);
        chooseOpponent();

    });

    $(".maul").on("click", function () {
        $(".init, .name, .hp").animate({
            opacity: "0.05"
        });
        $(".enemy").animate({
            opacity: "1"
        });

        $(".maul, #maul, .hp4").animate({
            opacity: "1"
        });
        $(".maul-en, #maul-en").animate({
            opacity: "0.05"
        });
        you = "Darth Maul";
        // $(".user").html(you);
        chooseOpponent();

    });
};

function chooseOpponent() {

    $(".obi-wan-en").on("click", function () {
        them = "Obi-Wan";
        // $(".enemy").animate({
        //     opacity: "0.05"
        // });
        $(".obi-wan-en, #obi-wan-en").animate({
            opacity: "0.05"
        });
        $(".chal-name").html(them);
        $(".chal").animate({
            opacity: "1"
        });
        $(".chal").html("HP: " + hp.obi);
        $(".chal-name").after('<input type="image" class="chal" src="assets/images/obi.jpg" name="image" width="150">');
        attack();
    });

    $(".luke-en").on("click", function () {
        them = "Luke";
        // $(".enemy").animate({
        //     opacity: "0.05"
        // });
        $(".luke-en, #luke-en").animate({
            opacity: "0.05"
        });
        $(".chal-name").html(them);
        $(".chal").animate({
            opacity: "1"
        });
        $(".chal").html("HP: " + hp.luke);
        $(".chal-name").after('<input type="image" class="chal" src="assets/images/luke.jpg" name="image" width="150">');
        attack();
    });

    $(".sid-en").on("click", function () {
        them = "Darth Sidious";
        // $(".enemy").animate({
        //     opacity: "0.05"
        // });
        $(".sid-en, #sid-en").animate({
            opacity: "0.05"
        });
        $(".chal-name").html(them);
        $(".chal").animate({
            opacity: "1"
        });
        $(".chal").html("HP: " + hp.sid);
        $(".chal-name").after('<input type="image" class="chal" src="assets/images/sid.jpg" name="image" width="150">');
        attack();
    });

    $(".maul-en").on("click", function () {
        them = "Darth Maul";
        // $(".enemy").animate({
        //     opacity: "0.05"
        // });
        $(".maul-en, #maul-en").animate({
            opacity: "0.05"
        });
        $(".chal-name").html(them);
        $(".chal").animate({
            opacity: "1"
        });
        $(".chal").html("HP: " + hp.maul);
        $(".chal-name").after('<input type="image" class="chal" src="assets/images/maul.jpg" name="image" width="150">');
        attack();
    });

    // statsUpdater();
}

function attack() {

    $("button").on("click", function () {
        hp.them -= you.ap;
        you.ap += 6;
    })

    console.log(them.ap);

}

chooseCharacter();

