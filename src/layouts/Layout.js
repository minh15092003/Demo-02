import imgg from '../pages/Img/z4280456184289_e2c428ac84b5575cfaf1e0972c8a6011.png'
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';
import React, { useState } from 'react'
const Layout = () => {

  const [password, setPassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [enterpassword, setenterpassword] = useState("");

  function HandleChangePassword() {

    let user = JSON.parse(window.localStorage.getItem("user"));
    let userid = user.userid
    axios.put('http://localhost:3000/Password', {
      userid: userid,
      password: password,
      newpassword: newpassword,
      enterpassword: enterpassword
    })
      .then(res => {
        alert(res.data.message)
        console.log(res);
        window.location.href = "/login";
      })
      .catch(error => {
        alert(error.response.data.message)
        console.log(error);
      }
      )
  };

  function next() {
    window.location = "http://localhost:3001/home"
  }
  function Next() {
    window.location = "http://localhost:3001/home"
  }
  return (
    <>
      <div class="cd-container">
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <img src='data:image/png;base64,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' width="100px"></img>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link active" to="">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">Lịch</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">Tuyển Dụng</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/personnel">Nhân Sự</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">Chấm Công</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">Tiền Lương</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">Nhiệm Vụ</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">KPI</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">Giao việc</Link>
                </li>
              </ul>
            </div>
            <div>
              <lable type="button" class="btn-td btn-danger " data-bs-toggle="dropdown" aria-expanded="false"
                id="cutsten">
                <div className="minh">
                  <div class="metseg-hetage">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="22"><path d="M12 1c3.681 0 7 2.565 7 6v4.539c0 .642.189 1.269.545 1.803l2.2 3.298A1.517 1.517 0 0 1 20.482 19H15.5a3.5 3.5 0 1 1-7 0H3.519a1.518 1.518 0 0 1-1.265-2.359l2.2-3.299A3.25 3.25 0 0 0 5 11.539V7c0-3.435 3.318-6 7-6ZM6.5 7v4.539a4.75 4.75 0 0 1-.797 2.635l-2.2 3.298-.003.01.001.007.004.006.006.004.007.001h16.964l.007-.001.006-.004.004-.006.001-.006a.017.017 0 0 0-.003-.01l-2.199-3.299a4.753 4.753 0 0 1-.798-2.635V7c0-2.364-2.383-4.5-5.5-4.5S6.5 4.636 6.5 7ZM14 19h-4a2 2 0 1 0 4 0Z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="juste" viewBox="0 0 24 24" width="24"
                      id="cutsten" height="24">
                      <path
                        d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"
                        class="">
                      </path>
                    </svg>
                  </div>
                </div>
              </lable>
              <ul class="dropdown-menu" id="name">
                <div class="name">
                  <div class="dsadasd">
                    <li><a class="dropdown-item" data-bs-toggle="modal" href="#exampleModalTogle">Tài Khoản</a></li>
                    <button id="changePassword" class="dropdown-item" data-bs-toggle="modal" href="#exampleModalToggle" role="button" > Đổi mật khẩu</button>
                  </div>
                </div>
              </ul>
            </div>

            {/* <ChangePassWordModal isShowChangePassWord={isShowChangePassWord} /> */}
          </div>
        </nav>


      </div >
      <hr width='100%' className='hr'></hr>
      <Outlet />
      <footer id="footer">
        <h1 class="text-center">Tanca</h1>
        <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ab?</p>
        <div class="icons text-center">
          <i class="bx bxl-twitter"></i>
          <i class="bx bxl-facebook"></i>
          <i class="bx bxl-google"></i>
          <i class="bx bxl-skype"></i>
          <i class="bx bxl-instagram"></i>
        </div>
        <div class="copyright text-center">
          &copy; Copyright <strong><span>ARODA</span></strong>. All Rights Reserved
        </div>
        <div class="credite text-center">
          Designed By <a href="/#">SA Coding</a>
        </div>
      </footer>

      {/* Model Đổi mk     */}
      <div>
        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
          tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">

                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="input-pw">


                  <div class="input-field">
                    <input value={password} onChange={(a) => { setPassword(a.target.value) }} type="" class="input" id="password" required />
                    <label for="password">Nhập lại mật khẩu cũ</label>
                  </div>
                  <div class="input-field">
                    <input value={newpassword} onChange={(a) => { setnewpassword(a.target.value) }} type="" class="input" id="newpassword" required />
                    <label for="password">Nhập mật khẩu mới </label>
                  </div>
                  <div class="input-field">
                    <input value={enterpassword} onChange={(a) => { setenterpassword(a.target.value) }} type="" class="input" id="newpassword" required />
                    <label for="password">Nhập lại mật khẩu mới</label>
                  </div>
                  <div class="input-field">
                    <button onClick={HandleChangePassword} type="submit" class="submit">Xác Nhận</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* User profile */}
      <div>
        <div class="modal fade" id="exampleModalTogle" aria-hidden="true" aria-labelledby="exampleModalToggleLabell"
          tabindex="-1">
          <div class="modal-dialog modal-dialog-centered ">
            <div class="modal-content" id='concho'>
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="hero">
                <nav>
                  <a href="#" class="logo" id="nghedo" >Tài khoản</a>
                </nav>

                <div class="content">
                  <div class="div-text">
                    <h1>Tạ Văn Minh</h1>
                    <h4>Số điện thoại : 0392458258</h4>
                    <h4>Email : minhtv123@gmail.com</h4>
                    <h4>Chức vụ : Quản lý</h4>
                  </div>
                  <div class="div-img">
                    <img src={imgg} alt="" />
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

      </div>
    </>
  )
};
export default Layout;