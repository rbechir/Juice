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
        totalCost: 100,
        require: {
            Juice: 100
        },
        complete: {
            Juice: false
        },
        usedBy: [
            'Doublet',
            'Unremarkable tunic',
            'Leather armor',
            "Guard's uniform",
            'Dagger',
            'Linen clothing',
            'Silver chain',
            'Shortbow',
            'Silk garment',
            'Composite bow',
            'Light crossbow',
            'Pure water',
            'Heavy crossbow',
            'Barque',
            'Smuggling vessel',
            'Dyed textile',
            'Fine wood'
        ],
        production: 1,
        workers: 0
    },
    Fur: {
        name: 'Fur',
        level: 1,
        stock: 0,
        totalCost: 100,
        require: {
            Juice: 100
        },
        complete: {
            Juice: false
        },
        usedBy: [
            'Doublet',
            'Unremarkable tunic',
            'Leather armor',
            "Guard's uniform",
            'Ostler',
            'Breastplate',
            'Barred helm',
            'Linen clothing',
            'Silver chain',
            'Shortbow',
            'Silk garment',
            'Silver torc',
            'Light crossbow'
        ],
        production: 1,
        workers: 0
    },
    Wood: {
        name: 'Wood',
        level: 1,
        stock: 0,
        totalCost: 100,
        require: {
            Juice: 100
        },
        complete: {
            Juice: false
        },
        usedBy: [
            'Shortsword',
            'Halfhelm',
            'Dagger',
            'Barred helm',
            'Axe',
            'Flickering fire',
            'Shortbow',
            'Wood shield',
            'Pike',
            'Broadsword',
            'Hard wood',
            'Mead',
            'Composite bow',
            'Light crossbow',
            'Heavy crossbow',
            'Barque',
            'Fire archer',
            'Fine wood'
        ],
        production: 1,
        workers: 0
    },
    Iron: {
        name: 'Iron',
        level: 1,
        stock: 0,
        totalCost: 100,
        require: {
            Juice: 100
        },
        complete: {
            Juice: false
        },
        usedBy: [
            'Shortsword',
            'Longsword',
            'Halfhelm',
            'Dagger',
            'Breastplate',
            'Axe',
            'Flickering fire',
            'Wood shield',
            'Pike',
            'Broadsword',
            'Steel',
            'Hard wood',
            'Metal shield',
            'Fire archer'
        ],
        production: 1,
        workers: 0
    },
    Smallfolk: {
        name: 'Smallfolk',
        level: 2,
        stock: 0,
        totalCost: 100,
        require: {
            Juice: 100
        },
        complete: {
            Juice: false
        },
        usedBy: [
            'Ostler',
            'Foot soldier',
            'Militia',
            'Eavesdropper'
        ],
        production: 1,
        workers: 0
    },
    Grains: {
        name: 'Grains',
        level: 2,
        stock: 0,
        totalCost: 100,
        require: {
            Juice: 100
        },
        complete: {
            Juice: false
        },
        usedBy: [
            'Ostler',
            'Milk of the poppy',
            'Flickering fire',
            'Dream wine',
            'Mead',
            'Thief',
            'Dyed textile'
        ],
        production: 1,
        workers: 0
    },
    Horse: {
        name: 'Horse',
        level: 3,
        stock: 0,
        totalCost: 100,
        require: {
            Juice: 100
        },
        complete: {
            Juice: false
        },
        usedBy: [
            'Warhorse'
        ],
        production: 1,
        workers: 0
    },
    Ore: {
        name: 'Ore',
        level: 3,
        stock: 0,
        totalCost: 100,
        require: {
            Juice: 100
        },
        complete: {
            Juice: false
        },
        usedBy: [
            'Gold ring',
            'Purse',
            'Silver chain',
            'Silver torc',
            'Gold torc',
            'Thief'
        ],
        production: 1,
        workers: 0
    },
    Fish: {
        name: 'Fish',
        level: 3,
        stock: 0,
        totalCost: 100,
        require: {
            Juice: 100
        },
        complete: {
            Juice: false
        },
        usedBy: [
            'Milk of the poppy',
            'Dream wine'
        ],
        production: 1,
        workers: 0
    },
    Stone: {
        name: 'Stone',
        level: 5,
        stock: 0,
        totalCost: 100,
        require: {
            Juice: 100
        },
        complete: {
            Juice: false
        },
        usedBy: [
            'Mead',
            'Wildfire'
        ],
        production: 1,
        workers: 0
    },
    Steel: {
        name: 'Steel',
        level: 6,
        stock: 0,
        totalCost: 5600,
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
        usedBy: [
            'Hefty broadsword',
            'Masterwork greatsword',
            'Steel-shod warhorse',
            'Elite phalanx'
        ],
        production: 33,
        workers: 0
    },
    'Hard wood': {
        name: 'Hard wood',
        level: 6,
        stock: 0,
        totalCost: 2200,
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
        usedBy: [
            'Hefty broadsword',
            'Masterwork greatsword',
            'Blazing fire archer',
            'Elite phalanx'
        ],
        production: 19,
        workers: 0
    },
    'Dyed textile': {
        name: 'Dyed textile',
        level: 8,
        stock: 0,
        totalCost: 7200,
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
        usedBy: [
            'Guild assassin'
        ],
        production: 68,
        workers: 0
    },
    'Fine wood': {
        name: 'Fine wood',
        level: 8,
        stock: 0,
        totalCost: 7000,
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
        usedBy: [
            'Guild assassin'
        ],
        production: 67,
        workers: 0
    },
    Shortsword: {
        name: 'Shortsword',
        level: 2,
        stock: 0,
        totalCost: 800,
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
        usedBy: [
            'Longsword',
            'Broadsword'
        ],
        production: 4,
        workers: 0
    },
    Longsword: {
        name: 'Longsword',
        level: 3,
        stock: 0,
        totalCost: 1800,
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
        usedBy: [
            'Pike',
            'Foot soldier'
        ],
        production: 8,
        workers: 0
    },
    Dagger: {
        name: 'Dagger',
        level: 3,
        stock: 0,
        totalCost: 1400,
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
        usedBy: [
            'Axe'
        ],
        production: 8,
        workers: 0
    },
    Axe: {
        name: 'Axe',
        level: 4,
        stock: 0,
        totalCost: 6000,
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
        usedBy: [
            'Militia'
        ],
        production: 26,
        workers: 0
    },
    Shortbow: {
        name: 'Shortbow',
        level: 5,
        stock: 0,
        totalCost: 2000,
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
        usedBy: [
            'Bowman',
            'Composite bow'
        ],
        production: 14,
        workers: 0
    },
    'Wood shield': {
        name: 'Wood shield',
        level: 5,
        stock: 0,
        totalCost: 2000,
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
        usedBy: [
            'Metal shield'
        ],
        production: 14,
        workers: 0
    },
    Pike: {
        name: 'Pike',
        level: 6,
        stock: 0,
        totalCost: 8000,
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
        usedBy: [
            'Lancer',
            'Pikeman'
        ],
        production: 38,
        workers: 0
    },
    Broadsword: {
        name: 'Broadsword',
        level: 6,
        stock: 0,
        totalCost: 5200,
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
        usedBy: [
            'Hefty broadsword'
        ],
        production: 30,
        workers: 0
    },
    'Composite bow': {
        name: 'Composite bow',
        level: 6,
        stock: 0,
        totalCost: 9600,
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
        usedBy: [
            'Archer'
        ],
        production: 50,
        workers: 0
    },
    'Metal shield': {
        name: 'Metal shield',
        level: 6,
        stock: 0,
        totalCost: 9600,
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
        usedBy: [
            'Shield bearers',
            'Heavy knight'
        ],
        production: 50,
        workers: 0
    },
    'Light crossbow': {
        name: 'Light crossbow',
        level: 6,
        stock: 0,
        totalCost: 2800,
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
        usedBy: [
            'Heavy crossbow'
        ],
        production: 22,
        workers: 0
    },
    'Hefty broadsword': {
        name: 'Hefty broadsword',
        level: 7,
        stock: 0,
        totalCost: 82400,
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
        usedBy: [
            'Masterwork greatsword'
        ],
        production: 106,
        workers: 0
    },
    'Heavy crossbow': {
        name: 'Heavy crossbow',
        level: 7,
        stock: 0,
        totalCost: 10600,
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
        usedBy: [
            'Assassin'
        ],
        production: 66,
        workers: 0
    },
    'Masterwork greatsword': {
        name: 'Masterwork greatsword',
        level: 8,
        stock: 0,
        totalCost: 412000,
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
        usedBy: [
            'Elite cavalryman'
        ],
        production: 878,
        workers: 0
    },
    Doublet: {
        name: 'Doublet',
        level: 2,
        stock: 0,
        totalCost: 800,
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
        usedBy: [
            'Leather armor'
        ],
        production: 4,
        workers: 0
    },
    'Unremarkable tunic': {
        name: 'Unremarkable tunic',
        level: 2,
        stock: 0,
        totalCost: 1200,
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
        usedBy: [
            "Guard's uniform"
        ],
        production: 6,
        workers: 0
    },
    'Leather armor': {
        name: 'Leather armor',
        level: 3,
        stock: 0,
        totalCost: 1800,
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
        usedBy: [
            'Breastplate',
            'Warhorse'
        ],
        production: 8,
        workers: 0
    },
    "Guard's uniform": {
        name: "Guard's uniform",
        level: 3,
        stock: 0,
        totalCost: 4600,
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
        usedBy: [
            'Foot soldier',
            'Assassin'
        ],
        production: 22,
        workers: 0
    },
    Purse: {
        name: 'Purse',
        level: 5,
        stock: 0,
        totalCost: 3500,
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
        usedBy: [
            'Mounted knight'
        ],
        production: 19,
        workers: 0
    },
    'Linen clothing': {
        name: 'Linen clothing',
        level: 5,
        stock: 0,
        totalCost: 2000,
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
        usedBy: [
            'Silk garment'
        ],
        production: 14,
        workers: 0
    },
    'Silk garment': {
        name: 'Silk garment',
        level: 6,
        stock: 0,
        totalCost: 7400,
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
        usedBy: [
            'Lancer'
        ],
        production: 42,
        workers: 0
    },
    Halfhelm: {
        name: 'Halfhelm',
        level: 3,
        stock: 0,
        totalCost: 1400,
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
        usedBy: [
            'Barred helm',
            'Phalanx'
        ],
        production: 8,
        workers: 0
    },
    Breastplate: {
        name: 'Breastplate',
        level: 4,
        stock: 0,
        totalCost: 6800,
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
        usedBy: [
            'Armored knight'
        ],
        production: 26,
        workers: 0
    },
    'Barred helm': {
        name: 'Barred helm',
        level: 4,
        stock: 0,
        totalCost: 6000,
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
        usedBy: [
            'Armored knight'
        ],
        production: 26,
        workers: 0
    },
    'Gold ring': {
        name: 'Gold ring',
        level: 4,
        stock: 0,
        totalCost: 1400,
        require: {
            Juice: 900,
            Ore: 5
        },
        complete: {
            Juice: false,
            Ore: false
        },
        usedBy: [
            'Purse',
            'Gold torc'
        ],
        production: 9,
        workers: 0
    },
    'Silver chain': {
        name: 'Silver chain',
        level: 5,
        stock: 0,
        totalCost: 1800,
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
        usedBy: [
            'Silver torc'
        ],
        production: 13,
        workers: 0
    },
    'Silver torc': {
        name: 'Silver torc',
        level: 6,
        stock: 0,
        totalCost: 5100,
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
        usedBy: [
            'Gold torc'
        ],
        production: 31,
        workers: 0
    },
    'Gold torc': {
        name: 'Gold torc',
        level: 7,
        stock: 0,
        totalCost: 14900,
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
        usedBy: [
            'Heavy knight'
        ],
        production: 78,
        workers: 0
    },
    Ostler: {
        name: 'Ostler',
        level: 3,
        stock: 0,
        totalCost: 1400,
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
        usedBy: [
            'Warhorse',
            'Steel-shod warhorse'
        ],
        production: 8,
        workers: 0
    },
    'Warhorse': {
        name: 'Warhorse',
        level: 4,
        stock: 0,
        totalCost: 5400,
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
        usedBy: [
            'Steel-shod warhorse',
            'Mounted knight'
        ],
        production: 21,
        workers: 0
    },
    'Armored knight': {
        name: 'Armored knight',
        level: 5,
        stock: 0,
        totalCost: 32300,
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
        usedBy: [
            'Mounted knight'
        ],
        production: 95,
        workers: 0
    },
    'Mounted knight': {
        name: 'Mounted knight',
        level: 6,
        stock: 0,
        totalCost: 56300,
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
        usedBy: [
            'Lancer'
        ],
        production: 151,
        workers: 0
    },
    'Lancer': {
        name: 'Lancer',
        level: 7,
        stock: 0,
        totalCost: 98000,
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
        usedBy: [
            'Heavy knight'
        ],
        production: 263,
        workers: 0
    },
    'Heavy knight': {
        name: 'Heavy knight',
        level: 8,
        stock: 0,
        totalCost: 168000,
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
        usedBy: [
            'Elite cavalryman'
        ],
        production: 455,
        workers: 0
    },
    'Steel-shod warhorse': {
        name: 'Steel-shod warhorse',
        level: 8,
        stock: 0,
        totalCost: 59200,
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
        usedBy: [
            'Elite cavalryman'
        ],
        production: 246,
        workers: 0
    },
    'Elite cavalryman': {
        name: 'Elite cavalryman',
        level: 9,
        stock: 0,
        totalCost: 809900,
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
        usedBy: [],
        production: 1707,
        workers: 0
    },
    'Foot soldier': {
        name: 'Foot soldier',
        level: 4,
        stock: 0,
        totalCost: 10000,
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
        usedBy: [
            'Armored knight'
        ],
        production: 35,
        workers: 0
    },
    Militia: {
        name: 'Militia',
        level: 5,
        stock: 0,
        totalCost: 9600,
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
        usedBy: [
            'Bowman',
            'Archer',
            'Pikeman',
            'Shield bearers'
        ],
        production: 35,
        workers: 0
    },
    Bowman: {
        name: 'Bowman',
        level: 6,
        stock: 0,
        totalCost: 51100,
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
        usedBy: [
            'Archer'
        ],
        production: 163,
        workers: 0
    },
    Archer: {
        name: 'Archer',
        level: 7,
        stock: 0,
        totalCost: 193400,
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
        usedBy: [
            'Fire archer'
        ],
        production: 528,
        workers: 0
    },
    Pikeman: {
        name: 'Pikeman',
        level: 7,
        stock: 0,
        totalCost: 19600,
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
        usedBy: [
            'Phalanx'
        ],
        production: 20,
        workers: 0
    },
    'Shield bearers': {
        name: 'Shield bearers',
        level: 7,
        stock: 0,
        totalCost: 58600,
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
        usedBy: [
            'Phalanx'
        ],
        production: 202,
        workers: 0
    },
    'Fire archer': {
        name: 'Fire archer',
        level: 8,
        stock: 0,
        totalCost: 253400,
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
        usedBy: [
            'Fireship',
            'Blazing fire archer'
        ],
        production: 596,
        workers: 0
    },
    Phalanx: {
        name: 'Phalanx',
        level: 8,
        stock: 0,
        totalCost: 233000,
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
        usedBy: [
            'Elite phalanx'
        ],
        production: 710,
        workers: 0
    },
    'Blazing fire archer': {
        name: 'Blazing fire archer',
        level: 9,
        stock: 0,
        totalCost: 1011200,
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
        usedBy: [],
        production: 2186,
        workers: 0
    },
    'Elite phalanx': {
        name: 'Elite phalanx',
        level: 9,
        stock: 0,
        totalCost: 839800,
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
        usedBy: [],
        production: 2398,
        workers: 0
    },
    'Milk of the poppy': {
        name: 'Milk of the poppy',
        level: 4,
        stock: 0,
        totalCost: 1600,
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
        usedBy: [
            'Dream wine'
        ],
        production: 10,
        workers: 0
    },
    'Flickering fire': {
        name: 'Flickering fire',
        level: 5,
        stock: 0,
        totalCost: 2000,
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
        usedBy: [
            'Steel',
            'Wildfire',
            'Blazing fire archer'
        ],
        production: 14,
        workers: 0
    },
    'Dream wine': {
        name: 'Dream wine',
        level: 5,
        stock: 0,
        totalCost: 5800,
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
        usedBy: [
            'Eavesdropper'
        ],
        production: 30,
        workers: 0
    },
    Mead: {
        name: 'Mead',
        level: 6,
        stock: 0,
        totalCost: 2600,
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
        usedBy: [
            'Pure water'
        ],
        production: 21,
        workers: 0
    },
    'Pure water': {
        name: 'Pure water',
        level: 7,
        stock: 0,
        totalCost: 8500,
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
        usedBy: [
            'Wildfire'
        ],
        production: 56,
        workers: 0
    },
    'Wildfire': {
        name: 'Wildfire',
        level: 8,
        stock: 0,
        totalCost: 42200,
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
        usedBy: [
            'Fireship'
        ],
        production: 208,
        workers: 0
    },
    Eavesdropper: {
        name: 'Eavesdropper',
        level: 6,
        stock: 0,
        totalCost: 10600,
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
        usedBy: [
            'Thief'
        ],
        production: 47,
        workers: 0
    },
    Thief: {
        name: 'Thief',
        level: 7,
        stock: 0,
        totalCost: 20100,
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
        usedBy: [
            'Smuggling vessel',
            'Assassin'
        ],
        production: 87,
        workers: 0
    },
    Barque: {
        name: 'Barque',
        level: 7,
        stock: 0,
        totalCost: 5800,
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
        usedBy: [
            'Smuggling vessel'
        ],
        production: 45,
        workers: 0
    },
    'Smuggling vessel': {
        name: 'Smuggling vessel',
        level: 8,
        stock: 0,
        totalCost: 143600,
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
        usedBy: [
            'Fireship'
        ],
        production: 509,
        workers: 0
    },
    Assassin: {
        name: 'Assassin',
        level: 8,
        stock: 0,
        totalCost: 59200,
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
        usedBy: [
            'Guild assassin'
        ],
        production: 239,
        workers: 0
    },
    Fireship: {
        name: 'Fireship',
        level: 9,
        stock: 0,
        totalCost: 1531800,
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
        usedBy: [],
        production: 4002,
        workers: 0
    },
    'Guild assassin': {
        name: 'Guild assassin',
        level: 9,
        stock: 0,
        totalCost: 677600,
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
        usedBy: [],
        production: 2870,
        workers: 0
    }
}

export default products;