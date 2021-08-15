import {HttpClient} from 'aurelia-http-client';
import {autoinject} from 'aurelia-framework';

@autoinject
export class FileConverterService{
  constructor(private httpClient: HttpClient){}

  convertFile(file: File): Promise<File>{
    let formData = new FormData();

    formData.append("file", file);

    return this.http.post("/api/ConvertFile", formData)
      .then(response => {
        return response.file;
      });
      then(file => {
        return file;
      })
  }
}
