Write a function, which receives two parameters.

The first parameter will be a string with some words separated by ', '.

The second parameter will be a string that contains templates containing '*'.

Find the word with the same length as the template and replace it.


Sample input:

    'great',
    'softuni is ***** place for learning
    new programming languages'

Sample output:

    softuni is great place for learning
    new programming languages

Sample input:

    'great, learning',
    'softuni is ***** place for ********
    new programming languages'

Sample output:

    softuni is great place for learning
    new programming languages

