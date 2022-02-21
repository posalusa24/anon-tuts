import { useState } from 'react';
import { BsQuestionSquareFill } from 'react-icons/bs';
import { FaVideo } from 'react-icons/fa';

const SelectableLessonList = ({ lessons }) => {
  const [ selectedLessonIndex, setSelectedLessonIndex ] = useState(0);

  const handleLessonClick = index => {
    setSelectedLessonIndex(index);
  };

  return (
    <div>
      {lessons.map((lesson, index) => (
        <div key={index} onClick={() => handleLessonClick(index)}>
          <div>{lesson.type === 'video' ? <FaVideo /> : <BsQuestionSquareFill />}</div>
          <div>Lesson {index}: {lesson.name}</div>
        </div>
      ))}
    </div>
  );
};
