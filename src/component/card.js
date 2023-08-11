import React, { useState } from 'react';
import myData from '../dum-data';
import { Link } from 'react-router-dom';
export default function FeedbackPage(props) {
	const {channel} = props
	return (
		<div className='card' style={{background: 'rgb(36, 36, 36)'}}>
							<div className='d-flex justify-content-between p-3'>
								<p style={{color: 'white', fontSize:'20px', fontWeight:'500'}} className='lead mb-0'>{channel.name}</p>
								<div
									className='bg-danger rounded-circle d-flex align-items-center justify-content-center shadow-1-strong' style={{
										width: '35px', height: '35px'
									}}>
									<p className='text-white mb-0 small'>Live</p>
								</div>
							</div>
							<div className='card-body'>
							<img src={channel.previewImg} className='card-img-top' 
							style={{height: '200px',objectFit:'cover', objectPosition:'top'}}
							/>
								<div className='d-flex justify-content-between my-3'>
									<h5 className='text-dark'>{channel.shortMsg}</h5>
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
								<button className='btn btn-danger d-block w-100'>

									<a href={channel.url} target='_blank' className='text-white text-decoration-none '>Watch</a>
								</button>
							</div>
						</div>
	);
}