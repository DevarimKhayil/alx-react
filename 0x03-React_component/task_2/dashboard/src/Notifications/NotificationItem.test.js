
import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  it('should call markAsRead with the correct id on click', () => {
    const markAsReadMock = jest.fn();
    const wrapper = shallow(<NotificationItem id={1} value="New course available" markAsRead={markAsReadMock} />);
    wrapper.find('li').simulate('click');
    expect(markAsReadMock).toHaveBeenCalledWith(1);
  });

  // other tests
});
