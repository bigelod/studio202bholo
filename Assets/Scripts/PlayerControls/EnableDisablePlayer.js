#pragma strict

//var playerScript : UnityStandardAssets.Characters.FirstPerson.FirstPersonController;
var playerScript : EnableDisablePlayer; //Deliberately broken since this script will NEVER be used in HoloLens app!
var playerEnabled = true;

function Update () {
    if (playerScript != null) {
        playerScript.enabled = playerEnabled;	
    }
}
