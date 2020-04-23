import React, { useState, useEffect } from 'react';

const Booklist = props => {
  const [bookData, setBookData] = useState(null);
  useEffect(() => {
    const result = props.getData?.(props.language).then(response => setBookData(response));
  }, [props])                                       // ここまで追加

  return (
    <div>
      <div>
        <ul>
          {     // このあたり編集
            bookData === null
              ? <p>now loading...</p>
              : bookData.data.items.map((x, index) => <li key={index}>{x.volumeInfo.title}</li>)
          }
        </ul>
      </div>
    </div>
  );
}
export default Booklist;
