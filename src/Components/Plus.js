import React, { useState } from 'react';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EditIcon from '@mui/icons-material/Edit';

function Plus() {
    const [myArray, updateMyArray] = useState([])

    const addList = () => {
        updateMyArray([...myArray, { id: myArray.length, content: 'to do list' }]);
    }

    console.log(myArray)
    return (
        <div>
            <IconButton onClick={addList}>
                <NoteAddIcon />
            </IconButton>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>{myArray.map(item =>
                <Card sx={{ width: "500px", backgroundColor: 'yellow', margin: '20px' }}>
                    <div style={{display: 'flex',justifyContent: "flex-end"}}>
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                        <EditIcon />
                    </IconButton>
                    </div>
                    <CardContent>
                        {item?.content}
                    </CardContent>
                </Card>
            )}
            </div>
        </div>
    )
}

export default Plus