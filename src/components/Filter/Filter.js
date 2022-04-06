import React from 'react';

function Filter (props) {

  const changeHandler = (incomingState) => {

    props.setFilter({
      ...props.filter,
      ...incomingState
    })
  }

  return (
    <>
      <div className="">
        <select onChange={(e) => changeHandler({dayOfWeek: e.currentTarget.value})}>
          <option value="">Select Day of Week</option>
          <option value="0">Monday</option>
          <option value="1">Tuesday</option>
          <option value="2">Wednesday</option>
          <option value="3">Thursday</option>
          <option value="4">Friday</option>
          <option value="5">Saturday</option>
          <option value="6">Sunday</option>
        </select>
      </div>
      <div>
      <select onChange={(e) => changeHandler({timeOfDay: e.currentTarget.value})}>
          <option value="">Select Time of Day</option>
          <option value="morning">Morning 8-12</option>
          <option value="afternoon">Afternoon 12-4</option>
          <option value="evening">Evening 4-9</option>
        </select>
      </div>
      <div>
      <select onChange={(e) => changeHandler({instructorGender: e.currentTarget.value})}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
    </>
  )
}

export default Filter;