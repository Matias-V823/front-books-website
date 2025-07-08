import axios from "axios"
import { useAppStore } from "../store/useAppStore";


export const getCopyAdmin = async (title: string) => {
    const token = useAppStore.getState().token;

    try {
        const response = await axios.get(
            `http://localhost:8087/api/book/copy/${title}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;

    }
};

export const getReaderAdmin = async (email: string) => {
    const token = useAppStore.getState().token;

    try {
        const response = await axios.get(
            `http://localhost:8087/api/reader/find/${email}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data.content;
    } catch (error) {
        console.log(error);
        throw error;

    }
};

export const readerStateAdmin = async (email: string) => {
    const token = useAppStore.getState().token;

    try {
        const response = await axios.post(
            `http://localhost:8087/api/reader/state/${email}`,{},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        console.log('Reader State:', response.data)
        return response.data;
    } catch (error) {
        console.log(error);
        throw error

    }
};



export const registerBookAdmin = async (data: FormData) => {
  const token = useAppStore.getState().token;

  if (!token) throw new Error("Token no disponible");

  try {
    const response = await axios.post(
      'http://localhost:8087/api/book/new',
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};




export const copyBookAdmin = async (idBook: string) => {
    const token = useAppStore.getState().token;

    try {
        const response = await axios.post(`http://localhost:8087/api/book/newcopy/${idBook}`, {},{
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.log(error)
        throw error;

    }
};


export const getUserAdmin = async (email: string) => {
    const token = useAppStore.getState().token;

    try {
        const response = await axios.post(`http://localhost:8087/api/book/find/${email}`, {},{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error)
        throw error;

    }
};

export const newBookingAdmin = async (data : { email: string; idCopyBook: number }) => {
    const token = useAppStore.getState().token;

    try {
        const response = await axios.post(`http://localhost:8087/api/booking/new`, data,{
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.log(error)
        throw error;
    }
};


export const returnBookingAdmin = async (idBook: string) => {
    const token = useAppStore.getState().token;

    try {
        const response = await axios.post(`http://localhost:8087/api/booking/return/${idBook}`, {},{
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.log(error)
        throw error;

    }
};


