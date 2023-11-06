Create a function, which creates a register for heroes, with their names, level, and items (if they have such).
The input comes as an array of strings. Each element holds data for a hero, in the following format:
"{heroName} / {heroLevel} / {item1}, {item2}, {item3}..."
You must store the data about every hero. The name is a string, a level is a number and the items are all strings.

The output is all of the data for all the heroes you’ve stored sorted ascending by level. The data must be in the
following format for each hero:

Hero: {heroName}

level => {heroLevel}

Items => {item1}, {item2}, {item3}


Sample input:

    [
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]

Sample output:

    Hero: Hes
    level => 1
    items => Desolator, Sentinel, Antara
    Hero: Derek
    level => 12
    items => BarrelVest, DestructionSword
    Hero: Isacc
    level => 25
    items => Apple, GravityGun

Sample input:

    [
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]

Sample output:

    Hero: Batman
    level => 2
    items => Banana, Gun
    Hero: Superman
    level => 18
    items => Sword
    Hero: Poppy
    level => 28
    items => Sentinel, Antara
    
    
