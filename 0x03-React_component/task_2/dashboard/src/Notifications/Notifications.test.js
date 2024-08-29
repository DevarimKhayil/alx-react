
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('should log the correct message when markAsRead is called', () => {
    console.log = jest.fn();
    const wrapper = shallow(<Notifications listNotifications={[{ id: 1, value: 'New course available' }]} />);
    wrapper.instance().markAsRead(1);
    expect(console.log).toHaveBeenCalledWith('Notification 1 has been marked as read');
  });

  // other tests
});
