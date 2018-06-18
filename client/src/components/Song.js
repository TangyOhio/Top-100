import React from 'react';
import {List} from 'semantic-ui-react';

const Song = ({ id, name, place, updateSong, deleteSong}) => (
  <List celled>
    <List.Item>
      
      {place}

      <List.Content>
        <List.Header>{name}</List.Header>

        <List horizontal relaxed='very'> 
          <List.Item>
            <List.Content>
              <List as='a' onClick={() => updateSong(id)}>Edit Song</List>
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Content>
              <List as='a' onClick={() => deleteSong(id)}>Delete Song</List>
            </List.Content>
          </List.Item>
        </List>

      </List.Content>
    </List.Item>
  </List>
)

export default Song;