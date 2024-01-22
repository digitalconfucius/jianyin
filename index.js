import pinyin from "pinyin";

function toPinyinString(text) {
  return pinyin(text, {group: true, segment: true})[0][0];
}

function replacePinyinTones(text) {
  const replacements = {
      'ā': 'a', 'ō': 'o', 'ē': 'e', 'ī': 'i', 'ū': 'u', 'ǖ': 'ü',
      'á': 'ar', 'ó': 'or', 'é': 'er', 'í': 'ir', 'ú': 'ur', 'ǘ': 'ür',
      'ǎ': 'aa', 'ǒ': 'oo', 'ě': 'ee', 'ǐ': 'ii', 'ǔ': 'uu', 'ǚ': 'üü',
      'à': 'ah', 'ò': 'oh', 'è': 'eh', 'ì': 'ih', 'ù': 'uh', 'ǜ': 'üh',
      'a': 'a\'', 'o': 'o\'', 'e': 'e\'', 'i': 'i\'', 'u': 'u\'', 'ü': 'ü\''
  };

  return text.replace(/ā|ō|ē|ī|ū|ǖ|á|ó|é|í|ú|ǘ|ǎ|ǒ|ě|ǐ|ǔ|ǚ|à|ò|è|ì|ù|ǜ|a(?![arh';a])|o|e|i|u|ü/g, match => replacements[match]);
}

let text = "Nǐ wèishénme yīzhí xǐhuan chī lǜ pútao";
let replacedText = replacePinyinTones(text);
console.log(replacedText);

console.log(toPinyinString("中心"));
console.log(replacePinyinTones(toPinyinString("中心")));  
