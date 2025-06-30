import axios from "axios";

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


//mis prestamos

export async function bookingBooks(email: string){
  try {
    const response = await axios.get(`http://localhost:8087/api/booking/find/${email}`);
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