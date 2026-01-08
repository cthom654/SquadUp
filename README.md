SquadUP
A gaming matchmaking platform that connects players based on their playstyle - whether you're a competitive tryhard or a casual player just looking to have fun.
Features

Dual Playstyle System: Choose between Tryhard (competitive ranked grinding) or Casual (relaxed, fun gameplay)
Multi-Game Support: Supports CS:GO, Fortnite, League of Legends, Valorant, and Overwatch
Interactive UI: Hover effects with audio feedback for each playstyle panel
Splash Screen: Opening screen with "Fury or Fun" tagline
User Profiles: Profile system with player search functionality

File Structure
├── HTML/
│   ├── login.html
│   ├── index.html
│   ├── tryhardMenu.html
│   ├── casualMenu.html
│   └── profile.html
├── CSS/
│   ├── login.css
│   ├── style.css
│   └── tryhardMenu.css
├── JAVA/
│   └── mainpage.js
└── assets/
    ├── spark.wav
    ├── clouds.wav
    ├── tryhard.gif
    ├── casual.gif
    └── game images (csgo.jpg, fortnite.jpg, etc.)
Setup

Clone or download this repository
Ensure all asset files (images and audio) are in the assets/ folder
Open login.html in a web browser to start

Usage

Login: Enter credentials on the login page
Choose Your Style: Click the splash screen, then select Tryhard or Casual
Select Game: Browse through available games in horizontal sections
Find Players: Use the search feature to find other players

Playstyles
Tryhard

For competitive players
Tight comms and serious gameplay
Ranked grinding focus
Audio: spark.wav on hover

Casual

For relaxed players
No pressure, just vibing
Fun-focused matches
Audio: clouds.wav on hover

Technologies

Vanilla JavaScript
CSS animations and hover effects
Audio feedback system
Press Start 2P font for retro gaming aesthetic
Responsive grid layout for game selection

Notes

Audio volumes are pre-configured (5% for tryhard, standard for casual)
Splash screen disappears on click after preloading audio
Hover effects include scale transforms and background image swaps
