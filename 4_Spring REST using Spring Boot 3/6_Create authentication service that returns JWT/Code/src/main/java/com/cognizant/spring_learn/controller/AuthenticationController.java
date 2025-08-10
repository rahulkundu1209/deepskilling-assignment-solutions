package com.cognizant.spring_learn.controller;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import io.jsonwebtoken.security.Keys;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;

@RestController
public class AuthenticationController {
  private static Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

  @GetMapping("authenticate")
  public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader){
    LOGGER.debug("Start of authenticate!");
    LOGGER.debug("Request authHeader: " + authHeader);

    String userName = getUser(authHeader);
    LOGGER.debug("Request username: " + userName);

    String token = generateJWT(userName);
    LOGGER.debug("Generated JWT: " + token);

    HashMap<String, String> res = new HashMap<>();
    res.put("token", token);
    LOGGER.debug("End of authenticate!");
    return res;
  }

  private String getUser(String authHeader){
    if (authHeader != null && authHeader.startsWith("Basic ")) {
      String encodedCredentials = authHeader.substring(6).trim();
      byte[] decodedBytes = Base64.getDecoder().decode(encodedCredentials);
      String credentials = new String(decodedBytes, StandardCharsets.UTF_8);
      int colonIndex = credentials.indexOf(':');
      if (colonIndex != -1) {
        return credentials.substring(0, colonIndex);
      }
    }
    return null;
  }

  private static final String SECRET = "your-256-bit-secret-your-256-bit-secret";
  private static final Key JWT_KEY = Keys.hmacShaKeyFor(SECRET.getBytes(StandardCharsets.UTF_8));

  private String generateJWT(String user){
    Date now = new Date();
    Date expiry = new Date(now.getTime() + 20 * 60 * 1000L);

    // Assign role based on user
    String role;
    if ("admin".equalsIgnoreCase(user)) {
      role = "ADMIN";
    } else {
      role = "USER";
    }

    return Jwts.builder()
      .claim("role", role)
      .subject(user)
      .issuedAt(now)
      .expiration(expiry)
      .signWith(JWT_KEY)
      .compact();
  }
}
