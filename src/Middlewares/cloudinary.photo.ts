

import cloudinary from '../config/cloudinary.config';
import { envs } from '../config/envs';

// Use Express.Multer.File type for file parameter
export class CloudinyPhoto{
    public static uploadPhoto = async (file: Express.Multer.File): Promise<{Id: string, Url:string}> => {
      try {
        // console.log("CloudinyPhoto");
        const result = await cloudinary.uploader.upload(file.path, {
          upload_preset: envs.CLOUDINARY_UPLOAD_PRESET,
        });
        // console.log({result});
        return {
            Id: result.public_id.split("alex-slice/")[1], // Assuming the public_id is a string and you want the first part
            Url: result.secure_url,
        };
      } catch (error: any) {
        throw new Error(`Error uploading image: ${error.message}`);
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
      console.log(result);
      return result;
    }; 

    public static updatePhoto =  async (imageUrl: string, publicId: string) => {
      console.log({imageUrl, publicId});
        cloudinary.uploader.explicit(imageUrl, {
        type: 'fetch',
        public_id: publicId,
        invalidate: true
      })
      .then((result:any) => {
        console.log(result);
      })
      .catch((error:any) => {
        console.error(error);
      });
    }
  }