You have initial health 100 and initial coins 0. You will be given a string, representing the dungeon's rooms. Each
room is separated with '|' (vertical bar): "room1|room2|room3…"

Each room contains - an item or a monster; and a number. They are separated by a single space.
("item/monster number").


• If the first part is "potion":

  - You are healed with the number in the second part. However, your health cannot exceed your
  initial health (100).

  - Print: `You healed for {healing-number} hp.`
  
  - After that, print your current health: `Current health: {number} hp


• If the first part is "chest":

  - You have found some coins, the number in the second part.
  
  - Print: `You found {coins} coins.`


• In any other case, you are facing a monster, you are going to fight.
The second part of the room contains the attack of the monster, and the first the monster's name. You
should remove the monster's attack from your health.

  - If you are not dead (health > 0) you have slain the monster, and you should print:
  `You slayed {monster-name}.`

  - If you have died, print: `You died! Killed by {monster-name}.` and your quest is over.
  Print the best room you`ve to manage to reach: `Best room: {room}`.


• If you managed to go through all the rooms in the dungeon, print on the next three lines:

"You've made it!"

"Coins: {coins}"

"Health: {health}


Input:

You receive an array with one element- string, representing the dungeon's rooms, separated with '|' (vertical bar):
["room1|room2|room3…"].


Sample input:

["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]

Sample output:

    You slayed rat.
    You slayed bat.
    You healed for 10 hp.
    Current health: 80 hp.
    You slayed rat.
    You found 100 coins.
    You died! Killed by boss.
    Best room: 6

Sample input:

["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]

Sample output:

    You slayed cat.
    You healed for 10 hp.
    Current health: 100 hp.
    You slayed orc.
    You found 10 coins.
    You slayed snake.
    You found 110 coins.
    You've made it!
    Coins: 120
    Health: 65


