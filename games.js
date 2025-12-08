// games.js
// Four games: 3 preset + 1 blank.
const GAMES = [
  {
    topic: "Nintendo",
    categories: {
      "Mario": {
        "Mario's brother?": "Luigi",
        "Princess of the Mushroom Kingdom?": "Peach",
        "Power-up that lets Mario fly in SMB3?": "Super Leaf",
        "Dinosaur companion first seen in SMW?": "Yoshi",
        "Item that targets 1st place in Mario Kart?": "Blue Shell"
      },
      "Zelda": {
        "Hero’s name in most games?": "Link",
        "Name of the princess?": "Zelda",
        "Sacred relic with three parts?": "Triforce",
        "Instrument used in Ocarina of Time?": "Ocarina",
        "2017 open-world entry?": "Breath of the Wild"
      },
      "Smash Bros": {
        "Series director?": "Masahiro Sakurai",
        "Item that triggers a Final Smash?": "Smash Ball",
        "Max local players in Ultimate?": "8",
        "Term for returning to stage after launch?": "Recovery",
        "Mode with waves of opponents in Melee?": "Multi-Man Melee"
      },
      "Metroid": {
        "Bounty hunter protagonist?": "Samus Aran",
        "Parasite from Metroid Fusion?": "X Parasite",
        "Prime planet with Chozo ruins?": "Tallon IV",
        "Ability to roll into small tunnels?": "Morph Ball",
        "2021 2D Switch entry?": "Metroid Dread"
      },
      "Animal Crossing": {
        "Tanuki who runs the shop?": "Tom Nook",
        "Musician who performs on Saturdays?": "K.K. Slider",
        "Currency name?": "Bells",
        "NH app to edit terrain/island?": "Island Designer",
        "Owl museum curator?": "Blathers"
      }
    }
  },

  {
    topic: "Pokémon",
    categories: {
      "Starters": {
        "Grass starter in Gen 1?": "Bulbasaur",
        "Fire starter in Gen 2?": "Cyndaquil",
        "Water starter in Gen 3?": "Mudkip",
        "Fire starter in Gen 4?": "Chimchar",
        "Grass starter in Gen 5?": "Snivy"
      },
      "Types & Matchups": {
        "What is Swampert weak to": "Grass",
        "Type immune to Ground?": "Flying",
        "Type that resists both Fire and Water?": "Dragon",
        "Electric moves have no effect on?": "Ground",
        "What is Spirtomb weak to": "Fairy"
      },
      "Legendaries": {
        "Mascot of Pokémon Gold?": "Ho-Oh",
        "Kanto Ice legendary bird trio?": "Articuno",
        "Sinnoh steel creation trio?": "Dialga",
        "Time-travel mythical Pokémon?": "Celebi",
        "Alola guardian of Melemele Island?": "Tapu Koko"
      },
      "Items & Moves": {
        "Item that boosts friendship while walking?": "Soothe Bell",
        "Move that puts the foe to sleep?": "Hypnosis",
        "TM stands for?": "Technical Machine",
        "Poké Ball that never fails?": "Master Ball",
        "Dialga's signature move?": "Roar of Time"
      },
      "Regions": {
        "Gen 1 region?": "Kanto",
        "Gen 2 region?": "Johto",
        "Gen 3 region?": "Hoenn",
        "Gen 4 region?": "Sinnoh",
        "Gen 5 region?": "Unova"
      }
    }
  },

  {
    topic: "Minecraft",
    categories: {
      "Blocks": {
        "Block that explodes when powered?": "TNT",
        "Transparent block mobs can’t spawn on?": "Glass",
        "Block used for enchanting?": "Enchanting Table",
        "Green ore used for trading?": "Emerald Ore",
        "Fuel item commonly used early game?": "Coal"
      },
      "Mobs": {
        "Mob that explodes near players?": "Creeper",
        "Nether mob that shoots fireballs?": "Ghast",
        "Tameable feline?": "Cat",
        "Three-headed boss?": "Wither",
        "Underwater undead mob?": "Drowned"
      },
      "Redstone": {
        "Wire-like item for power?": "Redstone Dust",
        "Block that pushes when powered?": "Piston",
        "Device that delays signals?": "Redstone Repeater",
        "Block that compares container contents?": "Redstone Comparator",
        "Block that detects updates and outputs pulse?": "Observer"
      },
      "Biomes": {
        "Biome with lots of sand and no rain?": "Desert",
        "Tall spruce & podzol biome?": "Taiga",
        "Underground biome with azalea trees above?": "Lush Caves",
        "Nether biome with warped nylium?": "Warped Forest",
        "Snowy biome with igloos?": "Snowy Plains"
      },
      "Crafting": {
        "Planks from one log?": "4",
        "Sticks from two planks?": "4",
        "Crafting table recipe?": "4 wood planks",
        "Beds require planks and what?": "Wool",
        "Iron ingots needed for a bucket?": "3"
      }
    }
  },

  {
    topic: "Blank game",
    categories: {
      "Category 1": {},
      "Category 2": {},
      "Category 3": {},
      "Category 4": {},
      "Category 5": {}
    }
  }
];
// Expose for browser use
if (typeof window !== "undefined") {
  window.GAMES = GAMES;
}


