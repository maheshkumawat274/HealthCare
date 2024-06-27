import React from 'react';

function HomeSection1() {
  const items = [
    {
      icon:'./imgs/doctor.png',
      title: 'Qualified Doctor',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      icon: './imgs/ambu.png',
      title: 'Emergency Help',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      icon: './imgs/machine.jpg',
      title: 'Modern Equipment',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      icon: './imgs/med.png',
      title: 'Family Medicine',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];

  return (
    <div className='container-fluid p-5' style={{ backgroundColor:'#EEEEEE' }}>
      <h1 className='text-center'>How It Helps You To <br /> Keep Healthy </h1>
      <div className='container pt-5'>
        <div className='row' style={{ backgroundColor:'#EEEEEE' }}>
          {items.map((item, i) => (
            <div key={i} className='col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center'>
              <div className='card' style={{border:'0',boxShadow:'0px 0px 20px rgba(0, 0, 0, 0.2), 0px 0px 30px rgba(0, 0, 0, 0.14), 0px 0px 40px rgba(0, 0, 0, 0.12)'}}>
                <img className='px-3 pt-3 w-50' src={item.icon}></img>
                <div className='card-body px-3'>
                  <h1 className='fs-3'>{item.title}</h1>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeSection1;
