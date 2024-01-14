import axios from 'axios';

import MemberListWrapper from './MemberListWrapper';
import MemberDecoration from './MemberDecoration';

export default function MemberContainer({ lists, formData, setFormData }) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8888/slot-app/api/index.php', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      className="relative py-8 px-2 sm:px-0 bg-paripi min-h-[1300px]"
      style={{
        backgroundColor: 'rgba(255,255,255,0.4)',
        backgroundBlendMode: 'lighten',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
      }}
    >
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <MemberDecoration />
      <MemberListWrapper lists={lists} />
    </section>
  );
}
