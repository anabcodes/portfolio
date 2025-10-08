export interface ImagemProjeto {
  src: string;
  titulo: string;
  descricao: string;
}

export interface ProjetoProps {
  dadosImagens: ImagemProjeto[];
  titulo: string;
  descricao: string;
  linkParaProjeto?: string;
}
