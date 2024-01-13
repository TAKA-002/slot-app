import MemberListWrapper from './MemberListWrapper';
import MemberFooter from './MemberFooter';

export default function MemberContainer({ lists }) {
  return (
    <section
      className="py-8 px-2 sm:px-0 bg-paripi"
      palece
      style={{
        backgroundColor: 'rgba(255,255,255,0.7)',
        backgroundBlendMode: 'lighten',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <MemberListWrapper lists={lists} />
      <MemberFooter />
    </section>
  );
}
