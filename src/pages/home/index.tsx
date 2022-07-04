import React from 'react';
import './index.css';
import Avatar from '../../assets/male_avatar.svg';
import { Skills } from '../../components/skills';

export function Home() {
  return (
    <>
      <div className='container'>
        <p className='title'>Olá, meu nome é Gabriel Back</p>
        <p className='subtitle'>Sou desenvolvedor Front-end & Back-end</p>
        <img src={Avatar} alt='avatar' className='avatar'/>
      </div>
      <div className='container backcolor text'>
        <div style={{ width: '50vw' }} className='text-center'>
          Estou na área de desenvolvimento desde 2017, trabalhando como desenvolvedor Front-end e Back-end.
        </div>
      </div>
      <Skills />
    </>
  );
}
