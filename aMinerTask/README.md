You are given an array of strings. Every odd string is representing a resource (e.g. Gold, Silver, Copper, and so on),
and every even – quantity. Your task is to collect the resources and print them each on a new line.
Print the resources and their quantities in the format:

{resource} –> {quantity}


Sample input:

[
'Gold',
'155',
'Silver',
'10',
'Copper',
'17'
]

Sample output:

    Gold -> 155
    Silver -> 10
    Copper -> 17

Sample input:

[
'gold',
'155',
'silver',
'10',
'copper',
'17',
'gold',
'15'
]

Sample output:

    gold -> 170
    silver -> 10
    copper -> 17


