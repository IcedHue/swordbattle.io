import Phaser from "phaser";
function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);


    return (hours == "00"?"": hours+"h ") + (minutes == "00"?"": minutes+"m ") + seconds+"s";
  }


class OpenScene extends Phaser.Scene {
    constructor(callback) {
        super();
        this.callback = callback;
    }
    setLoad(load) {
    }
    preload() {
      try {
        if(this.mobile) {
          document.getElementsByClassName("grecaptcha-badge")[0].style.transform = "scale(0)";
          document.getElementsByClassName("grecaptcha-badge")[0].style.transformOrigin = "0 0";
        }
      }
      catch(e) {
        console.log("captcha hide fail", e);
      }
      console.time("load");
        this.e = true;
        this.background = this.add.rectangle(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight, 0xFF5F1F).setOrigin(0).setScrollFactor(0, 0).setScale(2); // OLD HEX: 008800
   this.loadText =  this.add.text(0,0,"Loading").setOrigin(0.5,0.5);
   this.progressText = this.add.text(0,0,"please wait.").setOrigin(0.5,0.5);

      this.loadText.setFontSize(this.canvas.width/20);
      this.progressText.setFontSize(this.canvas.width/40);
      this.loadText.x = this.canvas.width/2;
      this.loadText.y = this.canvas.height/2;
      this.progressText.x = this.canvas.width/2;
      this.progressText.y = this.canvas.height/2 + this.canvas.height/10;

let loaded = [];
 this.lastProgress = Date.now();

      this.load.on("fileprogress", function(file, progress){
        this.lastProgress = Date.now();
        // var key = file.key;
        var loader = this.load;
var total = loader.totalToLoad;
var remainder = loader.list.size + loader.inflight.size;
var progress = 1 - (remainder / total);
        this.progressText.setText((progress*100).toFixed(1)+"%");
        // log remaining file keys

    }, this);
    this.load.on("filecomplete",  (file) => {
    loaded.push(file);

      let remaining = this.load.list.entries.map(function (item) {
        return item.key;
    }).filter(function (key) {
        return !loaded.includes(key);
    });

    // if(remaining.length == 0 && !this.readytogo) {
    //   this.readytogo = setTimeout(() => {
    //   if(this.checkInt) {
    //     clearInterval(this.checkInt);
    //   }
    //   this.scene.stop();
    //   this.scene.start("title");
    //   }, 1000);
    // }


    console.log("remaining", remaining);
    console.log("loaded", loaded);
  });
        this.load.plugin("rexvirtualjoystickplugin",    "/joystick.js", true);
        this.load.plugin("rexbbcodetextplugin", "/textplus.js", true);

        this.load.image("playerPlayer", "/assets/images/player.png");
        this.load.image("playerSword", "/assets/images/sword.png");

        this.load.image("crown", "/assets/images/crown.png");

        // samurai evolution
        this.load.image("samuraiPlayer", "/assets/images/samuraiSkin.png");
        // warrior evolution
        this.load.image("warriorPlayer", "/assets/images/warriorSkin.png");
        // knight evolution
        this.load.image("knightPlayer", "/assets/images/knightSkin.png");

        // vampire evolution
        this.load.image("vampirePlayer", "/assets/images/vampireSkin.png");
        // rook evolution
        this.load.image("rookPlayer", "/assets/images/rookSkin.png");

        this.load.image("berserkerPlayer", "/assets/images/berserkerSkin.png");
        this.load.image("tankPlayer", "/assets/images/tankSkin.png");
        // warrior evolution
        this.load.image("warriorPlayer", "/assets/images/warriorSkin.png");
        // knight evolution
        this.load.image("knightPlayer", "/assets/images/knightSkin.png");

        // vampire evolution
        this.load.image("vampirePlayer", "/assets/images/vampireSkin.png");
        // rook evolution
        this.load.image("rookPlayer", "/assets/images/rookSkin.png");

        // archer evolution
        this.load.image("archerPlayer", "/assets/images/archerSkin.png");

        // Juggernaut evolution
        this.load.image("juggernautPlayer", "/assets/images/juggernautPlayer.png");

        // archergod evolution
        this.load.image("archergodPlayer", "/assets/images/archergodSkin.png");

        // fisherman evolution
        this.load.image("fishermanPlayer", "/assets/images/fishermanSkin.png");

        // lumberjack evolution
        this.load.image("lumberjackPlayer", "/assets/images/lumberjackSkin.png");

        // samurai evolution
        this.load.image("samuraiPlayer", "/assets/images/samuraiSkin.png");


        this.load.image("background", "/assets/images/background.jpeg");
        this.load.image("coin", "/assets/images/coin.png");

        this.load.image("chest", "/assets/images/chests/chest.png");
        this.load.image("epicChest", "/assets/images/chests/epicChest.png");
        this.load.image("legendaryChest", "/assets/images/chests/legendaryChest.png");
        this.load.image("mythicalChest", "/assets/images/chests/mythicalChest.png");
        this.load.image("rareChest", "/assets/images/chests/rareChest.png");
        this.load.image("uncommonChest", "/assets/images/chests/uncommonChest.png");

        this.load.image("kill", "/assets/images/kill.png");
        this.load.image("hitParticle", "/assets/images/hitparticle.png");
        this.load.image("starParticle", "/assets/images/star.png");
        this.load.image("bush", "/assets/images/bush.png");

        this.load.image("chatbtn", "/assets/images/chat.png");
        this.load.image("throwbtn", "/assets/images/throw.png");
        this.load.image("loginbtn", "/assets/images/login.png");
        this.load.image("signupbtn", "/assets/images/signup.png");
        this.load.image("playAgainBtn", "/assets/images/playAgain.png");
        this.load.image("homeBtn", "/assets/images/home.png");
        this.load.image("settingsBtn", "/assets/images/settingsBtn.png");
        this.load.image("shopBtn", "/assets/images/shop.png");
        this.load.image("abilityBtn", "/assets/images/ability.png");

        this.load.audio("coin", "/assets/sound/coin.m4a");
        this.load.audio("damage", "/assets/sound/damage.mp3");
        this.load.audio("hit", "/assets/sound/hitenemy.wav");
        this.load.audio("winSound", "/assets/sound/win.m4a");
        this.load.audio("loseSound", "/assets/sound/lost.mp3");
        this.load.audio("chestOpen", "/assets/sound/chest.wav");
        this.load.audio("chestHit", "/assets/sound/chesthit.wav");


        this.load.image("opening", "/assets/images/openingFall.png");
        this.load.html("title", "/title.html");
        this.load.html("promo", "/promo.html");
        this.load.html("login", "/login.html");
        this.load.html("shop", "/shop");
        this.load.html("signup", "/signup.html");
        this.load.html("dropdown", "/dropdown.html");
        this.load.html("footer", "/footer.html");
        this.load.html("settings", "/settings.html");
        this.load.html("featured", "/featured.html");
        this.load.html("chat", "/chatbox.html");
        this.load.audio("openingsound", "/assets/sound/opening.mp3");


        this.scale.fullscreenTarget = document.getElementById("game");
        console.timeEnd("load");

        this.checkInt = setInterval(() => {
          console.log(Date.now()- this.lastProgress);

      if((Date.now()- this.lastProgress) > 10000) {
        // reload
        window.location.reload();
      }

    }, 100);

    }

    create() {
      console.log("create");
      clearInterval(this.checkInt);
             this.scene.stop();
             this.scene.start("title");
    }
    update() {

    }
}

export default OpenScene;
