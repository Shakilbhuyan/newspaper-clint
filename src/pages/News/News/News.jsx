import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FaArrowLeft } from 'react-icons/fa';
import EditorsInsight from '../EditorsInghts/EditorsInsight';

const News = () => {
    const news = useLoaderData();
    return (
         <div>
               <Card className='mb-4'>
            <Card.Img variant="top" src={news.image_url} />
            <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>
                   {news.details}
                </Card.Text>
                <Link to={`/category/${news.category_id}`}><Button variant="danger"> <FaArrowLeft></FaArrowLeft> All News in This Category</Button></Link>
            </Card.Body>
        </Card>
        <EditorsInsight></EditorsInsight>
         </div>
    );
};

export default News;