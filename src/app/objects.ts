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

export interface Asignatura {
  objetivos?: string
  profesores?: string
  creditos?: number
  img?: string;
  name?: string;
  description?: string;
  grados?: number[];
}

