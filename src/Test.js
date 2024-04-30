import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios'
var id= 24;
function Test() {

    const [sdata, setData] = useState([])
    const [title, setTitle] = useState("")
    useEffect(() => {
        axios.get('https://api.sampleapis.com/cartoons/cartoons2D')
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
    }, [])

    const pushData=()=>{
        axios.patch(`https://api.sampleapis.com/cartoons/cartoons2D/${1}`,{title:title})
        .then((res) => {
            // console.log(res.data);
            // setData(res.data);

            setData(res.data)
        })
    }

    return (
        <>
            <h2>API Fetching</h2>
             {sdata.title}
           <div className='ms-5 mt-5 row d-flex gap-5 text-center'>

                {/*  {

                    sdata && sdata.map(list => (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={list.image} />
                            <Card.Body>
                                <Card.Title>{list.title}</Card.Title>
                           
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Year: {list.year}</ListGroup.Item>
                                    <ListGroup.Item>Rating: {list.rating}</ListGroup.Item>
                                    <ListGroup.Item>Genre:{list.genre}</ListGroup.Item>
                                </ListGroup>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    ))
                } */}

                <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} />
                <button onClick={pushData}>Patch Data</button>

            </div>
        </>

    );
}

export default Test;
