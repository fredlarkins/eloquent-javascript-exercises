let str = "I was driving my car down the road when I saw a cat dart across the street. I quickly stopped at the nearest convenience store to get a can of pop, but when I tried to open it, the tab broke off. I had to use a prop from my trunk to pry the lid open. As I was driving again, I saw a ferret running alongside the road, but it disappeared into a bush. I took the ferry across the bay to see the new Ferrari exhibit at the museum. It was a fascinating display of luxurious, spurious cars. The cost of the tickets was exorbitant, but totally worth it. As I left the museum, I noticed that the whitespace on my windshield had been filled with dirt and grime. I'll have to remember to clean it before my next drive."

let re1 = /ca\w/g;
console.log(str.match(re1));

let re2 = /pr?op/g;
console.log(str.match(re2));

let re3 = /fer[areiyt]{2,4}/ig;
console.log(str.match(re3));

let re4 = /(\w*?ious)\b/g;
console.log(str.match(re4));