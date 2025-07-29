package com.example;

public class MyService {
  private ExternalAPI externalAPI;
  public MyService(ExternalAPI externalAPI) {
    this.externalAPI = externalAPI;
  }
  public String fetchData(){
    // perform some operations using the apiData
    return externalAPI.getData();
  }
}
