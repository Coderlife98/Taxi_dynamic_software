import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { url } from '../../constant/constant';

const ViewFair = () => {
  const { id } = useParams();
  const token = localStorage.getItem('token');
  const getDataById = async () => {
    const response = await axios.post(`${url}/api/fair/view/${id}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      withCredentials: true
    });
    // console.log(response);
  }
  useEffect(() => {
    getDataById()
  })
  return (
    <div>
      ViewFair
    </div>
  )
}

export default ViewFair
