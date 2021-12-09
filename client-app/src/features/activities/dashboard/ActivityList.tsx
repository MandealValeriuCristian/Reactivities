import { observer } from 'mobx-react-lite';
import React from 'react';
import { Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import ActivityListItem from './ActivityListItem';



export default observer(function ActivityList(){
    const {activityStore} = useStore();
    const {activityByDate } = activityStore;

    
    
    return (
        <Segment>
            <Item.Group divided>
            {activityByDate.map(activity => (
                        <ActivityListItem key={activity.id} activity={activity} />
            ))}
            </Item.Group>
        </Segment>

    )
})