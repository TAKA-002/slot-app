import React from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default function MemberAddForm({ lists, formData, setFormData }) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const jsonData = [...lists, formData];

    try {
      const response = await axios.post('http://localhost:8888/slot-app/api/index.php', jsonData);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const newId = uuidv4();
    setFormData({ id: newId, name: e.target.value });
  };

  return (
    <form className="relative z-[2] max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5 flex gap-x-4">
        <input
          type="text"
          name="name"
          className="flex-1 bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 p-2.5"
          placeholder="項目を記入してください。"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="py-2 px-8 font-bold text-red-900 rounded-lg border-[2px] border-red-500 bg-red-50 active:translate-y-2"
        >
          追加
        </button>
      </div>
    </form>
  );
}
