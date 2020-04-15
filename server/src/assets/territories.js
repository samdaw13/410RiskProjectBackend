var territories = {
    
    // Arnor Territories

    Forodwaith: {
        name: 'Forodwaith',
        adjacent: [
            'Mithlond',
            'Borderlands',
            'Angmar',
            'Eastern Angmar',
            'Withered Heath',
            'North Rhun'
        ],
        owner: "",
        troopCount: 0,
        region: 'Arnor',
        isFort: false,
        coordinates: {
            x: '1200',
            y: '150'
        }
    },
    EasternAngmar: {
        name: 'Eastern Angmar',
        adjacent: [
            'Forodwaith',
            'Carrock'
        ],
        owner: "",
        troopCount: 0,
        region: 'Arnor',
        isFort: false,
        coordinates: {
            x: '1200',
            y: '410'
        }
    },
    Angmar: {
        name: 'Angmar',
        adjacent: [
            'Forodwaith',
            'Borderlands'
        ],
        owner: "",
        troopCount: 0,
        region: 'Arnor',
        isFort: false,
        coordinates: {
            x: '940',
            y: '450'
        }
    },
    Borderlands: {
        name: "Borderlands",
        adjacent: [
            "Angmar",
            "Forodwaith",
            "Weather Hills",
            "Fornost",
            "North Downs",
            "Evendim Hills",
            "Lune Valley"
        ],
        owner: "",
        troopCount: 0,
        region: "Arnor",
        isFort: false,
        coordinates: {
            x: '700',
            y: '500'
        }
    },
    NorthDowns: {
        name: "North Downs",
        adjacent: [
            "Borderlands",
            "Fornost"
        ],
        owner: "",
        troopCount: 0,
        region: "Arnor",
        isFort: false,
        coordinates: {
            x: '780',
            y: '630'
        }
    },
    Fornost: {
        name: "Fornost",
        adjacent: [
            "Borderlands",
            "North Downs",
            "Weather Hills",
            "Old Forest",
            "Buckland"
        ],
        owner: "",
        troopCount: 0,
        region: "Arnor",
        isFort: false,
        coordinates: {
            x: '740',
            y: '835'
        }
    },
    WeatherHills: {
        name: "Weather Hills",
        adjacent: [
            "Borderlands",
            "South Downs",
            "Fornost",
            "Old Forest",
            "Rhudaur"
        ],
        owner: "",
        troopCount: 0,
        region: "Arnor",
        isFort: false,
        coordinates: {
            x: '800',
            y: '880'
        }
    },
    OldForest: {
        name: "Old Forest",
        adjacent: [
            "Buckland",
            "South Downs",
            "Fornost",
            "Weather Hills"
        ],
        owner: "",
        troopCount: 0,
        region: "Arnor",
        isFort: false,
        coordinates: {
            x: '750',
            y: '1060'
        }
    },
    Buckland: {
        name: "Buckland",
        adjacent: [
            "Old Forest",
            "South Downs",
            "Fornost",
            "The Shire"
        ],
        owner: "",
        troopCount: 0,
        region: "Arnor",
        isFort: false,
        coordinates: {
            x: '640',
            y: '950'
        }
    },
    SouthDowns: {
        name: "South Downs",
        adjacent: [
            "Old Forest",
            "Weather Hills",
            "Buckland",
            "Minhiriath"
        ],
        owner: "",
        troopCount: 0,
        region: "Arnor",
        isFort: false,
        coordinates: {
            x: '750',
            y: '1200'
        }
    },
    Rhudaur: {
        name: "Rhudaur",
        adjacent: [
            "Old Forest",
            "Carrock",
            "Eregion"
        ],
        owner: "",
        troopCount: 0,
        region: "Arnor",
        isFort: true,
        coordinates: {
            x: '1050',
            y: '820'
        }
    },

    //Eriador Territories

    LuneValley: {
        name: "Lune Valley",
        adjacent: [
            "Borderlands",
            "Evendim Hills",
            "Tower Hills",
            "Mithlond"
        ],
        owner: "",
        troopCount: 0,
        region: "Eriador",
        isFort: false,
        coordinates: {
            x: '600',
            y: '400'
        }
    },
    EvendimHills: {
        name: "Evendim Hills",
        adjacent: [
            "Borderlands",
            "Lune Valley",
            "Tower Hills"
        ],
        owner: "",
        troopCount: 0,
        region: "Eriador",
        isFort: true,
        coordinates: {
            x: '490',
            y: '630'
        }
    },
    TowerHills: {
        name: "Tower Hills",
        adjacent: [
            "Mithlond",
            "Lune Valley",
            "Evendim Hills",
            "The Shire"
        ],
        owner: "",
        troopCount: 0,
        region: "Eriador",
        isFort: false,
        coordinates: {
            x: '430',
            y: '830'
        }
    },
    TheShire: {
        name: "The Shire",
        adjacent: [
            "Tower Hills",
            "Buckland"
        ],
        owner: "",
        troopCount: 0,
        region: "Eriador",
        isFort: false,
        coordinates: {
            x: '500',
            y: '1040'
        }
    },
    Mithlond: {
        name: "Mithlond",
        adjacent: [
            "Tower Hills",
            "Lune Valley",
            "Forlindon",
            "Harlindon",
            "Forodwaith",
            "Minhiriath"
        ],
        owner: "",
        troopCount: 0,
        region: "Eriador",
        isFort: false,
        coordinates: {
            x: '320',
            y: '980'
        }
    },
    Forlindon: {
        name: "Forlindon",
        adjacent: [
            "Mithlond"
        ],
        owner: "",
        troopCount: 0,
        region: "Eriador",
        isFort: false,
        coordinates: {
            x: '120',
            y: '850'
        }
    },
    Harlindon: {
        name: "Harlindon",
        adjacent: [
            "Mithlond"
        ],
        owner: "",
        troopCount: 0,
        region: "Eriador",
        isFort: false,
        coordinates: {
            x: '330',
            y: '1350'
        }
    },

    // Rhun Territories

    NorthRhun: {
        name: "North Rhun",
        adjacent: [
            "Forodwaith",
            "Withered Heath",
            "South Rhun"
        ],
        owner: "",
        troopCount: 0,
        region: "Rhun",
        isFort: false,
        coordinates: {
            x: '1680',
            y: '150'
        }
    },
    SouthRhun: {
        name: "South Rhun",
        adjacent: [
            "Brown Lands",
            "North Rhun"
        ],
        owner: "",
        troopCount: 0,
        region: "Rhun",
        isFort: false,
        coordinates: {
            x: '1760',
            y: '750'
        }
    },
    WitheredHeath: {
        name: "Withered Heath",
        adjacent: [
            "Forodwaith",
            "North Rhun",
            "Esgaroth"
        ],
        owner: "",
        troopCount: 0,
        region: "Rhun",
        isFort: false,
        coordinates: {
            x: '1610',
            y: '430'
        }
    },
    Esgaroth: {
        name: "Esgaroth",
        adjacent: [
            "Withered Heath",
            "North Mirkwood"
        ],
        owner: "",
        troopCount: 0,
        region: "Rhun",
        isFort: false,
        coordinates: {
            x: '1570',
            y: '610'
        }
    },

    // Mirkwood Regions

    NorthMirkwood: {
        name: "North Mirkwood",
        adjacent: [
            "Eastern Mirkwood",
            "Esgaroth",
            "Carrock"
        ],
        owner: "",
        troopCount: 0,
        region: "Mirkwood",
        isFort: false,
        coordinates: {
            x: '1440',
            y: '800'
        }
    },
    Carrock: {
        name: "Carrock",
        adjacent: [
            "North Mirkwood",
            "Eastern Angmar",
            "Rhudaur",
            "Anduin Valley"
        ],
        owner: "",
        troopCount: 0,
        region: "Mirkwood",
        isFort: false,
        coordinates: {
            x: '1250',
            y: '500'
        }
    },
    EasternMirkwood: {
        name: "Eastern Mirkwood",
        adjacent: [
            "North Mirkwood",
            "South Mirkwood",
            "Brown Lands",
            "Anduin Valley"
        ],
        owner: "",
        troopCount: 0,
        region: "Mirkwood",
        isFort: false,
        coordinates: {
            x: '1420',
            y: '1000'
        }
    },
    SouthMirkwood: {
        name: "South Mirkwood",
        adjacent: [
            "Eastern Mirkwood",
            "Emyn Muil",
            "Brown Lands",
            "Anduin Valley"
        ],
        owner: "",
        troopCount: 0,
        region: "Mirkwood",
        isFort: true,
        coordinates: {
            x: '1510',
            y: '1350'
        }
    },
    AnduinValley: {
        name: "Anduin Valley",
        adjacent: [
            "Eastern Mirkwood",
            "Emyn Muil",
            "Carrock",
            "South Mirkwood",
            "Gladden Fields"
        ],
        owner: "",
        troopCount: 0,
        region: "Mirkwood",
        isFort: false,
        coordinates: {
            x: '1280',
            y: '1370'
        }
    },

    // Rohan Territories

    Eregion: {
        name: "Eregion",
        adjacent: [
            "Moria",
            "Dunland",
            "Rhudaur"
        ],
        owner: "",
        troopCount: 0,
        region: "Rohan",
        isFort: false,
        coordinates: {
            x: '930',
            y: '1250'
        }
    },
    Dunland: {
        name: "Dunland",
        adjacent: [
            "Eregion",
            "Minhiriath",
            "Enedwaith"
        ],
        owner: "",
        troopCount: 0,
        region: "Rohan",
        isFort: false,
        coordinates: {
            x: '830',
            y: '1500'
        }
    },
    Minhiriath: {
        name: "Minhiriath",
        adjacent: [
            "Dunland",
            "Enedwaith",
            "South Downs",
            "Mithlond",
            "Belfalas",
            "Umbar"
        ],
        owner: "",
        troopCount: 0,
        region: "Rohan",
        isFort: false,
        coordinates: {
            x: '580',
            y: '1450'
        }
    },
    Enedwaith: {
        name: "Enedwaith",
        adjacent: [
            "Dunland",
            "Minhiriath",
            "Gap of Rohan"
        ],
        owner: "",
        troopCount: 0,
        region: "Rohan",
        isFort: false,
        coordinates: {
            x: '750',
            y: '1860'
        }
    },
    GapofRohan: {
        name: "Gap of Rohan",
        adjacent: [
            "Fangorn",
            "West Rohan",
            "The Wold",
            "Minas Tirith"
        ],
        owner: "",
        troopCount: 0,
        region: "Rohan",
        isFort: false,
        coordinates: {
            x: '950',
            y: '2060'
        }
    },
    WestRohan: {
        name: "West Rohan",
        adjacent: [
            "Druwaith Iaur",
            "Gap of Rohan"
        ],
        owner: "",
        troopCount: 0,
        region: "Rohan",
        isFort: true,
        coordinates: {
            x: '650',
            y: '2210'
        }
    },
    Fangorn: {
        name: "Fangorn",
        adjacent: [
            "The Wold",
            "Gap of Rohan",
            "Lorien"
        ],
        owner: "",
        troopCount: 0,
        region: "Rohan",
        isFort: true,
        coordinates: {
            x: '1050',
            y: '1960'
        }
    },

    // Rhovanion Territories
    
    Moria: {
        name: "Moria",
        adjacent: [
            "Eregion",
            "Gladden Fields"
        ],
        owner: "",
        troopCount: 0,
        region: "Rhovanion",
        isFort: true,
        coordinates: {
            x: '1090',
            y: '1310'
        }
    },
    GladdenFields: {
        name: "Gladden Fields",
        adjacent: [
            "Anduin Valley",
            "Moria",
            "Lorien"
        ],
        owner: "",
        troopCount: 0,
        region: "Rhovanion",
        isFort: false,
        coordinates: {
            x: '1190',
            y: '1310'
        }
    },
    Lorien: {
        name: "Lorien",
        adjacent: [
            "The Wold",
            "Fangorn",
            "Gladden Fields"
        ],
        owner: "",
        troopCount: 0,
        region: "Rhovanion",
        isFort: false,
        coordinates: {
            x: '1090',
            y: '1560'
        }
    },
    TheWold: {
        name: "The Wold",
        adjacent: [
            "Lorien",
            "Fangorn",
            "Gap of Rohan",
            "Emyn Muil"
        ],
        owner: "",
        troopCount: 0,
        region: "Rhovanion",
        isFort: false,
        coordinates: {
            x: '1200',
            y: '1700'
        }
    },
    EmynMuil: {
        name: "Emyn Muil",
        adjacent: [
            "Anduin Valley",
            "South Mirkwood",
            "Brown Lands",
            "Dead Marshes",
            "The Wold"
        ],
        owner: "",
        troopCount: 0,
        region: "Rhovanion",
        isFort: false,
        coordinates: {
            x: '1400',
            y: '1850'
        }
    },
    BrownLands: {
        name: "Brown Lands",
        adjacent: [
            "South Rhun",
            "Eastern Mirkwood",
            "South Mirkwood",
            "Emyn Muil",
            "Dead Marshes",
            "Rhun Hills"
        ],
        owner: "",
        troopCount: 0,
        region: "Rhovanion",
        isFort: false,
        coordinates: {
            x: '1600',
            y: '1860'
        }
    },
    RhunHills: {
        name: "Rhun Hills",
        adjacent: [
            "Brown Lands"
        ],
        owner: "",
        troopCount: 0,
        region: "Rhovanion",
        isFort: false,
        coordinates: {
            x: '1800',
            y: '1840'
        }
    },
    DeadMarshes: {
        name: "Dead Marshes",
        adjacent: [
            "Brown Lands",
            "Emyn Muil",
            "Udun Vale",
            "Ithilien"
        ],
        owner: "",
        troopCount: 0,
        region: "Rhovanion",
        isFort: false,
        coordinates: {
            x: '1370',
            y: '2200'
        }
    },

    // Gondor Regions

    DruwaithIaur: {
        name: "Druwaith Iaur",
        adjacent: [
            "West Rohan",
            "Anfalas"
        ],
        owner: "",
        troopCount: 0,
        region: "Gondor",
        isFort: false,
        coordinates: {
            x: '450',
            y: '2390'
        }
    },
    Anfalas: {
        name: "Anfalas",
        adjacent: [
            "Druwaith Iaur",
            "Andrast",
            "Vale of Erech"
        ],
        owner: "",
        troopCount: 0,
        region: "Gondor",
        isFort: false,
        coordinates: {
            x: '560',
            y: '2600'
        }
    },
    Andrast: {
        name: "Andrast",
        adjacent: [
            "Anfalas"
        ],
        owner: "",
        troopCount: 0,
        region: "Gondor",
        isFort: false,
        coordinates: {
            x: '440',
            y: '2670'
        }
    },
    ValeofErech: {
        name: "Vale of Erech",
        adjacent: [
            "Lamedon",
            "Anfalas"
        ],
        owner: "",
        troopCount: 0,
        region: "Gondor",
        isFort: false,
        coordinates: {
            x: '735',
            y: '2600'
        }
    },
    Lamedon: {
        name: "Lamedon",
        adjacent: [
            "Vale of Erech",
            "Belfalas",
            "Lebennin"
        ],
        owner: "",
        troopCount: 0,
        region: "Gondor",
        isFort: false,
        coordinates: {
            x: '845',
            y: '2580'
        }
    },
    Belfalas: {
        name: "Belfalas",
        adjacent: [
            "Lamedon",
            "Lebennin",
            "Umbar",
            "Minhiriath"
        ],
        owner: "",
        troopCount: 0,
        region: "Gondor",
        isFort: false,
        coordinates: {
            x: '925',
            y: '2800'
        }
    },
    Lebennin: {
        name: "Lebennin",
        adjacent: [
            "Lamedon",
            "Belfalas",
            "Minas Tirith"
        ],
        owner: "",
        troopCount: 0,
        region: "Gondor",
        isFort: false,
        coordinates: {
            x: '1045',
            y: '2650'
        }
    },
    MinasTirith: {
        name: "Minas Tirith",
        adjacent: [
            "Lebennin",
            "Gap of Rohan",
            "Ithilien"
        ],
        owner: "",
        troopCount: 0,
        region: "Gondor",
        isFort: true,
        coordinates: {
            x: '1155',
            y: '2485'
        }
    },
    Ithilien: {
        name: "Ithilien",
        adjacent: [
            "Dead Marshes",
            "South Ithilien",
            "Minas Tirith",
            "Minas Morgul"
        ],
        owner: "",
        troopCount: 0,
        region: "Gondor",
        isFort: false,
        coordinates: {
            x: '1250',
            y: '2491'
        }
    },
    SouthIthilien: {
        name: "South Ithilien",
        adjacent: [
            "Harondor",
            "Ithilien"
        ],
        owner: "",
        troopCount: 0,
        region: "Gondor",
        isFort: false,
        coordinates: {
            x: '1240',
            y: '2860'
        }
    },

    // Mordor Territories

    Udun: {
        name: "Udun",
        adjacent: [
            "Dead Marshes",
            "Mount Doom"
        ],
        owner: "",
        troopCount: 0,
        region: "Mordor",
        isFort: true,
        coordinates: {
            x: '1455',
            y: '2370'
        }
    },
    MountDoom: {
        name: "Mount Doom",
        adjacent: [
            "Udun",
            "Barad-dur"
        ],
        owner: "",
        troopCount: 0,
        region: "Mordor",
        isFort: false,
        coordinates: {
            x: '1520',
            y: '2540'
        }
    },
    Baraddur: {
        name: "Barad-dur",
        adjacent: [
            "Gorgoroth",
            "Mount Doom"
        ],
        owner: "",
        troopCount: 0,
        region: "Mordor",
        isFort: true,
        coordinates: {
            x: '1760',
            y: '2490'
        }
    },
    Gorgoroth: {
        name: "Gorgoroth",
        adjacent: [
            "Barad-dur",
            "Mount Doom",
            "Minas Morgul",
            "Nurn"
        ],
        owner: "",
        troopCount: 0,
        region: "Mordor",
        isFort: false,
        coordinates: {
            x: '1785',
            y: '2635'
        }
    },
    MinasMorgul: {
        name: "Minas Morgul",
        adjacent: [
            "Gorgoroth",
            "Ithilien"
        ],
        owner: "",
        troopCount: 0,
        region: "Mordor",
        isFort: true,
        coordinates: {
            x: '1370',
            y: '2615'
        }
    },
    Nurn: {
        name: "Nurn",
        adjacent: [
            "Gorgoroth"
        ],
        owner: "",
        troopCount: 0,
        region: "Mordor",
        isFort: false,
        coordinates: {
            x: '1560',
            y: '2840'
        }
    },

    // Haradwaith Territories

    Harondor: {
        name: "Harondor",
        adjacent: [
            "South Ithilien",
            "Harad"
        ],
        owner: "",
        troopCount: 0,
        region: "Haradwaith",
        isFort: false,
        coordinates: {
            x: '1150',
            y: '2940'
        }
    },
    Harad: {
        name: "Harad",
        adjacent: [
            "Deep Harad",
            "Harondor",
            "Near Harad"
        ],
        owner: "",
        troopCount: 0,
        region: "Haradwaith",
        isFort: false,
        coordinates: {
            x: '1345',
            y: '3225'
        }
    },
    DeepHarad: {
        name: "Deep Harad",
        adjacent: [
            "Harad",
            "Umbar"
        ],
        owner: "",
        troopCount: 0,
        region: "Haradwaith",
        isFort: false,
        coordinates: {
            x: '965',
            y: '3395'
        }
    },
    Umbar: {
        name: "Umbar",
        adjacent: [
            "Deep Harad",
            "Belfalas",
            "Minhiriath"
        ],
        owner: "",
        troopCount: 0,
        region: "Haradwaith",
        isFort: true,
        coordinates: {
            x: '1060',
            y: '3200'
        }
    },
    NearHarad: {
        name: "Near Harad",
        adjacent: [
            "Harad",
            "Khand"
        ],
        owner: "",
        troopCount: 0,
        region: "Haradwaith",
        isFort: false,
        coordinates: {
            x: '1540',
            y: '3155'
        }
    },
    Khand: {
        name: "Khand",
        adjacent: [
            "Near Harad"
        ],
        owner: "",
        troopCount: 0,
        region: "Haradwaith",
        isFort: false,
        coordinates: {
            x: '1730',
            y: '3150'
        }
    }
}

var territoryNames = ["Forodwaith", "EasternAngmar", "Angmar", "Borderlands", "NorthDowns", "Fornost", "WeatherHills", "OldForest", "Buckland", "SouthDowns", "Rhudaur", "LuneValley", "EvendimHills", "TowerHills", "TheShire", "Mithlond", "Forlindon", "Harlindon", "NorthRhun", "SouthRhun", "WitheredHeath", "Esgaroth", "NorthMirkwood", "Carrock", "EasternMirkwood", "SouthMirkwood", "AnduinValley", "Eregion", "Dunland", "Minhiriath", "Enedwaith", "GapofRohan", "WestRohan", "Fangorn", "Moria", "GladdenFields", "Lorien", "TheWold", "EmynMuil", "BrownLands", "RhunHills", "DeadMarshes", "DruwaithIaur", "Anfalas", "Andrast", "ValeofErech", "Lamedon", "Belfalas", "Lebennin", "MinasTirith", "Ithilien", "SouthIthilien", "Udun", "MountDoom", "Baraddur", "Gorgoroth", "MinasMorgul", "Nurn", "Harondor", "Harad", "DeepHarad", "Umbar", "NearHarad", "Khand"]
exports.territoryNames = territoryNames
exports.territories = territories;