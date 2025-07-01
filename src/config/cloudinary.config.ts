import { v2 as cloudinary } from 'cloudinary';
import { envs } from '../config/envs';

cloudinary.config({
  cloud_name: envs.CLOUD_NAME,
  api_key: envs.CLOUDINARY_API_KEY,
  api_secret: envs.CLOUDINARY_API_SECRET,
});
export default cloudinary;