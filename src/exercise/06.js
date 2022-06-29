// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useState, useEffect} from 'react'

function UsernameForm({onSubmitUsername}) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [hidden, setHidden] = useState(true)

  console.log('onSubmitHandler reference: ', onSubmitUsername)

  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  const onSubmit = event => {
    onSubmitUsername(value)
    event.preventDefault()
  }

  const onChange = event => {
    const {value} = event.target

    const isValid = !value || value === value.toLowerCase()

    setError(isValid ? '' : 'Must enter lowercase!')
    setValue(value ? value.toLowerCase() : '')
    if (!isValid) {
      setHidden(false)
    }
  }

  useEffect(() => {
    if (!hidden) {
      const timer = setTimeout(() => {
        clearTimeout(timer)
        setHidden(true)
      }, 500)
    }
  }, [hidden])

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label id="username">Username:</label>
        <input type="text" onChange={onChange} value={value} />
      </div>
      <button type="submit" disabled={error !== ''}>
        Submit
      </button>
      <div style={{color: 'red'}} hidden={hidden}>
        {error}
      </div>
    </form>
  )
}

function App() {
  const onSubmitUsername = name => {
    alert(`You entered: ${name}. Yay!`)
  }
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
