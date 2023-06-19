import React, { Component, Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
// import { BrowserRouter, Navigate , Route, Routes } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { Login, Dashboard } from '../pages';
import "../../assets/styles/main.css"
import "../../assets/styles/responsive.css"



const App = () => {

  const [isUnauthenticated, setIsUnauthenticated] = useState(false);

  // const navigate = useNavigate();
  // HttpInterceptor() {
  // 	axios.interceptors.response.use(function (response) {
  // 		return response;
  // 	}, function (error) {

  // 		if (error.response.status === 401) {
  // 			message.warning('Token anda habis, harap login kembali');
  // 			this.setState({
  // 				isUnauthenticated: true
  // 			})
  // 		}

  // 		return Promise.reject(error => {
  // 		});
  // 	});
  // 	this.props.isExpired();
  // }

  return (
    <Layout className="kita-warga-wrapper">
      <Router>
        {/* <Sidebar /> */}
        {isUnauthenticated ? (
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard/rangkuman"/>
              <Route path="/dashboard/detail"/>
              <Route path="/dashboard/pemasukan"/>
              <Route path="/dashboard/pengeluaran"/>
              <Route path="/dashboard/kasbon"/>
              <Route path="/dashboard/daftar-warga"/>
              <Route path="/dashboard/daftar-user"/>
            </Route>
            <Route path="/about" element={<h2>About Page</h2>} />
          </Routes>
        )}
        
      </Router>
    </Layout>
  )
};

export default App;