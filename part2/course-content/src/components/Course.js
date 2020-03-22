import React from 'react';

const Header = ({ title }) => (
  <div>
    <h3>{title.name}</h3>
  </div>
);

const Part = ({ part }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              {part.name} {part.exercises}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((sum, curr) => {
    return (sum += curr.exercises);
  }, 0);

  return (
    <div>
      <h4>Number of {total} exercises </h4>
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header title={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
