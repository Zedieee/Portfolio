const DESTINATION = 'https://www.brian-g.com/';

export async function getServerSideProps() {
  return {
    redirect: {
      destination: DESTINATION,
      permanent: true,
    },
  };
}

export default function Projects() {
  return null;
}
