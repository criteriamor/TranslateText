import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const Phrase = (props) => {
 const {id, translatedText, deleteTrans} = props

    return (
      <div className="phrase-box">
        <Link to={`/translations/${id}`} className="text-link">
          <div className="text-box">
          {translatedText}
          </div>
        </Link>
          <button className="delete"
                  onClick={() => deleteTrans(id)}>delete</button>
      </div>
    )
}

export default Phrase

Phrase.propTypes = {
  id: PropTypes.string,
  translatedText: PropTypes.string
}
