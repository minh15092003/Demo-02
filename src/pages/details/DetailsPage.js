import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const Details = () => {
    let location = useLocation();
    const [users, setUsers] = useState([]);
    const queryParams = new URLSearchParams(location.search);
    const userid = queryParams.get('userid');

    function detail() {
        axios.get('http://localhost:3000/Details?userid=' + userid)
            .then(response => {
                setUsers(response.data.data)
                console.log(userid)
            })
            .catch(error => {
                console.log(error);
            })
    }
    useEffect(() => { detail(); }, [])

    return (
        <div>
            <div class="row-detail">
                <h4 class="lable-text">THÔNG TIN NHÂN VIÊN</h4>

                <img class="avt-left" src="https://i.pinimg.com/736x/4a/4c/29/4a4c29807499a1a8085e9bde536a570a.jpg" alt="" />
                {users.map((user) => (
                    <div className='tist-cs'>
                        <div class='text-basic'>
                            <h>Chức vụ: {user.position}</h>
                        </div>
                        <div class='text-basic'>
                            <h>sđt: {user.numberphone}</h>
                        </div>
                        <div class='text-basic'>
                            <h>Email: {user.email}</h>
                        </div>
                        
                        <div class='text-basic'>
                            <h>{user.fullname}</h>
                        </div>
                        
                     </div>
                ))}
                <div id='kawasaki'>
                    <h5 class="fust-tunst">Thông tin cơ bản</h5>
                </div>
                {users.map((user) => (
                    <div class="employee-detail__wrapper-item">
                        <div class="employee-detail__item">
                            <h6>Họ và tên</h6>
                            <p>{user.fullname}</p>
                        </div>
                        <div class="employee-detail__item">
                            <h6>Ngày sinh</h6>
                            <p>...</p>
                        </div>
                        <div class="employee-detail__item">
                            <h6>Giới tính</h6>
                            <p>...</p>
                        </div>
                        <div class="employee-detail__item">
                            <h6>Mã nhân viên</h6>
                            <p>{user.employeecode}</p>
                        </div>

                    </div>
                ))}



                <div>
                    <h5 class="fust-tunst">Liên hệ</h5>
                </div>
                {users.map((user) => (
                    <div class="employee-detail__wrapper-item">
                        <div class="employee-detail__item">
                            <h6>Email</h6>
                            <p>{user.email}</p>
                        </div>
                        <div class="employee-detail__item">
                            <h6>Điện thoại</h6>
                            <p>{user.phone}</p>
                        </div>
                        <div class="employee-detail__item">
                            <h6>Địa chỉ</h6>
                            <p>{user.address}</p>
                        </div>
                        <div class="employee-detail__item">
                            <h6>Mạng xã hội</h6>
                            <p>{user.facebook}</p>

                        </div>
                    </div>

                ))}
                <div>
                    <h5 class="fust-tunst">Liên hệ khẩn cấp</h5>
                </div>
                {users.map((user) => (
                    <div class="employee-detail__wrapper-item">
                        <div class="employee-detail__item">
                            <h6>Liên hệ khẩn cấp</h6>
                            <p>{user.numberphone}</p>
                        </div>
                        <div class="employee-detail__item">
                            <h6>Số di động khẩn cấp</h6>

                            <p>...</p>
                        </div>
                        <div class="employee-detail__item">
                            <h6>Quan hệ với nhân viên</h6>
                            <p>-</p>
                        </div>
                        <div class="employee-detail__item">
                            <h6>Số cố định khẩn cấp</h6>
                            <p>-</p>
                        </div>

                    </div>
                ))}
                <div>
                    <h5 class="fust-tunst">Địa chỉ thường trú</h5>
                </div>
                {users.map((user) => (
                    <div class="employee-detail__wrapper-item">
                        <div class="employee-detail__item">
                            <h6>Quốc gia</h6>
                            <p>...</p>
                        </div>
                        <div class="employee-detail__item">
                            <h6>Địa chỉ</h6>
                            <p>{user.address}</p>
                        </div>
                        <div class="employee-detail__item">
                            <h6>Quê quán</h6>
                            <p>...</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>

    )
};
export default Details