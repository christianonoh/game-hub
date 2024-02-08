import platforms from '../data/parent_platforms'

interface Platform {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const usePlatforms = () => ({data: platforms, isLoading: false, error: null});

export default usePlatforms;
