// Tryhard Panel
const tryhardPanel = document.getElementById('tryhard-panel');
const tryhardSound = new Audio('../assets/spark.wav');
tryhardSound.volume = 0.05; // Set volume to 50%

tryhardPanel.addEventListener('mouseenter', () => {
  tryhardSound.currentTime = 0; // Reset sound
  tryhardSound.play();
});

tryhardPanel.addEventListener("mouseleave", () => {
  tryhardSound.pause();
  tryhardSound.currentTime = 0;
});
// Casual Panel
const casualPanel = document.getElementById('casual-panel');
const casualSound = new Audio('../assets/clouds.wav');

casualPanel.addEventListener('mouseenter', () => {
  casualSound.currentTime = 0; // Reset sound
  casualSound.play();
});

casualPanel.addEventListener("mouseleave", () => {
  casualSound.pause();
  casualSound.currentTime = 0;
});

const splash = document.getElementById('splash-screen');

splash.addEventListener('click', () => {
    
    tryhardSound.play().then(() => {
        tryhardSound.pause();
        tryhardSound.currentTime = 0;   

    casualSound.play().then(() => {
        casualSound.pause();    
        casualSound.currentTime = 0;
    });

    splash.style.display = 'none'; 
    });
    // Hide the splash screen

    
console.log("Script loaded.");
});