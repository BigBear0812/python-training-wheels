import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';

@autoinject
export class FileConverterService{
  constructor(private httpClient: HttpClient){}
  filename: string;

  convertFile(file: File){
    let formData = new FormData();

    formData.append("file", file);

    // strip the file extension from the name when saving it
    this.filename = file.name.replace(/\.[^/.]+$/, "");

    return this.httpClient.fetch("/api/ConvertFile",
    {
      method: "Post",
      body: formData,
      headers: {
        contentType: false,
        cache: false,
        processData: false,
      }
    })
    .then(response => {
      // Convert response to blob
      return response.blob();
    })
    .then(blob => {
      // Save the file the best way possible
      if (navigator.msSaveBlob)
          return navigator.msSaveBlob(blob, "dst_out.json");
      var blobUrl = window.URL.createObjectURL(blob);
      var anchor = document.createElement('a');
      anchor.download = this.filename + ".json";
      anchor.href = blobUrl;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    });
  }
}
