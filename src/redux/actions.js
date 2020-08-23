import { useDispatch } from 'react-redux'
import axios from 'axios'
import { SET_USER } from './actionTypes'

const dispatch = useDispatch()

export const login = user => ({

    type: SET_USER,
    payload: user
})