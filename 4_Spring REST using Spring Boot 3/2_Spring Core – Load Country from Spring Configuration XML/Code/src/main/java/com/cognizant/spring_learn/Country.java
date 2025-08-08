package com.cognizant.spring_learn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Country {
  // Private instance variables
  private String code;
  private String name;

  private static final Logger LOGGER = LoggerFactory.getLogger(Country.class);

  // Constructor
  public Country() {
    LOGGER.debug("Inside Country Constructor.");
  }

  // Getter and Setter for code
  public String getCode() {
    LOGGER.debug("Getting country code.");
    return code;
  }

  public void setCode(String code) {
    this.code = code;
    LOGGER.debug("Country code set to: {}", code);
  }

  // Getter and Setter for name
  public String getName() {
    LOGGER.debug("Getting country name.");
    return name;
  }

  public void setName(String name) {
    this.name = name;
    LOGGER.debug("Country name set to: {}", name);
  }

  // toString method
  @Override
  public String toString() {
    LOGGER.debug("Inside the toString function.");
    return "Country [code=" + code + ", name=" + name + "]";
  }
}
