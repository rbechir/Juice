export const currency = 'Jus';

const products = {
    Jus: {
        name: 'Jus',
        stock: 0,
        production: 0
    },
    Tissu: {
        name: 'Tissu',
        level: 1,
        stock: 0,
        require: {
            Jus: 100
        },
        complete: {
            Jus: false
        },
        production: 1
    },
    Fourrure: {
        name: 'Fourrure',
        level: 1,
        stock: 0,
        require: {
            Jus: 100
        },
        complete: {
            Jus: false
        },
        production: 1
    },
    Bois: {
        name: 'Bois',
        level: 1,
        stock: 0,
        require: {
            Jus: 100
        },
        complete: {
            Jus: false
        },
        production: 1
    },
    Fer: {
        name: 'Fer',
        level: 1,
        stock: 0,
        require: {
            Jus: 100
        },
        complete: {
            Jus: false
        },
        production: 1
    },
    Esclave: {
        name: 'Esclave',
        level: 2,
        stock: 0,
        require: {
            Jus: 100
        },
        complete: {
            Jus: false
        },
        production: 1
    },
    Légume: {
        name: 'Légume',
        level: 2,
        stock: 0,
        require: {
            Jus: 100
        },
        complete: {
            Jus: false
        },
        production: 1
    },
    Cheval: {
        name: 'Cheval',
        level: 3,
        stock: 0,
        require: {
            Jus: 100
        },
        complete: {
            Jus: false
        },
        production: 1
    },
    Minerai: {
        name: 'Minerai',
        level: 3,
        stock: 0,
        require: {
            Jus: 100
        },
        complete: {
            Jus: false
        },
        production: 1
    },
    Poisson: {
        name: 'Poisson',
        level: 3,
        stock: 0,
        require: {
            Jus: 100
        },
        complete: {
            Jus: false
        },
        production: 1
    },
    Pierre: {
        name: 'Pierre',
        level: 5,
        stock: 0,
        require: {
            Jus: 100
        },
        complete: {
            Jus: false
        },
        production: 1
    },
    Acier: {
        name: 'Acier',
        level: 6,
        stock: 0,
        require: {
            Jus: 3300,
            'Feu follet': 1,
            Fer: 3
        },
        complete: {
            Jus: false,
            'Feu follet': false,
            Fer: false
        },
        production: 33
    },
    'Bois résistant': {
        name: 'Bois résistant',
        level: 6,
        stock: 0,
        require: {
            Jus: 1900,
            Bois: 2,
            Fer: 1
        },
        complete: {
            Jus: false,
            Bois: false,
            Fer: false
        },
        production: 19
    },
    'Etoffe teinte': {
        name: 'Etoffe teinte',
        level: 8,
        stock: 0,
        require: {
            Jus: 6800,
            Tissu: 3,
            Légume: 1
        },
        complete: {
            Jus: false,
            Tissu: false,
            Légume: false
        },
        production: 68
    },
    'Bois ouvragé': {
        name: 'Bois ouvragé',
        level: 8,
        stock: 0,
        require: {
            Jus: 6700,
            Bois: 2,
            Tissu: 1
        },
        complete: {
            Jus: false,
            Bois: false,
            Tissu: false
        },
        production: 67
    },
    'Epée courte': {
        name: 'Epée courte',
        level: 2,
        stock: 0,
        require: {
            Jus: 400,
            Bois: 2,
            Fer: 2
        },
        complete: {
            Jus: false,
            Bois: false,
            Fer: false
        },
        production: 4
    },
    'Epée longue': {
        name: 'Epée longue',
        level: 3,
        stock: 0,
        require: {
            Jus: 800,
            'Epée courte': 1,
            Fer: 2
        },
        complete: {
            Jus: false,
            'Epée courte': false,
            Fer: false
        },
        production: 8
    },
    Dague: {
        name: 'Dague',
        level: 3,
        stock: 0,
        require: {
            Jus: 800,
            Bois: 3,
            Fer: 2,
            Tissu: 1
        },
        complete: {
            Jus: false,
            Bois: false,
            Fer: false,
            Tissu: false
        },
        production: 8
    },
    Hache: {
        name: 'Hache',
        level: 4,
        stock: 0,
        require: {
            Jus: 2600,
            Dague: 2,
            Fer: 3,
            Bois: 3
        },
        complete: {
            Jus: false,
            Dague: false,
            Fer: false,
            Bois: false
        },
        production: 26
    },
    'Arc court': {
        name: 'Arc court',
        level: 5,
        stock: 0,
        require: {
            Jus: 1400,
            Bois: 3,
            Tissu: 2,
            Fourrure: 1
        },
        complete: {
            Jus: false,
            Bois: false,
            Tissu: false,
            Fourrure: false
        },
        production: 14
    },
    'Bouclier en bois': {
        name: 'Bouclier en bois',
        level: 5,
        stock: 0,
        require: {
            Jus: 1400,
            Bois: 5,
            Fer: 1
        },
        complete: {
            Jus: false,
            Bois: false,
            Fer: false
        },
        production: 14
    },
    Lance: {
        name: 'Lance',
        level: 6,
        stock: 0,
        require: {
            Jus: 3800,
            'Epée longue': 2,
            Bois: 4,
            Fer: 2
        },
        complete: {
            Jus: false,
            'Epée longue': false,
            Bois: false,
            Fer: false
        },
        production: 38
    },
    Glaive: {
        name: 'Glaive',
        level: 6,
        stock: 0,
        require: {
            Jus: 3000,
            'Epée courte': 2,
            Fer: 4,
            Bois: 2
        },
        complete: {
            Jus: false,
            'Epée courte': false,
            Fer: false,
            Bois: false
        },
        production: 30
    },
    'Arc composite': {
        name: 'Arc composite',
        level: 6,
        stock: 0,
        require: {
            Jus: 5000,
            'Arc court': 2,
            Bois: 3,
            Tissu: 3
        },
        complete: {
            Jus: false,
            'Arc court': false,
            Bois: false,
            Tissu: false
        },
        production: 50
    },
    'Bouclier en métal': {
        name: 'Bouclier en métal',
        level: 6,
        stock: 0,
        require: {
            Jus: 5000,
            'Bouclier en bois': 2,
            Fer: 6
        },
        complete: {
            Jus: false,
            'Bouclier en bois': false,
            Fer: false
        },
        production: 50
    },
    'Arbalète légère': {
        name: 'Arbalète légère',
        level: 6,
        stock: 0,
        require: {
            Jus: 2200,
            Bois: 3,
            Tissu: 2,
            Fourrure: 1
        },
        complete: {
            Jus: false,
            Bois: false,
            Tissu: false,
            Fourrure: false
        },
        production: 22
    },
    'Glaive lourd': {
        name: 'Glaive lourd',
        level: 7,
        stock: 0,
        require: {
            Jus: 10600,
            Glaive: 2,
            Acier: 9,
            'Bois résistant': 5
        },
        complete: {
            Jus: false,
            Glaive: false,
            Acier: false,
            'Bois résistant': false
        },
        production: 106
    },
    'Arbalète lourde': {
        name: 'Arbalète lourde',
        level: 7,
        stock: 0,
        require: {
            Jus: 6600,
            'Arbalète légère': 1,
            Bois: 7,
            Tissu: 5
        },
        complete: {
            Jus: false,
            'Arbalète légère': false,
            Bois: false,
            Tissu: false
        },
        production: 66
    },
    'Grande épée de maître': {
        name: 'Grande épée de maître',
        level: 8,
        stock: 0,
        require: {
            Jus: 87800,
            'Glaive lourd': 3,
            Acier: 11,
            'Bois résistant': 7
        },
        complete: {
            Jus: false,
            'Glaive lourd': false,
            Acier: false,
            'Bois résistant': false
        },
        production: 878
    },
    Veston: {
        name: 'Veston',
        level: 2,
        stock: 0,
        require: {
            Jus: 400,
            Tissu: 2,
            Fourrure: 2
        },
        complete: {
            Jus: false,
            Tissu: false,
            Fourrure: false
        },
        production: 4
    },
    'Tunique banale': {
        name: 'Tunique banale',
        level: 2,
        stock: 0,
        require: {
            Jus: 600,
            Tissu: 3,
            Fourrure: 3
        },
        complete: {
            Jus: false,
            Tissu: false,
            Fourrure: false
        },
        production: 6
    },
    'Armure en cuir': {
        name: 'Armure en cuir',
        level: 3,
        stock: 0,
        require: {
            Jus: 800,
            Veston: 1,
            Fourrure: 1,
            Tissu: 1
        },
        complete: {
            Jus: false,
            Veston: false,
            Fourrure: false,
            Tissu: false
        },
        production: 8
    },
    'Armure complète': {
        name: 'Armure complète',
        level: 3,
        stock: 0,
        require: {
            Jus: 2200,
            'Tunique banale': 1,
            Fourrure: 5,
            Tissu: 7
        },
        complete: {
            Jus: false,
            'Tunique banale': false,
            Fourrure: false,
            Tissu: false
        },
        production: 22
    },
    Sacoche: {
        name: 'Sacoche',
        level: 5,
        stock: 0,
        require: {
            Jus: 1900,
            'Anneau en or': 1,
            Minerai: 2
        },
        complete: {
            Jus: false,
            'Anneau en or': false,
            Minerai: false
        },
        production: 19
    },
    'Vêtement en lin': {
        name: 'Vêtement en lin',
        level: 5,
        stock: 0,
        require: {
            Jus: 1400,
            Tissu: 4,
            Fourrure: 2
        },
        complete: {
            Jus: false,
            Tissu: false,
            Fourrure: false
        },
        production: 14
    },
    'Tunique en soie': {
        name: 'Tunique en soie',
        level: 6,
        stock: 0,
        require: {
            Jus: 4200,
            'Vêtement en lin': 1,
            Tissu: 8,
            Fourrure: 4
        },
        complete: {
            Jus: false,
            'Vêtement en lin': false,
            Tissu: false,
            Fourrure: false
        },
        production: 42
    },
    Casque: {
        name: 'Casque',
        level: 3,
        stock: 0,
        require: {
            Jus: 800,
            Fer: 5,
            Bois: 1
        },
        complete: {
            Jus: false,
            Fer: false,
            Bois: false
        },
        production: 8
    },
    Plastron: {
        name: 'Plastron',
        level: 4,
        stock: 0,
        require: {
            Jus: 2600,
            'Armure en cuir': 2,
            Fer: 4,
            Fourrure: 2
        },
        complete: {
            Jus: false,
            'Armure en cuir': false,
            Fer: false,
            Fourrure: false
        },
        production: 26
    },
    Heaume: {
        name: 'Heaume',
        level: 4,
        stock: 0,
        require: {
            Jus: 2600,
            Casque: 2,
            Fourrure: 5,
            Bois: 1
        },
        complete: {
            Jus: false,
            Casque: false,
            Fourrure: false,
            Bois: false
        },
        production: 26
    },
    'Anneau en or': {
        name: 'Anneau en or',
        level: 4,
        stock: 0,
        require: {
            Jus: 900,
            Minerai: 5
        },
        complete: {
            Jus: false,
            Minerai: false
        },
        production: 9
    },
    'Chaîne en argent': {
        name: 'Chaîne en argent',
        level: 5,
        stock: 0,
        require: {
            Jus: 1300,
            Minerai: 3,
            Fourrure: 1,
            Tissu: 1
        },
        complete: {
            Jus: false,
            Minerai: false,
            Fourrure: false,
            Tissu: false
        },
        production: 13
    },
    'Torque en argent': {
        name: 'Torque en argent',
        level: 6,
        stock: 0,
        require: {
            Jus: 3100,
            'Chaîne en argent': 1,
            Minerai: 1,
            Fourrure: 1
        },
        complete: {
            Jus: false,
            'Chaîne en argent': false,
            Minerai: false,
            Fourrure: false
        },
        production: 31
    },
    'Torque en or': {
        name: 'Torque en or',
        level: 7,
        stock: 0,
        require: {
            Jus: 7800,
            'Torque en argent': 1,
            'Anneau en or': 1,
            Minerai: 6
        },
        complete: {
            Jus: false,
            'Torque en argent': false,
            'Anneau en or': false,
            Minerai: false
        },
        production: 78
    },
    Palefrenier: {
        name: 'Palefrenier',
        level: 3,
        stock: 0,
        require: {
            Jus: 800,
            Esclave: 1,
            Fourrure: 2,
            Légume: 3
        },
        complete: {
            Jus: false,
            Esclave: false,
            Fourrure: false,
            Légume: false
        },
        production: 8
    },
    'Cheval de guerre': {
        name: 'Cheval de guerre',
        level: 4,
        stock: 0,
        require: {
            Jus: 2100,
            Cheval: 1,
            Palefrenier: 1,
            'Armure en cuir': 1
        },
        complete: {
            Jus: false,
            Cheval: false,
            Palefrenier: false,
            'Armure en cuir': false
        },
        production: 21
    },
    'Chevalier en armure': {
        name: 'Chevalier en armure',
        level: 5,
        stock: 0,
        require: {
            Jus: 9500,
            Fantassin: 1,
            Plastron: 1,
            Heaume: 1
        },
        complete: {
            Jus: false,
            Fantassin: false,
            Plastron: false,
            Heaume: false
        },
        production: 95
    },
    'Chevalier monté': {
        name: 'Chevalier monté',
        level: 6,
        stock: 0,
        require: {
            Jus: 15100,
            'Chevalier en armure': 1,
            'Cheval de guerre': 1,
            Sacoche: 1
        },
        complete: {
            Jus: false,
            'Chevalier en armure': false,
            'Cheval de guerre': false,
            Sacoche: false
        },
        production: 151
    },
    'Lancier monté': {
        name: 'Lancier monté',
        level: 7,
        stock: 0,
        require: {
            Jus: 26300,
            'Chevalier monté': 1,
            Lance: 1,
            'Tunique en soie': 1
        },
        complete: {
            Jus: false,
            'Chevalier monté': false,
            Lance: false,
            'Tunique en soie': false
        },
        production: 263
    },
    'Cavalier lourd': {
        name: 'Cavalier lourd',
        level: 8,
        stock: 0,
        require: {
            Jus: 45500,
            'Lancier monté': 1,
            'Torque en or': 1,
            'Bouclier en métal': 1
        },
        complete: {
            Jus: false,
            'Lancier monté': false,
            'Torque en or': false,
            'Bouclier en métal': false
        },
        production: 455
    },
    'Cheval en armure': {
        name: 'Cheval en armure',
        level: 8,
        stock: 0,
        require: {
            Jus: 24600,
            'Cheval de guerre': 2,
            Palefrenier: 1,
            Acier: 4
        },
        complete: {
            Jus: false,
            'Cheval de guerre': false,
            Palefrenier: false,
            Acier: false
        },
        production: 246
    },
    "Cavalier d'élite": {
        name: "Cavalier d'élite",
        level: 9,
        stock: 0,
        require: {
            Jus: 170700,
            'Cavalier lourd': 1,
            'Cheval en armure': 1,
            'Grande épée de maître': 1
        },
        complete: {
            Jus: false,
            'Cavalier lourd': false,
            'Cheval en armure': false,
            'Grande épée de maître': false
        },
        production: 1707
    },
    Fantassin: {
        name: 'Fantassin',
        level: 4,
        stock: 0,
        require: {
            Jus: 3500,
            Esclave: 1,
            'Epée longue': 1,
            'Armure complète': 1
        },
        complete: {
            Jus: false,
            Esclave: false,
            'Epée longue': false,
            'Armure complète': false
        },
        production: 35
    },
    Milicien: {
        name: 'Milicien',
        level: 5,
        stock: 0,
        require: {
            Jus: 3500,
            Esclave: 1,
            Hache: 1
        },
        complete: {
            Jus: false,
            Esclave: false,
            Hache: false
        },
        production: 35
    },
    'Archer débutant': {
        name: 'Archer débutant',
        level: 6,
        stock: 0,
        require: {
            Jus: 16300,
            'Arc court': 3,
            Milicien: 3
        },
        complete: {
            Jus: false,
            'Arc court': false,
            Milicien: false
        },
        production: 163
    },
    Archer: {
        name: 'Archer',
        level: 7,
        stock: 0,
        require: {
            Jus: 52800,
            'Arc composite': 2,
            Milicien: 2,
            'Archer débutant': 2
        },
        complete: {
            Jus: false,
            'Arc composite': false,
            Milicien: false,
            'Archer débutant': false
        },
        production: 528
    },
    Lancier: {
        name: 'Lancier',
        level: 7,
        stock: 0,
        require: {
            Jus: 2000,
            Milicien: 1,
            Lance: 1
        },
        complete: {
            Jus: false,
            Milicien: false,
            Lance: false
        },
        production: 20
    },
    'Porte-bouclier': {
        name: 'Porte-bouclier',
        level: 7,
        stock: 0,
        require: {
            Jus: 20200,
            Milicien: 2,
            'Bouclier en métal': 2
        },
        complete: {
            Jus: false,
            Milicien: false,
            'Bouclier en métal': false
        },
        production: 202
    },
    'Archer de flammes': {
        name: 'Archer de flammes',
        level: 8,
        stock: 0,
        require: {
            Jus: 59600,
            Archer: 1,
            Bois: 2,
            Fer: 2
        },
        complete: {
            Jus: false,
            Archer: false,
            Bois: false,
            Fer: false
        },
        production: 596
    },
    Phalange: {
        name: 'Phalange',
        level: 8,
        stock: 0,
        require: {
            Jus: 71000,
            'Porte-bouclier': 2,
            Lancier: 2,
            Casque: 4
        },
        complete: {
            Jus: false,
            'Porte-bouclier': false,
            Lancier: false,
            Casque: false
        },
        production: 710
    },
    'Archer de flammes vivaces': {
        name: 'Archer de flammes vivaces',
        level: 9,
        stock: 0,
        require: {
            Jus: 218600,
            'Archer de flammes': 3,
            'Feu follet': 3,
            'Bois résistant': 12
        },
        complete: {
            Jus: false,
            'Archer de flammes': false,
            'Feu follet': false,
            'Bois résistant': false
        },
        production: 2186
    },
    "Phalange d'élite": {
        name: "Phalange d'élite",
        level: 9,
        stock: 0,
        require: {
            Jus: 239800,
            Phalange: 2,
            Acier: 20,
            'Bois résistant': 10
        },
        complete: {
            Jus: false,
            Phalange: false,
            Acier: false,
            'Bois résistant': false
        },
        production: 2398
    },
    'Lait de pavôt': {
        name: 'Lait de pavôt',
        level: 4,
        stock: 0,
        require: {
            Jus: 1000,
            Légume: 4,
            Poisson: 2
        },
        complete: {
            Jus: false,
            Légume: false,
            Poisson: false
        },
        production: 10
    },
    'Feu follet': {
        name: 'Feu follet',
        level: 5,
        stock: 0,
        require: {
            Jus: 1400,
            Bois: 3,
            Légume: 2,
            Fer: 1
        },
        complete: {
            Jus: false,
            Bois: false,
            Légume: false,
            Fer: false
        },
        production: 14
    },
    'Vin douceâtre': {
        name: 'Vin douceâtre',
        level: 5,
        stock: 0,
        require: {
            Jus: 3000,
            'Lait de pavôt': 1,
            Légume: 8,
            Poisson: 4
        },
        complete: {
            Jus: false,
            'Lait de pavôt': false,
            Légume: false,
            Poisson: false
        },
        production: 30
    },
    Bière: {
        name: 'Bière',
        level: 6,
        stock: 0,
        require: {
            Jus: 2100,
            Légume: 3,
            Bois: 1,
            Pierre: 1
        },
        complete: {
            Jus: false,
            Légume: false,
            Bois: false,
            Pierre: false
        },
        production: 21
    },
    'Eau pure': {
        name: 'Eau pure',
        level: 7,
        stock: 0,
        require: {
            Jus: 5600,
            Bière: 1,
            Tissu: 3
        },
        complete: {
            Jus: false,
            Bière: false,
            Tissu: false
        },
        production: 56
    },
    'Feu sauvage': {
        name: 'Feu sauvage',
        level: 8,
        stock: 0,
        require: {
            Jus: 20800,
            'Eau pure': 2,
            'Feu follet': 2,
            Pierre: 4
        },
        complete: {
            Jus: false,
            'Eau pure': false,
            'Feu follet': false,
            Pierre: false
        },
        production: 208
    },
    Espion: {
        name: 'Espion',
        level: 6,
        stock: 0,
        require: {
            Jus: 4700,
            Esclave: 1,
            'Vin douceâtre': 1
        },
        complete: {
            Jus: false,
            Esclave: false,
            'Vin douceâtre': false
        },
        production: 47
    },
    Voleur: {
        name: 'Voleur',
        level: 7,
        stock: 0,
        require: {
            Jus: 8700,
            Espion: 1,
            Légume: 5,
            Minerai: 3
        },
        complete: {
            Jus: false,
            Espion: false,
            Légume: false,
            Minerai: false
        },
        production: 87
    },
    Barque: {
        name: 'Barque',
        level: 7,
        stock: 0,
        require: {
            Jus: 4500,
            Bois: 10,
            Tissu: 3
        },
        complete: {
            Jus: false,
            Bois: false,
            Tissu: false
        },
        production: 45
    },
    'Bateau de contrebande': {
        name: 'Bateau de contrebande',
        level: 8,
        stock: 0,
        require: {
            Jus: 50900,
            Barque: 2,
            Tissu: 7,
            Voleur: 4
        },
        complete: {
            Jus: false,
            Barque: false,
            Tissu: false,
            Voleur: false
        },
        production: 509
    },
    Assassin: {
        name: 'Assassin',
        level: 8,
        stock: 0,
        require: {
            Jus: 23900,
            Voleur: 1,
            'Arbalète lourde': 1,
            'Armure complète': 1
        },
        complete: {
            Jus: false,
            Voleur: false,
            'Arbalète lourde': false,
            'Armure complète': false
        },
        production: 239
    },
    Brulôt: {
        name: 'Brulôt',
        level: 9,
        stock: 0,
        require: {
            Jus: 400200,
            'Feu sauvage': 8,
            'Bateau de contrebande': 2,
            'Archer de flammes': 2
        },
        complete: {
            Jus: false,
            'Feu sauvage': false,
            'Bateau de contrebande': false,
            'Archer de flammes': false
        },
        production: 4002
    },
    'Assassin de la guilde': {
        name: 'Assassin de la guilde',
        level: 9,
        stock: 0,
        require: {
            Jus: 287000,
            Assassin: 3,
            'Etoffe teinte': 15,
            'Bois ouvragé': 15
        },
        complete: {
            Jus: false,
            Assassin: false,
            'Etoffe teinte': false,
            'Bois ouvragé': false
        },
        production: 2870
    }
}

export default products;