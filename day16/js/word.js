//좋은 글귀

let word = [];

word[0] = "당신은 지금도 최고고, 이전에도 최고였으며 앞으로도 최고일것이다.";
word[1] = "인생은 멀리서 보면 희극 가까이서 보면 비극";
word[2] = "성공하는 사람은 실패하는데 익숙한 사람이다.";
word[3] = "후회를 최대한 이용하라. 깊이 후회한다는것은 새로운 삶을 산다는 것이다.";
word[4] = "성공이라는 못을 박으려면 끈질김이라는 망치가 필요하다.";

let rnd = Math.floor(Math.random()*word.length);
document.write(word[rnd]);