import pinyin from "pinyin";

function toPinyinString(text) {
  return pinyin(text, {group: true, segment: true})[0][0];
}

function replacePinyinTones(text) {
  const thirdToneReplacements = {
      'ǎ': 'aa', 'ǒ': 'oo', 'ě': 'ee', 'ǐ': 'ii', 'ǔ': 'uu', 'ǚ': 'üü',
  };

  const fourthToneTriple= {
    'iào' : 'iaoh',
    'uài' : 'uaiy',
    'ueì' : 'ueiy',
  };

  const fourthToneDouble = {
      'ài' : 'aiy',
      'ào' : 'aoy',
      'èi' : 'eiy',
      'òu' : 'ouy',
      'ià' : 'iah',
      'iè' : 'ieh',
      'iù' : 'iuy',
      'uà' : 'uah',
      'uì' : 'uiy',
  };

  const fourthToneSingle = {
     'à': 'ah', 'ò': 'oh', 'è': 'eh', 'ì': 'ih', 
     'ù': 'uy', 'ǜ': 'üy',
 };

  let currentText = text.replace(/ǎ|ǒ|ě|ǐ|ǔ|ǚ/g, match => thirdToneReplacements[match]);

  currentText = currentText.replace(/iào|uài|ueì/g, match => fourthToneTriple[match]);

  currentText = currentText.replace(/ài|ào|èi|òu|ià|iè|iù|uà|uì/g, match => fourthToneDouble[match]);

  currentText = currentText.replace(/à|ò|è|ì|ù|ǜ/g, match => fourthToneSingle[match]);

  return currentText;
}

function generate() {
  let text = document.getElementById('inputText').value;
  let toShow = replacePinyinTones(toPinyinString(text));
  document.getElementById('outputText').innerText = toShow;
}

window.generate = generate;

console.log("hello");
console.log(replacePinyinTones(toPinyinString("你好")));