window.onload = function(){
    slider();
    //next button
}
function slider(){
    console.log("Slider fired");
  
    mybutton = document.getElementById("mybutton");
        mybutton.addEventListener('click', nextClicked(), false);

}
//arrays of text and images
function nextClicked() {
    var proimg = new Array();
    proimg[0] = "Assets/prof1.jpg";
    proimg[1] = "Assets/prof2.jpg";
    proimg[2] = "Assets/prof3.jpg";
    var protxt = new Array();
    protxt[0] = "Bounty hunter will be one of the more challenging professions in starcitizen. If some someone breaks the law in Star Citizen they will be listed as a public enemy and have a bounty on their head. Bounty hunters will have the option to bring them in dead or alive for credits. Players and organizations can also put a bounty on another player for bounty hunters to collect. Some ships liek the anvil hawk (shown on the left) and the avenger stalker have prison pods to bring the criminals back alive to prison, where they will mine rocks and do other menial tasks until their sentence is over. ";
    protxt[1] = " mining and salvaging will play a huge part in star citizen with ships like the MISC Prospector (shown on the left) and the reclaimer a huge salavaging ship. you wont be struglling for resources with 100's of planets to mines from and crashed ships to salvage from. You wont be struggling to make a profit either with these resouces being able to be melted down and sold to the highest bidder in your local Space market. These professions can take you to distant planets for specific materials or turn you into a criminal if one unlucky player drives past with a  ship made up of all the resources you need.";
    protxt[2] = "Science, Exploration and medical services are a massive part of Star citizen proffesionxs wherether it be doing experiments on the endeavor(shown on the left) where you could be making a ground breaking new discovery of how to over clock your ship or creating new chemicals for player to drink and gain extra stamina from; or perhaps exploring the vast universe making new discoverys on planets or discovering new entire solar systems and worm holes to make traversal that little bit easier forplayers. As your exploring you may encounter another player in need of medical attention where you can take him up to one of the hospital bays and heal their wounds for a price.";
    console.log("Next Clicked!");
 
        var counter = 0;
        return function (event) {
            counter++;
            professionimg = document.getElementById("professionimg");
            professionimg.src = proimg[counter % proimg.length];
            p1 = document.getElementById("p1");
            p1.innerHTML = protxt[counter % protxt.length];
        }
}
//geolocation
function myMap() {
    var maploc = {
        center: new google.maps.LatLng(53.328787, -2.230669),
        zoom: 20,
    };
    var map = new google.maps.Map(document.getElementById("Map"), maploc);
}



