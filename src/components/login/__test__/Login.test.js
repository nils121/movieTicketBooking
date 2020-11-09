import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login';

describe('<Login /> with no props', () => {
  const container = shallow(<Login />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should have an username field', () => {
    expect(container.find('input[type="username"]').length).toEqual(1);
  });

  it('should have proper props for password field', () => {
    expect(container.find('input[type="password"]').props()).toEqual({
      className: 'form-control',
      placeholder: 'password',
      type: 'password',
    });
  });

});
