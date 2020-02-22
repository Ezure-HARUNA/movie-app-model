//検索のためのコンポーネント
//ここがフックの使いどころらしい
//なんでも。フックを使うと、機能コンポーネントが独自の内部状態を処理できるらしい

import React, { useState } from "react";


//const [ステート名、ステートの再定義関数名]= React.useState(ステートの初期値)
//データの定義
const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  //useStateフックはは初期状態である引数をつ受け取り、
  //現在の状態（クラスコンポーネントのthis.stateと同等）
  //とそれを更新する関数（this.setStateと同等）を含む配列を返します。
  
  //ボタンが押されてsubmitしたときに検索する？
  const handleSearchInputChanges = (e) => {
    //➀ボタンが押されたことを感知する(イベント(e)の入力)
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {　
      //入力範囲をクリアにする(空の文字列を使用することで)
    setSearchValue("")
  }

  //検索機能を呼び出し
  //ボタンがクリックされた時に検索機能を呼び出す？
  const callSearchFunction = (e) => {
    e.preventDefault();
    //preventDefaultで何が起こっているのか分からない
    props.search(searchValue);
    resetInputField();//入力したものが空に？
  }

  return (
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          //新しい値で状態更新関数を呼び出すhandleSearchInputChanges関数が呼び出される
          type="text"
        />
        <input 
        onClick={callSearchFunction} 
        type="submit" //送信ボタンを作成する
        value="SEARCH" 
        />
      </form>
    );
}

export default Search;