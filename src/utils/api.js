// src/utils/api.js

import axios from 'axios'

export const API_BASE_URL = 'http://localhost:3000' // Replace with your API URL

export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/products2`)
        return response.data
    } catch (error) {
        console.error('Error fetching posts:', error)
        throw error
    }
}

