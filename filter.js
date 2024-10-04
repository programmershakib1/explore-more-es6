// filter select elements based on a condition and return an array with the element that fulfilled the condition

const numbers = [1, 5, 6, 4, 15];
const players = [75, 65, 72, 55, 59];

// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 80);
// const selected = players.filter(p => p > 50);
const selected = players.filter(p => p % 2 === 1);
console.log(selected);

const friends = ['tom', 'john', 'michel', 'oliver', 'tim', 'joshna'];

const oddFriends = friends.filter(friend => friend.length > 4);
console.log(oddFriends);