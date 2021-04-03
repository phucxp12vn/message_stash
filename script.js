let messages = [
  {
    mainPhrase: "Don't",
    partPhrase: [
      "quit",
      "give up",
      "hesitate",
      "stop until you're proud",
      "cry over the past, it's gone",
      "stress about the future, it hasn't arrived",
    ],
  },
  {
    mainPhrase: "Lets",
    partPhrase: ["it's go", "past go", "shit go", "do it", "do some thing"],
  },
  {
    mainPhrase: "Just",
    partPhrase: [
      "keep showing up when most people quit",
      "do it",
      "don't quit",
    ],
  },
];

let emoji = [
  "(*・ω・)ﾉ",
  "(￣▽￣)ノ",
  "(°▽°)/",
  "( ´ ∀ ` )ﾉ",
  "(^-^*)/",
  "(＠´ー`)ﾉﾞ",
  "(´• ω •`)ﾉ",
  "( ° ∀ ° )ﾉﾞ",
  "ヾ(*'▽'*)",
  "＼(⌒▽⌒)",
  "ヾ(☆▽☆)",
  "( ´ ▽ ` )ﾉ",
  "(^０^)ノ",
  "~ヾ(・ω・)",
  "(・∀・)ノ",
  "ヾ(・ω・*)",
  "(*°ｰ°)ﾉ",
  "(・_・)ノ",
  "(o´ω`o)ﾉ",
  "( ´ ▽ ` )/",
  "(￣ω￣)/",
  "( ´ ω ` )ノﾞ",
  "(⌒ω⌒)ﾉ",
  "(o^ ^o)/",
  "(≧▽≦)/",
  "(✧∀✧)/",
  "(o´▽`o)ﾉ",
  "(￣▽￣)/",
];

let getRandomPhrase = (messages, emoji) => {
  let numberTypeMessage = messages.length;
  let randomTypeMessage = Math.floor(Math.random() * numberTypeMessage);

  let typeMessage = messages[randomTypeMessage];
  let numberPartMessage = typeMessage.partPhrase.length;
  let randomPartPhrase = Math.floor(Math.random() * numberPartMessage);

  let numberEmoji = emoji.length
  let randomEmoji = Math.floor(Math.random() * numberEmoji);

  let message = `${typeMessage.mainPhrase} ${typeMessage.partPhrase[randomPartPhrase]}.\n`;
  message += emoji[randomEmoji];

  return message;
};

console.log(getRandomPhrase(messages, emoji));