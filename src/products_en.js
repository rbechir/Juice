export const currency = 'Juice';

const products = {
    Juice: {
        name: 'Juice',
        stock: 0,
        production: 0
    },
    Cloth: {
        name: 'Cloth',
        level: 1,
        stock: 0,
        require: {
            Juice: 100
        },
        complete: {
            Juice: false
        },
        production: 1
    },
    Fur: {
        name: 'Fur',
        level: 1,
        stock: 0,
        require: {
            Juice: 100
        },
        complete: {
            Juice: false
        },
        production: 1
    },
    Wood: {
        name: 'Wood',
        level: 1,
        stock: 0,
        require: {
            Juice: 100
        },
        complete: {
            Juice: false
        },
        production: 1
    },
    Iron: {
        name: 'Iron',
        level: 1,
        stock: 0,
        require: {
            Juice: 100
        },
        complete: {
            Juice: false
        },
        production: 1
    },
    Smallfolk: {
        name: 'Smallfolk',
        level: 2,
        stock: 0,
        require: {
            Juice: 100
        },
        complete: {
            Juice: false
        },
        production: 1
    },
    Grains: {
        name: 'Grains',
        level: 2,
        stock: 0,
        require: {
            Juice: 100
        },
        complete: {
            Juice: false
        },
        production: 1
    },
    Horse: {
        name: 'Horse',
        level: 3,
        stock: 0,
        require: {
            Juice: 100
        },
        complete: {
            Juice: false
        },
        production: 1
    },
    Ore: {
        name: 'Ore',
        level: 3,
        stock: 0,
        require: {
            Juice: 100
        },
        complete: {
            Juice: false
        },
        production: 1
    },
    Fish: {
        name: 'Fish',
        level: 3,
        stock: 0,
        require: {
            Juice: 100
        },
        complete: {
            Juice: false
        },
        production: 1
    },
    Stone: {
        name: 'Stone',
        level: 5,
        stock: 0,
        require: {
            Juice: 100
        },
        complete: {
            Juice: false
        },
        production: 1
    },
    Steel: {
        name: 'Steel',
        level: 6,
        stock: 0,
        require: {
            Juice: 3300,
            'Flickering fire': 1,
            Iron: 3
        },
        complete: {
            Juice: false,
            'Flickering fire': false,
            Iron: false
        },
        production: 33
    },
    'Hard wood': {
        name: 'Hard wood',
        level: 6,
        stock: 0,
        require: {
            Juice: 1900,
            Wood: 2,
            Iron: 1
        },
        complete: {
            Juice: false,
            Wood: false,
            Iron: false
        },
        production: 19
    },
    'Dyed textile': {
        name: 'Dyed textile',
        level: 8,
        stock: 0,
        require: {
            Juice: 6800,
            Cloth: 3,
            Grains: 1
        },
        complete: {
            Juice: false,
            Cloth: false,
            Grains: false
        },
        production: 68
    },
    'Fine wood': {
        name: 'Fine wood',
        level: 8,
        stock: 0,
        require: {
            Juice: 6700,
            Wood: 2,
            Cloth: 1
        },
        complete: {
            Juice: false,
            Wood: false,
            Cloth: false
        },
        production: 67
    },
    Shortsword: {
        name: 'Shortsword',
        level: 2,
        stock: 0,
        require: {
            Juice: 400,
            Wood: 2,
            Iron: 2
        },
        complete: {
            Juice: false,
            Wood: false,
            Iron: false
        },
        production: 4
    },
    Longsword: {
        name: 'Longsword',
        level: 3,
        stock: 0,
        require: {
            Juice: 800,
            Shortsword: 1,
            Iron: 2
        },
        complete: {
            Juice: false,
            Shortsword: false,
            Iron: false
        },
        production: 8
    },
    Dagger: {
        name: 'Dagger',
        level: 3,
        stock: 0,
        require: {
            Juice: 800,
            Wood: 3,
            Iron: 2,
            Cloth: 1
        },
        complete: {
            Juice: false,
            Wood: false,
            Iron: false,
            Cloth: false
        },
        production: 8
    },
    Axe: {
        name: 'Axe',
        level: 4,
        stock: 0,
        require: {
            Juice: 2600,
            Dagger: 2,
            Iron: 3,
            Wood: 3
        },
        complete: {
            Juice: false,
            Dagger: false,
            Iron: false,
            Wood: false
        },
        production: 26
    },
    Shortbow: {
        name: 'Shortbow',
        level: 5,
        stock: 0,
        require: {
            Juice: 1400,
            Wood: 3,
            Cloth: 2,
            Fur: 1
        },
        complete: {
            Juice: false,
            Wood: false,
            Cloth: false,
            Fur: false
        },
        production: 14
    },
    'Wood shield': {
        name: 'Wood shield',
        level: 5,
        stock: 0,
        require: {
            Juice: 1400,
            Wood: 5,
            Iron: 1
        },
        complete: {
            Juice: false,
            Wood: false,
            Iron: false
        },
        production: 14
    },
    Pike: {
        name: 'Pike',
        level: 6,
        stock: 0,
        require: {
            Juice: 3800,
            Longsword: 2,
            Wood: 4,
            Iron: 2
        },
        complete: {
            Juice: false,
            Longsword: false,
            Wood: false,
            Iron: false
        },
        production: 38
    },
    Broadsword: {
        name: 'Broadsword',
        level: 6,
        stock: 0,
        require: {
            Juice: 3000,
            Shortsword: 2,
            Iron: 4,
            Wood: 2
        },
        complete: {
            Juice: false,
            Shortsword: false,
            Iron: false,
            Wood: false
        },
        production: 30
    },
    'Composite bow': {
        name: 'Composite bow',
        level: 6,
        stock: 0,
        require: {
            Juice: 5000,
            Shortbow: 2,
            Wood: 3,
            Cloth: 3
        },
        complete: {
            Juice: false,
            Shortbow: false,
            Wood: false,
            Cloth: false
        },
        production: 50
    },
    'Metal shield': {
        name: 'Metal shield',
        level: 6,
        stock: 0,
        require: {
            Juice: 5000,
            'Wood shield': 2,
            Iron: 6
        },
        complete: {
            Juice: false,
            'Wood shield': false,
            Iron: false
        },
        production: 50
    },
    'Light crossbow': {
        name: 'Light crossbow',
        level: 6,
        stock: 0,
        require: {
            Juice: 2200,
            Wood: 3,
            Cloth: 2,
            Fur: 1
        },
        complete: {
            Juice: false,
            Wood: false,
            Cloth: false,
            Fur: false
        },
        production: 22
    },
    'Hefty broadsword': {
        name: 'Hefty broadsword',
        level: 7,
        stock: 0,
        require: {
            Juice: 10600,
            Broadsword: 2,
            Steel: 9,
            'Hard wood': 5
        },
        complete: {
            Juice: false,
            Broadsword: false,
            Steel: false,
            'Hard wood': false
        },
        production: 106
    },
    'Heavy crossbow': {
        name: 'Heavy crossbow',
        level: 7,
        stock: 0,
        require: {
            Juice: 6600,
            'Light crossbow': 1,
            Wood: 7,
            Cloth: 5
        },
        complete: {
            Juice: false,
            'Light crossbow': false,
            Wood: false,
            Cloth: false
        },
        production: 66
    },
    'Masterwork greatsword': {
        name: 'Masterwork greatsword',
        level: 8,
        stock: 0,
        require: {
            Juice: 87800,
            'Hefty broadsword': 3,
            Steel: 11,
            'Hard wood': 7
        },
        complete: {
            Juice: false,
            'Hefty broadsword': false,
            Steel: false,
            'Hard wood': false
        },
        production: 878
    },
    Doublet: {
        name: 'Doublet',
        level: 2,
        stock: 0,
        require: {
            Juice: 400,
            Cloth: 2,
            Fur: 2
        },
        complete: {
            Juice: false,
            Cloth: false,
            Fur: false
        },
        production: 4
    },
    'Unremarkable tunic': {
        name: 'Unremarkable tunic',
        level: 2,
        stock: 0,
        require: {
            Juice: 600,
            Cloth: 3,
            Fur: 3
        },
        complete: {
            Juice: false,
            Cloth: false,
            Fur: false
        },
        production: 6
    },
    'Leather armor': {
        name: 'Leather armor',
        level: 3,
        stock: 0,
        require: {
            Juice: 800,
            Doublet: 1,
            Fur: 1,
            Cloth: 1
        },
        complete: {
            Juice: false,
            Doublet: false,
            Fur: false,
            Cloth: false
        },
        production: 8
    },
    "Guard's uniform": {
        name: "Guard's uniform",
        level: 3,
        stock: 0,
        require: {
            Juice: 2200,
            'Unremarkable tunic': 1,
            Fur: 5,
            Cloth: 7
        },
        complete: {
            Juice: false,
            'Unremarkable tunic': false,
            Fur: false,
            Cloth: false
        },
        production: 22
    },
    Purse: {
        name: 'Purse',
        level: 5,
        stock: 0,
        require: {
            Juice: 1900,
            'Gold ring': 1,
            Ore: 2
        },
        complete: {
            Juice: false,
            'Gold ring': false,
            Ore: false
        },
        production: 19
    },
    'Linen clothing': {
        name: 'Linen clothing',
        level: 5,
        stock: 0,
        require: {
            Juice: 1400,
            Cloth: 4,
            Fur: 2
        },
        complete: {
            Juice: false,
            Cloth: false,
            Fur: false
        },
        production: 14
    },
    'Silk garment': {
        name: 'Silk garment',
        level: 6,
        stock: 0,
        require: {
            Juice: 4200,
            'Linen clothing': 1,
            Cloth: 8,
            Fur: 4
        },
        complete: {
            Juice: false,
            'Linen clothing': false,
            Cloth: false,
            Fur: false
        },
        production: 42
    },
    Halfhelm: {
        name: 'Halfhelm',
        level: 3,
        stock: 0,
        require: {
            Juice: 800,
            Iron: 5,
            Wood: 1
        },
        complete: {
            Juice: false,
            Iron: false,
            Wood: false
        },
        production: 8
    },
    Breastplate: {
        name: 'Breastplate',
        level: 4,
        stock: 0,
        require: {
            Juice: 2600,
            'Leather armor': 2,
            Iron: 4,
            Fur: 2
        },
        complete: {
            Juice: false,
            'Leather armor': false,
            Iron: false,
            Fur: false
        },
        production: 26
    },
    'Barred helm': {
        name: 'Barred helm',
        level: 4,
        stock: 0,
        require: {
            Juice: 2600,
            Halfhelm: 2,
            Fur: 5,
            Wood: 1
        },
        complete: {
            Juice: false,
            Halfhelm: false,
            Fur: false,
            Wood: false
        },
        production: 26
    },
    'Gold ring': {
        name: 'Gold ring',
        level: 4,
        stock: 0,
        require: {
            Juice: 900,
            Ore: 5
        },
        complete: {
            Juice: false,
            Ore: false
        },
        production: 9
    },
    'Silver chain': {
        name: 'Silver chain',
        level: 5,
        stock: 0,
        require: {
            Juice: 1300,
            Ore: 3,
            Fur: 1,
            Cloth: 1
        },
        complete: {
            Juice: false,
            Ore: false,
            Fur: false,
            Cloth: false
        },
        production: 13
    },
    'Silver torc': {
        name: 'Silver torc',
        level: 6,
        stock: 0,
        require: {
            Juice: 3100,
            'Silver chain': 1,
            Ore: 1,
            Fur: 1
        },
        complete: {
            Juice: false,
            'Silver chain': false,
            Ore: false,
            Fur: false
        },
        production: 31
    },
    'Gold torc': {
        name: 'Gold torc',
        level: 7,
        stock: 0,
        require: {
            Juice: 7800,
            'Silver torc': 1,
            'Gold ring': 1,
            Ore: 6
        },
        complete: {
            Juice: false,
            'Silver torc': false,
            'Gold ring': false,
            Ore: false
        },
        production: 78
    },
    Ostler: {
        name: 'Ostler',
        level: 3,
        stock: 0,
        require: {
            Juice: 800,
            Smallfolk: 1,
            Fur: 2,
            Grains: 3
        },
        complete: {
            Juice: false,
            Smallfolk: false,
            Fur: false,
            Grains: false
        },
        production: 8
    },
    'Warhorse': {
        name: 'Warhorse',
        level: 4,
        stock: 0,
        require: {
            Juice: 2100,
            Horse: 1,
            Ostler: 1,
            'Leather armor': 1
        },
        complete: {
            Juice: false,
            Horse: false,
            Ostler: false,
            'Leather armor': false
        },
        production: 21
    },
    'Armored knight': {
        name: 'Armored knight',
        level: 5,
        stock: 0,
        require: {
            Juice: 9500,
            'Foot soldier': 1,
            Breastplate: 1,
            'Barred helm': 1
        },
        complete: {
            Juice: false,
            'Foot soldier': false,
            Breastplate: false,
            'Barred helm': false
        },
        production: 95
    },
    'Mounted knight': {
        name: 'Mounted knight',
        level: 6,
        stock: 0,
        require: {
            Juice: 15100,
            'Armored knight': 1,
            Warhorse: 1,
            Purse: 1
        },
        complete: {
            Juice: false,
            'Armored knight': false,
            Warhorse: false,
            Purse: false
        },
        production: 151
    },
    'Lancer': {
        name: 'Lancer',
        level: 7,
        stock: 0,
        require: {
            Juice: 26300,
            'Mounted knight': 1,
            Pike: 1,
            'Silk garment': 1
        },
        complete: {
            Juice: false,
            'Mounted knight': false,
            Pike: false,
            'Silk garment': false
        },
        production: 263
    },
    'Heavy knight': {
        name: 'Heavy knight',
        level: 8,
        stock: 0,
        require: {
            Juice: 45500,
            Lancer: 1,
            'Gold torc': 1,
            'Metal shield': 1
        },
        complete: {
            Juice: false,
            Lancer: false,
            'Gold torc': false,
            'Metal shield': false
        },
        production: 455
    },
    'Steel-shod warhorse': {
        name: 'Steel-shod warhorse',
        level: 8,
        stock: 0,
        require: {
            Juice: 24600,
            Warhorse: 2,
            Ostler: 1,
            Steel: 4
        },
        complete: {
            Juice: false,
            Warhorse: false,
            Ostler: false,
            Steel: false
        },
        production: 246
    },
    'Elite cavalryman': {
        name: 'Elite cavalryman',
        level: 9,
        stock: 0,
        require: {
            Juice: 170700,
            'Heavy knight': 1,
            'Steel-shod warhorse': 1,
            'Masterwork greatsword': 1
        },
        complete: {
            Juice: false,
            'Heavy knight': false,
            'Steel-shod warhorse': false,
            'Masterwork greatsword': false
        },
        production: 1707
    },
    'Foot soldier': {
        name: 'Foot soldier',
        level: 4,
        stock: 0,
        require: {
            Juice: 3500,
            Smallfolk: 1,
            Longsword: 1,
            "Guard's uniform": 1
        },
        complete: {
            Juice: false,
            Smallfolk: false,
            Longsword: false,
            "Guard's uniform": false
        },
        production: 35
    },
    Militia: {
        name: 'Militia',
        level: 5,
        stock: 0,
        require: {
            Juice: 3500,
            Smallfolk: 1,
            Axe: 1
        },
        complete: {
            Juice: false,
            Smallfolk: false,
            Axe: false
        },
        production: 35
    },
    Bowman: {
        name: 'Bowman',
        level: 6,
        stock: 0,
        require: {
            Juice: 16300,
            Shortbow: 3,
            Militia: 3
        },
        complete: {
            Juice: false,
            Shortbow: false,
            Militia: false
        },
        production: 163
    },
    Archer: {
        name: 'Archer',
        level: 7,
        stock: 0,
        require: {
            Juice: 52800,
            'Composite bow': 2,
            Militia: 2,
            Bowman: 2
        },
        complete: {
            Juice: false,
            'Composite bow': false,
            Militia: false,
            Bowman: false
        },
        production: 528
    },
    Pikeman: {
        name: 'Pikeman',
        level: 7,
        stock: 0,
        require: {
            Juice: 2000,
            Militia: 1,
            Pike: 1
        },
        complete: {
            Juice: false,
            Militia: false,
            Pike: false
        },
        production: 20
    },
    'Shield bearers': {
        name: 'Shield bearers',
        level: 7,
        stock: 0,
        require: {
            Juice: 20200,
            Militia: 2,
            'Metal shield': 2
        },
        complete: {
            Juice: false,
            Militia: false,
            'Metal shield': false
        },
        production: 202
    },
    'Fire archer': {
        name: 'Fire archer',
        level: 8,
        stock: 0,
        require: {
            Juice: 59600,
            Archer: 1,
            Wood: 2,
            Iron: 2
        },
        complete: {
            Juice: false,
            Archer: false,
            Wood: false,
            Iron: false
        },
        production: 596
    },
    Phalanx: {
        name: 'Phalanx',
        level: 8,
        stock: 0,
        require: {
            Juice: 71000,
            'Shield bearers': 2,
            Pikeman: 2,
            Halfhelm: 4
        },
        complete: {
            Juice: false,
            'Shield bearers': false,
            Pikeman: false,
            Halfhelm: false
        },
        production: 710
    },
    'Blazing fire archer': {
        name: 'Blazing fire archer',
        level: 9,
        stock: 0,
        require: {
            Juice: 218600,
            'Fire archer': 3,
            'Flickering fire': 3,
            'Hard wood': 12
        },
        complete: {
            Juice: false,
            'Fire archer': false,
            'Flickering fire': false,
            'Hard wood': false
        },
        production: 2186
    },
    'Elite phalanx': {
        name: 'Elite phalanx',
        level: 9,
        stock: 0,
        require: {
            Juice: 239800,
            Phalanx: 2,
            Steel: 20,
            'Hard wood': 10
        },
        complete: {
            Juice: false,
            Phalanx: false,
            Steel: false,
            'Hard wood': false
        },
        production: 2398
    },
    'Milk of the poppy': {
        name: 'Milk of the poppy',
        level: 4,
        stock: 0,
        require: {
            Juice: 1000,
            Grains: 4,
            Fish: 2
        },
        complete: {
            Juice: false,
            Grains: false,
            Fish: false
        },
        production: 10
    },
    'Flickering fire': {
        name: 'Flickering fire',
        level: 5,
        stock: 0,
        require: {
            Juice: 1400,
            Wood: 3,
            Grains: 2,
            Iron: 1
        },
        complete: {
            Juice: false,
            Wood: false,
            Grains: false,
            Iron: false
        },
        production: 14
    },
    'Dream wine': {
        name: 'Dream wine',
        level: 5,
        stock: 0,
        require: {
            Juice: 3000,
            'Milk of the poppy': 1,
            Grains: 8,
            Fish: 4
        },
        complete: {
            Juice: false,
            'Milk of the poppy': false,
            Grains: false,
            Fish: false
        },
        production: 30
    },
    Mead: {
        name: 'Mead',
        level: 6,
        stock: 0,
        require: {
            Juice: 2100,
            Grains: 3,
            Wood: 1,
            Stone: 1
        },
        complete: {
            Juice: false,
            Grains: false,
            Wood: false,
            Stone: false
        },
        production: 21
    },
    'Pure water': {
        name: 'Pure water',
        level: 7,
        stock: 0,
        require: {
            Juice: 5600,
            Mead: 1,
            Cloth: 3
        },
        complete: {
            Juice: false,
            Mead: false,
            Cloth: false
        },
        production: 56
    },
    'Wildfire': {
        name: 'Wildfire',
        level: 8,
        stock: 0,
        require: {
            Juice: 20800,
            'Pure water': 2,
            'Flickering fire': 2,
            Stone: 4
        },
        complete: {
            Juice: false,
            'Pure water': false,
            'Flickering fire': false,
            Stone: false
        },
        production: 208
    },
    Eavesdropper: {
        name: 'Eavesdropper',
        level: 6,
        stock: 0,
        require: {
            Juice: 4700,
            Smallfolk: 1,
            'Dream wine': 1
        },
        complete: {
            Juice: false,
            Smallfolk: false,
            'Dream wine': false
        },
        production: 47
    },
    Thief: {
        name: 'Thief',
        level: 7,
        stock: 0,
        require: {
            Juice: 8700,
            Eavesdropper: 1,
            Grains: 5,
            Ore: 3
        },
        complete: {
            Juice: false,
            Eavesdropper: false,
            Grains: false,
            Ore: false
        },
        production: 87
    },
    Barque: {
        name: 'Barque',
        level: 7,
        stock: 0,
        require: {
            Juice: 4500,
            Wood: 10,
            Cloth: 3
        },
        complete: {
            Juice: false,
            Wood: false,
            Cloth: false
        },
        production: 45
    },
    'Smuggling vessel': {
        name: 'Smuggling vessel',
        level: 8,
        stock: 0,
        require: {
            Juice: 50900,
            Barque: 2,
            Cloth: 7,
            Thief: 4
        },
        complete: {
            Juice: false,
            Barque: false,
            Cloth: false,
            Thief: false
        },
        production: 509
    },
    Assassin: {
        name: 'Assassin',
        level: 8,
        stock: 0,
        require: {
            Juice: 23900,
            Thief: 1,
            'Heavy crossbow': 1,
            "Guard's uniform": 1
        },
        complete: {
            Juice: false,
            Thief: false,
            'Heavy crossbow': false,
            "Guard's uniform": false
        },
        production: 239
    },
    Fireship: {
        name: 'Fireship',
        level: 9,
        stock: 0,
        require: {
            Juice: 400200,
            Wildfire: 8,
            'Smuggling vessel': 2,
            'Fire archer': 2
        },
        complete: {
            Juice: false,
            Wildfire: false,
            'Smuggling vessel': false,
            'Fire archer': false
        },
        production: 4002
    },
    'Guild assassin': {
        name: 'Guild assassin',
        level: 9,
        stock: 0,
        require: {
            Juice: 287000,
            Assassin: 3,
            'Dyed textile': 15,
            'Fine wood': 15
        },
        complete: {
            Juice: false,
            Assassin: false,
            'Dyed textile': false,
            'Fine wood': false
        },
        production: 2870
    }
}

export default products;