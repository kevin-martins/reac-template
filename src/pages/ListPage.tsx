import Wrapper from '../components/Wrapper';
import CheckedList from '../components/lists/CheckedList';
import ContactList from '../components/lists/ContactList';
import PictureList from '../components/lists/PictureList';
import StepByStepList from '../components/lists/StepByStepList';

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
      <Wrapper title='Contacts'>
        <ContactList />
      </Wrapper>
      <Wrapper title='Pictures'>
        <PictureList />
      </Wrapper>
      <Wrapper title='Pictures'>
        <StepByStepList />
      </Wrapper>
    </div>
  );
};

export default ListPage;
