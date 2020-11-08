import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login';

describe('<Login /> with no props', () => {
  const container = shallow(<Login />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should have an email field', () => {
    expect(container.find('input[type="email"]').length).toEqual(1);
  });

  it('should have proper props for email field', () => {
    expect(container.find('input[type="email"]').props()).toEqual({
      className: '',
      onBlur: expect.any(Function),
      placeholder: 'email',
      type: 'email',
    });
  });

});
