
import React, { Component } from 'react';
import NotificationItem from './NotificationItem';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { listNotifications } = this.props;
    return (
      <div className="Notifications">
        <p>Here is the list of notifications</p>
        <ul>
          {listNotifications.map(notification => (
            <NotificationItem
              key={notification.id}
              id={notification.id}
              value={notification.value}
              markAsRead={this.markAsRead}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Notifications;
