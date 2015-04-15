// JavaScript Document
// Created by Dester Dasqwe.
// To be used as reference and for teacing 
// examples.
// permission to edit this code and copyright is granted but may only
// be copyrighted if code is altered or changed to fit needs
// of consumer.
// members of KjaxStudios do not need to bother and may copyright this 
// in original form or altered form.
// this is our player health, what the enemys are, and the spawn.
var health = 10; // you can withstand up to 10 hits.
var enemys = player.find(enemys);
var spawn = (0, 0); // gotta spawn somewhere!
//this is waht creates the avatar. (i hope)
 var cover = new MeshNormalMaterial();
var body = new SphereGeometry(100);
var avatar = new Mesh(body, cover);
marker.add(avatar);
// here we have hands and feet 
var hand = new SphereGeometry(50);

var right_hand = new Mesh(hand, cover);
right_hand.position.set(-150, 0, 0);
avatar.add(right_hand);
right_hand.position.z = -100;

var left_hand = new Mesh(hand, cover);
left_hand.position.set(150, 0, 0);
avatar.add(left_hand);

var foot = new SphereGeometry(50);

var right_foot = new Mesh(foot, cover);
right_foot.position.set(-75, -125, 0);
avatar.add(right_foot);

var left_foot = new Mesh(foot, cover);
left_foot.position.set(75, -125, 0);
avatar.add(left_foot);

marker.add(camera);
//this is the end of the avatar coding. 
//these are enemys: 2 objects. square and triangle
var enemy = new Object3D(square);
var enemybig = new Object3D(triangle);
 // This is where stuff in the game will happen:
  var scene = new Scene();

  // This is what sees the stuff:
  var aspect_ratio = window.innerWidth / window.innerHeight;
  var camera = new PerspectiveCamera(75, aspect_ratio, 1, 10000);
  camera.position.z = 500;
  scene.add(camera);

  // This will draw what the camera sees onto the screen:
  var renderer = new CanvasRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
//this is a marker. its what makes the avatar move.
var marker = new Object3D();
  scene.add(marker);
// A scoreboard! how would you win if there was no scoreboard?!?!
var scoreboard = new Scoreboard();
scoreboard.countdown(345);
scoreboard.score();
scoreboard.help(
'arrow keys to move' +
'enemys hide in the wiggling trees' +
'jump and attack at the tree before they run off!'
);
// the enemys hide in trees! look for the wiggling ones!
var tree_with_enemys;
var trees = [];
trees.push(makeTreeAt(500, 0));
trees.push(makeTreeAt(-500, 0));
trees.push(makeTreeAt(750, -1000));
trees.push(makeTreeAt(-750, -1000));
function makeTreeAt(x, z) {

return top;
}
  // and heres the loop in which just about everything else happens
  loop; {
// here is our starter function. it starts up every function we need it to 
// game hunt hide dis and spawner. each function has its own purpose and we will explain further down.
function start(){
game();
hunt();
hide()
die();
spawner();
}
// this is the game function. its what makes the GUI and menu at the beginning which houses the play button. YAY!
function game(){
} 
}
}
// hunting function, makes he player hunt down enemys and kill them.
function hunt() {
player.find(enemys);
if (enemy){ 
    player.attack(enemys);

}
    // if enemys are null that means no enemys are present, then the player will do nothing.
else (enemys != null);{

}
}
// the spawner. of course the enemys have to come from somewhere right? 
function spawner() {



// spawning timer
if (currentTime - this.lastTimeSomethingSpawned >= this.spawningInterval) {
    spawn();
    this.lastTimeSomethingSpawned = currentTime;
    this.spawningInterval = 2 + (2*Math.random()-1)*this.intervalDeviation;
}
}
// big bad enemys! this makes the player hide at spawn where he will be safe. if you just move to spawn you will be initiall // safe 
function hide() {
if (enemy.type = big) {
player.moveTo(0, 0);

 }
}
// the enemys can fight back you know
var p1 = this
function eattack(){
if(p1){ enemys.attack(player)
}
}
function damage(){
if (enemys.attack(player))
health - 1;

}
// yes you can die. if you couldnt there wouldnt be much of a point to the game would there?
function die(){

if (health < 0) {
 player.destroy();
 
}
}
function look() {
if (player.pos = 0, 0){
enemybig.moveXY(23, 23)
}
}
// using the arrow keys to move you guide your player and run from the enemys using an event listener.
 document.addEventListener('keydown', function(event) {
var code = event.keyCode;
if (code == 37) marker.position.x = marker.position.x-5; // left
if (code == 38) marker.position.z = marker.position.z-5; //up
if (code == 39) marker.position.x = marker.position.x+5; //right
if (code == 40) marker.position.z = marker.position.z+5; //down

//this script spawns enemys, makes the player auto hunt them, and hide from big enemys. also player will die when health is less than 0
)
}
}
