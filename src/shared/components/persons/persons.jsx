import './persons.scss'
import React from 'react';
import { Person } from 'shared/components';
import person1 from 'assets/person1.png';
import person2 from 'assets/person2.png';
import person3 from 'assets/person3.png';
import person4 from 'assets/person4.png';

const PersonsList = [
    {
        id: 1,
        img: person1,
        name: 'Элаіза Ажэшка',
        description: 'Яны былі людзьмі адной эпохі. Абое прайшлі праз выпрабаванні Студзеньскага паўстання 1863-64 гадоў. Абое прысвяцілі сябе пісьменніцтву.'
    },
    {
        id: 2,
        img: person2,
        name: 'Элаіза Ажэшка',
        description: 'Яны былі людзьмі адной эпохі. Абое прайшлі праз выпрабаванні Студзеньскага паўстання 1863-64 гадоў. Абое прысвяцілі сябе пісьменніцтву.'
    },
    {
        id: 3,
        img: person3,
        name: 'Элаіза Ажэшка',
        description: 'Яны былі людзьмі адной эпохі. Абое прайшлі праз выпрабаванні Студзеньскага паўстання 1863-64 гадоў. Абое прысвяцілі сябе пісьменніцтву.'
    },
    {
        id: 4,
        img: person4,
        name: 'Элаіза Ажэшка',
        description: 'Яны былі людзьмі адной эпохі. Абое прайшлі праз выпрабаванні Студзеньскага паўстання 1863-64 гадоў. Абое прысвяцілі сябе пісьменніцтву.'
    }
];


export const Persons = () => {
    return (
        <div className="persons">
            {
                PersonsList.map(element => element.id % 2 !== 0
                    ? <div className="persons__left-person"><Person person={element}/></div>
                    : <div className="persons__right-person"><Person person={element}/></div>
                )
            }
        </div>
    )
};
