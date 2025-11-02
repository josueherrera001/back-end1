

import cloudinary from '../config/cloudinary.config';
import { envs } from '../config/envs';

// Use Express.Multer.File type for file parameter
export class CloudinyPhoto{
    public static uploadPhoto = async (file: Express.Multer.File): Promise<any> => {
      try {
        const result = await cloudinary.uploader.upload(file.path, {
          upload_preset: envs.CLOUDINARY_UPLOAD_PRESET,
        });
        return result;
      } catch (error: any) {
        throw error;
      }
    };

    public static deletePhoto = async (publicId: string): Promise<void> => {
      try {
        await cloudinary.uploader.destroy(publicId);
      } catch (error: any) {
        throw new Error(`Error deleting image: ${error.message}`);
      }
    };  

    public static getPhotoUrl = async (publicId: string): Promise<string> => {
      const result = await cloudinary.url(publicId, {
        secure: true,
        transformation: [{ width: 500, height: 500, crop: 'fill' }],
      });
      return result;
    }; 

    public static updatePhoto =  async (imageUrl: string, publicId: string) => {
        cloudinary.uploader.explicit(imageUrl, {
        type: 'fetch',
        public_id: publicId,
        invalidate: true
      })
      .then((result:any) => {
        throw result;
      })
      .catch((error:any) => {
       throw error;
      });
    }
  }