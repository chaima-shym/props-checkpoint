import React from 'react'
import { Card , Image} from 'semantic-ui-react'
import PropTypes from "prop-types";

const Profile = ({ el: { fullname, profession },bio,handleName }) => {
    return (
        <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
       <Card.Content>
        <Card.Header>{fullname}</Card.Header>
          <Card.Meta>
            <span className='date'>{profession}</span>
          </Card.Meta>
          <Card.Description>
           {bio}
          </Card.Description>
          </Card.Content>
          <Card.Content>
          <button style={{ display:'inline-block',padding:'0.7em 1.4em',margin:'0 0.3em 0.3em 0',borderRadius:'0.15em',boxSizing: 'border-box',fontWeight:'400',
         color:'#FFFFFF',backgroundColor:'#28B5B5',boxShadow:'inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17)',textAlign:'center' }} variant="primary" onClick={() =>handleName(fullname)}>
            Say Hi
          </button>
        </Card.Content>
      </Card>
    )
}

export default Profile
Profile.propTypes = {
  handelName: PropTypes.func,
};
Profile.defaultProps = {
  bio: "Bio Field Empty",
};
