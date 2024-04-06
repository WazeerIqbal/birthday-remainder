import React from 'react'

const list = ({ Info }) => {

    return (
        <>

            {

                Info.map((item, index) => {

                    return (
                        <ul key={index} >
                            <li  >
                                <div className="flex" >
                                    <img src={item.image} alt="image" />
                                    <div className="title">
                                        <h3 className="name">{item.name}</h3>

                                        <h5 className="age">{Old(item.birthday)} Years Old  </h5>
                                    </div>
                                </div>
                            </li>
                        </ul >
                    )
                })


            }





        </>
    )
}

export default list

//How old the person is

function Old(personAge) {
    let year = new Date(personAge).getFullYear();
    let currentYear = new Date().getFullYear();
    let presentAge = currentYear - year;
    return presentAge;
}


