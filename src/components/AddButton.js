import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const ButtonExampleCircular = () =>
<Popup trigger={
    <Button circular
        icon='add'
        size='big'
        color="blue"
        className="addButton-style" />}
    content='Add a new task' />

export default ButtonExampleCircular