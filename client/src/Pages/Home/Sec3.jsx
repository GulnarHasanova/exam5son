import React from 'react'
import './Sec3.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Sec3() {
    const [datas, setdatas] = useState([])
    const [sort,setSort] = useState([])
    const[toogle,setToogle] =useState(true)

    useEffect(() => {
        axios.get("http://localhost:4000/courses")
            .then(res => setdatas(res.data))

    }, [])

    const handleDelete=(id)=>{
        axios.delete(`http://localhost:4000/courses/${id}`)
       const deleteItem=datas.filter(x=>x._id!==id)
        setdatas(deleteItem)

    }


    const handleSort =()=>{
        setToogle(!toogle)
        if(toogle===false){
            setSort(datas.sort((a,b)=>a.price-b.price))
        }
        else{
            setSort(datas.sort((a,b)=>b.price-a.price))
        }
    }

    return (
        <div className='container'>
            <div className="row cardRow" >
                <h4>Popular Courses</h4>
                <button className='btn btn-primary' style={{width:150}} onClick={handleSort}  >Filter</button>
            </div>
            <div className="row forcard">
            {datas.map((data,index) => (

                <div className="col-4 c" key={index} style={{ width: 350 }}>
                    <img src={data.img} alt="f" style={{ width: 350 }} />
                    
                    <h4>{data.tittle}</h4>
                    <small>{data.info}</small>
                    <div className='ccc' style={{ height: 70, display: 'flex', alignItem: 'center' }}>
                        <div className="col2  " style={{ alignItem: 'center' }}>
                            <img src="https://preview.colorlib.com/theme/course/images/author.jpg" className='sek' alt="s" />

                        </div>
                        <div className="col-8" style={{ display: 'flex', alignItem: 'center' }}>
                          <div style={{display:'flex'}}>  <div className="col"><p style={{width:102}}>{data.name}</p></div>,
                            <div className="col"><p>{data.job}</p></div></div>
                        </div>
                        <div className="col-2 price" style={{flexDirection:'row'}}>
                           <p>{data.price}</p>
                        </div>
                      
                    </div>
                    <button   onClick={()=>{handleDelete(data._id)}}  className='btn btn-danger' style={{width:150,marginLeft:91}}>delete</button>



                </div>
                ))
                }
             


            </div>

        </div>

    )
}

export default Sec3