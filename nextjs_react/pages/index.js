import React, {useState} from 'react'

const index = () => {
  const [inputString, setInputString] = useState("");
  const [historyList, setHistoryList] = useState([])

  const handleOnChange = (evt) => {
    setInputString(evt.target.value);
    setHistoryList([...historyList, evt.target.value]);
  }

  const renderHistory = (list) => {
    return list.map((elm, index) => <li key={index}>{elm}</li>)
  } 

  return (
    <div>
      <input placeholder='Enter some Text' onChange={(e) => handleOnChange(e)}/>
      <div>{inputString}</div>
      <ul>
        {renderHistory(historyList)}
      </ul>
    </div>
  )
}

export default index
