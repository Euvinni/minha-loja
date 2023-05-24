import React from 'react'
import ExemploFilter from './ExemploFilter'
import ExemploMap from './ExemploMap'
import Exercicio2 from './Exercicio2';
import Exercicio1 from './Exercicio1'
import Exercicio3 from './Exercicio3';
import Exercicio5 from './Exercicio5';
import Exercicio4 from './Exercicio4';
import Exercicio6 from './Exercicio6';


const HomeExercicios = () => {

  const posts = [
    { id: 1, title: 'Post 1', content: 'Conteúdo do post 1' },
    { id: 2, title: 'Post 2', content: 'Conteúdo do post 2' },
    { id: 3, title: 'Post 3', content: 'Conteúdo do post 3' }
    ];

  return <div>
    <ExemploFilter />
    <hr/>
    <ExemploMap />
    <hr/>
    <Exercicio1 />
    <hr />
    <Exercicio2 post={posts}/>
    <hr />
    <Exercicio3 />
    <hr />
    <Exercicio4 />
    <hr />
    <Exercicio5 />
    <hr />
    <Exercicio6 />
    </div>
}

export default HomeExercicios
