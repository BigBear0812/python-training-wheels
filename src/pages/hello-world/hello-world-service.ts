import {HttpClient} from 'aurelia-http-client';
import {autoinject} from 'aurelia-framework';

@autoinject
export class HelloWorldService{
  constructor(private httpClient: HttpClient){}

  helloWorld(name: string): Promise<string>{
    return this.httpClient.post("/api/HelloWorld", name)
      .then(response => {
        return response.response;
      })
      .then(text => {
        return text;
      });
  }
}
