var backgroundAgent = document.querySelector(".background-agent");
var imageAgent = document.querySelector(".image-agent");
var tittleFunction = document.getElementById("tittle-function");
var nameAgent = document.getElementById("name-agent");
var iconFuntion = document.getElementById("icon-function");
var habilite1 = document.getElementById("habilit-1");
var habilite2 = document.getElementById("habilit-2");
var habilite3 = document.getElementById("habilit-3");
var habilite4 = document.getElementById("habilit-4");
var buttons = document.getElementById("button-habilites");
var buttons1 = document.getElementById("button-habilites1");
var buttons2 = document.getElementById("button-habilites2");
var buttons3 = document.getElementById("button-habilites3");
var buttons4 = document.getElementById("button-habilites4");
var bioAgent = document.querySelector(".bio");
var bioFuntion = document.getElementById("bio-function");
var function2 = document.getElementById("function2");
var cardbackground = document.getElementById("card-agent");
var audioAgent = document.getElementById("audio-agent");

const banner = document.querySelector(".banner");
const cardAgent = document.querySelector(".card-agent");
const harbor = document.getElementById("button-harbor");
const astra = document.getElementById("button-astra");
const breach = document.getElementById("button-breach");
const brinstone = document.getElementById("button-brinstone");
const chamber = document.getElementById("button-chamber");
const cypher = document.getElementById("button-cypher");
const fade = document.getElementById("button-fade");
const jett = document.getElementById("button-jett");
const kayo = document.getElementById("button-kayo");
const killjoy = document.getElementById("button-killjoy");
const neon = document.getElementById("button-neon");
const omen = document.getElementById("button-omen");
const phoenix = document.getElementById("button-phoenix");
const raze = document.getElementById("button-raze");
const reyna = document.getElementById("button-reyna");
const sage = document.getElementById("button-sage");
const skye = document.getElementById("button-skye");
const sova = document.getElementById("button-sova");
const viper = document.getElementById("button-viper");
const yoru = document.getElementById("button-yoru");
const lista = document.querySelector("list-icons");

function visibility() {
  cardAgent.style.visibility = "visible";
  banner.style.visibility = "hidden";
}
function offBio() {
  function2.style.opacity = "0";
  bioFuntion.style.opacity = "0";
}
function onBio() {
  function2.removeAttribute("style");
  bioFuntion.removeAttribute("style");
}
function animacao() {
  imageAgent.style.animation = "";
  setTimeout(() => (imageAgent.style.animation = "goright 0.3s linear"), 5);
  backgroundAgent.style.animation = "";
  setTimeout(() => (backgroundAgent.style.animation = "opacity 1s linear"), 5);
}

function opacityDefalt() {
  buttons.style.opacity = "100%";
  buttons1.style.opacity = "50%";
  buttons2.style.opacity = "50%";
  buttons3.style.opacity = "50%";
  buttons4.style.opacity = "50%";
}

function opacitybuttons() {
  buttons.style.opacity = "100%";
  buttons1.style.opacity = "50%";
  buttons2.style.opacity = "50%";
  buttons3.style.opacity = "50%";
  buttons4.style.opacity = "50%";
}
function opacitybuttons1() {
  buttons1.style.opacity = "100%";
  buttons.style.opacity = "50%";
  buttons2.style.opacity = "50%";
  buttons3.style.opacity = "50%";
  buttons4.style.opacity = "50%";
}
function opacitybuttons2() {
  buttons2.style.opacity = "100%";
  buttons.style.opacity = "50%";
  buttons1.style.opacity = "50%";
  buttons3.style.opacity = "50%";
  buttons4.style.opacity = "50%";
}
function opacitybuttons3() {
  buttons3.style.opacity = "100%";
  buttons.style.opacity = "50%";
  buttons1.style.opacity = "50%";
  buttons2.style.opacity = "50%";
  buttons4.style.opacity = "50%";
}
function opacitybuttons4() {
  buttons4.style.opacity = "100%";
  buttons.style.opacity = "50%";
  buttons1.style.opacity = "50%";
  buttons2.style.opacity = "50%";
  buttons3.style.opacity = "50%";
}
function offYoru() {
  yoru.style.opacity = "70%";
  yoru.style.borderColor = "transparent";
}
function offViper() {
  viper.style.opacity = "70%";
  viper.style.borderColor = "transparent";
}
function offSova() {
  sova.style.opacity = "70%";
  sova.style.borderColor = "transparent";
}
function offSkye() {
  skye.style.opacity = "70%";
  skye.style.borderColor = "transparent";
}
function offSage() {
  sage.style.opacity = "70%";
  sage.style.borderColor = "transparent";
}
function offReyna() {
  reyna.style.opacity = "70%";
  reyna.style.borderColor = "transparent";
}
function offRaze() {
  raze.style.opacity = "70%";
  raze.style.borderColor = "transparent";
}
function offPhoenix() {
  phoenix.style.opacity = "70%";
  phoenix.style.borderColor = "transparent";
}
function offOmen() {
  omen.style.opacity = "70%";
  omen.style.borderColor = "transparent";
}
function offNeon() {
  neon.style.opacity = "70%";
  neon.style.borderColor = "transparent";
}
function offKilljoy() {
  killjoy.style.opacity = "70%";
  killjoy.style.borderColor = "transparent";
}
function offKayo() {
  kayo.style.opacity = "70%";
  kayo.style.borderColor = "transparent";
}
function offJett() {
  jett.style.opacity = "70%";
  jett.style.borderColor = "transparent";
}
function offHarbor() {
  harbor.style.opacity = "70%";
  harbor.style.borderColor = "transparent";
}
function offFade() {
  fade.style.opacity = "70%";
  fade.style.borderColor = "transparent";
}
function offCypher() {
  cypher.style.opacity = "70%";
  cypher.style.borderColor = "transparent";
}
function offChamber() {
  chamber.style.opacity = "70%";
  chamber.style.borderColor = "transparent";
}
function offBrimstone() {
  brinstone.style.opacity = "70%";
  brinstone.style.borderColor = "transparent";
}
function offBreach() {
  breach.style.opacity = "70%";
  breach.style.borderColor = "transparent";
}
function offAstra() {
  astra.style.opacity = "70%";
  astra.style.borderColor = "transparent";
}

function activeYoru() {
  yoru.style.opacity = "100%";
  yoru.style.borderColor = "#EAEEB2";
  yoru.style.borderStyle = "solid";
  offViper();
  offSova();
  offSkye();
  offSage();
  offReyna();
  offRaze();
  offPhoenix();
  offOmen();
  offNeon();
  offKilljoy();
  offKayo();
  offJett();
  offHarbor();
  offFade();
  offCypher();
  offChamber();
  offBrimstone();
  offBreach();
  offAstra();
}
function activeViper() {
  viper.style.opacity = "100%";
  viper.style.borderColor = "#EAEEB2";
  viper.style.borderStyle = "solid";
  offYoru();
  offSova();
  offSkye();
  offSage();
  offReyna();
  offRaze();
  offPhoenix();
  offOmen();
  offNeon();
  offKilljoy();
  offKayo();
  offJett();
  offHarbor();
  offFade();
  offCypher();
  offChamber();
  offBrimstone();
  offBreach();
  offAstra();
}
function activeSova() {
  sova.style.opacity = "100%";
  sova.style.borderColor = "#EAEEB2";
  sova.style.borderStyle = "solid";
  offYoru();
  offViper();
  offSkye();
  offSage();
  offReyna();
  offRaze();
  offPhoenix();
  offOmen();
  offNeon();
  offKilljoy();
  offKayo();
  offJett();
  offHarbor();
  offFade();
  offCypher();
  offChamber();
  offBrimstone();
  offBreach();
  offAstra();
}
function activeSkye() {
  skye.style.opacity = "100%";
  skye.style.borderColor = "#EAEEB2";
  skye.style.borderStyle = "solid";
  offYoru();
  offViper();
  offSova();
  offSage();
  offReyna();
  offRaze();
  offPhoenix();
  offOmen();
  offNeon();
  offKilljoy();
  offKayo();
  offJett();
  offHarbor();
  offFade();
  offCypher();
  offChamber();
  offBrimstone();
  offBreach();
  offAstra();
}
function activeSage() {
  sage.style.opacity = "100%";
  sage.style.borderColor = "#EAEEB2";
  sage.style.borderStyle = "solid";
  offYoru();
  offViper();
  offSova();
  offSkye();
  offReyna();
  offRaze();
  offPhoenix();
  offOmen();
  offNeon();
  offKilljoy();
  offKayo();
  offJett();
  offHarbor();
  offFade();
  offCypher();
  offChamber();
  offBrimstone();
  offBreach();
  offAstra();
}
function activeReyna() {
  reyna.style.opacity = "100%";
  reyna.style.borderColor = "#EAEEB2";
  reyna.style.borderStyle = "solid";
  offYoru();
  offViper();
  offSova();
  offSkye();
  offSage();
  offRaze();
  offPhoenix();
  offOmen();
  offNeon();
  offKilljoy();
  offKayo();
  offJett();
  offHarbor();
  offFade();
  offCypher();
  offChamber();
  offBrimstone();
  offBreach();
  offAstra();
}
function activeRaze() {
  raze.style.opacity = "100%";
  raze.style.borderColor = "#EAEEB2";
  raze.style.borderStyle = "solid";
  offYoru();
  offViper();
  offSova();
  offSkye();
  offSage();
  offReyna();
  offPhoenix();
  offOmen();
  offNeon();
  offKilljoy();
  offKayo();
  offJett();
  offHarbor();
  offFade();
  offCypher();
  offChamber();
  offBrimstone();
  offBreach();
  offAstra();
}
function activePhoenix() {
  phoenix.style.opacity = "100%";
  phoenix.style.borderColor = "#EAEEB2";
  phoenix.style.borderStyle = "solid";
  offYoru();
  offViper();
  offSova();
  offSkye();
  offSage();
  offReyna();
  offRaze();
  offOmen();
  offNeon();
  offKilljoy();
  offKayo();
  offJett();
  offHarbor();
  offFade();
  offCypher();
  offChamber();
  offBrimstone();
  offBreach();
  offAstra();
}
function activeOmen() {
  omen.style.opacity = "100%";
  omen.style.borderColor = "#EAEEB2";
  omen.style.borderStyle = "solid";
  offYoru();
  offViper();
  offSova();
  offSkye();
  offSage();
  offReyna();
  offRaze();
  offPhoenix();
  offNeon();
  offKilljoy();
  offKayo();
  offJett();
  offHarbor();
  offFade();
  offCypher();
  offChamber();
  offBrimstone();
  offBreach();
  offAstra();
}
function activeNeon() {
  neon.style.opacity = "100%";
  neon.style.borderColor = "#EAEEB2";
  neon.style.borderStyle = "solid";
  offYoru();
  offViper();
  offSova();
  offSkye();
  offSage();
  offReyna();
  offRaze();
  offPhoenix();
  offOmen();
  offKilljoy();
  offKayo();
  offJett();
  offHarbor();
  offFade();
  offCypher();
  offChamber();
  offBrimstone();
  offBreach();
  offAstra();
}
function activeKilljoy() {
  killjoy.style.opacity = "100%";
  killjoy.style.borderColor = "#EAEEB2";
  killjoy.style.borderStyle = "solid";
  offYoru();
  offViper();
  offSova();
  offSkye();
  offSage();
  offReyna();
  offRaze();
  offPhoenix();
  offOmen();
  offNeon();
  offKayo();
  offJett();
  offHarbor();
  offFade();
  offCypher();
  offChamber();
  offBrimstone();
  offBreach();
  offAstra();
}
function activeKayo() {
  kayo.style.opacity = "100%";
  kayo.style.borderColor = "#EAEEB2";
  kayo.style.borderStyle = "solid";
  offYoru();
  offViper();
  offSova();
  offSkye();
  offSage();
  offReyna();
  offRaze();
  offPhoenix();
  offOmen();
  offNeon();
  offKilljoy();
  offJett();
  offHarbor();
  offFade();
  offCypher();
  offChamber();
  offBrimstone();
  offBreach();
  offAstra();
}
function activeJett() {
  jett.style.opacity = "100%";
  jett.style.borderColor = "#EAEEB2";
  jett.style.borderStyle = "solid";
  offYoru();
  offViper();
  offSova();
  offSkye();
  offSage();
  offReyna();
  offRaze();
  offPhoenix();
  offOmen();
  offNeon();
  offKilljoy();
  offKayo();
  offHarbor();
  offFade();
  offCypher();
  offChamber();
  offBrimstone();
  offBreach();
  offAstra();
}
function activeHarbor() {
  harbor.style.opacity = "100%";
  harbor.style.borderColor = "#EAEEB2";
  harbor.style.borderStyle = "solid";
  offYoru();
  offViper();
  offSova();
  offSkye();
  offSage();
  offReyna();
  offRaze();
  offPhoenix();
  offOmen();
  offNeon();
  offKilljoy();
  offKayo();
  offJett();
  offFade();
  offCypher();
  offChamber();
  offBrimstone();
  offBreach();
  offAstra();
}
function activeFade() {
  fade.style.opacity = "100%";
  fade.style.borderColor = "#EAEEB2";
  fade.style.borderStyle = "solid";
  offYoru();
  offViper();
  offSova();
  offSkye();
  offSage();
  offReyna();
  offRaze();
  offPhoenix();
  offOmen();
  offNeon();
  offKilljoy();
  offKayo();
  offJett();
  offHarbor();
  offCypher();
  offChamber();
  offBrimstone();
  offBreach();
  offAstra();
}
function activeCypher() {
  cypher.style.opacity = "100%";
  cypher.style.borderColor = "#EAEEB2";
  cypher.style.borderStyle = "solid";
  offYoru();
  offViper();
  offSova();
  offSkye();
  offSage();
  offReyna();
  offRaze();
  offPhoenix();
  offOmen();
  offNeon();
  offKilljoy();
  offKayo();
  offJett();
  offHarbor();
  offFade();
  offChamber();
  offBrimstone();
  offBreach();
  offAstra();
}
function activeChamber() {
  chamber.style.opacity = "100%";
  chamber.style.borderColor = "#EAEEB2";
  chamber.style.borderStyle = "solid";
  offYoru();
  offViper();
  offSova();
  offSkye();
  offSage();
  offReyna();
  offRaze();
  offPhoenix();
  offOmen();
  offNeon();
  offKilljoy();
  offKayo();
  offJett();
  offHarbor();
  offFade();
  offCypher();
  offBrimstone();
  offBreach();
  offAstra();
}
function activeBrimstone() {
  brinstone.style.opacity = "100%";
  brinstone.style.borderColor = "#EAEEB2";
  brinstone.style.borderStyle = "solid";
  offYoru();
  offViper();
  offSova();
  offSkye();
  offSage();
  offReyna();
  offRaze();
  offPhoenix();
  offOmen();
  offNeon();
  offKilljoy();
  offKayo();
  offJett();
  offHarbor();
  offFade();
  offCypher();
  offChamber();
  offBreach();
  offAstra();
}
function activeBreach() {
  breach.style.opacity = "100%";
  breach.style.borderColor = "#EAEEB2";
  breach.style.borderStyle = "solid";
  offYoru();
  offViper();
  offSova();
  offSkye();
  offSage();
  offReyna();
  offRaze();
  offPhoenix();
  offOmen();
  offNeon();
  offKilljoy();
  offKayo();
  offJett();
  offHarbor();
  offFade();
  offCypher();
  offChamber();
  offBrimstone();
  offAstra();
}
function activeAstra() {
  astra.style.opacity = "100%";
  astra.style.borderColor = "#EAEEB2";
  astra.style.borderStyle = "solid";
  offYoru();
  offViper();
  offSova();
  offSkye();
  offSage();
  offReyna();
  offRaze();
  offPhoenix();
  offOmen();
  offNeon();
  offKilljoy();
  offKayo();
  offJett();
  offHarbor();
  offFade();
  offCypher();
  offChamber();
  offBrimstone();
  offBreach();
}

yoru.addEventListener("click", function () {
  activeYoru();
  opacityDefalt();
  animacao();
  visibility();
  onBio();
  audioAgent.setAttribute("src", "src/Audios/Yoru.wav");
  nameAgent.textContent = "YORU";
  bioAgent.textContent =
    "Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.";
  tittleFunction.textContent = "DUELIST";
  bioFuntion.textContent =
    "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.";
  function2.textContent = "DUELIST";
  imageAgent.setAttribute("src", "src/img/Agents/Yoru/Yoru.png");
  backgroundAgent.style.opacity = "20%";
  backgroundAgent.setAttribute("src", "src/img/Agents/Yoru/FundoYoru.png");
  iconFuntion.setAttribute("src", "src/img/Icones/Funcoes/Duelista.png");
  habilite1.setAttribute("src", "src/img/Agents/Yoru/1.png");
  habilite2.setAttribute("src", "src/img/Agents/Yoru/2.png");
  habilite3.setAttribute("src", "src/img/Agents/Yoru/3.png");
  habilite4.setAttribute("src", "src/img/Agents/Yoru/4.png");
  document.body.style.backgroundImage =
    "linear-gradient(90deg, #4773a5, #3c659f, #345799, #314891, #313987)";
  buttons.style.backgroundColor = "#252A51";
  buttons1.style.backgroundColor = "#252A51";
  buttons2.style.backgroundColor = "#252A51";
  buttons3.style.backgroundColor = "#252A51";
  buttons4.style.backgroundColor = "#252A51";

  buttons.addEventListener("click", function () {
    bioAgent.textContent =
      "Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.";
    onBio();
    opacitybuttons();
  });
  buttons1.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP to rip an unstable dimensional fragment from reality. FIRE to throw the fragment, activating a flash that winds up once it collides with a hard surface in world.";
    offBio();
    opacitybuttons1();
  });
  buttons2.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a rift tether FIRE to send the tether forward ALT FIRE to place a stationary tether ACTIVATE to teleport to the tether's location USE to trigger a fake teleport";
    offBio();
    opacitybuttons2();
  });
  buttons3.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP an echo that transforms into a mirror image of Yoru when activated FIRE to instantly activate the mirror image and send it forward ALT FIRE to place an inactive echo USE to transform an inactive echo into a mirror image and send it forward. Mirror images explode in a blinding flash when destroyed by enemies.";
    offBio();
    opacitybuttons3();
  });
  buttons4.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a mask that can see between dimensions. FIRE to drift into Yoru's dimension, unable to be affected or seen by enemies from the outside";
    offBio();
    opacitybuttons4();
  });
});
viper.addEventListener("click", function () {
  activeViper();
  opacityDefalt();
  animacao();
  visibility();
  onBio();
  audioAgent.setAttribute("src", "src/Audios/Viper.wav");
  nameAgent.textContent = "VIPER";
  bioAgent.textContent =
    "The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mind games surely will.";
  tittleFunction.textContent = "CONTROLLER";
  bioFuntion.textContent =
    "Controllers are experts in slincing up dangerous territory to set their team up for success.";
  function2.textContent = "CONTROLLER";
  imageAgent.setAttribute("src", "src/img/Agents/Viper/Viper.png");
  backgroundAgent.style.opacity = "20%";
  backgroundAgent.setAttribute("src", "src/img/Agents/Viper/FundoViper.png");
  iconFuntion.setAttribute("src", "src/img/Icones/Funcoes/Controlador.png");
  habilite1.setAttribute("src", "src/img/Agents/Viper/1.png");
  habilite2.setAttribute("src", "src/img/Agents/Viper/2.png");
  habilite3.setAttribute("src", "src/img/Agents/Viper/3.png");
  habilite4.setAttribute("src", "src/img/Agents/Viper/4.png");
  document.body.style.backgroundImage =
    "linear-gradient(90deg, #5b9c61, #4f8c5a, #437c52, #396c49, #305d41)";
  buttons.style.backgroundColor = "#1D352A";
  buttons1.style.backgroundColor = "#1D352A";
  buttons2.style.backgroundColor = "#1D352A";
  buttons3.style.backgroundColor = "#1D352A";
  buttons4.style.backgroundColor = "#1D352A";

  buttons.addEventListener("click", function () {
    bioAgent.textContent =
      "The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mind games surely will.";
    onBio();
    opacitybuttons();
  });
  buttons1.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a gas emitter. FIRE to throw the emitter that perpetually remains throughout the round. RE-USE the ability to create a toxic gas cloud at the cost of fuel. This ability can be RE-USED more than once and can be picked up to be REDEPLOYED.";
    offBio();
    opacitybuttons1();
  });
  buttons2.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a rift tether FIRE to send the tether forward ALT FIRE to place a stationary tether ACTIVATE to teleport to the tether's location USE to trigger a fake teleport";
    offBio();
    opacitybuttons2();
  });
  buttons3.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP an echo that transforms into a mirror image of Yoru when activated FIRE to instantly activate the mirror image and send it forward ALT FIRE to place an inactive echo USE to transform an inactive echo into a mirror image and send it forward. Mirror images explode in a blinding flash when destroyed by enemies.";
    offBio();
    opacitybuttons3();
  });
  buttons4.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a mask that can see between dimensions. FIRE to drift into Yoru's dimension, unable to be affected or seen by enemies from the outside";
    offBio();
    opacitybuttons4();
  });
});
sova.addEventListener("click", function () {
  activeSova();
  opacityDefalt();
  animacao();
  visibility();
  onBio();
  audioAgent.setAttribute("src", "src/Audios/Sova.wav");
  nameAgent.textContent = "SOVA";
  bioAgent.textContent =
    "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.";
  tittleFunction.textContent = "INITIATOR";
  bioFuntion.textContent =
    "Initiators challenge angles by setting up their team to enter contested ground and push defenders away.";
  function2.textContent = "INITIATOR";
  imageAgent.setAttribute("src", "src/img/Agents/Sova/Sova.png");
  backgroundAgent.style.opacity = "20%";
  backgroundAgent.setAttribute("src", "src/img/Agents/Sova/FundoSova.png");
  iconFuntion.setAttribute("src", "src/img/Icones/Funcoes/Controlador.png");
  habilite1.setAttribute("src", "src/img/Agents/Sova/1.png");
  habilite2.setAttribute("src", "src/img/Agents/Sova/2.png");
  habilite3.setAttribute("src", "src/img/Agents/Sova/3.png");
  habilite4.setAttribute("src", "src/img/Agents/Sova/4.png");
  document.body.style.backgroundImage =
    "linear-gradient(90deg, #98817a, #846d6c, #6e5b5f, #584951, #423942)";
  buttons.style.backgroundColor = "#1A294A";
  buttons1.style.backgroundColor = "#1A294A";
  buttons2.style.backgroundColor = "#1A294A";
  buttons3.style.backgroundColor = "#1A294A";
  buttons4.style.backgroundColor = "#1A294A";

  buttons.addEventListener("click", function () {
    bioAgent.textContent =
      "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.";
    onBio();
    opacitybuttons();
  });
  buttons1.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a bow with a shock bolt. FIRE to send the explosive forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.";
    offBio();
    opacitybuttons1();
  });
  buttons2.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a bow with a recon bolt. FIRE to send the recon bolt forward, activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.";
    offBio();
    opacitybuttons2();
  });
  buttons3.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.";
    offBio();
    opacitybuttons3();
  });
  buttons4.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a bow with three long-range wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.";
    offBio();
    opacitybuttons4();
  });
});
skye.addEventListener("click", function () {
  activeSkye();
  opacityDefalt();
  animacao();
  visibility();
  onBio();
  audioAgent.setAttribute("src", "src/Audios/Skye.wav");
  nameAgent.textContent = "SKYE";
  bioAgent.textContent =
    "Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye’s side.";
  tittleFunction.textContent = "INITIATOR";
  bioFuntion.textContent =
    "Initiators challenge angles by setting up their team to enter contested ground and push defenders away.";
  function2.textContent = "INITIATOR";
  imageAgent.setAttribute("src", "src/img/Agents/Skye/Skye.png");
  backgroundAgent.style.opacity = "20%";
  backgroundAgent.setAttribute("src", "src/img/Agents/Skye/FundoSkye.png");
  iconFuntion.setAttribute("src", "src/img/Icones/Funcoes/Controlador.png");
  habilite1.setAttribute("src", "src/img/Agents/Skye/1.png");
  habilite2.setAttribute("src", "src/img/Agents/Skye/2.png");
  habilite3.setAttribute("src", "src/img/Agents/Skye/3.png");
  habilite4.setAttribute("src", "src/img/Agents/Skye/4.png");
  document.body.style.backgroundImage =
    "linear-gradient(90deg, #699a6e, #718e60, #758256, #76764f, #756b4a)";
  buttons.style.backgroundColor = "#443841";
  buttons1.style.backgroundColor = "#443841";
  buttons2.style.backgroundColor = "#443841";
  buttons3.style.backgroundColor = "#443841";
  buttons4.style.backgroundColor = "#443841";

  buttons.addEventListener("click", function () {
    bioAgent.textContent =
      "Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye’s side.";
    onBio();
    opacitybuttons();
  });
  buttons1.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a Tasmanian tiger trinket. FIRE to send out and take control of the predator. While in control, FIRE to leap forward, exploding in a concussive blast and damaging directly hit enemies.";
    offBio();
    opacitybuttons1();
  });
  buttons2.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a hawk trinket. FIRE to send it forward. HOLD FIRE to guide the hawk in the direction of your crosshair. RE-USE while the hawk is in flight to transform it into a flash that plays a hit confirm if an enemy was within range and line of sight.";
    offBio();
    opacitybuttons2();
  });
  buttons3.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a healing trinket. HOLD FIRE to channel, healing allies in range and line of sight. Can be reused until her healing pool is depleted. Skye cannot heal herself.";
    offBio();
    opacitybuttons3();
  });
  buttons4.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a Seeker trinket. FIRE to send out three Seekers to track down the three closest enemies. If a Seeker reaches its target, it nearsights them.";
    offBio();
    opacitybuttons4();
  });
});
sage.addEventListener("click", function () {
  activeSage();
  opacityDefalt();
  animacao();
  visibility();
  onBio();
  audioAgent.setAttribute("src", "src/Audios/Sage.wav");
  nameAgent.textContent = "SAGE";
  bioAgent.textContent =
    "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.";
  tittleFunction.textContent = "SENTINEL";
  bioFuntion.textContent =
    "Sentinels are defensive experts who can lock down areas and watch flanks, bloth on attacker and defender rounds.";
  function2.textContent = "SENTINEL";
  imageAgent.setAttribute("src", "src/img/Agents/Sage/Sage.png");
  backgroundAgent.style.opacity = "20%";
  backgroundAgent.setAttribute("src", "src/img/Agents/Sage/FundoSage.png");
  iconFuntion.setAttribute("src", "src/img/Icones/Funcoes/Sentinela.png");
  habilite1.setAttribute("src", "src/img/Agents/Sage/1.png");
  habilite2.setAttribute("src", "src/img/Agents/Sage/2.png");
  habilite3.setAttribute("src", "src/img/Agents/Sage/3.png");
  habilite4.setAttribute("src", "src/img/Agents/Sage/4.png");
  document.body.style.backgroundImage =
    "linear-gradient(90deg, #529c9e, #478f98, #3f8290, #3a7588, #36687e)";
  buttons.style.backgroundColor = "#213E4F";
  buttons1.style.backgroundColor = "#213E4F";
  buttons2.style.backgroundColor = "#213E4F";
  buttons3.style.backgroundColor = "#213E4F";
  buttons4.style.backgroundColor = "#213E4F";

  buttons.addEventListener("click", function () {
    bioAgent.textContent =
      "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.";
    onBio();
    opacitybuttons();
  });
  buttons1.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.";
    offBio();
    opacitybuttons1();
  });
  buttons2.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time.";
    offBio();
    opacitybuttons2();
  });
  buttons3.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a barrier orb. FIRE places a solid wall. ALT FIRE rotates the targeter.";
    offBio();
    opacitybuttons3();
  });
  buttons4.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.";
    offBio();
    opacitybuttons4();
  });
});
reyna.addEventListener("click", function () {
  activeReyna();
  opacityDefalt();
  animacao();
  visibility();
  onBio();
  audioAgent.setAttribute("src", "src/Audios/Reyna.wav");
  nameAgent.textContent = "REYNA";
  bioAgent.textContent =
    "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.";
  tittleFunction.textContent = "DUELIST";
  bioFuntion.textContent =
    "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.";
  function2.textContent = "DUELIST";
  imageAgent.setAttribute("src", "src/img/Agents/Reyna/Reyna.png");
  backgroundAgent.style.opacity = "20%";
  backgroundAgent.setAttribute("src", "src/img/Agents/Reyna/FundoReyna.png");
  iconFuntion.setAttribute("src", "src/img/Icones/Funcoes/Duelista.png");
  habilite1.setAttribute("src", "src/img/Agents/Reyna/1.png");
  habilite2.setAttribute("src", "src/img/Agents/Reyna/2.png");
  habilite3.setAttribute("src", "src/img/Agents/Reyna/3.png");
  habilite4.setAttribute("src", "src/img/Agents/Reyna/4.png");
  document.body.style.backgroundImage =
    "linear-gradient(90deg, #8b4e62, #8b4966, #89456c, #864173, #803f7b)";
  buttons.style.backgroundColor = "#33305C";
  buttons1.style.backgroundColor = "#33305C";
  buttons2.style.backgroundColor = "#33305C";
  buttons3.style.backgroundColor = "#33305C";
  buttons4.style.backgroundColor = "#33305C";

  buttons.addEventListener("click", function () {
    bioAgent.textContent =
      "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.";
    onBio();
    opacitybuttons();
  });
  buttons1.addEventListener("click", function () {
    bioAgent.textContent =
      "Enemies killed by Reyna leave behind Soul Orbs that last 3 seconds. INSTANTLY consume a nearby soul orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time. If EMPRESS is active, this skill will automatically cast and not consume the orb.";
    offBio();
    opacitybuttons1();
  });
  buttons2.addEventListener("click", function () {
    bioAgent.textContent =
      "INSTANTLY consume a nearby soul orb, becoming intangible for a short duration. If EMPRESS is active, also become invisible.";
    offBio();
    opacitybuttons2();
  });
  buttons3.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP an ethereal destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.";
    offBio();
    opacitybuttons3();
  });
  buttons4.addEventListener("click", function () {
    bioAgent.textContent =
      "INSTANTLY enter a frenzy, increasing firing speed, equip and reload speed dramatically. Scoring a kill renews the duration.";
    offBio();
    opacitybuttons4();
  });
});
raze.addEventListener("click", function () {
  activeRaze();
  opacityDefalt();
  animacao();
  visibility();
  onBio();
  audioAgent.setAttribute("src", "src/Audios/Raze.wav");
  nameAgent.textContent = "RAZE";
  bioAgent.textContent =
    "Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom.";
  tittleFunction.textContent = "DUELIST";
  bioFuntion.textContent =
    "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.";
  function2.textContent = "DUELIST";
  imageAgent.setAttribute("src", "src/img/Agents/Raze/Raze.png");
  backgroundAgent.style.opacity = "20%";
  backgroundAgent.setAttribute("src", "src/img/Agents/Raze/FundoRaze.png");
  iconFuntion.setAttribute("src", "src/img/Icones/Funcoes/Duelista.png");
  habilite1.setAttribute("src", "src/img/Agents/Raze/1.png");
  habilite2.setAttribute("src", "src/img/Agents/Raze/2.png");
  habilite3.setAttribute("src", "src/img/Agents/Raze/3.png");
  habilite4.setAttribute("src", "src/img/Agents/Raze/4.png");
  document.body.style.backgroundImage =
    "linear-gradient(90deg, #967744, #956a3f, #935e3d, #90523d, #8a463e)";
  buttons.style.backgroundColor = "#62392F";
  buttons1.style.backgroundColor = "#62392F";
  buttons2.style.backgroundColor = "#62392F";
  buttons3.style.backgroundColor = "#62392F";
  buttons4.style.backgroundColor = "#62392F";

  buttons.addEventListener("click", function () {
    bioAgent.textContent =
      "Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom.";
    onBio();
    opacitybuttons();
  });
  buttons1.addEventListener("click", function () {
    bioAgent.textContent =
      "INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit. Raze isn't damaged by this ability, but will still take fall damage if launched up far enough.";
    offBio();
    opacitybuttons1();
  });
  buttons2.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range.";
    offBio();
    opacitybuttons2();
  });
  buttons3.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.";
    offBio();
    opacitybuttons3();
  });
  buttons4.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a rocket launcher. FIRE shoots a rocket that does massive area damage on contact with anything.";
    offBio();
    opacitybuttons4();
  });
});
phoenix.addEventListener("click", function () {
  activePhoenix();
  opacityDefalt();
  animacao();
  visibility();
  onBio();
  audioAgent.setAttribute("src", "src/Audios/Phoenix.wav");
  nameAgent.textContent = "PHOENIX";
  bioAgent.textContent =
    "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.";
  tittleFunction.textContent = "DUELIST";
  bioFuntion.textContent =
    "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.";
  function2.textContent = "DUELIST";
  imageAgent.setAttribute("src", "src/img/Agents/Phoenix/Phoenix.png");
  backgroundAgent.style.opacity = "20%";
  backgroundAgent.setAttribute(
    "src",
    "src/img/Agents/Phoenix/FundoPhoenix.png"
  );
  iconFuntion.setAttribute("src", "src/img/Icones/Funcoes/Duelista.png");
  habilite1.setAttribute("src", "src/img/Agents/Phoenix/1.png");
  habilite2.setAttribute("src", "src/img/Agents/Phoenix/2.png");
  habilite3.setAttribute("src", "src/img/Agents/Phoenix/3.png");
  habilite4.setAttribute("src", "src/img/Agents/Phoenix/4.png");
  document.body.style.backgroundImage =
    "linear-gradient(90deg, #977e53, #98744e, #996a4a, #996049, #97564a)";
  buttons.style.backgroundColor = "#724232";
  buttons1.style.backgroundColor = "#724232";
  buttons2.style.backgroundColor = "#724232";
  buttons3.style.backgroundColor = "#724232";
  buttons4.style.backgroundColor = "#724232";

  buttons.addEventListener("click", function () {
    bioAgent.textContent =
      "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.";
    onBio();
    opacitybuttons();
  });
  buttons1.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.";
    offBio();
    opacitybuttons1();
  });
  buttons2.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.";
    offBio();
    opacitybuttons2();
  });
  buttons3.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.";
    offBio();
    opacitybuttons3();
  });
  buttons4.addEventListener("click", function () {
    bioAgent.textContent =
      "INSTANTLY place a marker at Phoenix’s location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.";
    offBio();
    opacitybuttons4();
  });
});
omen.addEventListener("click", function () {
  activeOmen();
  opacityDefalt();
  animacao();
  visibility();
  onBio();
  audioAgent.setAttribute("src", "src/Audios/Omen.wav");
  nameAgent.textContent = "OMEN";
  bioAgent.textContent =
    "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.";
  tittleFunction.textContent = "CONTROLLER";
  bioFuntion.textContent =
    "Controllers are experts in slincing up dangerous territory to set their team up for success.";
  function2.textContent = "CONTROLLER";
  imageAgent.setAttribute("src", "src/img/Agents/Omen/Omen.png");
  backgroundAgent.style.opacity = "20%";
  backgroundAgent.setAttribute("src", "src/img/Agents/Omen/FundoOmen.png");
  iconFuntion.setAttribute("src", "src/img/Icones/Funcoes/Controlador.png");
  habilite1.setAttribute("src", "src/img/Agents/Omen/1.png");
  habilite2.setAttribute("src", "src/img/Agents/Omen/2.png");
  habilite3.setAttribute("src", "src/img/Agents/Omen/3.png");
  habilite4.setAttribute("src", "src/img/Agents/Omen/4.png");
  document.body.style.backgroundImage =
    "linear-gradient(90deg, #505d92, #47568a, #3f4e83, #36477b, #2d4074)";
  buttons.style.backgroundColor = "#2A3866";
  buttons1.style.backgroundColor = "#2A3866";
  buttons2.style.backgroundColor = "#2A3866";
  buttons3.style.backgroundColor = "#2A3866";
  buttons4.style.backgroundColor = "#2A3866";

  buttons.addEventListener("click", function () {
    bioAgent.textContent =
      "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.";
    onBio();
    opacitybuttons();
  });
  buttons1.addEventListener("click", function () {
    bioAgent.textContent =
      "INSTANTLY fire a shadow projectile forward, briefly reducing the vision range of all players it touches. This projectile can pass straight through walls.";
    offBio();
    opacitybuttons1();
  });
  buttons2.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a shadow orb and see its range indicator. FIRE to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. HOLD ALTERNATE FIRE while targeting to move the marker further away. HOLD the ability key with targeting to move the marker closer.";
    offBio();
    opacitybuttons2();
  });
  buttons3.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a shadow walk ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location.";
    offBio();
    opacitybuttons3();
  });
  buttons4.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport.";
    offBio();
    opacitybuttons4();
  });
});
neon.addEventListener("click", function () {
  activeNeon();
  opacityDefalt();
  animacao();
  visibility();
  onBio();
  audioAgent.setAttribute("src", "src/Audios/Neon.wav");
  nameAgent.textContent = "NEON";
  bioAgent.textContent =
    "Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard, then strikes them down quicker than lightning.";
  tittleFunction.textContent = "DUELIST";
  bioFuntion.textContent =
    "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.";
  function2.textContent = "DUELIST";
  imageAgent.setAttribute("src", "src/img/Agents/Neon/Neon.png");
  backgroundAgent.style.opacity = "20%";
  backgroundAgent.setAttribute("src", "src/img/Agents/Neon/FundoNeon.png");
  iconFuntion.setAttribute("src", "src/img/Icones/Funcoes/Duelista.png");
  habilite1.setAttribute("src", "src/img/Agents/Neon/1.png");
  habilite2.setAttribute("src", "src/img/Agents/Neon/2.png");
  habilite3.setAttribute("src", "src/img/Agents/Neon/3.png");
  habilite4.setAttribute("src", "src/img/Agents/Neon/4.png");
  document.body.style.backgroundImage =
    "linear-gradient(90deg, #7961a5, #6e57a2, #634d9f, #56439c, #483a99)";
  buttons.style.backgroundColor = "#2F3872";
  buttons1.style.backgroundColor = "#2F3872";
  buttons2.style.backgroundColor = "#2F3872";
  buttons3.style.backgroundColor = "#2F3872";
  buttons4.style.backgroundColor = "#2F3872";

  buttons.addEventListener("click", function () {
    bioAgent.textContent =
      "Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard, then strikes them down quicker than lightning.";
    onBio();
    opacitybuttons();
  });
  buttons1.addEventListener("click", function () {
    bioAgent.textContent =
      "INSTANTLY throw an energy bolt that bounces once. Upon hitting each surface, the bolt electrifies the ground below with a concussive blast.";
    offBio();
    opacitybuttons1();
  });
  buttons2.addEventListener("click", function () {
    bioAgent.textContent =
      "INSTANTLY channel Neon’s power for increased speed. When charged, ALT FIRE to trigger an electric slide. Slide charge resets every two kills.";
    offBio();
    opacitybuttons2();
  });
  buttons3.addEventListener("click", function () {
    bioAgent.textContent =
      "FIRE two energy lines forward on the ground that extend a short distance or until they hit a surface. The lines rise into walls of static electricity that block vision and damage enemies passing through them.";
    offBio();
    opacitybuttons3();
  });
  buttons4.addEventListener("click", function () {
    bioAgent.textContent =
      "Unleash Neon’s full power and speed for a short duration. FIRE to channel the power into a deadly lightning beam with high movement accuracy. The duration resets on each kill.";
    offBio();
    opacitybuttons4();
  });
});
killjoy.addEventListener("click", function () {
  activeKilljoy();
  opacityDefalt();
  animacao();
  visibility();
  onBio();
  audioAgent.setAttribute("src", "src/Audios/Kill.wav");
  nameAgent.textContent = "KILLJOY";
  bioAgent.textContent =
    "The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots' debuff will help make short work of them.";
  tittleFunction.textContent = "SENTINEL";
  bioFuntion.textContent =
    "Sentinels are defensive experts who can lock down areas and watch flanks, bloth on attacker and defender rounds.";
  function2.textContent = "SENTINEL";
  imageAgent.setAttribute("src", "src/img/Agents/Kill/Kill.png");
  backgroundAgent.style.opacity = "20%";
  backgroundAgent.setAttribute("src", "src/img/Agents/Kill/FundoKill.png");
  iconFuntion.setAttribute("src", "src/img/Icones/Funcoes/Sentinela.png");
  habilite1.setAttribute("src", "src/img/Agents/Kill/1.png");
  habilite2.setAttribute("src", "src/img/Agents/Kill/2.png");
  habilite3.setAttribute("src", "src/img/Agents/Kill/3.png");
  habilite4.setAttribute("src", "src/img/Agents/Kill/4.png");
  document.body.style.backgroundImage =
    "linear-gradient(90deg, #978318, #91781f, #8a6e25, #826429, #795b2d)";
  buttons.style.backgroundColor = "#534C37";
  buttons1.style.backgroundColor = "#534C37";
  buttons2.style.backgroundColor = "#534C37";
  buttons3.style.backgroundColor = "#534C37";
  buttons4.style.backgroundColor = "#534C37";

  buttons.addEventListener("click", function () {
    bioAgent.textContent =
      "The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots' debuff will help make short work of them.";
    onBio();
    opacitybuttons();
  });
  buttons1.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range. After reaching its target, the bot explodes, applying Vulernable. HOLD EQUIP to recall a deployed bot.";
    offBio();
    opacitybuttons1();
  });
  buttons2.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a Turret. FIRE to deploy a turret that fires at enemies in a 180 degree cone. HOLD EQUIP to recall the deployed turret.";
    offBio();
    opacitybuttons2();
  });
  buttons3.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a Nanoswarm grenade. FIRE to throw the grenade. Upon landing, the Nanoswarm goes covert. ACTIVATE the Nanoswarm to deploy a damaging swarm of nanobots.";
    offBio();
    opacitybuttons3();
  });
  buttons4.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP the Lockdown device. FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies.";
    offBio();
    opacitybuttons4();
  });
});
kayo.addEventListener("click", function () {
  activeKayo();
  opacityDefalt();
  animacao();
  visibility();
  onBio();
  audioAgent.setAttribute("src", "src/Audios/Kayo.wav");
  nameAgent.textContent = "KAY/O";
  bioAgent.textContent =
    "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to suppress enemy abilities cripples his opponents' capacity to fight back, securing him and his allies the ultimate edge.";
  tittleFunction.textContent = "INITIATOR";
  bioFuntion.textContent =
    "Initiators challenge angles by setting up their team to enter contested ground and push defenders away.";
  function2.textContent = "INITIATOR";
  imageAgent.setAttribute("src", "src/img/Agents/KAYO/Kayo.png");
  backgroundAgent.style.opacity = "20%";
  backgroundAgent.setAttribute("src", "src/img/Agents/KAYO/FundoKayo.png");
  iconFuntion.setAttribute("src", "src/img/Icones/Funcoes/Iniciador.png");
  habilite1.setAttribute("src", "src/img/Agents/KAYO/1.png");
  habilite2.setAttribute("src", "src/img/Agents/KAYO/2.png");
  habilite3.setAttribute("src", "src/img/Agents/KAYO/3.png");
  habilite4.setAttribute("src", "src/img/Agents/KAYO/4.png");
  document.body.style.backgroundImage =
    "linear-gradient(90deg, #369da9, #2a93a9, #2788a8, #2d7da5, #37729f)";
  buttons.style.backgroundColor = "#2a4269";
  buttons1.style.backgroundColor = "#2a4269";
  buttons2.style.backgroundColor = "#2a4269";
  buttons3.style.backgroundColor = "#2a4269";
  buttons4.style.backgroundColor = "#2a4269";

  buttons.addEventListener("click", function () {
    bioAgent.textContent =
      "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to suppress enemy abilities cripples his opponents' capacity to fight back, securing him and his allies the ultimate edge.";
    onBio();
    opacitybuttons();
  });
  buttons1.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a flash grenade. FIRE to throw. The flash grenade explodes after a short fuse, blinding anyone in line of sight.";
    offBio();
    opacitybuttons1();
  });
  buttons2.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a suppression blade. FIRE to throw. The blade sticks to the first surface it hits, winds up, and suppresses anyone in the radius of the explosion.";
    offBio();
    opacitybuttons2();
  });
  buttons3.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP an explosive fragment. FIRE to throw. The fragment sticks to the floor and explodes multiple times, dealing near lethal damage at the center with each explosion.";
    offBio();
    opacitybuttons3();
  });
  buttons4.addEventListener("click", function () {
    bioAgent.textContent =
      "INSTANTLY overload with polarized radianite energy that empowers KAY/O and causes large energy pulses to emit from his location. Enemies hit with these pulses are suppressed for a short duration.";
    offBio();
    opacitybuttons4();
  });
});
jett.addEventListener("click", function () {
  activeJett();
  opacityDefalt();
  animacao();
  visibility();
  onBio();
  audioAgent.setAttribute("src", "src/Audios/Jett.wav");
  nameAgent.textContent = "JETT";
  bioAgent.textContent =
    "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.";
  tittleFunction.textContent = "DUELIST";
  bioFuntion.textContent =
    "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.";
  function2.textContent = "DUELIST";
  imageAgent.setAttribute("src", "src/img/Agents/Jett/Jett.png");
  backgroundAgent.style.opacity = "20%";
  backgroundAgent.setAttribute("src", "src/img/Agents/Jett/FundoJett.png");
  iconFuntion.setAttribute("src", "src/img/Icones/Funcoes/Duelista.png");
  habilite1.setAttribute("src", "src/img/Agents/Jett/1.png");
  habilite2.setAttribute("src", "src/img/Agents/Jett/2.png");
  habilite3.setAttribute("src", "src/img/Agents/Jett/3.png");
  habilite4.setAttribute("src", "src/img/Agents/Jett/4.png");
  document.body.style.backgroundImage =
    "linear-gradient(90deg, #5e95a6, #55879a, #4d798e, #466b82, #3f5e75)";
  buttons.style.backgroundColor = "#304B6F";
  buttons1.style.backgroundColor = "#304B6F";
  buttons2.style.backgroundColor = "#304B6F";
  buttons3.style.backgroundColor = "#304B6F";
  buttons4.style.backgroundColor = "#304B6F";

  buttons.addEventListener("click", function () {
    bioAgent.textContent =
      "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.";
    onBio();
    opacitybuttons();
  });
  buttons1.addEventListener("click", function () {
    bioAgent.textContent = "INSTANTLY propel Jett high into the air.";
    offBio();
    opacitybuttons1();
  });
  buttons2.addEventListener("click", function () {
    bioAgent.textContent =
      "INSTANTLY propel Jett in the direction she is moving. If Jett is standing still, she will propel forward.";
    offBio();
    opacitybuttons2();
  });
  buttons3.addEventListener("click", function () {
    bioAgent.textContent =
      "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.";
    offBio();
    opacitybuttons3();
  });
  buttons4.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a set of highly accurate knives that recharge on killing an opponent. FIRE to throw a single knife at your target. ALTERNATE FIRE to throw all remaining daggers at your target.";
    offBio();
    opacitybuttons4();
  });
});
harbor.addEventListener("click", function () {
  activeHarbor();
  opacityDefalt();
  animacao();
  visibility();
  onBio();
  audioAgent.setAttribute("src", "src/Audios/Harbor.wav");
  nameAgent.textContent = "HARBOR";
  bioAgent.textContent =
    "Hailing from India’s coast, Harbor storms the field wielding ancient technology with dominion over water. He unleashes frothing rapids and crushing waves to shield his allies and pummel those that oppose him.";
  tittleFunction.textContent = "CONTROLLER";
  bioFuntion.textContent =
    "Controllers are experts in slincing up dangerous territory to set their team up for success.";
  function2.textContent = "CONTROLLER";
  imageAgent.setAttribute("src", "src/img/Agents/Harbor/Harbor.png");
  backgroundAgent.style.opacity = "20%";
  backgroundAgent.setAttribute("src", "src/img/Agents/Harbor/FundoHarbor.png");
  iconFuntion.setAttribute("src", "src/img/Icones/Funcoes/Controlador.png");
  habilite1.setAttribute("src", "src/img/Agents/Harbor/1.png");
  habilite2.setAttribute("src", "src/img/Agents/Harbor/2.png");
  habilite3.setAttribute("src", "src/img/Agents/Harbor/3.png");
  habilite4.setAttribute("src", "src/img/Agents/Harbor/4.png");
  document.body.style.backgroundImage =
    "linear-gradient(90deg, #938f72, #778369, #5d7563, #47675e, #365858)";
  buttons.style.backgroundColor = "#0E2C33";
  buttons1.style.backgroundColor = "#0E2C33";
  buttons2.style.backgroundColor = "#0E2C33";
  buttons3.style.backgroundColor = "#0E2C33";
  buttons4.style.backgroundColor = "#0E2C33";

  buttons.addEventListener("click", function () {
    bioAgent.textContent =
      "Hailing from India’s coast, Harbor storms the field wielding ancient technology with dominion over water. He unleashes frothing rapids and crushing waves to shield his allies and pummel those that oppose him.";
    onBio();
    opacitybuttons();
  });
  buttons1.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a wall of water. FIRE to send the water forward along the ground. HOLD FIRE to guide the water in the direction of your crosshair, passing through the world, spawning a wall along the water’s path. ALT FIRE while bending to stop the water early. Players hit are SLOWED";
    offBio();
    opacitybuttons1();
  });
  buttons2.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a sphere of shielding water. FIRE to throw. ALT FIRE to underhand throw. Upon impacting the ground, spawn a water shield that blocks bullets.";
    offBio();
    opacitybuttons2();
  });
  buttons3.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a wave of water. FIRE to send the wave rolling forward and through walls. RE- USE to stop the wave. Players hit are SLOWED.";
    offBio();
    opacitybuttons3();
  });
  buttons4.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a set of highly accurate knives that recharge on killing an opponent. FIRE to throw a single knife at your target. ALTERNATE FIRE to throw all remaining daggers at your target.";
    offBio();
    opacitybuttons4();
  });
});
fade.addEventListener("click", function () {
  activeFade();
  opacityDefalt();
  animacao();
  visibility();
  onBio();
  audioAgent.setAttribute("src", "src/Audios/Fade.wav");
  nameAgent.textContent = "FADE";
  bioAgent.textContent =
    "Turkish bounty hunter, Fade, unleashes the power of raw nightmares to seize enemy secrets. Attuned with terror itself, she hunts targets and reveals their deepest fears—before crushing them in the dark.";
  tittleFunction.textContent = "INITIATOR";
  bioFuntion.textContent =
    "Initiators challenge angles by setting up their team to enter contested ground and push defenders away.";
  function2.textContent = "INITIATOR";
  imageAgent.setAttribute("src", "src/img/Agents/Fade/Fade.png");
  backgroundAgent.style.opacity = "20%";
  backgroundAgent.setAttribute("src", "src/img/Agents/Fade/FundoFade.png");
  iconFuntion.setAttribute("src", "src/img/Icones/Funcoes/Iniciador.png");
  habilite1.setAttribute("src", "src/img/Agents/Fade/1.png");
  habilite2.setAttribute("src", "src/img/Agents/Fade/2.png");
  habilite3.setAttribute("src", "src/img/Agents/Fade/3.png");
  habilite4.setAttribute("src", "src/img/Agents/Fade/4.png");
  document.body.style.backgroundImage =
    "linear-gradient(90deg, #6c3b55, #684366, #604d76, #525782, #41618b)";
  buttons.style.backgroundColor = "#2c4566";
  buttons1.style.backgroundColor = "#2c4566";
  buttons2.style.backgroundColor = "#2c4566";
  buttons3.style.backgroundColor = "#2c4566";
  buttons4.style.backgroundColor = "#2c4566";

  buttons.addEventListener("click", function () {
    bioAgent.textContent =
      "Turkish bounty hunter, Fade, unleashes the power of raw nightmares to seize enemy secrets. Attuned with terror itself, she hunts targets and reveals their deepest fears—before crushing them in the dark.";
    onBio();
    opacitybuttons();
  });
  buttons1.addEventListener("click", function () {
    bioAgent.textContent =
      "Equip an orb of nightmare ink. FIRE to throw the orb which will plummet to the ground after a set amount of time. Upon hitting the ground, the ink will explode and create a zone in which enemies who are caught in it cannot escape the zone by normal means. RE-USE the ability to drop the projectile early in-flight";
    offBio();
    opacitybuttons1();
  });
  buttons2.addEventListener("click", function () {
    bioAgent.textContent =
      "Equip a nightmarish entity. FIRE to throw the orb which will plummet to the ground after a set amount of time. Upon hitting the ground, the orb will turn into a nightmarish entity that will reveal the location of enemies caught in its line of sight. Enemies can destroy this entity. RE-USE the ability to drop the projectile early in-flight.";
    offBio();
    opacitybuttons2();
  });
  buttons3.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a Prowler. FIRE will send the Prowler out, causing it to travel in a straight line. The Prowler will lock onto any enemies or trails in their frontal vision cone and chase them, nearsighting them if it reaches them. HOLD the FIRE button to steer the Prowler in the direction of your crosshair.";
    offBio();
    opacitybuttons3();
  });
  buttons4.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP the power of Fear. FIRE to send out a wave of nightmare energy that can traverse through walls. The energy creates a trail to the opponent as well as deafens and decays them.";
    offBio();
    opacitybuttons4();
  });
});
cypher.addEventListener("click", function () {
  activeCypher();
  opacityDefalt();
  animacao();
  visibility();
  onBio();
  audioAgent.setAttribute("src", "src/Audios/Cypher.wav");
  nameAgent.textContent = "CYPHER";
  bioAgent.textContent =
    "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.";
  tittleFunction.textContent = "SENTINEL";
  bioFuntion.textContent =
    "Sentinels are defensive experts who can lock down areas and watch flanks, bloth on attacker and defender rounds.";
  function2.textContent = "SENTINEL";
  imageAgent.setAttribute("src", "src/img/Agents/Cypher/Cypher.png");
  backgroundAgent.style.opacity = "20%";
  backgroundAgent.setAttribute("src", "src/img/Agents/Cypher/FundoCypher.png");
  iconFuntion.setAttribute("src", "src/img/Icones/Funcoes/Sentinela.png");
  habilite1.setAttribute("src", "src/img/Agents/Cypher/1.png");
  habilite2.setAttribute("src", "src/img/Agents/Cypher/2.png");
  habilite3.setAttribute("src", "src/img/Agents/Cypher/3.png");
  habilite4.setAttribute("src", "src/img/Agents/Cypher/4.png");
  document.body.style.backgroundImage =
    "linear-gradient(90deg, #8c6c65, #8b5f66, #815570, #69507c, #3b5085)";
  buttons.style.backgroundColor = "#323D63";
  buttons1.style.backgroundColor = "#323D63";
  buttons2.style.backgroundColor = "#323D63";
  buttons3.style.backgroundColor = "#323D63";
  buttons4.style.backgroundColor = "#323D63";

  buttons.addEventListener("click", function () {
    bioAgent.textContent =
      "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.";
    onBio();
    opacitybuttons();
  });
  buttons1.addEventListener("click", function () {
    bioAgent.textContent =
      "INSTANTLY toss the cyber cage in front of Cypher. Activate to create a zone that blocks vision and slows enemies who pass through it.";
    offBio();
    opacitybuttons1();
  });
  buttons2.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the camera’s view. While in control of the camera, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.";
    offBio();
    opacitybuttons2();
  });
  buttons3.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.";
    offBio();
    opacitybuttons3();
  });
  buttons4.addEventListener("click", function () {
    bioAgent.textContent =
      "INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.";
    offBio();
    opacitybuttons4();
  });
});
chamber.addEventListener("click", function () {
  activeChamber();
  opacityDefalt();
  animacao();
  visibility();
  onBio();
  audioAgent.setAttribute("src", "src/Audios/Chamber.wav");
  nameAgent.textContent = "CHAMBER";
  bioAgent.textContent =
    "Well dressed and well armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.";
  tittleFunction.textContent = "SENTINEL";
  bioFuntion.textContent =
    "Sentinels are defensive experts who can lock down areas and watch flanks, bloth on attacker and defender rounds.";
  function2.textContent = "SENTINEL";
  imageAgent.setAttribute("src", "src/img/Agents/Chamber/Chamber.png");
  backgroundAgent.style.opacity = "20%";
  backgroundAgent.setAttribute(
    "src",
    "src/img/Agents/Chamber/FundoChamber.png"
  );
  iconFuntion.setAttribute("src", "src/img/Icones/Funcoes/Sentinela.png");
  habilite1.setAttribute("src", "src/img/Agents/Chamber/1.png");
  habilite2.setAttribute("src", "src/img/Agents/Chamber/2.png");
  habilite3.setAttribute("src", "src/img/Agents/Chamber/3.png");
  habilite4.setAttribute("src", "src/img/Agents/Chamber/4.png");
  document.body.style.backgroundImage =
    "linear-gradient(90deg, #95915d, #8a7d51, #7c6947, #6d573e, #5c4635)";
  buttons.style.backgroundColor = "#50413C";
  buttons1.style.backgroundColor = "#50413C";
  buttons2.style.backgroundColor = "#50413C";
  buttons3.style.backgroundColor = "#50413C";
  buttons4.style.backgroundColor = "#50413C";

  buttons.addEventListener("click", function () {
    bioAgent.textContent =
      "Well dressed and well armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.";
    onBio();
    opacitybuttons();
  });
  buttons1.addEventListener("click", function () {
    bioAgent.textContent =
      "PLACE two teleport anchors. While on the ground and in range of an anchor, REACTIVATE to quickly teleport to the other anchor. Anchors can be picked up to be REDEPLOYED.";
    offBio();
    opacitybuttons1();
  });
  buttons2.addEventListener("click", function () {
    bioAgent.textContent =
      "PLACE a trap that scans for enemies. When a visible enemy comes in range, the trap counts down and then destabilizes the terrain around them, creating a lingering field that slows players caught inside of it.";
    offBio();
    opacitybuttons2();
  });
  buttons3.addEventListener("click", function () {
    bioAgent.textContent =
      "ACTIVATE to equip a heavy pistol. ALT FIRE with the pistol equipped to aim down sights.";
    offBio();
    opacitybuttons3();
  });
  buttons4.addEventListener("click", function () {
    bioAgent.textContent =
      "ACTIVATE to summon a powerful, custom sniper rifle that will kill an enemy with any direct hit. Killing an enemy creates a lingering field that slows players caught inside of it.";
    offBio();
    opacitybuttons4();
  });
});
brinstone.addEventListener("click", function () {
  activeBrimstone();
  opacityDefalt();
  animacao();
  visibility();
  onBio();
  audioAgent.setAttribute("src", "src/Audios/Brinstone.wav");
  nameAgent.textContent = "BRIMSTONE";
  bioAgent.textContent =
    "Joining from the USA, Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance makes him an unmatched boots-on-the-ground commander.";
  tittleFunction.textContent = "CONTROLLER";
  bioFuntion.textContent =
    "Controllers are experts in slincing up dangerous territory to set their team up for success.";
  function2.textContent = "CONTROLLER";
  imageAgent.setAttribute("src", "src/img/Agents/Brinstone/Brinstone.png");
  backgroundAgent.style.opacity = "20%";
  backgroundAgent.setAttribute(
    "src",
    "src/img/Agents/Brinstone/FundoBrimstone.png"
  );
  iconFuntion.setAttribute("src", "src/img/Icones/Funcoes/Controlador.png");
  habilite1.setAttribute("src", "src/img/Agents/Brinstone/1.png");
  habilite2.setAttribute("src", "src/img/Agents/Brinstone/2.png");
  habilite3.setAttribute("src", "src/img/Agents/Brinstone/3.png");
  habilite4.setAttribute("src", "src/img/Agents/Brinstone/4.png");
  document.body.style.backgroundImage =
    "linear-gradient(90deg, #8d6342, #83563c, #794937, #6e3d32, #62312d)";
  buttons.style.backgroundColor = "#3B3B51";
  buttons1.style.backgroundColor = "#3B3B51";
  buttons2.style.backgroundColor = "#3B3B51";
  buttons3.style.backgroundColor = "#3B3B51";
  buttons4.style.backgroundColor = "#3B3B51";

  buttons.addEventListener("click", function () {
    bioAgent.textContent =
      "Joining from the USA, Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance makes him an unmatched boots-on-the-ground commander.";
    onBio();
    opacitybuttons();
  });
  buttons1.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.";
    offBio();
    opacitybuttons1();
  });
  buttons2.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a tactical map. FIRE to set locations where Brimstone’s smoke clouds will land. ALTERNATE FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.";
    offBio();
    opacitybuttons2();
  });
  buttons3.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a stim beacon. FIRE to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire.";
    offBio();
    opacitybuttons3();
  });
  buttons4.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.";
    offBio();
    opacitybuttons4();
  });
});
breach.addEventListener("click", function () {
  activeBreach();
  opacityDefalt();
  animacao();
  visibility();
  onBio();
  audioAgent.setAttribute("src", "src/Audios/Breach.wav");
  nameAgent.textContent = "BREACH";
  bioAgent.textContent =
    "Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.";
  tittleFunction.textContent = "INITIATOR";
  bioFuntion.textContent =
    "Sentinels are defensive experts who can lock down areas and watch flanks, bloth on attacker and defender rounds.";
  function2.textContent = "INITIATOR";
  imageAgent.setAttribute("src", "src/img/Agents/Breach/Breach.png");
  backgroundAgent.style.opacity = "20%";
  backgroundAgent.setAttribute("src", "src/img/Agents/Breach/FundoBreach.png");
  iconFuntion.setAttribute("src", "src/img/Icones/Funcoes/Iniciador.png");
  habilite1.setAttribute("src", "src/img/Agents/Breach/1.png");
  habilite2.setAttribute("src", "src/img/Agents/Breach/2.png");
  habilite3.setAttribute("src", "src/img/Agents/Breach/3.png");
  habilite4.setAttribute("src", "src/img/Agents/Breach/4.png");
  document.body.style.backgroundImage =
    "linear-gradient(90deg, #986a39, #915e37, #895335, #804933, #763f31)";
  buttons.style.backgroundColor = "#64322C";
  buttons1.style.backgroundColor = "#64322C";
  buttons2.style.backgroundColor = "#64322C";
  buttons3.style.backgroundColor = "#64322C";
  buttons4.style.backgroundColor = "#64322C";

  buttons.addEventListener("click", function () {
    bioAgent.textContent =
      "Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.";
    onBio();
    opacitybuttons();
  });
  buttons1.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a blinding charge. FIRE the charge to set fast-acting burst through the wall. The charge detonates to blind all players looking at it.";
    offBio();
    opacitybuttons1();
  });
  buttons2.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, dazing all players in its zone and in a line up to the zone.";
    offBio();
    opacitybuttons2();
  });
  buttons3.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.";
    offBio();
    opacitybuttons3();
  });
  buttons4.addEventListener("click", function () {
    bioAgent.textContent =
      "EQUIP a seismic charge. FIRE to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.";
    offBio();
    opacitybuttons4();
  });
});
astra.addEventListener("click", function () {
  activeAstra();
  opacityDefalt();
  animacao();
  visibility();
  onBio();
  audioAgent.setAttribute("src", "src/Audios/Astra.wav");
  nameAgent.textContent = "ASTRA";
  bioAgent.textContent =
    "Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she's always eons ahead of her enemy's next move.";
  tittleFunction.textContent = "CONTROLLER";
  bioFuntion.textContent =
    "Controllers are experts in slincing up dangerous territory to set their team up for success.";
  function2.textContent = "CONTROLLER";
  imageAgent.setAttribute("src", "src/img/Agents/Astra/Astra.png");
  imageAgent.style.transform = "translateY(-5%)";
  backgroundAgent.style.opacity = "20%";
  backgroundAgent.setAttribute("src", "src/img/Agents/Astra/FundoAstra.png");
  iconFuntion.setAttribute("src", "src/img/Icones/Funcoes/Controlador.png");
  habilite1.setAttribute("src", "src/img/Agents/Astra/1.png");
  habilite2.setAttribute("src", "src/img/Agents/Astra/2.png");
  habilite3.setAttribute("src", "src/img/Agents/Astra/3.png");
  habilite4.setAttribute("src", "src/img/Agents/Astra/4.png");
  document.body.style.backgroundImage =
    "linear-gradient(90deg,  #975891, #8c5090, #804890, #724290, #623c90)";
  buttons.style.backgroundColor = "#422b90";
  buttons1.style.backgroundColor = "#422b90";
  buttons2.style.backgroundColor = "#422b90";
  buttons3.style.backgroundColor = "#422b90";
  buttons4.style.backgroundColor = "#422b90";

  buttons.addEventListener("click", function () {
    bioAgent.textContent =
      "Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she's always eons ahead of her enemy's next move.";
    onBio();
    opacitybuttons();
  });
  buttons1.addEventListener("click", function () {
    bioAgent.textContent =
      "Place Stars in Astral Form (X) ACTIVATE a Star to detonate a Nova Pulse. The Nova Pulse charges briefly then strikes, concussing all players in its area.";
    offBio();
    opacitybuttons1();
  });
  buttons2.addEventListener("click", function () {
    bioAgent.textContent =
      "Place Stars in Astral Form (X) ACTIVATE a Star to transform it into a Nebula (smoke). Use (F) on a Star to Dissipate it, returning the star to be placed in a new location after a delay. Dissipate briefly forms a fake Nebula at the Star’s location before returning.";
    offBio();
    opacitybuttons2();
  });
  buttons3.addEventListener("click", function () {
    bioAgent.textContent =
      "Place Stars in Astral Form (X) ACTIVATE a Star to form a Gravity Well. Players in the area are pulled toward the center before it explodes, making all players still trapped inside fragile.";
    offBio();
    opacitybuttons3();
  });
  buttons4.addEventListener("click", function () {
    bioAgent.textContent =
      "ACTIVATE (X) to enter Astral Form where you can place Stars with PRIMARY FIRE. Stars can be reactivated later, transforming them into a Nova Pulse, Nebula, or Gravity Well. When Cosmic Divide is charged, use SECONDARY FIRE in Astral Form to begin aiming it, then PRIMARY FIRE to select two locations. An infinite Cosmic Divide connects the two points you select. Cosmic Divide blocks bullets and heavily dampens audio.";
    offBio();
    opacitybuttons4();
  });
});
