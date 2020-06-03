// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import { shallow } from 'enzyme';
import AuthComponent from './components/Common/auth-component/auth';
  
describe('Login component tests', ()=>{
        let wrapper;
     
        test('username check', ()=>
        {
            wrapper=shallow(<AuthComponent/>);
            wrapper.find('input[type="text"]').simulate('change',{target: {name: 'username', value: 'ProjectNile'}});
        

        expect(wrapper.state('username')).toEqual('ProjectNile');
    })
        it('password check', ()=>
        {
            wrapper=shallow(<AuthComponent/>);
            wrapper.find('input[type="password"]').simulate('change',{target: {name: 'password', value: 'NilePwd2020'}
        });

        expect(wrapper.state('password')).toEqual('NilePwd2020');
        })
 
        it('login check with right data', ()=>
        {
            wrapper=shallow(<AuthComponent/>);
            wrapper.find('input[type="text"]').simulate('change',{target: {name: 'username', value: 'ProjectNile'}});
 

        wrapper.find('input[type="password"]').simulate('change',{target: {name: 'password', value: 'NilePwd2020'}});

        wrapper.find('input[type="button"]').simulate('click',{target:{name: 'button'}});

        expect(wrapper.state('isLoggedIn')).toBe(true);
  
    })


    it('login check with wrong data', ()=>
    {
        wrapper=shallow(<AuthComponent/>);
        wrapper.find('input[type="text"]').simulate('change',{target: {name: 'username', value: 'ProjectNile'}});


    wrapper.find('input[type="password"]').simulate('change',{target: {name: 'password', value: 'NilePwd20201'}});

    wrapper.find('input[type="button"]').simulate('click',{target:{name: 'button'}});

    expect(wrapper.state('isLoggedIn')).toBe(false);
    })


    })