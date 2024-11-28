document.getElementById('img').src = "https://picsum.photos/536/354";
// Example usage of arrays and objects
var myArray = ['Apple', 'Banana', 'Cherry'];
            var myObject = {
                apple: 'red',
                banana: 'yellow',
                cherry: 'green'
            };

            // let html = document.getElementsByID('hi').innerHTML;
            function displayme() {
            document.getElementById('hi').innerHTML = myArray[0] + " " + myArray[1] + " " + myArray[2];
            document.getElementById('hi').style.color = "#dadada";
            document.getElementById('hi').style.background = "transparent";
            document.getElementById('hi').style.border = "0px solid";
            }

                        // audio player from goole using Jquery
                        $(document).ready(function () {
                            audioPlayer = new oyoPlayer();
                            $("body").append(audioPlayer);
                            audioPlayer.addToPlaylist("Mr_wobot.mp3", "Mr. Wobot - I'm A Robot");
                            // audioPlayer.addToPlaylist("audio/Drop Shot.mp3", "TaxiWars - Drop Shot");
                            // audioPlayer.addToPlaylist("audio/How To Disappear Completely.mp3", "Radiohead - How To Disappear Completely");
                            // audioPlayer.addToPlaylist("https://stream.player.arrow.nl/arrow", "Arrow Classic Rock");
                            audioPlayer.setSourceIndex(1);
                            audioPlayer.setNotification("Push Play to start");
                        });