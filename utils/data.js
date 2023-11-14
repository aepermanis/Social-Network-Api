emails = [
    'test@test.com',
    'new@email.com',
    "cheesesucks@cheezit.com",
    'uniqueemail@email.com',
    'a@a.com',
    'b@a.com',
    'squareup@yadawg.com',
    'ratman@rat.com',
    'ninja@turtles.com',
    'key@key.com',
];

usernames = [
    'ratman',
    "fgh130",
    'GreenDAYFAn',
    'meatloaf',
    'squilliamfancypants',
    'macaroniInmyhat',
    'buzz lightyear',
    'goatman',
    'squadron hawk',
    'jacsux1',
];

bodytext = [
    'this is great',
    'yeah dog that is true',
    'there aint nothing but air',
    'yo so um',
];

ids = [
    1,
    2,
    3,
]


const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomEmail = () =>
  `${getRandomArrItem(emails)}`;

const getRandomUsername = () =>
    `${getRandomArrItem(usernames)}`

const getRandomBodytext = () =>
    `${getRandomArrItem(bodytext)}`

const getRandomids = () =>
    `${getRandomArrItem(ids)}`

module.exports = { getRandomBodytext, getRandomUsername, getRandomEmail, getRandomids}
