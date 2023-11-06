Write a function that:

• Records a car number for every car that enters the parking lot

• Removes a car number when the car goes out

• Input will be an array of strings in format [direction, carNumber]

Print the output with all car numbers which are in the parking lot sorted in ascending by number.


Sample input:

    ['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']

Sample output:

    CA2822UU
    CA2844AA
    CA9876HH
    CA9999TT


