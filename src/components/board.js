import React from 'react'
import './board.css'
import List from './list'

const Info = [
    {
        id: 1,
        name: 'Bertie Yates',
        birthday: '1995-04-30',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    },
    {
        id: 2,
        name: 'Hester Hogan',
        birthday: '1991-05-23',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
    },
    {
        id: 3,
        name: 'Larry Little',
        birthday: '1994-05-7',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    },
    {
        id: 4,
        name: 'Sean Walsh',
        birthday: '1993-09-13',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    },
    {
        id: 5,
        name: 'Lola Gardner',
        birthday: '1992-04-19',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    },
]

const board = () => {
    console.log(Today(Info))
    return (
        <div id='site-main'>
            <h2 className='text-dark title'>Birthday Reminder</h2>

            <div className="board">
                <List Info={Today(Info)} />
                <h2 className='upcomming'>Upcomming Birthday</h2>

                <List Info={Upcomming(Info, 3)} />

            </div>
        </div>
    )
}

export default board

function Today(person) {
    //get current date and month
    let currentDate = new Date().getDate();
    let currentMonth = new Date().getMonth();
    let filter = person.filter((item) => {
        //het the date of birth of the person
        let day = new Date(item.birthday).getDate();
        let month = new Date(item.birthday).getMonth();
        return currentDate == day && currentMonth == month;


    })
    return filter;

}

//Upcomming Birtday 

function Upcomming(person, toMonth) {
    let currentDate = new Date().getDate();
    let currentMonth = new Date().getMonth();
    let filter = person.filter((item) => {
        let month = new Date(item.birthday).getMonth();
        let day = new Date(item.birthday).getDate();
        if (currentDate == day) return;
        return month <= currentMonth && month <= currentMonth + toMonth;
    })
    return filter;


}
