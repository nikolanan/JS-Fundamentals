Write a function that receives two parameters: sequence of numbers and special bomb number with a certain
power.

Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors
from left and right. Detonations are performed from left to right and all detonated numbers disappear.

The input contains two arrays of numbers. The first contains the initial sequence and the second contains the
special bomb number and its power.

The output is the sum of the remaining elements in the sequence.


Sample input:

    [1, 2, 2, 4, 2, 2,
    2, 9],
    [4, 2]

Sample output: 12

Sample input:

    [1, 4, 4, 2, 8, 9,
    1],
    [9, 3]

Sample output: 5

Sample input:

    [1, 1, 2, 1, 1, 1,
    2, 1, 1, 1],
    [2, 1]

Sample output: 4
