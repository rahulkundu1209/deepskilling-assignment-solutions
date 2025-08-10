package com.cognizant.spring_learn.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.spring_learn.Country;

@RestController
public class CountryController {

  @RequestMapping("country")
  public Country getCountryIndia(){
    ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
    Country country = (Country) context.getBean("country", Country.class);

    return country;
  }

  @GetMapping("countries")
  public List<Country> getAllCountries() {
    ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
    // List all country bean IDs
    String[] countryBeanIds = {"country", "countryUS", "countryUK", "countryJP"};
    List<Country> res = new ArrayList<>();
    for (String beanId : countryBeanIds) {
      Country country = (Country) context.getBean(beanId, Country.class);
      res.add(country);
    }
    return res;
  }

  @GetMapping("countries/{code}")
  public Country getCountry(@org.springframework.web.bind.annotation.PathVariable String code) {
    ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
    // List all country bean IDs
    String[] countryBeanIds = {"country", "countryUS", "countryUK", "countryJP"};
    for (String beanId : countryBeanIds) {
      Country country = (Country) context.getBean(beanId, Country.class);
      if (country.getCode().equalsIgnoreCase(code)) {
        return country;
      }
    }
    return null;
  }
}
