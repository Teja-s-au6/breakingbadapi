import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../config';


export const fetchAllCharacters = createAsyncThunk(
    "characters/fetchAllCharacters", async () => {
        try {
            const response = await axios.get(`${config.BASE_URL}/characters`)
            //console.log(response.data)
            return response.data
        } catch (error) {
            console.log(error.message)
        }
    }
)

export const fetchCurrnetCharacter = createAsyncThunk(
    "characters/fetchCurrnetCharacter", async (charId) => {
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
    name:"characters",
    initialState: {characters: null, isFetchingCharacter: false},
    reducers: {},
    extraReducers: {
        [fetchAllCharacters.pending] : (state, action) => {
            state.isFetchingCharacter = true
        },
        [fetchAllCharacters.fulfilled] : (state, action) => {
            state.characters = action.payload
            state.isFetchingCharacter = false
        },
        [fetchAllCharacters.rejected] : (state, action) => {
            state.isFetchingCharacter = false
        }

    }
})

export default slice.reducer