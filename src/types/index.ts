export type bookType = {
  idBook: number;
  author: string;
  image64: string | null;
  title: string;
  type: string;
};

export type bookingType = {
  id_booking: number;
  date_booking: string;
  date_return: string;
  state: boolean;
  copybook: number;
  user_fk: string;
};

export type copyBookType = {
  id_copybook: number;
  state: boolean;
  book: number;
};

export type fineType = {
  id_fine: number;
  amount: number;
  description: string;
  state: boolean;
  user_fk: string;
};

export type rolType = {
  id: number;
  name: string;
};

export type userLibraryType = {
  email: string;
  last_name: string;
  name: string;
  password: string;
  state: boolean;
};

export type userRole = {
  id_rol_user: number;
  id_rol: number;
  email: string;
};


export interface loginType {
  username: string,
  password: string
}
