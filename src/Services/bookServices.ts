import axios from "axios";
import { useAppStore } from "../store/useAppStore";



// url/book/{}

//publica
export async function getBooks() {
  try {
    const response = await axios.get("http://localhost:8087/api/book/all");
    return response.data.content;
  } catch (error) {
    console.error(error)
  }
}


//mis prestamos

export const bookingBooks = async (email: string) => {
  const token = useAppStore.getState().token;
  try {
    const response = await axios.get(`http://localhost:8087/api/booking/find/${email}`,{
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
    return response.data.content;
  } catch (error) {
    console.log(error)
  }
}

//mis multas
export async function finesBooks(email: string){
  try {
    const response = await axios.get(`http://localhost:8087/api/fine/find/${email}`);
    return response.data.content;
  } catch (error) {
    console.log(error)
  }
}