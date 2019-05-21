const buildings = {
    'Place du marché': {
        name: 'Place du marché',
        level: 1,
        products: ['Tissu', 'Fourrure', 'Bois', 'Fer', 'Esclave', 'Légume', 'Cheval', 'Minerai', 'Poisson', 'Pierre', 'Acier', 'Bois résistant', 'Etoffe teinte', 'Bois ouvragé'],
        unlocked: false,
        price: 100
    },
    Armurerie: {
        name: 'Armurerie',
        level: 2,
        products: ['Epée courte', 'Epée longue', 'Dague', 'Hache', 'Arc court', 'Bouclier en bois', 'Lance', 'Glaive', 'Arc composite', 'Bouclier en métal', 'Arbalète légère', 'Glaive lourd', 'Arbalète lourde', 'Grande épée de maître'],
        unlocked: false,
        price: 1000
    },
    Tailleur: {
        name: 'Tailleur',
        level: 2,
        products: ['Veston', 'Tunique banale', 'Armure en cuir', 'Armure complète', 'Sacoche', 'Vêtement en lin', 'Tunique en soie'],
        unlocked: false,
        price: 1000
    },
    Forgeron: {
        name: 'Forgeron',
        level: 3,
        products: ['Casque', 'Plastron', 'Heaume', 'Anneau en or', 'Chaîne en argent', 'Torque en argent', 'Torque en or'],
        unlocked: false,
        price: 5000
    },
    Ecurie: {
        name: 'Ecurie',
        level: 3,
        products: ['Palefrenier', 'Cheval de guerre', 'Chevalier en armure', 'Chevalier monté', 'Lancier monté', 'Cavalier lourd', 'Cheval en armure', "Cavalier d'élite"],
        unlocked: false,
        price: 5000
    },
    Caserne: {
        name: 'Caserne',
        level: 4,
        products: ['Fantassin', 'Milicien', 'Archer débutant', 'Archer', 'Lancier', 'Porte-bouclier', 'Archer de flammes', 'Phalange', 'Archer de flammes vivaces', "Phalange d'élite"],
        unlocked: false,
        price: 20000
    },
    Laboratoire: {
        name: 'Laboratoire',
        level: 4,
        products: ['Lait de pavôt', 'Feu follet', 'Vin douceâtre', 'Bière', 'Eau pure', 'Feu sauvage'],
        unlocked: false,
        price: 20000
    },
    Guilde: {
        name: 'Guilde',
        level: 6,
        products: ['Espion', 'Voleur', 'Barque', 'Bateau de contrebande', 'Assassin', 'Brulôt', 'Assassin de la guilde'],
        unlocked: false,
        price: 50000
    }
}

export default buildings;