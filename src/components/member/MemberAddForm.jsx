import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function MemberAddForm({ lists, setLists, formData, setFormData }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const [input] = e.target;
    input.value = '';
    if (Object.keys(formData).length === 0) return;
    setLists([...lists, formData]);
  };

  const handleChange = (e) => {
    setFormData({ id: uuidv4(), name: e.target.value });
  };

  return (
    <form className="relative z-[2] max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5 flex gap-x-4">
        <input
          type="text"
          name="name"
          className="flex-1 bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 p-2.5"
          placeholder="項目入力欄（Enterで続けて入力可能です。）"
          onChange={handleChange}
          tabIndex="1"
        />
        <button
          type="submit"
          className="py-2 px-8 font-bold text-red-900 rounded-lg border-[2px] border-red-500 bg-red-50 active:translate-y-2"
          tabIndex="2"
        >
          追加
        </button>
      </div>
    </form>
  );
}
