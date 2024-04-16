import React from 'react'
import Wrapper from '../components/Wrapper';
import CheckedList from '../components/lists/CheckedList';

const list = [
  "Unlock your dreams, absolutely free!",
  "Elevate your space with cutting-edge smart solutions",
  "Revamp your view with sleek glass innovations",
  "Transform your ambiance with effortless style",
  "Rapid response, anytime, anywhere"
];

const ListPage = () => {
  return (
    <div>
      <Wrapper title='Checked'>
        <CheckedList list={list} />
      </Wrapper>
    </div>
  );
};

export default ListPage;
