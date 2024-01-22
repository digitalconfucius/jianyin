
![logo](./dev/jianyin.png)

# 简音 jiaanyīn 
jiaanyīn is a Modern Standard Chinese pronunciation guide with semi-toneless writing for early-advanced speakers. It's a combination of [Hahnyuu Pīnyīn 汉语拼音](https://en.wikipedia.org/wiki/Pinyin) and Guóyuu Luómaazih [国语罗马字](https://en.wikipedia.org/wiki/Gwoyeu_Romatzyh).

Visit the live demo (which has some limitations) here: https://digitalconfucius.github.io/jianyin/.

# Examples of jiaanyīn

```
你好，我是大卫
nii haao, woo shih Dahweiy

你为什么一直喜欢吃绿葡萄
nii weihshénme yīzhí xiihuan chī lüy pútao

学校旅游
xúexiaoy lüüyóu

这个环境不适合你的性格
zheh geh huánjihng buy shihhé nii de xihnggé 

北京的背景被别的杯备了
Beeijīng de beiyjiing beiy biehde bēi beiy le
```

# Why jiaanyīn?

[Hahnyuu Pīnyīn](https://en.wikipedia.org/wiki/Pinyin) has become the de facto standard for Chinese Latinization, but the excess of tonal markers can make it very difficult for native English speakers to read. It especially becomes a bottleneck for early-advanced speakers of Chinese, who are fully aware of all five Chinese tones at an auditory level but still unconsciously read Pīnyīn as if it were English. 

The main problem is that á, ǎ, and à correspond to completely different sounds in Chinese, but they are rendered in Latin letters with tiny diacritical marks as if the tone is somehow "separate" from the letter, or even worse, an "accessory" item. Consider this: běijīng vs. bèijǐng. Did you read it correctly? If yes, then you don't need to use jiaanyīn. If no, then continue reading.

[Guóyuu Luómaazih 国语罗马字](https://en.wikipedia.org/wiki/Gwoyeu_Romatzyh) does not have the same problem with tonal markers. Most of the unique sounds of modern Chinese are truly rendered with unique, zero-diacritical spellings, meaning that once you learn it, you can pronounce it perfectly without relying on the concept of "tone" at all. The problem is that Guóyuu Luómaazih is pretty complex and doesn't have a one-to-one mapping in the clean and obvious way guaranteed by Hahnyuu Pīnyīn. 

> "[Toneless spelling] makes the spelling more complicated, but gives an individuality to the physiognomy of words, with which it is possible to associate meaning ... [A]s an instrument of teaching, **tonal spelling has proved in practice to be a most powerful aid in enabling the student to grasp the material with precision and clearness**." - 赵元任 Zhaoy Yuánrehn [slightly embellished]

Here's where jiaanyīn comes in. It has semi-toneless spelling, and all five Chinese tones are rendered in completely different looking ways. In particular, the 2nd, 3rd, and 4th tones, which are notoriously similar in appearance while being vastly different in pronunciation, are now separated. **á, ǎ, and à become á, aa, and ah**. 

# Rules of jiaanyīn
1. Start with Pīnyīn 拼音.
2. Expand third-tone vowels with the duplicated vowel (e.g., ǎ -> aa).
3. Expand the fourth-tone true dipthongs with -y (e.g. èi -> eiy). (Chinese has true dipthongs, like "ei" and "ai", which are two vowel sounds combined in a single syllable. )
4. Expand the fourth-tone single vowel "u" or "ü" with -y (e.g. ù -> uy).
4. Expand the fourth-tone dinstinct double-vowels with -h (e.g. ià -> iàh). (Chinese has distinguished adjacent vowels, like "uo" and "ia", which are not combined in a single syllable. )
5. Expand everything else in the fourth tone with -h (e.g. è -> eh).

Try it out with our live demo: https://digitalconfucius.github.io/jianyin/.

# Limitations of the live demo
The [live demo](https://digitalconfucius.github.io/jianyin/) is currently missing:
- Word segmentation
- Homophone recognition

Please use your own Chinese dictionary to fill in the gap for the time being.

# Further discussion
We decided to preserve the á tone marker because it is easy for modern English speakers to recognize. This diacritical marker is used in modern English fairly frequently, especially in French loanwords. In particular, we chose not to use the Guóyuu Luómaazih á -> ar mapping because it is so easily confused with English "r" sounds which can lead to mispronunciation.

We decided to preserve the ā tone marker because it is so unique to modern Chinese (and also modern Japanese) and not easy to render in English. Besides, it is visually distinct as a horizontal bar and not easily confused for the other slanted tonal markers. 

We considered adding a -w sound for dipthongs ending in o, like bào and hào (baow and haow), but it makes the rules a little complicated to remember. We felt that baoy and haoy were good enough, despite falling somewhat short of the mark. Feel free to experiment with that on your own.

In an opposite manner, we thought about simply always replacing the fourth tone with the terminal -h. (e.g. lù -> luh, lèi -> leih). We felt this might be too far of a stretch from how it could be pronounced in English. Feel free to experiment with adding this rule yourself.

# Resources Used
国语罗马字: https://en.wikipedia.org/wiki/Gwoyeu_Romatzyh

bootstrap: https://getbootstrap.com/

chinese-to-pinyin: https://www.npmjs.com/package/chinese-to-pinyin

logo generator: https://chinese.gratis/tools/chinesecalligraphy/


