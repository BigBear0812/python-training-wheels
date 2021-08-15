import {FileConverterService} from "./file-converter-service";
import {autoinject} from "aurelia-framework";

@autoinject
export class FileConverter{
  selectedFiles;
  resultFile;
  constructor(private service: FileConverterService){}

  submitFile(){
    this.service.convertFile(this.selectedFiles[0])
      .then(results=>{
        this.resultFile = results;
      });
  }
}



