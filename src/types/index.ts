export type bookType = {
  idBook: number;
  author: string;
  image64: string | null;
  title: string;
  type: string;
};

export type bookingType = {
  id_booking: number;
  dateBooking: string;
  dateReturn: string;
  state: boolean;
  copybook: number;
  user_fk: string;
  copyBook: copyBookType;
};

export type copyBookType = {
  idCopyBook: number;
  state: boolean;
  book: bookType;
};

export type fineType = {
  idFine: number;
  amount: number;
  description: string;
  state: boolean;
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

export type registerType = {
  email: string;
  name: string;
  lastName: string;
  password: string;
}
