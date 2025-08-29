let score = 0;
let clickPower = 1;
let upgradeCost = 50;
let autoClickCost = 100;
let autoClickPower = 0;

const scoreDisplay = document.getElementById("score");
const cookie = document.getElementById("cookie");
const upgradeBtn = document.getElementById("upgradeBtn");
const upgradeCostDisplay = document.getElementById("upgradeCost");
const autoClickBtn = document.getElementById("autoClickBtn");
const autoClickCostDisplay = document.getElementById("autoClickCost");

// クッキーをクリックした時
cookie.addEventListener("click", () => {
  score += clickPower;
  updateScore();
});

// アップグレード購入
upgradeBtn.addEventListener("click", () => {
  if (score >= upgradeCost) {
    score -= upgradeCost;
    clickPower++;
    upgradeCost = Math.floor(upgradeCost * 1.5); // コスト上昇
    upgradeCostDisplay.textContent = upgradeCost;
    updateScore();
  }
});

// オートクリック購入
autoClickBtn.addEventListener("click", () => {
  if (score >= autoClickCost) {
    score -= autoClickCost;
    autoClickPower++;
    autoClickCost = Math.floor(autoClickCost * 1.7);
    autoClickCostDisplay.textContent = autoClickCost;
    updateScore();
  }
});

// 自動クリック処理
setInterval(() => {
  if (autoClickPower > 0) {
    score += autoClickPower;
    updateScore();
  }
}, 1000);

// スコア更新表示
function updateScore() {
  scoreDisplay.textContent = score;
}
