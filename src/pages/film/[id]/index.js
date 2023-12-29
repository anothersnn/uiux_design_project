// index.js
import FilmInfo from '@/components/FilmInfo';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';

function Movie() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <FilmInfo id={id} />
    </Layout>
  );
}

export default Movie;
