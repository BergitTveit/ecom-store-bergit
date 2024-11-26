import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, CartItem } from '../types/cart';
import { Product } from '../types/api';

const initialState: CartState = {
    items: [],
    total: 0,
    isLoading: false,
    error: null,
};