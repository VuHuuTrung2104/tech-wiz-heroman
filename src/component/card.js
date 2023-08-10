import React, { useState } from 'react';
import myData from '../dum-data';
import { Link } from 'react-router-dom';
export default function Card() {
	
	return (
		<div>
			<div className='container py-5'>
				<div className='row'>
					<div className='col-md-12 col-lg-4 mb-4 mb-lg-0' >
						<div className='card'>
							<div className='d-flex justify-content-between p-3'>
								<p className='lead mb-0'>Ohsusu</p>
								<div
									className='bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong' style={{
										width: '35px', height: '35px'
									}}>
									<p className='text-white mb-0 small'>Live</p>
								</div>
							</div>
							<div className='card-body'>
							<img src='https://mcdn.coolmate.me/uploads/January2022/nu-streamer-noi-tieng-nhat-viet-nam-5.jpg' className='card-img-top' />
								<div className='d-flex justify-content-between mb-3'>
									<img src='https://i.pinimg.com/280x280_RS/33/e7/5e/33e75ecc6c8e86a36a21a3da7e20a9ff.jpg' className='mb-0 rounded-circle' alt='Avatar'  style={{width: '50px'}} />
									<h5 className='text-dark'>Em đã lên sóng trở lại</h5>
								</div>

								<div className='d-flex justify-content-between mb-2'>
									<p className='text-muted mb-0'>Watching: <span className='fw-bold'>66</span></p>
									<div className='ms-auto text-warning'>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
										<i className='fa fa-star'></i>
									</div>
								</div>
								<Link to='/stream/example' className='text-white  d-block w-100 text-decoration-none'>
									<button className='btn btn-primary d-block w-100'>Form Add, Update</button>
								</Link>
							</div>
						</div>
				</div>
			</div>
		</div>
	);
}