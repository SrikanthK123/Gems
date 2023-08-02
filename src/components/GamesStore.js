import React from 'react'
import GamesItems from './GamesItems'


const articles=[
    {
        "id": 540,
        "title": "Overwatch 2",
        "thumbnail": "https://www.freetogame.com/g/540/thumbnail.jpg",
        "short_description": "A hero-focused first-person team shooter from Blizzard Entertainment.",
        "game_url": "https://www.freetogame.com/open/overwatch-2",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "Activision Blizzard",
        "developer": "Blizzard Entertainment",
        "release_date": "2022-10-04",
        "freetogame_profile_url": "https://www.freetogame.com/overwatch-2"
    },
    {
        "id": 517,
        "title":"Minecraft",
        "thumbnail":"https://www.minecraft.net/content/dam/games/minecraft/screenshots/sniffer-1.jpg",
        "short_description": "Experience all the different ways to explore, survive, and build in Minecraft ",
        "game_url":"https://www.minecraft.net/en-us/store/minecraft-deluxe-collection-pc",
        "genre": "Survive",
        "platform":"PC(Windows),XBox,Mobile",
        "publisher":"Mojang",
        "developer":"Mojang Studios",
        "release_date":"2011-11-18",
        "freetogame_profile_url":"https://www.minecraft.net/en-us/store/minecraft-deluxe-collection-pc",
        
       


    },
    {
        "id": 529,
        "title":"Fortnite",
        "thumbnail":"https://cdn2.unrealengine.com/fortnite-key-art-bg-1920x1080-003d82ee7a71.jpg",
        "short_description": " Fortnite has dominated popular culture and won the hearts and minds of countless youth and young adults, myself included. From the goofy emotes and cartoon graphics to the intense shootouts ",
        "game_url":"https://www.fortnite.com/",
        "genre": "Survive",
        "platform":"PC(Windows),XBox,Mobile",
        "publisher":"Epic Games",
        "developer":"Epic Games",
        "release_date":"2017-07-21",
        "freetogame_profile_url":"https://www.fortnite.com/"


    },
    {
        "id": 510,
        "title":"Valorant",
        "thumbnail":"https://th.bing.com/th/id/OIP.GSnO2Eie9NtsS83kIh-67QHaEK?pid=ImgDet&rs=1",
        "short_description": " This deeply tactical shooter from the brains behind League of Legends is Fortnite’s latest challenger ",
        "game_url":"https://playvalorant.com/en-gb/",
        "genre": "First-person shooter",
        "platform":"PC(Windows)",
        "publisher":"Riot Games",
        "developer":"Riot Games",
        "release_date":"2020-06-02",
        "freetogame_profile_url":"https://playvalorant.com/en-gb/"


    },
    {
        "id": 519,
        "title":"Red Dead Redemption 2",
        "thumbnail":"https://i.redd.it/a7qlyr6n4nq31.png",
        "short_description": " Red Dead Redemption 2 (RDR2) walkthrough features guides for every main story mission, complete with Gold Medal Checklist Requirements",
        "game_url":"https://www.rockstargames.com/reddeadredemption2/restricted-content/agegate/denied",
        "genre": "Action-adventure",
        "platform":"PC(Windows),PS,XBox",
        "publisher":"Rockstar Games",
        "developer":"Rockstar Games",
        "release_date":"2018-11-27",
        "freetogame_profile_url":"https://www.rockstargames.com/reddeadredemption2/restricted-content/agegate/denied"


    },
    {
        "id": 555,
        "title":"GTA-5",
        "thumbnail":"https://th.bing.com/th/id/OIP.zF8X9YyL9sCm7_nbZiet8wAAAA?pid=ImgDet&rs=1",
        "short_description": " Since its release in 2013, Grand Theft Auto 5 has only grown in popularity. Much of this is due to its bonkers Online component",
        "game_url":"https://www.rockstargames.com/gta-v",
        "genre": "Action-adventure",
        "platform":"PC(Windows),PS,XBox",
        "publisher":"Rockstar Games",
        "developer":"Rockstar Games",
        "release_date":"2015-04-14",
        "freetogame_profile_url":"https://www.rockstargames.com/gta-v"
        

    },
    {
        "id": 558,
        "title":"Sea of Thieves",
        "thumbnail":"https://asso-lecran.fr/wp-content/uploads/2020/06/sea-of-thieves-logo-1-1200x675.png",
        "short_description": "The game is set in a charming and beautifully crafted world, where players find themselves on the fictional and mysterious Sea of Thieves. ",
        "game_url":"https://www.seaofthieves.com/",
        "genre": "Action-adventure",
        "platform":"PC(Windows),XBox",
        "publisher":"Microsoft Studios",
        "developer":"Developer Rare",
        "release_date":"2018-03-20",
        "freetogame_profile_url":"https://www.seaofthieves.com/"
        

    },
    {
        "id": 617,
        "title":"Raft",
        "thumbnail":"https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/10/RAFT-Feature.jpg",
        "short_description": "The game begins with the player character stranded on a small raft floating aimlessly on the open sea.",
        "game_url":"https://raft-game.com/",
        "genre": "Survive",
        "platform":"PC(Windows)",
        "publisher":"Axolot Games",
        "developer":"Redbeet Interactive",
        "release_date":"2018-05-23",
        "freetogame_profile_url":"https://raft-game.com/"
        

    },
    
    {
        "id": 629,
        "title":"Pacify",
        "thumbnail":"https://www.codewithmike.com/wp-content/uploads/2020/04/pacify-review-1536x864.png",
        "short_description": "Pacify is a horror-themed multiplayer video game.players take on the roles of paranormal investigators tasked with exploring haunted locations to uncover the truth behind the malevolent occurrences",
        "game_url":"https://pacifygame.com/",
        "genre": "Action",
        "platform":"PC(Windows)",
        "publisher":"Indie Game ",
        "developer":"Shawn Hitchcock",
        "release_date":"2019-02-23",
        "freetogame_profile_url":"https://pacifygame.com/"
        

    },
    {
        "id": 610,
        "title":"Propnight",
        "thumbnail":"https://i.ytimg.com/vi/Eb7pamE9lGE/maxresdefault.jpg",
        "short_description": "Propnight is a 4v1 asymmetrical horror game. Four players play as Survivors, with the fifth player playing as the Killer.",
        "game_url":"https://www.propnight.com/",
        "genre": "Survival horror",
        "platform":"PC(Windows)",
        "publisher":"MyTona",
        "developer":"Fntastic",
        "release_date":"2021-11-30",
        "freetogame_profile_url":"https://www.propnight.com/"
        

    },
    {
        "id": 658,
        "title":"Dead By Daylight",
        "thumbnail":"https://www.heypoorplayer.com/wp-content/uploads/2017/06/dyd1.jpg",
        "short_description": "The gameplay of Dead by Daylight revolves around a simple yet thrilling concept. It pits four survivors against one powerful killer.",
        "game_url":"https://deadbydaylight.com/",
        "genre": "Survival horror",
        "platform":"PC(Windows),PlayStation, Xbox",
        "publisher":"Behaviour Interactive",
        "developer":"Behaviour Interactive",
        "release_date":"2016-06-14",
        "freetogame_profile_url":"https://deadbydaylight.com/"
        

    },
    {
        "id": 655,
        "title":"Fall Guys",
        "thumbnail":"https://br.atsit.in/th/wp-content/uploads/2021/07/fall-guys-e0b88be0b8b5e0b88be0b8b1e0b988e0b899-5-e0b980e0b8a3e0b8b4e0b988e0b8a1e0b895e0b989e0b899e0b881e0b8b2e0b8a3e0b89ce0b888e0b88d.jpg",
        "short_description": "The premise of Fall Guys is straightforward yet incredibly entertaining.It features up to 60 adorable jellybean-like characters, each controlled by a player",
        "game_url":"https://www.fallguys.com/en-US",
        "genre": "Battle royale game",
        "platform":"PC(Windows),PlayStation, Xbox, Android, iOS",
        "publisher":"Epic Games",
        "developer":"Epic Games",
        "release_date":"2020-08-04",
        "freetogame_profile_url":"https://www.fallguys.com/en-US"
        

    },
    {
        "id": 717,
        "title":"Human Fall Flat",
        "thumbnail":"https://i0.wp.com/gamepcfull.com/wp-content/uploads/2020/04/human-fall-flat.jpg?fit=1920%2C1080&ssl=1",
        "short_description": "Human: Fall Flat  is a unique and whimsical physics-based puzzle-platformer video game.The game features open-ended and non-linear gameplay",
        "game_url":"https://www.humanfallflat.com/",
        "genre": "Action Adventure",
        "platform":"PC(Windows),PlayStation, Xbox, Android, iOS",
        "publisher":"No Brakes Games",
        "developer":"No Brakes Games",
        "release_date":"2020-08-04",
        "freetogame_profile_url":"https://www.humanfallflat.com/"
        

    },
    {
        "id": 710,
        "title":"God OF War",
        "thumbnail":"https://wallpapercave.com/wp/wp2643092.jpg",
        "short_description": "God of War is an action-adventure video game where players control Kratos",
        "game_url":"https://www.playstation.com/en-us/god-of-war/",
        "genre": "Action Adventure",
        "platform":"PC(Windows),PlayStation, Xbox.",
        "publisher":"Sony Interactive Entertainment",
        "developer":"Santa Monica Studio",
        "release_date":"2018-04-20",
        "freetogame_profile_url":"https://www.playstation.com/en-us/god-of-war/"
        

    },
    {
        "id": 711,
        "title":"Assassin's Creed Valhalla",
        "thumbnail":"https://www.hdwallpapers.in/download/valhalla_assassins_creed_4k_hd_assassins_creed_valhalla-HD.jpg",
        "short_description": "Assassin's Creed Valhalla is an action-adventure role-playing video game.Set in the 9th century during the Viking Age, players  ",
        "game_url":"https://www.ubisoft.com/en-us/game/assassins-creed/valhalla",
        "genre": "Action Adventure",
        "platform":"PC(Windows),PlayStation, Xbox.",
        "publisher":"Ubisoft",
        "developer":"Ubisoft Montreal",
        "release_date":"2020-11-10",
        "freetogame_profile_url":"https://www.ubisoft.com/en-us/game/assassins-creed/valhalla"
        

    },
    {
        "id": 521,
        "title": "Diablo Immortal",
        "thumbnail": "https://www.freetogame.com/g/521/thumbnail.jpg",
        "short_description": "Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.",
        "game_url": "https://www.freetogame.com/open/diablo-immortal",
        "genre": "MMOARPG",
        "platform": "PC (Windows)",
        "publisher": "Blizzard Entertainment",
        "developer": "Blizzard Entertainment",
        "release_date": "2022-06-02",
        "freetogame_profile_url": "https://www.freetogame.com/diablo-immortal"
    },
    {
        "id": 517,
        "title": "Lost Ark",
        "thumbnail": "https://www.freetogame.com/g/517/thumbnail.jpg",
        "short_description": "Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed.",
        "game_url": "https://www.freetogame.com/open/lost-ark",
        "genre": "ARPG",
        "platform": "PC (Windows)",
        "publisher": "Amazon Games",
        "developer": "Smilegate RPG",
        "release_date": "2022-02-11",
        "freetogame_profile_url": "https://www.freetogame.com/lost-ark"
    },
    {
        "id": 516,
        "title": "PUBG: BATTLEGROUNDS",
        "thumbnail": "https://www.freetogame.com/g/516/thumbnail.jpg",
        "short_description": "Get into the action in one of the longest running battle royale games PUBG Battlegrounds.",
        "game_url": "https://www.freetogame.com/open/pubg",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "KRAFTON, Inc.",
        "developer": "KRAFTON, Inc.",
        "release_date": "2022-01-12",
        "freetogame_profile_url": "https://www.freetogame.com/pubg"
    },
    {
        "id": 508,
        "title": "Enlisted",
        "thumbnail": "https://www.freetogame.com/g/508/thumbnail.jpg",
        "short_description": "Get ready to command your own World War II military squad in Gaijin and Darkflow Software’s MMO squad-based shooter Enlisted. ",
        "game_url": "https://www.freetogame.com/open/enlisted",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "Gaijin Entertainment",
        "developer": "Darkflow Software",
        "release_date": "2021-04-08",
        "freetogame_profile_url": "https://www.freetogame.com/enlisted"
    },
    {
        "id": 525,
        "title": "MultiVersus",
        "thumbnail": "https://www.freetogame.com/g/525/thumbnail.jpg",
        "short_description": "The Warner Bros lineup meets Smash in Player First Games’ MultiVersus.",
        "game_url": "https://www.freetogame.com/open/multiversus",
        "genre": "Fighting",
        "platform": "PC (Windows)",
        "publisher": "Warner Bros. Games",
        "developer": "Player First Games",
        "release_date": "2022-07-19",
        "freetogame_profile_url": "https://www.freetogame.com/multiversus"
    },
    {
        "id": 475,
        "title": "Genshin Impact",
        "thumbnail": "https://www.freetogame.com/g/475/thumbnail.jpg",
        "short_description": "If you’ve been looking for a game to scratch that open-world action RPG itch, one with perhaps a bit of Asian flair, then you’re going to want to check out miHoYo’s Genshin Impact.",
        "game_url": "https://www.freetogame.com/open/genshin-impact",
        "genre": "Action RPG",
        "platform": "PC (Windows)",
        "publisher": "miHoYo",
        "developer": "miHoYo",
        "release_date": "2020-09-28",
        "freetogame_profile_url": "https://www.freetogame.com/genshin-impact"
    },
  
    {
        "id": 11,
        "title": "Neverwinter",
        "thumbnail": "https://www.freetogame.com/g/11/thumbnail.jpg",
        "short_description": "A free-to-play 3D action MMORPG based on the acclaimed Dungeons & Dragons fantasy roleplaying game. ",
        "game_url": "https://www.freetogame.com/open/neverwinter",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Perfect World Entertainment",
        "developer": "Cryptic Studios",
        "release_date": "2013-12-06",
        "freetogame_profile_url": "https://www.freetogame.com/neverwinter"
    },
    {
        "id": 515,
        "title": "Halo Infinite",
        "thumbnail": "https://www.freetogame.com/g/515/thumbnail.jpg",
        "short_description": "For the first time ever, a free-to-play Halo experience is available in the form of Halo Infinite’s multiplayer.",
        "game_url": "https://www.freetogame.com/open/halo-infinite",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "Xbox Game Studios",
        "developer": "343 Industries",
        "release_date": "2021-11-15",
        "freetogame_profile_url": "https://www.freetogame.com/halo-infinite"
    },
    {
        "id": 511,
        "title": "Phantasy Star Online 2 New Genesis",
        "thumbnail": "https://www.freetogame.com/g/511/thumbnail.jpg",
        "short_description": "The legacy of Phantasy Star Online 2 continues a thousand years later!",
        "game_url": "https://www.freetogame.com/open/pso2-new-genesis",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Sega",
        "developer": "Sega",
        "release_date": "2021-06-09",
        "freetogame_profile_url": "https://www.freetogame.com/pso2-new-genesis"
    },
    {
        "id": 5,
        "title": "Crossout",
        "thumbnail": "https://www.freetogame.com/g/5/thumbnail.jpg",
        "short_description": "A post-apocalyptic MMO vehicle combat game! ",
        "game_url": "https://www.freetogame.com/open/crossout",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "Targem",
        "developer": "Gaijin",
        "release_date": "2017-05-30",
        "freetogame_profile_url": "https://www.freetogame.com/crossout"
    },
    {
        "id": 9,
        "title": "World of Warships",
        "thumbnail": "https://www.freetogame.com/g/9/thumbnail.jpg",
        "short_description": "A 3D free to play naval action-themed MMO from the creators of World of Tanks! ",
        "game_url": "https://www.freetogame.com/open/world-of-warships",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "Wargaming",
        "developer": "Wargaming",
        "release_date": "2015-07-02",
        "freetogame_profile_url": "https://www.freetogame.com/world-of-warships"
    },
    {
        "id": 12,
        "title": "War Thunder",
        "thumbnail": "https://www.freetogame.com/g/12/thumbnail.jpg",
        "short_description": "A MMO shooter that puts you in command of hundreds of the finest combat vehicles of World War II.",
        "game_url": "https://www.freetogame.com/open/war-thunder",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "Gaijin Entertainment",
        "developer": "Gaijin Entertainment",
        "release_date": "2013-08-15",
        "freetogame_profile_url": "https://www.freetogame.com/war-thunder"
    },
    {
        "id": 2,
        "title": "World of Tanks",
        "thumbnail": "https://www.freetogame.com/g/2/thumbnail.jpg",
        "short_description": "If you like blowing up tanks, with a quick and intense game style you will love this game!",
        "game_url": "https://www.freetogame.com/open/world-of-tanks",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "Wargaming",
        "developer": "Wargaming",
        "release_date": "2011-04-12",
        "freetogame_profile_url": "https://www.freetogame.com/world-of-tanks"
    },
    {
        "id": 529,
        "title": "Tower of Fantasy",
        "thumbnail": "https://www.freetogame.com/g/529/thumbnail.jpg",
        "short_description": "Tower of Fantasy is a 3D open-world RPG, anime-style sci-fi MMO RPG game with unique characters and beautiful open vistas!",
        "game_url": "https://www.freetogame.com/open/tower-of-fantasy",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Level Infinite",
        "developer": "Hotta Studio",
        "release_date": "2022-08-10",
        "freetogame_profile_url": "https://www.freetogame.com/tower-of-fantasy"
    },
    {
        "id": 528,
        "title": "Noah’s Heart",
        "thumbnail": "https://www.freetogame.com/g/528/thumbnail.jpg",
        "short_description": "Noah’s Heart is an open-world MMORPG game with a focus on exploration and socialization.",
        "game_url": "https://www.freetogame.com/open/noahs-heart",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Archosaur Games",
        "developer": "Archosaur Games",
        "release_date": "2022-07-28",
        "freetogame_profile_url": "https://www.freetogame.com/noahs-heart"
    },
    {
        "id": 466,
        "title": "Valorant",
        "thumbnail": "https://www.freetogame.com/g/466/thumbnail.jpg",
        "short_description": "Test your mettle in Riot Games’ character-based FPS shooter Valorant.",
        "game_url": "https://www.freetogame.com/open/valorant",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "Riot Games",
        "developer": "Riot Games",
        "release_date": "2020-06-02",
        "freetogame_profile_url": "https://www.freetogame.com/valorant"
    },
    {
        "id": 467,
        "title": "Phantasy Star Online 2",
        "thumbnail": "https://www.freetogame.com/g/467/thumbnail.jpg",
        "short_description": "Welcome to ARKS, and elite task force searching dangerous planets for the corrupted Falspawn in Phantasy Star 2 Online, Sega’s popular, free-to-play sci-fi MMORPG.",
        "game_url": "https://www.freetogame.com/open/pso2",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "SEGA",
        "developer": "SEGA",
        "release_date": "2020-05-27",
        "freetogame_profile_url": "https://www.freetogame.com/pso2"
    },
    
]
const GamesStore = () => {
    
  return (
    <div className='Fullscreen'>
          <h3 className='title'>Games are Made</h3>
      <div className="container my-3">
      
        <div className="row">
          {articles.map((article) => (
            <div className="col-md-4" key={article.id}>
              <GamesItems
                title= {article.title?article.title.slice(0,45):''}
                description={article.short_description?article.short_description.slice(0,90):'....'}
                ImagesUrl={article.thumbnail}
                gameurl={article.game_url}
                platform={article.platform}
              />
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default GamesStore
