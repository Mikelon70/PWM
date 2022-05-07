export interface User{
  id: string;
  name: string;
  subjects: any;
  type: string;
  averageGrade: string;
  email: string;
}

export interface Grado {
  id?: number;
  img?: string;
  name?: string;
  description?: string;
  asignaturas?: number[];
}

