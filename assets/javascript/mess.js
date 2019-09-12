// initialize variables

var hp = { obi: 120, luke: 100, sid: 140, maul: 170 };
var ap = 6;
var cap = {
    obi: Math.floor(Math.random() * 15 + 5),
    luke: Math.floor(Math.random() * 15 + 5),
    sid: Math.floor(Math.random() * 15 + 5),
    maul: Math.floor(Math.random() * 15 + 5)
};
var user = "";
var them = "";
var wins = 0;
var losses = 0;

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
    cap = {
        obi: Math.floor(Math.random() * 24 + 8),
        luke: Math.floor(Math.random() * 24 + 8),
        sid: Math.floor(Math.random() * 24 + 8),
        maul: Math.floor(Math.random() * 24 + 8)
    };

    $(".obi-wan").attr({ healthPoints: hp.obi, attackPower: ap, counterAttackPower: cap });
    $(".luke").attr({ healthPoints: hp.luke, attackPower: ap, counterAttackPower: cap });
    $(".sid").attr({ healthPoints: hp.sid, attackPower: ap, counterAttackPower: cap });
    $(".maul").attr({ healthPoints: hp.maul, attackPower: ap, counterAttackPower: cap });

    $(".hp1").html("HP: " + hp.obi);
    $(".hp2").html("HP: " + hp.luke);
    $(".hp3").html("HP: " + hp.sid);
    $(".hp4").html("HP: " + hp.maul);

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
    user = "obi";

    /////

    $(".luke-en").on("click", function () {
        fightLuke("obi", "luke");
    });

    $(".sid-en").on("click", function () {
        fightSid("obi", "sid");
    });

    $(".maul-en").on("click", function () {
        fightMaul("obi", "maul");
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
    user = "luke";

    /////

    $(".obi-wan-en").on("click", function () {
        fightObi("luke", "obi");
    });

    $(".sid-en").on("click", function () {
        fightSid("luke", "sid");
    });

    $(".maul-en").on("click", function () {
        fightMaul("luke", "maul");
    });


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
    user = "sid";

    /////

    $(".luke-en").on("click", function () {
        fightLuke("sid", "luke");
    });

    $(".obi-wan-en").on("click", function () {
        fightObi("sid", "obi");
    });

    $(".maul-en").on("click", function () {
        fightMaul("sid", "maul");
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
    user = "maul";

    /////

    $(".luke-en").on("click", function () {
        fightLuke("maul", "luke");
    });

    $(".sid-en").on("click", function () {
        fightSid("maul", "sid");
    });

    $(".obi-wan-en").on("click", function () {
        fightObi("maul", "obi");
    });


};

function fightObi(player1, player2) {
    them = "Obi-Wan";
    $(".obi-wan-en, #obi-wan-en").animate({
        opacity: "0.05"
    });
    $(".chal-name").html(them);
    $(".chal").animate({
        opacity: "1"
    });
    $(".chal").html("HP: " + hp.obi);
    $(".add").html('<input type="image" class="chal" src="assets/images/obi.jpg" name="image" width="150">');
    $(".defeat").html("");

    $("button").on("click", function () {
        if (hp.obi > 32) {
            hp.obi -= ap;
            ap += 6;
            $(".chal").html("HP: " + hp.obi);
            counterAttack(player1, player2);
            $(".defeat").html("You attacked Obi-Wan for " + ap + " damage.");
        }
        else {
            hp.obi = 0;
            wins++;
            $(".chal").html("HP: " + hp.obi);
            $(".ca").html("");
            $(".defeat").html("YOU'VE DEFEATED OBI-WAN KENOBI");
        }   
    });
};

function fightLuke(player1, player2) {
    them = "Luke";
    $(".luke-en, #luke-en").animate({
        opacity: "0.05"
    });
    $(".chal-name").html(them);
    $(".chal").animate({
        opacity: "1"
    });
    $(".chal").html("HP: " + hp.luke);
    $(".add").html('<input type="image" class="chal" src="assets/images/luke.jpg" name="image" width="150">');
    $(".defeat").html("");

    $("button").on("click", function () {
        if (hp.luke > 20) {
            hp.luke -= ap;
            ap += 6;
            $(".chal").html("HP: " + hp.luke);
            counterAttack(player1, player2);
            $(".defeat").html("You attacked Luke for " + ap + " damage.");

        }
        else {
            hp.luke = 0;
            wins++;
            $(".chal").html("HP: " + hp.luke);
            $(".ca").html("");
            $(".defeat").html("YOU'VE DEFEATED LUKE SKYWALKER");
        }
    });
};

function fightSid(player1, player2) {
    them = "Darth Sidious";
    $(".sid-en, #sid-en").animate({
        opacity: "0.05"
    });
    $(".chal-name").html(them);
    $(".chal").animate({
        opacity: "1"
    });
    $(".chal").html("HP: " + hp.sid);
    $(".add").html('<input type="image" class="chal" src="assets/images/sid.jpg" name="image" width="150">');
    $(".defeat").html("");

    $("button").on("click", function () {
        if (hp.sid > 24) {
            hp.sid -= ap;
            ap += 6;
            $(".chal").html("HP: " + hp.sid);
            counterAttack(player1, player2);
            $(".defeat").html("You attacked Sidious for " + ap + " damage.");

        }
        else {
            wins++;
            hp.sid = 0;
            $(".chal").html("HP: " + hp.sid);
            $(".ca").html("");
            $(".defeat").html("YOU'VE DEFEATED DARTH SIDIOUS");
        }
    });
};

function fightMaul(player1, player2) {
    them = "Darth Maul";
    $(".maul-en, #maul-en").animate({
        opacity: "0.05"
    });
    $(".chal-name").html(them);
    $(".chal").animate({
        opacity: "1"
    });
    $(".chal").html("HP: " + hp.maul);
    $(".add").html('<input type="image" class="chal" src="assets/images/maul.jpg" name="image" width="150">');
    $(".defeat").html("");

    $("button").on("click", function () {
        if (hp.maul > 20) {
            hp.maul -= ap;
            ap += 6;
            $(".chal").html("HP: " + hp.maul);
            counterAttack(player1, player2);
            $(".defeat").html("You attacked Maul for " + ap + " damage.");

        }
        else {
            hp.maul = 0;
            wins++;
            $(".chal").html("HP: " + hp.maul);
            $(".ca").html("");
            $(".defeat").html("YOU'VE DEFEATED DARTH MAUL");
            // $(".wins").html(wins);
        }

    });
};

function counterAttack(player1, player2) {
    var power
    if (player2 === "obi") {
        power = cap.obi;
        $(".ca").html("Obi-Wan attacked you for " + cap.obi + " points.");
    }
    else if (player2 === "luke") {
        power = cap.luke;
        $(".ca").html("Luke attacked you for " + cap.luke + " points.");

    }
    else if (player2 === "sid") {
        power = cap.sid;
        $(".ca").html("Sidious attacked you for " + cap.sid + " points.");

    }
    else if (player2 === "maul") {
        power = cap.maul;
        $(".ca").html("Maul attacked you for " + cap.maul + " points.");
    };

    if (player1 === "obi") {
        if (hp.obi > power) {
            hp.obi -= power;
            $(".hp1").html("HP: " + hp.obi);
        }
        else {
            hp.obi = 0;
            $(".defeat").html("YOU LOST");
        }
    }
    else if (player1 === "luke") {
        if (hp.luke > power) {
            hp.luke -= power;
            $(".hp2").html("HP: " + hp.luke);
        }
        else {
            hp.luke = 0;
            $(".defeat").html("YOU LOST");
        }
    }
    else if (player1 === "sid") {
        if (hp.sid > power) {
            hp.sid -= power;
            $(".hp3").html("HP: " + hp.sid);
        }
        else {
            hp.sid = 0;
            $(".defeat").html("YOU LOST");
        }
    }
    else if (player1 === "maul") {
        if (hp.maul > power) {
            hp.maul -= power;
            $(".hp4").html("HP: " + hp.maul);
        }
        else {
            hp.maul = 0;
            $(".defeat").html("YOU LOST");
        }
    };

};


function choose() {
    $(".obi-wan").on("click", userObi);

    $(".luke").on("click", userLuke);

    $(".sid").on("click", userSid);

    $(".maul").on("click", userMaul);
};

// function play() {
//     $(".obi-wan-en").on("click", fightObi);

//     $(".luke-en").on("click", fightLuke);

//     $(".sid-en").on("click", fightSid);

//     $(".maul-en").on("click", fightMaul);
// };

function game() {
    restart();
    choose();
    // play();
    // counterwAttack(user, them);
};

game();