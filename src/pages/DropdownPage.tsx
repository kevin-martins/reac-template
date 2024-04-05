import React from 'react'
import Wrapper from '../components/Wrapper';
import StaggeredDropDown from '../components/dropdown/Dropdown';

const DropdownPage = () => {
  return (
    <div>
      <Wrapper title='Staggered dropdown'>
        <StaggeredDropDown />
      </Wrapper>
    </div>
  );
};

export default DropdownPage;
