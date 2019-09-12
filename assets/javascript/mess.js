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

function userObi() {
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
};

function userLuke() {
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
};

function userSid() {
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
};

function userMaul() {
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
};

function fightObi() {
    them = "Obi-Wan";
    $(".obi-wan-en, #obi-wan-en").animate({
        opacity: "0.05"
    });
    $(".chal-name").html(them);
    $(".chal").animate({
        opacity: "1"
    });
    $(".chal").html("HP: " + hp.obi);
    $(".chal-name").after('<input type="image" class="chal" src="assets/images/obi.jpg" name="image" width="150">');

    $("button").on("click", function () {
        if (hp.obi > 32) {
            hp.obi -= ap;
            console.log(hp.obi);

            ap += 6;
            $(".chal").html("HP: " + hp.obi);
        }
        else {
            hp.obi = 0;
            $(".chal").html("HP: " + hp.obi);
            $(".hpe").after("YOU'VE DEFEATED OBI-WAN KENOBI");

            play();
        }
    });
};

function fightLuke() {
    them = "Luke";
    $(".luke-en, #luke-en").animate({
        opacity: "0.05"
    });
    $(".chal-name").html(them);
    $(".chal").animate({
        opacity: "1"
    });
    $(".chal").html("HP: " + hp.luke);
    $(".chal-name").after('<input type="image" class="chal" src="assets/images/luke.jpg" name="image" width="150">');

    $("button").on("click", function () {
        if (hp.luke > 20) {
            hp.luke -= ap;
            console.log(hp.luke);

            ap += 6;
            $(".chal").html("HP: " + hp.luke);
        }
        else {
            hp.luke = 0;
            $(".chal").html("HP: " + hp.luke);
            $(".hpe").after("YOU'VE DEFEATED LUKE SKYWALKER");

            play();
        }
    });
};

function fightSid() {
    them = "Darth Sidious";
    $(".sid-en, #sid-en").animate({
        opacity: "0.05"
    });
    $(".chal-name").html(them);
    $(".chal").animate({
        opacity: "1"
    });
    $(".chal").html("HP: " + hp.sid);
    $(".chal-name").after('<input type="image" class="chal" src="assets/images/sid.jpg" name="image" width="150">');

    $("button").on("click", function () {
        if (hp.sid > 24) {
            hp.sid -= ap;
            console.log(hp.sid);

            ap += 6;
            $(".chal").html("HP: " + hp.sid);
        }
        else {
            hp.sid = 0;
            $(".chal").html("HP: " + hp.sid);
            $(".hpe").after("YOU'VE DEFEATED DARTH SIDIOUS");

            play();
        }
    });
};

function fightMaul() {
    them = "Darth Maul";
    $(".maul-en, #maul-en").animate({
        opacity: "0.05"
    });
    $(".chal-name").html(them);
    $(".chal").animate({
        opacity: "1"
    });
    $(".chal").html("HP: " + hp.maul);
    $(".chal-name").after('<input type="image" class="chal" src="assets/images/maul.jpg" name="image" width="150">');


    $("button").on("click", function () {
        if (hp.maul > 20) {
            hp.maul -= ap;
            console.log(hp.maul);

            ap += 6;
            $(".chal").html("HP: " + hp.maul);
        }
        else {
            hp.maul = 0;
            $(".chal").html("HP: " + hp.maul);
            $(".hpe").after("YOU'VE DEFEATED DARTH MAUL");

            play();
        }

    });
};


function choose() {
    $(".obi-wan").on("click", userObi);

    $(".luke").on("click", userLuke);

    $(".sid").on("click", userSid);

    $(".maul").on("click", userMaul);
};

function play() {
    $(".obi-wan-en").on("click", fightObi);

    $(".luke-en").on("click", fightLuke);

    $(".sid-en").on("click", fightSid);

    $(".maul-en").on("click", fightMaul);
};

function game() {
    restart();
    choose();
    play();

    // var again = prompt("What would you like to do? Press 'c' to continue with your character against another challenger, 'n' to select a new character, or 'q' to quit the game.");

    // if (again == "c") {
    //     play();
    // }
    // else if (again == "n") {
    //     game();
    // }
    // else if (again == "q") {
    //     restart();
    // }
};

game();