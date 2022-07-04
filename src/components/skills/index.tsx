import React from 'react';
import './index.css';
import { cardData } from './card-data';

export interface CardProps {
  title: string;
  SvgImage: any;
  imageAlt: string;
  description: string;
  languages: string[];
  frameworks: string[];
}

export function Skills() {
  return (
    <>
      <div className='container skills'>
        <div className='cards'>
          {
            cardData.map((card, index) => {
              return <Card key={index} {...card} />
            })
          }
        </div>
      </div>
    </>
  );
}

function Card({SvgImage, ...props}: CardProps) {
  return (
    <div className='card'>
      {/* <img src={props.SvgImage  } className='icon' alt={props.imageAlt} /> */}
      <SvgImage class='icon' fill="var(--primary-color)" />
      <h3>{props.title}</h3>
      <p className="text-center" >{props.description}</p>
      <div className='content'>
        <List title='Linguagens' items={props.languages} />
        <List title='Frameworks' items={props.frameworks} />
      </div>
    </div>
  );
}

function List(props: { title: string, items: string[] }) {
  return (
    <div className='list'>
      <p className="list-title">{props.title}</p>
      {
        props.items.map((item, index) => {
          return <span key={index}>{item}</span>
        })
      }
    </div>
  )
}