using System;

Console.WriteLine("Let's roll some dice, baby!");
Console.WriteLine("---------------------------");

for (int i = 0; i < 10; i++)
{
    Die die1 = Roll();
    Die die2 = Roll();

    string message = $"{die1} + {die2} == {die1.Value + die2.Value}";
    if (die1.Value == die2.Value)
    {
        message += " DOUBLES!";
    }

    Console.WriteLine(message);
}

function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

const Roll = () => {
    let dieRoll = [one, two, three, four, five, six];
    return dieRoll[getRandomInt(5)];
}