import React from 'react'
import Profile from './Profile.js'

const ListeProfile = ({Profiles ,bio, handleName , children}) => {
    return (
       <div>
       {children}
       
        <div style={{display: 'flex', flexWrap : 'wrap', alignItems: 'center', justifyContent: 'space-between'}}>
          {Profiles.map((el, index) => (
        <Profile el={el} handleName={handleName} bio={bio} key={index} />
      ))}
      </div>
        </div>
    )
}

export default ListeProfile
