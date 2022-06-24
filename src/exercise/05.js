// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import PropTypes from 'prop-types'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = (
  <div className="box box--small bg-blue">small lightblue box</div>
)
const mediumBox = <div className="box box--medium bg-pink">medium pink box</div>
const largeBox = (
  <div className="box box--large bg-orange">large orange box</div>
)

/*Extra credit */
const Box = ({size, style, children}) => {
  const sizeClass = `box--${size}`

  return (
    <div className={`box ${sizeClass}`} style={style}>
      {children}
    </div>
  )
}

Box.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

function App() {
  return (
    <div>
      {/* {smallBox}
      {mediumBox}
      {largeBox} */}
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
      <Box size="extraLarge" style={{backgroundColor: 'orange'}}>
        wrong type
      </Box>
    </div>
  )
}

export default App
