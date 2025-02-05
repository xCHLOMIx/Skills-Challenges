import React, { useEffect, useState } from 'react';
import RichTextDisplay from './RichTextDisplay';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ChallengeDetails = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const response = await axios.get(`http://localhost:1234/challenges/${id}`);
        setChallenge(response.data);
      } catch (error) {
        console.error('Error fetching challenge:', error);
      }
    };

    id && fetchChallenge();
  }, [id]);

  if (!challenge) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">{challenge.title}</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Description</h2>
        <RichTextDisplay content={challenge.projectDescription} />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Brief</h2>
        <RichTextDisplay content={challenge.projectBrief} />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Tasks</h2>
        <RichTextDisplay content={challenge.projectTasks} />
      </section>
    </div>
  );
};

export default ChallengeDetails;