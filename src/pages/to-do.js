import React from 'react';
import Card from '../component/card';
export default function TodoPage(params) {
    const initData = [
        {
            id:1,
            title: 'day la title',
            amount: '50000',
            type: 'icome',
        }    
    ];
    return(
        <div >
            <div className='container'>
                <div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">tieu de</label>
                         <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="tieu de"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label" >so tien</label>
                        <input type="number" className="form-control" id="exampleFormControlTextarea1" placeholder="so tien"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label" >loai</label>
                        <select>
                            <option >
                                Thu Nhap
                            </option>
                            <option>
                                Chi Tieu
                            </option>
                        </select>
                        
                    </div>
                    <div className='mb-0 py-3'>
                        <button className='btn btn-danger' >Them</button>
                    </div>
                   <Card/>
                </div>
            </div>
        </div>
    );
}