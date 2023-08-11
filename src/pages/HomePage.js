import React,{useState} from 'react';
import Card from '../component/card';
import dummyData from '../dum-data/index.json'


function HomePage() {
console.log(dummyData)
const [listChannel, setlistChannel] = useState(dummyData.listChannel || [])

    return(
        <div className='container py-5' style={{backgroundColor: 'rgb(70, 70, 70)'}}>
        <h1 style={{color: 'white', padding: '15px'}}>
        Welcome To Home Page
        </h1>
        <div className='row'>
        {
                listChannel.map(o=>{
                    return  <div key={o.id} className='col-md-12 col-lg-4 mb-3 mb-lg-2'>
                    <Card  channel={o} />
                </div>
                })
            }
           
         </div>
            
           
        </div>
    );
}export default HomePage;