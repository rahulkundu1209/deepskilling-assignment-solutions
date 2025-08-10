package com.cognizant.spring_learn.security;

import java.io.IOException;
import javax.crypto.SecretKey;
import io.jsonwebtoken.security.Keys;
import java.util.ArrayList;
import java.util.List;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtAuthorizationFilter extends BasicAuthenticationFilter {
  private static final String SECRET = "your-256-bit-secret-your-256-bit-secret";
  private static final SecretKey JWT_KEY = Keys.hmacShaKeyFor(SECRET.getBytes(java.nio.charset.StandardCharsets.UTF_8));
  private static Logger LOGGER = LoggerFactory.getLogger(JwtAuthorizationFilter.class);

  public JwtAuthorizationFilter(AuthenticationManager authenticationManager){
    super(authenticationManager);
    LOGGER.info("Start JwtAuthorizationFilter");
    LOGGER.debug("{}:", authenticationManager);
  }

  @Override
  protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain) throws IOException, ServletException{
    LOGGER.info("Start doFilterInternal");
    String header = req.getHeader("Authorization");
    LOGGER.debug(header);

    if(header == null || !header.startsWith("Bearer ")){
      chain.doFilter(req, res);
      return;
    }

    UsernamePasswordAuthenticationToken authentication = getAuthentication(req);

    SecurityContextHolder.getContext().setAuthentication(authentication);

    chain.doFilter(req, res);
    LOGGER.info("End of doFilterInternal");
  }

  private UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request) {
    LOGGER.debug("Start of getAuthentication");
    String bearerHeader = request.getHeader("Authorization");
    String token = null;
    if (bearerHeader != null && bearerHeader.startsWith("Bearer ")) {
      token = bearerHeader.substring(7);
    }
    if (token != null) {
      LOGGER.debug("Token received: " + token);
      try {

        Jws<Claims> jws = Jwts.parser()
          .verifyWith(JWT_KEY)
          .build()
          .parseSignedClaims(token);

        LOGGER.debug("Jws: " + jws);
        String user = jws.getPayload().getSubject();
        LOGGER.debug("User generated: " + user);

        if (user != null) {
          List<GrantedAuthority> authorities = new ArrayList<>();
          Object rolesObj = jws.getPayload().get("role");
          if (rolesObj instanceof String) {
            authorities.add(new SimpleGrantedAuthority((String) rolesObj));
          } else if (rolesObj instanceof List<?>) {
            for (Object role : (List<?>) rolesObj) {
              if (role instanceof String) {
          authorities.add(new SimpleGrantedAuthority((String) role));
              }
            }
          }
          return new UsernamePasswordAuthenticationToken(user, null, authorities);
        }
      } catch (JwtException ex) {
        return null;
      }
    }
    LOGGER.debug("End of getAuthentication");
    return null;
  }
}
