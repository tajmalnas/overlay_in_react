import React, { useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css'

const AddUser = (props) => {
    const [enteredUsername,setEnterendUsename]=useState('');
    const [enteredAge,setEnterendAge]=useState('');
    const addUserHandler=(event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            
            return;
        }
        if(+enteredAge <1){ //this enterAge Was strin but this + made it number
            return ;
        }
        // console.log(enteredAge,enteredUsername)
        
        props.onAddUser(enteredUsername,enteredAge);

        setEnterendUsename('');
        setEnterendAge('');
    }
    const usernameChangeHandler=(event)=>{
        setEnterendUsename(event.target.value);
    }

    const ageChangeHandler=(event)=>{
        setEnterendAge(event.target.value);
    }

    return (
    <div>
    <ErrorModal/>
    <Card className={styles.input} >
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input id='username' onChange={usernameChangeHandler} value ={enteredUsername} type='text' />
            <label htmlFor='age'>Age (Years) </label>
            <input id='age' onChange={ageChangeHandler} value={enteredAge} type='number' />
            <Button type='submit'>Add User</Button>
        </form>
    </Card>
    </div>
  )
}

export default AddUser