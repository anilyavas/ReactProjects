import React, { useState, useEffect } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import { BsFillFileEarmarkPostFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { BiCommentDetail } from 'react-icons/bi';

export default function Testimonials() {
  //function handleClick() {
  //  console.log("click");
  //}
  const [testimonials, setTestimonials] = useState();
  const [items, setItems] = useState();

  useEffect(() => {
    // eslint-disable-next-line no-template-curly-in-string
    fetch('https://jsonplaceholder.tpicode.com/${testimonials}')
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [testimonials]);
  return (
    <div className="container m-auto">
      <Title text={'Testimonials App'} />
      <Button
        text={'Posts'}
        btnClass="btn-info"
        icon={<BsFillFileEarmarkPostFill />}
        className=""
        onClick={() => setTestimonials('Posts')}
      />{' '}
      <Button
        text={'Users'}
        btnClass="btn-info"
        icon={<FaUserAlt />}
        onClick={() => setTestimonials('Users')}
      />
      <Button
        text={'Comments'}
        btnClass="btn-info"
        icon={<BiCommentDetail />}
        onClick={() => setTestimonials('Comments')}
      />
      <Title
        classes={'subtitle text-primary'}
        text={!testimonials ? 'Select from above!' : testimonials}
      />
      {!items
        ? null
        : items.map((item) => {
            return (
              <div className={'card card-primary mb-2'} key={item.id}>
                {item.name}
              </div>
            );
          })}
    </div>
  );
}
