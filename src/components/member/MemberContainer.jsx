import MemberListWrapper from './MemberListWrapper';
import MemberDecoration from './MemberDecoration';

export default function MemberContainer({ lists }) {
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
      <MemberDecoration />
      <MemberListWrapper lists={lists} />
    </section>
  );
}

