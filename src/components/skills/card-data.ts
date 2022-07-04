import { CardProps } from './index';
import { ReactComponent as FrontEnd } from '../../assets/frontend.svg';
import { ReactComponent as BackEnd } from '../../assets/backend.svg';

export const cardData: CardProps[] = [
  {
    title: 'Front-end',
    SvgImage: FrontEnd,
    imageAlt: 'Front-end Icon',
    description: 'Gosto bastante de estar criando novas telas, estilizando e soltando a imaginação',
    languages: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript'],
    frameworks: ['React', 'Angular'],
    
  },
  {
    title: 'Back-end',
    SvgImage: BackEnd,
    imageAlt: 'Back-end Icon',
    description: 'O que mais gosto é estar desenvolvendo o back-end, lidando com a lógica, otimizando, refatorando e sempre buscando o melhor',
    languages: ['JavaScript', 'Typescript', 'Python'],
    frameworks: ['Express', 'NestJS']
  }
];