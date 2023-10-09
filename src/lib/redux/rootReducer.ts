/* Instruments */
import { authSlice, menuSlice, messageSlice } from './slices'


export const reducer = {
  auth: authSlice.reducer,
  message: messageSlice.reducer,
  menu: menuSlice.reducer 
}
