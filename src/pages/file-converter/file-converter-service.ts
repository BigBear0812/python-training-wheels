import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';

@autoinject
export class FileConverterService{
  constructor(private httpClient: HttpClient){}

  convertFile(file: File){
    let formData = new FormData();

    formData.append("file", file);

    return this.httpClient.fetch("/api/ConvertFile",
    {
      method: "Post",
      body: formData,
      headers: {
        //'Content-Type':'form-data'
        contentType: false,
        cache: false,
        processData: false,
      }
    })
      .then(response => {
        return response//.blob();
      });
//       then(blob => {
//         const objecturl = URL.createObjectURL(blob);
//         return new File(objecturl);
//       });
  }
}
