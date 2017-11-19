'use strict';
var net = require('net');
var client = new net.Socket();
//var HOST = '192.168.0.11';
//var PORT = 5150;

module.exports.connectToServer = function connectToServer(HOST, PORT){
 

client.connect(PORT, HOST, function() {
 
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);

});

}

/*
 * Device Controller
 * Events on that device from the Brain will be forwarded here for handling.
 * NOTE: there are no multiple devices support for this example, so only the button name is passed
 */
module.exports.onButtonPressed = function onButtonPressed(name) {
  console.log(`[CONTROLLER] ${name} button pressed`);
 // client.write('vk:8\n');
 // console.log('trying to send');
if(name === "CURSOR LEFT"){
  client.write("left\n");
}
if(name === "CURSOR UP"){
  client.write("up\n");
}
if(name === "CURSOR RIGHT"){
  client.write("right\n");
}
if(name === "CURSOR DOWN"){
  client.write("down\n");
}
if(name === "BACK"){
  client.write("escape\n");
}
if(name === "CURSOR ENTER"){
  client.write("enter\n");
}
if(name === "VOLUME UP"){
  client.write("vol+\n");
}
if(name === "VOLUME DOWN"){
  client.write("vol-\n");
}
if(name === "MUTE TOGGLE"){
  client.write("mute\n");
}
if(name === "MENU"){
  client.write("c\n"+"VK_F1\n");
}



  // TODO implement the actions for your device here
};

module.exports.getWizardLabelText = function() {
  return 'Wingardium Leviosa!';
};

module.exports.getSmallKittenImageUri = function getSmallKittenImageUri() {
  return 'https://placekitten.com/g/300/300';
};

module.exports.getLargeKittenImageUri = function getLargeKittenImageUri() {
  return 'https://placekitten.com/g/900/900';
};
