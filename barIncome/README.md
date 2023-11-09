Each valid order should have a customer, product, count, and price:

• Valid customer's name should be surrounded by '%' and must start with a capital letter, followed by lowercase letters

• Valid product contains any word character and must be surrounded by '<' and '>'

• Valid count is an integer, surrounded by '|'

• Valid price is any real number followed by '$'

The parts of a valid order should appear in the order given: customer, product, count, and price.
Between each part there can be other symbols, except ('|', '$', '%' and '.')

For each valid line print on the console: "{customerName}: {product} - {totalPrice}"

When you receive "end of shift" print the total amount of money for the day rounded to 2 decimal places in
the following format: "Total income: {income}".


Input / Constraints

• Strings that you have to process until you receive the text "end of shift".


Output

• Print all of the valid lines in the format "{customerName}: {product} - {totalPrice}"

• After receiving "end of shift" print the total amount of money for the day rounded to 2 decimal places

in the following format: "Total income: {income}"


Sample input:

    ['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']

Sample output:

    George: Croissant -
    20.60
    Peter: Gum - 1.30
    Maria: Cola - 2.40
    Total income: 24.30

Sample input:

    ['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']

Sample output:

    Valid: Valid - 200.00
    Total income: 200.00
