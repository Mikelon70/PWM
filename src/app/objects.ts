export interface User{
  id: string;
  name: string;
  email: string;
  password: string;
  type: string;
  subjects: number[];
  img: string;
}

export interface Grado {
  id?: number;
  img?: string;
  name?: string;
  description?: string;
  asignaturas?: number[];
}

