import {HttpClient} from 'aurelia-http-client';
import {autoinject} from 'aurelia-framework';

@autoinject
export class FileConverterService{
  constructor(private httpClient: HttpClient){}

  convertFile(file: File){
    let formData = new FormData();

    formData.append("file", file);

    return this.httpClient.post("/api/ConvertFile", formData)
      .then(response => {
        return response//.blob();
      });
//       then(blob => {
//         const objecturl = URL.createObjectURL(blob);
//         return new File(objecturl);
//       });
  }
}
