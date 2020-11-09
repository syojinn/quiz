const quize = [
  {
    question:'第1問　『名探偵コナン』の主人公、江戸川コナンの決め台詞は次のうちどれでしょう？',
    answers: [
      '真実はいつも一つ', 
      '解けない謎はない', 
      'この町の謎は俺が解いてやる', 
      '証明終了'
    ],
    correct : '真実はいつも一つ'
  }, {
    question:'第2問　一番年齢が若いキャラクターは？',
    answers: [
      '野比のび太（ドラえもん）',
      '乱太郎（忍たま乱太郎）',
      'さくらももこ（ちびまる子ちゃん）',
      'サトシ（ポケットモンスター）'
    ],
    correct : '第3問　さくらももこ（ちびまる子ちゃん）'
  }, {
    question:'原作の漫画が一番売れた作品は？',
    answers: [
      'ドラゴンボールＺ',
      'スラムダンク',
      'ドラえもん',
      '名探偵コナン'
    ],
    correct : 'ドラゴンボールＺ'
  }, {
    question:'第4問　『ONE　PIECE（ワンピース）』の主人公、モンキー・D・ルフィが食べた悪魔の実は次のうちどれでしょう？',
    answers: [
      'ハナハナの実',
      'ヒトヒトの実',
      'ゴムゴムの実',
      'ドロドロの実'
    ],
    correct : 'ゴムゴムの実'
  }, {
    question:'第5問　『機動戦士ガンダム』の主人公アムロ・レイがホワイトベース内でブライト・ノアに顔を殴られたときに言ったセリフはどれでしょう？',
    answers: [
      '二度もぶった。親父にもぶたれた事ないのに！',
      '痛い！俺の顔に何てことしやがる！',
      'あなたに殴る権利などない！',
      'どうしてあなたはいつもそうなんだ！'
    ],
    correct : '二度もぶった。親父にもぶたれた事ないのに！'
  }, {
    question:'第6問　『魔女の宅急便』の主人公、キキは何に乗って空を飛ぶでしょうか？',
    answers: [
      '箒（ほうき）',
      '物干し竿',
      '紙飛行機',
      '絨毯'
    ],
    correct : '箒（ほうき）'
  }, {
    question:'第7問　『ルパン三世』の主人公、ルパン三世が愛用する拳銃は次のうちどれでしょう？',
    answers: [
      'ワルサーP36',
      'ワルサーP37',
      'ワルサーP38',
      'ワルサーP39'
    ],
    correct : 'ワルサーP38'
  }, {
    question:'第8問　『となりのトトロ』で、草壁家に住んでいた家じゅうをすすと灰だらけにしてしまう生き物の名前はどれでしょう？',
    answers: [
      'まっしろしろすけ',
      'まっくろくろすけ',
      'くろちゃん',
      'くろんぼ'
    ],
    correct : 'まっくろくろすけ'
  }, {
    question:'第9問　『天空の城ラピュタ』で、物語の終盤にパズーとシータが一緒に唱える滅びの呪文はどれでしょう？',
    answers: [
      'パズル',
      'パルス',
      'バルス',
      'バヌス'
    ],
    correct : 'バルス'
  }, {
    question:'第10問　次のうち「週刊少年ジャンプ」のキーワードでないものは？',
    answers: [
      '根性',
      '友情',
      '努力',
      '勝利'
    ],
    correct : '根性'
  }
  
];
const quizLength = quize.length;
let quizeIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('botton');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quize[quizeIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quize[quizeIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickMotion = (e) => {
  if(quize[quizeIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizeIndex++;

  if(quizeIndex < quizLength){
    //問題数だまだあればこちらを実行
    setupQuiz();
  } else {
    //問題数がなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

//ボタンをクリックして正誤判定
let motionIndex = 0;
while(motionIndex < buttonLength){
  $button[motionIndex].addEventListener('click', (e) => {
    clickMotion(e);
  });  
  motionIndex++;
}

