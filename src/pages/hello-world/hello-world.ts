import {HelloWorldService} from "./hello-world-service";
import {autoinject} from "aurelia-framework";

@autoinject
export class HelloWorld{
  userName: string;
  output: string;

  constructor(private service: HelloWorldService){}

  submitName(){
    this.service.helloWorld(this.userName)
      .then(result => {
        this.output = result;
      });
  }
}
