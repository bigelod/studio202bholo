#pragma strict

<<<<<<< HEAD
//var playerScript : UnityStandardAssets.Characters.FirstPerson.FirstPersonController;
var playerScript : EnableDisablePlayer; //Deliberately broken since this script will NEVER be used in HoloLens app!
=======
var playerScript : UnityStandardAssets.Characters.FirstPerson.FirstPersonController;

>>>>>>> f47b900dffea2d0619984e58d6773f8cfbb92900
var playerEnabled = true;

function Update () {
    if (playerScript != null) {
        playerScript.enabled = playerEnabled;	
    }
}
