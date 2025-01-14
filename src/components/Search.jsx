import { useState } from 'react'

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState('')

  const handleKey = (e) => {
    if (e.key === 'Enter') {
    }
  }

  const handleSubmit = () => {
    cb(value)
  }

  return (
    <div className="search-field">
      <input
        type="search"
        id="search-field"
        placeholder="search"
        onKeyDown={handleKey}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={handleSubmit}>search</button>
    </div>
  )
}

export { Search }
