import axios from "axios";
import type { bookType } from "../types";

// url/book/{}

//publica
export async function getBooks(): Promise<bookType[]> {
  const response = await axios.get("http://localhost:8087/all");
  return response.data;
}


//deben tener token
export async function addBook() {

}


export async function getBooksTitle() {

}


export async function postNewCopyBook() {
   
}


//reserva libro
export async function bookingCopy() {
    
}
