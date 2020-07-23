import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../config';


export const fetchCurrnetCharacter = createAsyncThunk(
    "currentCharacter/fetchCurrnetCharacter", async (charId) => {
        try {
            const response = await axios.get(`${config.BASE_URL}/characters/${charId}`)
            //console.log(response.data)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }
)



const slice = createSlice({
    name:"currentCharacter",
    initialState: {character: null, isFetchingCurrentCharacter: false},
    reducers: {},
    extraReducers: {
        [fetchCurrnetCharacter.pending] : (state, action) => {
            state.isFetchingCurrentCharacter = true
        },
        [fetchCurrnetCharacter.fulfilled] : (state, action) => {
            state.character = action.payload
            state.isFetchingCurrentCharacter = false
        },
        [fetchCurrnetCharacter.rejected] : (state, action) => {
            state.isFetchingCurrentCharacter = false
        }

    }
})

export default slice.reducer