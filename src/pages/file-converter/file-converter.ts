import {FileConverterService} from "./file-converter-service";
import {autoinject} from "aurelia-framework";

@autoinject
export class FileConverter{
  selectedFiles;

  constructor(private service: FileConverterService){}

  submitFile(){
    this.service.convertFile(this.selectedFiles[0]);
  }
}



