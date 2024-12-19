import { useState } from "react";
import "./App.css";
import "./css/index.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <body>
        <div>
          <h1 id="title">桐陰の技術、ここに集まる。</h1>
        </div>
        <p>
          <b>
            <span class="TCA">TCA(正式名称：Toin Computer Association)</span>
            のホームページへようこそ！
          </b>
        </p>
        <p>ここでは主に活動内容や功績、リンク集などを掲載する予定です。</p>
        <p>
          このページは現在作成中であり、コンテンツがあまりありませんが、どうぞゆっくりしていってください。
        </p>
        <h2>活動実績</h2>
        <ul id="achive_list">
          <li>SuperComputingContest2023 本戦出場</li>
          <li>パソコン甲子園2023 予選敗退</li>
          <li>
            情報オリンピック(JOI2023/2024)
            1次予選突破6名(うちJOIG本選出場者2名)、2次予選突破3名
          </li>
        </ul>
        <h2>リンク集</h2>
        <p>
          以下はTCAに関連するリンク集です。(今後、別ページやフッター・ヘッダーに移動する可能性があります。)
        </p>
        <ul>
          <li>
            <a href="https://twitter.com/toincomputer">公式Twitter (現X)</a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCTxyuWMK0cUP3Z4bcJioSXg">
              公式Youtubeチャンネル
            </a>
          </li>
        </ul>
      </body>
    </>
  );
}

export default App;
