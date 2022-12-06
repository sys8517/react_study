import React from "react";
import Notification from './Notification';


const reservedNotifications = [ //예약된 공지 메시지들
    {
        message:"안녕하세요, 오늘 일정입니다.",
    },
    {
        message : "점심식사 시간입니다.",
    },
    {
        message : "이제 곧 미팅이 시작됩니다.",
    },
];

var timer; //타이머

export default class NotificationList extends React.Component{ //클래스형 컴포넌트, 공지 리스트들
    constructor(props){
        super(props);

        this.state = {
            notifications : [],
        };
    }

    componentDidMount() {
        const {notifications} = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications : notifications,
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return(
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification message = {notification.message}/>;
                })}
            </div>
        );
    }
}