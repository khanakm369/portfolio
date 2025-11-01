import React, { useState } from 'react';

const Test = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    skillLevel: '',
    portfolioLink: '',
    preferredTest: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     //   console.log("API URL:", process.env.REACT_APP_API_URL);
     const response = await fetch(`${process.env.REACT_APP_API_URL}/api/test/user`, {
      //  const response = await fetch(`http://localhost:4000/api/test/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message);
      console.log("✅ Data Sent:", formData);

      // Optional: Clear form after submit
      setFormData({
        name: '',
        email: '',
        experience: '',
        skillLevel: '',
        portfolioLink: '',
        preferredTest: ''
      });

    } catch (error) {
      console.error("Error:", error);
      alert("❌ Something went wrong while submitting data!" + error + "macha");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Technical Test Registration</h2>
      <p className="text-sm text-center mb-6">
        Fill in your details below. You will receive the test link on your registered email.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <select
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        >
          <option value="">Select Experience Level</option>
          <option value="Fresher">Fresher</option>
          <option value="1-2 Years">1-2 Years</option>
          <option value="3-5 Years">3-5 Years</option>
          <option value="5+ Years">5+ Years</option>
        </select>

        <select
          name="skillLevel"
          value={formData.skillLevel}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Primary Skill / Role</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
        </select>

        <input
          type="url"
          name="portfolioLink"
          placeholder="Portfolio / GitHub Link"
          value={formData.portfolioLink}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <textarea
          name="preferredTest"
          placeholder="Tell us about yourself (short intro)"
          value={formData.preferredTest}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          rows="3"
        />

        <button 
          type="submit"
          className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-semibold"
        >
          Submit & Get Test Link
        </button>

      </form>
    </div>
  );
};

export default Test;
