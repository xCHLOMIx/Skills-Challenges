import React, { useState } from 'react';
import SecondaryButton from '../Users/SecondaryButton';

const NewChallenge = () => {
  const initialFormState = {
    title: '',
    duration: '',
    deadline: '',
    moneyPrize: '',
    contactEmail: '',
    projectDescription: '',
    projectBrief: '',
    projectTasks: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear errors when user types
  };

  const handleCancel = () => {
    setFormData(initialFormState);
    setErrors({});
    console.log("Form reset to:", initialFormState);
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.duration.trim()) newErrors.duration = 'Duration is required';
    if (!formData.deadline.trim()) newErrors.deadline = 'Deadline is required';
    if (!formData.moneyPrize.trim()) newErrors.moneyPrize = 'Money Prize is required';
    if (!formData.contactEmail.trim()) {
      newErrors.contactEmail = 'Contact Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.contactEmail)) {
      newErrors.contactEmail = 'Invalid email format';
    }
    if (!formData.projectDescription.trim()) newErrors.projectDescription = 'Description is required';
    if (formData.projectDescription.length > 250) newErrors.projectDescription = 'Max 250 characters allowed';
    if (!formData.projectBrief.trim()) newErrors.projectBrief = 'Project Brief is required';
    if (formData.projectBrief.length > 50) newErrors.projectBrief = 'Max 50 characters allowed';
    if (!formData.projectTasks.trim()) newErrors.projectTasks = 'Project Tasks are required';
    if (formData.projectTasks.length > 500) newErrors.projectTasks = 'Max 500 characters allowed';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="w-full flex justify-center">
    <div className="rounded-md  bg-white border border-slate-light md:p-4 p-2 mb-10  ">
      <div className="text-center my-4">
        <h2 className="capitalize text-xl">Create new challenge</h2>
        <p className='text-sm text-slate-mid'>Fill out these details to build your broadcast</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="title">Challenge/Hackathon Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter Title"
            className="w-full px-3 py-4 border border-[#D0D5DD] rounded-md focus:outline-none focus:border-[#FA9874]"
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && <p className="text-red-500">{errors.title}</p>}
        </div>

        <div className="flex w-full space-x-3 my-3">
          <div className="w-1/2">
            <label htmlFor="duration">Duration:</label>
            <input
              type="text"
              id="duration"
              name="duration"
              placeholder="Duration"
              className="w-full px-3 py-4 border border-[#D0D5DD] rounded-md focus:outline-none focus:border-[#FA9874]"
              value={formData.duration}
              onChange={handleChange}
            />
            {errors.duration && <p className="text-red-500">{errors.duration}</p>}
          </div>
          <div className="w-1/2">
            <label htmlFor="deadline">Deadline:</label>
            <input
              type="text"
              id="deadline"
              name="deadline"
              placeholder="Deadline"
              className="w-full px-3 py-4 border border-[#D0D5DD] rounded-md focus:outline-none focus:border-[#FA9874]"
              value={formData.deadline}
              onChange={handleChange}
            />
            {errors.deadline && <p className="text-red-500">{errors.deadline}</p>}
          </div>
        </div>

        <div className="flex w-full space-x-3 my-3">
          <div className="w-1/2">
            <label htmlFor="moneyPrize">Money Prize:</label>
            <input
              type="text"
              id="moneyPrize"
              name="moneyPrize"
              placeholder="Money Prize"
              className="w-full px-3 py-4 border border-[#D0D5DD] rounded-md focus:outline-none focus:border-[#FA9874]"
              value={formData.moneyPrize}
              onChange={handleChange}
            />
            {errors.moneyPrize && <p className="text-red-500">{errors.moneyPrize}</p>}
          </div>
          <div className="w-1/2">
            <label htmlFor="contactEmail">Contact Email:</label>
            <input
              type="text"
              id="contactEmail"
              name="contactEmail"
              placeholder="Contact Email"
              className="w-full px-3 py-4 border border-[#D0D5DD] rounded-md focus:outline-none focus:border-[#FA9874]"
              value={formData.contactEmail}
              onChange={handleChange}
            />
            {errors.contactEmail && <p className="text-red-500">{errors.contactEmail}</p>}
          </div>
        </div>

        <div className="my-3">
          <label htmlFor="projectDescription">Project Description:</label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            rows="4"
            placeholder="Enter Description"
            className="resize-none w-full px-3 py-4 border border-[#D0D5DD] rounded-md focus:outline-none focus:border-[#FA9874]"
            value={formData.projectDescription}
            onChange={handleChange}
          />
          {errors.projectDescription && <p className="text-red-500">{errors.projectDescription}</p>}
        </div>

        <div className="my-3">
          <label htmlFor="projectBrief">Project Brief:</label>
          <textarea
            id="projectBrief"
            name="projectBrief"
            rows="2"
            placeholder="Enter Brief"
            className="resize-none w-full px-3 py-4 border border-[#D0D5DD] rounded-md focus:outline-none focus:border-[#FA9874]"
            value={formData.projectBrief}
            onChange={handleChange}
          />
          {errors.projectBrief && <p className="text-red-500">{errors.projectBrief}</p>}
        </div>

        <div className="my-3">
          <label htmlFor="projectTasks">Project Tasks:</label>
          <textarea
            id="projectTasks"
            name="projectTasks"
            rows="4"
            placeholder="Enter Tasks"
            className="resize-none w-full px-3 py-4 border border-[#D0D5DD] rounded-md focus:outline-none focus:border-[#FA9874]"
            value={formData.projectTasks}
            onChange={handleChange}
          />
          {errors.projectTasks && <p className="text-red-500">{errors.projectTasks}</p>}
        </div>

        <div className="flex space-x-10 mb-4">
          <SecondaryButton
            content="Cancel"
            styles="px-3 py-2 w-[40%] font-semibold border-primary border bg-white text-primary rounded-md"
            onClick={(e)=>{
                e.preventDefault();
                handleCancel()
            }}
          />
          <SecondaryButton
            content="Create challenge"
            onClick={(e)=>{
                e.preventDefault()
                handleSubmit()
            }}
            styles="px-3 py-2 w-[60%] capitalize font-semibold border-primary border bg-primary text-white rounded-md"
            type="submit"
          />
        </div>
      </form>
    </div>
</div>
  );
};

export default NewChallenge;
