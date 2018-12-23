import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { RealFileLoaderService } from './real-file-loader.service';
import { PermissionError } from './permission-error';
import { Config } from "../config";

@Injectable()
export class ImageManagementService {
  private readonly baseUrl = Config.partnerUrl + "save/image";
  private cameraOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  constructor(
    private httpClient: HttpClient,
    private camera: Camera,
    private imagePicker: ImagePicker,
    private realFileLoaderService: RealFileLoaderService) {}

  async uploadFromImagePicker(): Promise<any[]> {
    const hasPermission = await this.imagePicker.hasReadPermission();
    if (!hasPermission) {
      throw new PermissionError(`You don't have permission to use the image picker yet.`);
    }

    let options = {
      maximumImagesCount: 1
    };
    const imagePaths: string[] = await this.imagePicker.getPictures(options);
    const imageFiles = await this.realFileLoaderService.getMultipleFiles(imagePaths);
    const formData = new FormData();
    imageFiles.forEach(file => formData.append('img', file, file.name));
    return this.uploadImages(formData);
  }

  async uploadFromCamera() {
    const imagePath: string = await this.camera.getPicture(this.cameraOptions);
    const imageFile = await this.realFileLoaderService.getSingleFile(imagePath);
    const formData = new FormData();
    formData.append('img', imageFile, imageFile.name);
    const result = await this.uploadImages(formData);
    await this.camera.cleanup();
    return result;
  }

  uploadImages(formData: FormData): Promise<any[]> {
    return this.httpClient.post<any[]>(this.baseUrl, formData).toPromise();
  }

  async listImagesOnServer(): Promise<string[]> {
    const imageNames = await this.httpClient.get<string[]>(`${this.baseUrl}/list-images`).toPromise();
    return imageNames.map(imageName => `${this.baseUrl}/images/${imageName}`);
  }
}