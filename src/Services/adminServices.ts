import axios from "axios"
import { useAppStore } from "../store/useAppStore";


const token = useAppStore.getState().token;


export const getCopyAdmin = async (title: string) => {
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
        console.log('Get copy', response.data)
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;

    }
};



export const registerBookAdmin = async (data: any) => {
    if (!token) throw new Error("Token no disponible");
    try {
        const response = await axios.post(
            'http://localhost:8087/api/book/new',
            data,
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



export const copyBookAdmin = async (idBook: string) => {
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