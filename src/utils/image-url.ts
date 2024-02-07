import imagePlaceholder from '../assets/no-image-placeholder-6f3882e0.webp'


const getCroppedImageUrl = (url:string) => {
  if(!url) return imagePlaceholder;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.substring(0, index) + "crop/600/400/" + url.substring(index);
};

export default getCroppedImageUrl;
